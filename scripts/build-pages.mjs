import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { Script } from 'node:vm';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../', import.meta.url)));
const apiUrl = process.env.GAS_WEB_APP_URL || '';
const templatePath = resolve(root, 'Index.html');
const qrCodePath = resolve(root, 'QrCode.html');
const bridgePath = resolve(root, 'scripts', 'pages-bridge.js');
const outputDirectory = resolve(root, 'dist');

if (apiUrl) {
  const parsedApiUrl = new URL(apiUrl);
  if (parsedApiUrl.protocol !== 'https:' ||
      parsedApiUrl.hostname !== 'script.google.com' ||
      !/^\/macros\/s\/[^/]+\/exec$/.test(parsedApiUrl.pathname)) {
    throw new Error('GAS_WEB_APP_URL harus berupa URL deployment Apps Script berakhiran /exec.');
  }
} else if (process.env.CI === 'true') {
  throw new Error('Tambahkan repository variable GAS_WEB_APP_URL sebelum menjalankan workflow Pages.');
}

const [templateSource, qrCodeSource, bridge] = await Promise.all([
  readFile(templatePath, 'utf8'),
  readFile(qrCodePath, 'utf8'),
  readFile(bridgePath, 'utf8')
]);
const template = templateSource.replace(/\r\n/g, '\n');
const qrCode = qrCodeSource.replace(/\r\n/g, '\n');

const includeMarker = "    <?!= include('QrCode'); ?>";
const appScriptMarker = '    <script>\n      const state = {';
if (!template.includes(includeMarker) || !template.includes(appScriptMarker)) {
  throw new Error('Template Index.html tidak berisi marker yang diperlukan untuk build Pages.');
}

const qrCodeScript = qrCode.trim();
new Script(bridge, { filename: 'pages-bridge.js' });

const builtHtml = template
  .replace('    <base target="_top">\n', '')
  .replace(includeMarker, qrCodeScript)
  .replace(appScriptMarker, [
    '    <script>',
    '      window.APP_GAS_API_URL = ' + JSON.stringify(apiUrl) + ';',
    '    </script>',
    '    <script>',
    bridge.trim(),
    '    </script>',
    appScriptMarker
  ].join('\n'));

for (const match of builtHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
  new Script(match[1], { filename: 'dist/index.html' });
}

await mkdir(outputDirectory, { recursive: true });
await writeFile(resolve(outputDirectory, 'index.html'), builtHtml, 'utf8');
console.log('GitHub Pages build selesai: dist/index.html');
