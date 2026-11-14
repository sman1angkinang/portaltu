const APP_NAME = 'SMAN 1 ANGKINANG';
const LOGO_FILE_NAME = 'LOGO SMAN 1 ANGKINANG.png';
const LOGO_FOLDER_ID = '1PCiYeiPMwieWkkaIi16JpRIViWrkzvZi';
const PAGE_SIZE = 10;
const JOURNAL_SHEET_NAME = 'Jurnal Harian';
const MAX_PHOTO_BYTES = 2 * 1024 * 1024;
const MAX_ARCHIVE_BYTES = 20 * 1024 * 1024;
const MAX_JOURNAL_FILE_BYTES = 20 * 1024 * 1024;
const PHOTO_ROOT_FOLDER_NAME = 'File';
const ARCHIVE_SHEET_NAME = 'Lemari Digital';
const LEADERSHIP_SETTINGS_SHEET_NAME = 'Pengaturan';
const LEADERSHIP_SETTINGS_HEADERS = ['Jabatan', 'Nama', 'NIP'];
const LEADERSHIP_SETTINGS_ROWS = ['Kepala Sekolah', 'Kasubag TU'];
const ARCHIVE_HEADERS = [
  'Nama File',
  'Kategori',
  'Nama',
  'Tahun Berkas',
  'Keterangan',
  'File ID',
  'Nama Asli',
  'Tanggal Upload'
];
const SCHOOL_PROFILE_HEADERS = ['Bagian', 'Nama Data', 'Nilai'];
const SCHOOL_PROFILE_DATA = [
  ['Identitas Sekolah', 'Nama Sekolah', 'SMAN 1 ANGKINANG'],
  ['Identitas Sekolah', 'NPSN', '30313122'],
  ['Identitas Sekolah', 'Jenjang Pendidikan', 'SMA'],
  ['Identitas Sekolah', 'Status Sekolah', 'Negeri'],
  ['Identitas Sekolah', 'Alamat Sekolah', 'JALAN TEMBOK REL KRETA'],
  ['Identitas Sekolah', 'RT / RW', '1 / 1'],
  ['Identitas Sekolah', 'Kode Pos', '71291'],
  ['Identitas Sekolah', 'Kelurahan', 'Angkinang'],
  ['Identitas Sekolah', 'Kecamatan', 'Kec. Angkinang'],
  ['Identitas Sekolah', 'Kabupaten/Kota', 'Kab. Hulu Sungai Selatan'],
  ['Identitas Sekolah', 'Provinsi', 'Prov. Kalimantan Selatan'],
  ['Identitas Sekolah', 'Negara', 'Indonesia'],
  ['Identitas Sekolah', 'Posisi Geografis', '-2.732, 115.2872'],
  ['Data Pelengkap', 'SK Pendirian Sekolah', '432 TAHUN 2009'],
  ['Data Pelengkap', 'Tanggal SK Pendirian', '2009-11-20'],
  ['Data Pelengkap', 'Status Kepemilikan', 'Pemerintah Daerah'],
  ['Data Pelengkap', 'SK Izin Operasional', '400.3.8/480/SMA/DISDIKBUD/2026'],
  ['Data Pelengkap', 'Tgl SK Izin Operasional', '2026-06-24'],
  ['Data Pelengkap', 'Kebutuhan Khusus Dilayani', ''],
  ['Data Pelengkap', 'MBS', 'Ya'],
  ['Data Pelengkap', 'Iuran Tahunan', '0'],
  ['Data Pelengkap', 'Iuran Bulanan', '0'],
  ['Kontak Sekolah', 'Nomor Telepon', '082149334141'],
  ['Kontak Sekolah', 'Nomor Fax', '0'],
  ['Kontak Sekolah', 'Email', 'sman1angkinanghss@gmail.com'],
  ['Kontak Sekolah', 'Website', 'http://www.sman1angkinang.sch.id'],
  ['Data Periodik', 'Waktu Penyelenggaraan', 'Sehari Penuh/5 hari'],
  ['Data Periodik', 'Bersedia Menerima BOS?', 'Ya'],
  ['Data Periodik', 'Sertifikasi ISO', 'Belum Bersertifikat'],
  ['Data Periodik', 'Sumber Listrik', 'PLN'],
  ['Data Periodik', 'Total Daya Listrik (watt)', '18700'],
  ['Data Periodik', 'Akses Internet', 'Indihome/Indibiz'],
  ['Sanitasi', 'Sumber air', 'Ledeng/PAM'],
  ['Sanitasi', 'Sumber air minum', 'Disediakan oleh sekolah'],
  ['Sanitasi', 'Kecukupan air bersih', 'Cukup sepanjang waktu'],
  ['Sanitasi', 'Fasilitas jamban untuk siswa berkebutuhan khusus', 'Tidak'],
  ['Sanitasi', 'Tipe jamban', 'Leher angsa (toilet duduk/jongkok)'],
  ['Sanitasi', 'Sekolah menyediakan pembalut cadangan', 'Tidak ada'],
  ['Sanitasi', 'Kegiatan cuci tangan berkelompok per minggu', 'Tidak pernah'],
  ['Sanitasi', 'Jumlah tempat cuci tangan', '28'],
  ['Sanitasi', 'Jumlah tempat cuci tangan rusak', '0'],
  ['Sanitasi', 'Sabun dan air mengalir tersedia', 'Ya'],
  ['Sanitasi', 'Saluran pembuangan air limbah jamban', 'Ada saluran pembuangan air limbah ke tangki septik atau IPAL'],
  ['Sanitasi', 'Pengurasan tangki septik dalam 3–5 tahun terakhir', 'Tidak/Tidak tahu'],
  ['Sanitasi', 'Sekolah memiliki selokan untuk menghindari genangan air', 'Ya'],
  ['Sanitasi', 'Tempat sampah tersedia di setiap ruang kelas', 'Ya'],
  ['Sanitasi', 'Tempat sampah tertutup di jamban perempuan', 'Ya'],
  ['Sanitasi', 'Cermin tersedia di jamban perempuan', 'Tidak'],
  ['Sanitasi', 'Tempat pembuangan sampah sementara tertutup', 'Ya'],
  ['Sanitasi', 'Sampah TPS diangkut secara rutin', 'Ya'],
  ['Sanitasi', 'Perencanaan dan anggaran pemeliharaan sanitasi', 'Ya'],
  ['Sanitasi', 'Kegiatan rutin siswa merawat sanitasi sekolah', 'Ya'],
  ['Sanitasi', 'Kemitraan sanitasi sekolah', 'Pemerintah daerah; perusahaan swasta; puskesmas; lembaga non-pemerintah'],
  ['Sanitasi', 'Jumlah jamban dapat digunakan', 'Laki-laki: 10; perempuan: 12; bersama: 1'],
  ['Sanitasi', 'Jumlah jamban tidak dapat digunakan', 'Laki-laki: 0; perempuan: 0; bersama: 0'],
  ['Komunikasi dan Edukasi Sanitasi', 'Cuci tangan pakai sabun', 'Guru; ruang kelas; toilet; selasar; ruang UKS; kantin'],
  ['Komunikasi dan Edukasi Sanitasi', 'Kebersihan dan kesehatan', 'Guru; ruang kelas; toilet; selasar; ruang UKS; kantin'],
  ['Komunikasi dan Edukasi Sanitasi', 'Pemeliharaan dan perawatan toilet', 'Guru; ruang kelas; toilet; selasar; ruang UKS; kantin'],
  ['Komunikasi dan Edukasi Sanitasi', 'Keamanan pangan', 'Guru; ruang kelas; selasar; ruang UKS; kantin'],
  ['Komunikasi dan Edukasi Sanitasi', 'Ayo minum air', 'Guru; ruang kelas; selasar; ruang UKS; kantin']
];

const SCHEMAS = {
  Siswa: [
    'Nama Lengkap',
    'Jenis Kelamin',
    'Tempat Lahir',
    'Tanggal Lahir',
    'Agama',
    'Email',
    'Anak Ke',
    'Alamat',
    'Telepon',
    'Golongan Darah',
    'Tinggi Badan',
    'Berat Badan',
    'Kelas Terakhir',
    'Nama Ayah',
    'Pekerjaan Ayah',
    'Nama Ibu',
    'Pekerjaan Ibu',
    'NISN',
    'HP',
    'NIPD',
    'Pas Foto',
    'QRCode',
    'Jenis Kendaraan',
    'Nopol',
    'Warna Kendaraan',
    'Foto Kendaraan'
  ],
  Guru: [
    'Nama Lengkap',
    'NUPTK',
    'NIP',
    'Jenis PTK',
    'Status',
    'Jenis Kelamin',
    'Tempat Lahir',
    'Tanggal Lahir',
    'Agama',
    'Email',
    'No Hp',
    'Alamat',
    'Tugas Tambahan',
    'Pangkat Golongan',
    'Sumber Gaji',
    'Pas Foto',
    'QRCode',
    'No',
    'RT',
    'RW',
    'Nama Dusun',
    'Desa/Kelurahan',
    'Kecamatan',
    'Kode Pos',
    'Telepon',
    'SK CPNS',
    'Tanggal CPNS',
    'SK Pengangkatan',
    'TMT Pengangkatan',
    'Lembaga Pengangkatan',
    'Nama Ibu Kandung',
    'Status Perkawinan',
    'Nama Suami/Istri',
    'NIP Suami/Istri',
    'Pekerjaan Suami/Istri',
    'TMT PNS',
    'Sudah Lisensi Kepala Sekolah',
    'Pernah Diklat Kepengawasan',
    'Keahlian Braille',
    'Keahlian Bahasa Isyarat',
    'NPWP',
    'Nama Wajib Pajak',
    'Kewarganegaraan',
    'Bank',
    'Nomor Rekening Bank',
    'Rekening Atas Nama',
    'NIK',
    'No KK',
    'Karpeg',
    'Karis/Karsu',
    'Lintang',
    'Bujur',
    'NUKS'
  ],
  'Tenaga Pendidik': [
    'Nama Lengkap',
    'NUPTK',
    'NIP',
    'Jenis PTK',
    'Status',
    'Jenis Kelamin',
    'Email',
    'No HP',
    'Alamat',
    'Status Perkawinan',
    'Pas Foto',
    'QRCode',
    'No',
    'RT',
    'RW',
    'Nama Dusun',
    'Desa/Kelurahan',
    'Kecamatan',
    'Kode Pos',
    'Telepon',
    'Tugas Tambahan',
    'SK CPNS',
    'Tanggal CPNS',
    'SK Pengangkatan',
    'TMT Pengangkatan',
    'Lembaga Pengangkatan',
    'Pangkat Golongan',
    'Sumber Gaji',
    'Nama Ibu Kandung',
    'Nama Suami/Istri',
    'NIP Suami/Istri',
    'Pekerjaan Suami/Istri',
    'TMT PNS',
    'Sudah Lisensi Kepala Sekolah',
    'Pernah Diklat Kepengawasan',
    'Keahlian Braille',
    'Keahlian Bahasa Isyarat',
    'NPWP',
    'Nama Wajib Pajak',
    'Kewarganegaraan',
    'Bank',
    'Nomor Rekening Bank',
    'Rekening Atas Nama',
    'NIK',
    'No KK',
    'Karpeg',
    'Karis/Karsu',
    'Lintang',
    'Bujur',
    'NUKS'
  ]
};

function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate()
    .setTitle(APP_NAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function doPost(event) {
  let requestId = '';
  let response;

  try {
    const payload = event && event.parameter ? event.parameter.payload : '';
    if (!payload) throw new Error('Payload API tidak ditemukan.');
    const request = JSON.parse(payload);
    requestId = String(request.id || '');
    if (typeof request.method !== 'string' ||
        !Object.prototype.hasOwnProperty.call(API_METHODS, request.method)) {
      throw new Error('Metode API tidak tersedia.');
    }
    if (!Array.isArray(request.args)) throw new Error('Parameter API tidak valid.');

    response = {
      id: requestId,
      ok: true,
      result: API_METHODS[request.method].apply(null, request.args)
    };
  } catch (error) {
    response = {
      id: requestId,
      ok: false,
      error: error && error.message ? error.message : String(error)
    };
  }

  return createApiResponse_(response);
}

const API_METHODS = {
  getInitialData: getInitialData,
  getDashboardStats: getDashboardStats,
  getSchoolProfile: getSchoolProfile,
  getLeadershipSettings: getLeadershipSettings,
  saveLeadershipSettings: saveLeadershipSettings,
  createDataBackup: createDataBackup,
  getRecords: getRecords,
  saveRecord: saveRecord,
  saveStudentVehiclePhoto: saveStudentVehiclePhoto,
  saveStudentVehicleDetails: saveStudentVehicleDetails,
  deleteRecord: deleteRecord,
  importCsv: importCsv,
  getJournalStaff: getJournalStaff,
  getArchivePeople: getArchivePeople,
  getDigitalArchiveRecords: getDigitalArchiveRecords,
  getDigitalArchiveRecordsForPerson: getDigitalArchiveRecordsForPerson,
  uploadDigitalArchive: uploadDigitalArchive,
  updateDigitalArchive: updateDigitalArchive,
  deleteDigitalArchive: deleteDigitalArchive,
  saveJournalEntry: saveJournalEntry,
  deleteJournalEntry: deleteJournalEntry,
  getJournalHistory: getJournalHistory,
  getJournalPdfData: getJournalPdfData
};

function createApiResponse_(response) {
  const message = JSON.stringify(response)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  const html = '<!doctype html><html><body><script>' +
    'window.top.postMessage(' + message + ', "*");' +
    '</script></body></html>';

  return HtmlService.createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu(APP_NAME)
    .addItem('Siapkan database', 'setupDatabase')
    .addToUi();
}

function setupDatabase() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error('Buka proyek Apps Script dari spreadsheet database, lalu jalankan penyiapan kembali.');
  PropertiesService.getScriptProperties().setProperty('DATABASE_SPREADSHEET_ID', spreadsheet.getId());
  ensureDatabase_(spreadsheet);
  return 'Database siap digunakan.';
}

function getInitialData() {
  const spreadsheet = getDatabaseSpreadsheet_();
  ensureDatabase_(spreadsheet);

  const counts = {};
  Object.keys(SCHEMAS).forEach(function (name) {
    counts[name] = Math.max(0, spreadsheet.getSheetByName(name).getLastRow() - 1);
  });

  return {
    appName: APP_NAME,
    schemas: SCHEMAS,
    counts: counts,
    logoDataUri: getLogoDataUri_(spreadsheet)
  };
}

function getDashboardStats() {
  const staffStats = {
    guru: 0,
    tenagaPendidik: 0,
    pns: 0,
    pppk: 0,
    honorDaerah: 0,
    gender: {
      guru: { male: 0, female: 0 },
      tenagaPendidik: { male: 0, female: 0 }
    }
  };
  const studentStats = { total: 0, male: 0, female: 0, byClass: {} };

  ['Guru', 'Tenaga Pendidik'].forEach(function (category) {
    const schema = SCHEMAS[category];
    const sheet = getReadySheet_(category);
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return;
    const rows = sheet.getRange(2, 1, lastRow - 1, schema.length).getDisplayValues();
    rows.forEach(function (row) {
      if (!String(row[schema.indexOf('Nama Lengkap')] || '').trim()) return;
      if (category === 'Guru') staffStats.guru++;
      else staffStats.tenagaPendidik++;
      const status = normalizeHeader_(row[schema.indexOf('Status')]);
      if (status.indexOf('pns') >= 0) staffStats.pns++;
      else if (status.indexOf('pppk') >= 0) staffStats.pppk++;
      else if (status.indexOf('honordaerah') >= 0) staffStats.honorDaerah++;
      addGenderCount_(
        staffStats.gender[category === 'Guru' ? 'guru' : 'tenagaPendidik'],
        row[schema.indexOf('Jenis Kelamin')]
      );
    });
  });

  const studentSchema = SCHEMAS.Siswa;
  const studentSheet = getReadySheet_('Siswa');
  const studentLastRow = studentSheet.getLastRow();
  if (studentLastRow > 1) {
    studentSheet.getRange(2, 1, studentLastRow - 1, studentSchema.length).getDisplayValues()
      .forEach(function (row) {
        if (!String(row[studentSchema.indexOf('Nama Lengkap')] || '').trim()) return;
        studentStats.total++;
        addGenderCount_(studentStats, row[studentSchema.indexOf('Jenis Kelamin')]);
        const className = String(row[studentSchema.indexOf('Kelas Terakhir')] || '').trim();
        if (className) {
          studentStats.byClass[className] = (studentStats.byClass[className] || 0) + 1;
        }
      });
  }

  return {
    counts: {
      guru: staffStats.guru,
      tenagaPendidik: staffStats.tenagaPendidik,
      siswa: studentStats.total,
      pns: staffStats.pns,
      pppk: staffStats.pppk,
      honorDaerah: staffStats.honorDaerah
    },
    gender: {
      staff: staffStats.gender,
      students: { male: studentStats.male, female: studentStats.female }
    },
    studentsByClass: Object.keys(studentStats.byClass).sort(function (a, b) {
      return a.localeCompare(b, 'id', { numeric: true });
    }).map(function (className) {
      return { name: className, count: studentStats.byClass[className] };
    })
  };
}

function addGenderCount_(counts, value) {
  const gender = normalizeHeader_(value);
  if (gender === 'l' || gender === 'lk' || gender.indexOf('lakilaki') >= 0 || gender === 'pria') {
    counts.male++;
  } else if (gender === 'p' || gender.indexOf('perempuan') >= 0 || gender === 'wanita') {
    counts.female++;
  }
}

function getSchoolProfile() {
  const sheet = getSchoolProfileSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const rows = sheet.getRange(2, 1, lastRow - 1, SCHOOL_PROFILE_HEADERS.length).getDisplayValues();
  const groups = [];
  const groupMap = {};
  rows.forEach(function (row) {
    const section = row[0].trim();
    const label = row[1].trim();
    const value = row[2].trim();
    if (!section || !label || /rekening|bank|npwp|wajib pajak/i.test(label)) return;
    if (!groupMap[section]) {
      groupMap[section] = { section: section, items: [] };
      groups.push(groupMap[section]);
    }
    groupMap[section].items.push({ label: label, value: value });
  });
  return groups;
}

function getLeadershipSettings() {
  const sheet = getLeadershipSettingsSheet_();
  const values = {};
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, LEADERSHIP_SETTINGS_HEADERS.length)
      .getDisplayValues()
      .forEach(function (row) {
        values[row[0]] = { name: row[1], nip: row[2] };
      });
  }
  return {
    kepalaSekolah: values['Kepala Sekolah'] || { name: '', nip: '' },
    kasubagTu: values['Kasubag TU'] || { name: '', nip: '' }
  };
}

function saveLeadershipSettings(settings) {
  if (!settings || typeof settings !== 'object' || Array.isArray(settings)) {
    throw new Error('Data pengaturan tidak valid.');
  }
  const valuesByRole = {
    'Kepala Sekolah': [
      normalizeLeadershipField_(settings.kepalaSekolah, 'name', 150),
      normalizeLeadershipField_(settings.kepalaSekolah, 'nip', 50)
    ],
    'Kasubag TU': [
      normalizeLeadershipField_(settings.kasubagTu, 'name', 150),
      normalizeLeadershipField_(settings.kasubagTu, 'nip', 50)
    ]
  };
  const sheet = getLeadershipSettingsSheet_();
  const roles = sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getDisplayValues()
    .map(function (row) { return row[0]; });
  LEADERSHIP_SETTINGS_ROWS.forEach(function (role) {
    const rowIndex = roles.indexOf(role);
    if (rowIndex < 0) throw new Error('Jabatan ' + role + ' tidak ditemukan pada tab Pengaturan.');
    sheet.getRange(rowIndex + 2, 2, 1, 2).setValues([
      valuesByRole[role].map(escapeSheetValue_)
    ]);
  });
  return { message: 'Pengaturan berhasil disimpan.' };
}

function createDataBackup() {
  const spreadsheet = getDatabaseSpreadsheet_();
  const fileReferences = Object.create(null);
  const sheets = spreadsheet.getSheets().map(function (sheet) {
    const range = sheet.getDataRange();
    const values = range.getValues();
    const formulas = range.getFormulas();
    const headers = values.length ? values[0] : [];
    const fileColumns = ['Pas Foto', 'Foto Kendaraan', 'File ID']
      .map(function (header) { return headers.indexOf(header); })
      .filter(function (index) { return index >= 0; });
    const outputColumn = sheet.getName() === JOURNAL_SHEET_NAME
      ? headers.indexOf('Output')
      : -1;

    values.slice(1).forEach(function (row) {
      fileColumns.forEach(function (column) {
        collectBackupFile_(fileReferences, row[column]);
      });
      if (outputColumn >= 0) {
        const output = parseJournalOutput_(row[outputColumn]);
        if (output && (output.type === 'photo' || output.type === 'file')) {
          collectBackupFile_(fileReferences, output.fileId);
        }
      }
    });

    return {
      name: sheet.getName(),
      values: values,
      formulas: formulas
    };
  });

  const attachmentEntries = Object.keys(fileReferences).map(function (fileId) {
    return fileReferences[fileId];
  });
  const backupData = {
    format: 'sman-1-angkinang-backup',
    version: 1,
    createdAt: new Date().toISOString(),
    spreadsheetName: spreadsheet.getName(),
    sheets: sheets,
    attachments: attachmentEntries.map(function (entry) {
      return {
        fileId: entry.fileId,
        fileName: entry.fileName,
        contentType: entry.contentType,
        path: entry.path
      };
    })
  };
  const timestamp = Utilities.formatDate(
    new Date(),
    Session.getScriptTimeZone(),
    'yyyyMMdd-HHmmss'
  );
  const fileName = 'SMAN-1-ANGKINANG-backup-' + timestamp + '.zip';
  const blobs = [Utilities.newBlob(JSON.stringify(backupData), 'application/json', 'backup-data.json')]
    .concat(attachmentEntries.map(function (entry) { return entry.blob; }));
  const zip = Utilities.zip(blobs, fileName);

  return {
    fileName: fileName,
    base64: Utilities.base64Encode(zip.getBytes())
  };
}

function collectBackupFile_(fileReferences, fileId) {
  const id = String(fileId || '').trim();
  if (!id || Object.prototype.hasOwnProperty.call(fileReferences, id)) return;

  const file = DriveApp.getFileById(id);
  const path = 'attachments/' + id + '-' + sanitizeDriveFileName_(file.getName());
  const blob = Utilities.newBlob(file.getBlob().getBytes(), file.getMimeType(), path);
  fileReferences[id] = {
    fileId: id,
    fileName: file.getName(),
    contentType: file.getMimeType(),
    path: path,
    blob: blob
  };
}

function getRecords(category, query, page, classFilter) {
  const schema = getSchema_(category);
  const sheet = getReadySheet_(category);
  const currentPage = Math.max(1, Number(page) || 1);
  const search = String(query || '').trim().toLocaleLowerCase();
  const selectedClass = category === 'Siswa' ? String(classFilter || '').trim() : '';
  const lastRow = sheet.getLastRow();
  const rows = lastRow > 1
    ? sheet.getRange(2, 1, lastRow - 1, schema.length).getDisplayValues()
    : [];
  const classIndex = schema.indexOf('Kelas Terakhir');
  const classValues = category === 'Siswa'
    ? Array.from(new Set(rows.map(function (row) {
      return String(row[classIndex] || '').trim();
    }).filter(Boolean))).sort(function (a, b) { return a.localeCompare(b, 'id'); })
    : [];
  const matching = rows.reduce(function (result, row, index) {
    if (!row.some(function (value) { return value !== ''; })) return result;
    if (search && row.join(' ').toLocaleLowerCase().indexOf(search) === -1) return result;
    if (selectedClass && String(row[classIndex] || '').trim() !== selectedClass) return result;
    result.push({ id: index + 2, values: row });
    return result;
  }, []);
  const pageCount = Math.max(1, Math.ceil(matching.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, pageCount);
  const start = (safePage - 1) * PAGE_SIZE;

  const pageRecords = matching.slice(start, start + PAGE_SIZE);
  const photoIndex = schema.indexOf('Pas Foto');
  const vehiclePhotoIndex = schema.indexOf('Foto Kendaraan');
  if (photoIndex >= 0) {
    pageRecords.forEach(function (record) {
      record.photoDataUri = record.values[photoIndex]
        ? getPhotoDataUri_(record.values[photoIndex])
        : '';
    });
  }
  if (vehiclePhotoIndex >= 0) {
    pageRecords.forEach(function (record) {
      record.vehiclePhotoDataUri = record.values[vehiclePhotoIndex]
        ? getPhotoDataUri_(record.values[vehiclePhotoIndex])
        : '';
    });
  }

  return {
    records: pageRecords,
    total: matching.length,
    page: safePage,
    pageCount: pageCount,
    pageSize: PAGE_SIZE,
    classValues: classValues
  };
}

function saveRecord(category, id, values) {
  const schema = getSchema_(category);
  const record = normalizeRecord_(schema, values);
  if (!record[0]) throw new Error('Nama Lengkap wajib diisi.');

  const photoIndex = schema.indexOf('Pas Foto');
  const vehiclePhotoIndex = schema.indexOf('Foto Kendaraan');
  const photoDataUrl = values.PhotoDataUrl || '';
  const vehiclePhotoDataUrl = values.VehiclePhotoDataUrl || '';
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getReadySheet_(category);
    const recordId = Number(id);
    let row = sheet.getLastRow() + 1;
    if (id !== null && id !== undefined && id !== '') {
      if (!Number.isInteger(recordId) || recordId < 2 || recordId > sheet.getLastRow()) {
        throw new Error('Data yang akan diubah tidak ditemukan. Muat ulang daftar dan coba lagi.');
      }
      row = recordId;
      const current = sheet.getRange(row, 1, 1, schema.length).getDisplayValues()[0];
      if (photoIndex >= 0) record[photoIndex] = current[photoIndex] || '';
      if (vehiclePhotoIndex >= 0) record[vehiclePhotoIndex] = current[vehiclePhotoIndex] || '';
    }

    if (photoDataUrl) {
      if (photoIndex < 0) throw new Error('Kolom Pas Foto belum tersedia pada kategori ini.');
      record[photoIndex] = savePhoto_(category, record[0], photoDataUrl);
    }
    if (vehiclePhotoDataUrl) {
      if (vehiclePhotoIndex < 0) throw new Error('Kolom Foto Kendaraan hanya tersedia untuk siswa.');
      record[vehiclePhotoIndex] = savePhoto_(category, record[0], vehiclePhotoDataUrl);
    }

    const range = sheet.getRange(row, 1, 1, schema.length);
    range.setNumberFormat('@');
    range.setValues([record.map(escapeSheetValue_)]);
  } finally {
    lock.releaseLock();
  }
  return { message: 'Data berhasil disimpan.' };
}

function saveStudentVehiclePhoto(studentName, dataUrl, studentRecordId) {
  const name = String(studentName || '').trim();
  if (!name) throw new Error('Pilih nama siswa terlebih dahulu.');
  const schema = getSchema_('Siswa');
  const sheet = getReadySheet_('Siswa');
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  let newFileId = '';
  let photoUpdated = false;
  try {
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) throw new Error('Data siswa belum tersedia.');
    const rows = sheet.getRange(2, 1, lastRow - 1, schema.length).getDisplayValues();
    const matches = [];
    const selectedRecordId = studentRecordId === null || studentRecordId === undefined || studentRecordId === ''
      ? null
      : Number(studentRecordId);
    if (selectedRecordId !== null) {
      if (!Number.isInteger(selectedRecordId) || selectedRecordId < 2 || selectedRecordId > lastRow) {
        throw new Error('Data siswa yang dipilih tidak valid. Muat ulang halaman dan coba lagi.');
      }
      const selectedRow = rows[selectedRecordId - 2];
      if (String(selectedRow[0] || '').trim() !== name) {
        throw new Error('Nama siswa berubah. Muat ulang halaman dan coba lagi.');
      }
      matches.push({ row: selectedRecordId, values: selectedRow });
    } else {
      rows.forEach(function (row, index) {
        if (String(row[0] || '').trim() === name) matches.push({ row: index + 2, values: row });
      });
    }
    if (!matches.length) throw new Error('Nama siswa tidak ditemukan. Muat ulang halaman dan coba lagi.');
    if (matches.length > 1) {
      throw new Error('Nama siswa terduplikasi. Unggah foto melalui formulir data siswa agar tidak salah memilih.');
    }
    const photoIndex = schema.indexOf('Foto Kendaraan');
    const record = matches[0];
    newFileId = savePhoto_('Siswa', name, dataUrl);
    sheet.getRange(record.row, photoIndex + 1).setNumberFormat('@');
    sheet.getRange(record.row, photoIndex + 1).setValue(escapeSheetValue_(newFileId));
    photoUpdated = true;
  } catch (error) {
    if (newFileId && !photoUpdated) DriveApp.getFileById(newFileId).setTrashed(true);
    throw error;
  } finally {
    lock.releaseLock();
  }
  return { message: 'Foto kendaraan siswa berhasil disimpan.', photoId: newFileId };
}

function saveStudentVehicleDetails(studentRecordId, vehicleType, plate, color, dataUrl) {
  const recordId = Number(studentRecordId);
  if (!Number.isInteger(recordId) || recordId < 2) {
    throw new Error('Data siswa yang dipilih tidak valid. Muat ulang halaman dan coba lagi.');
  }
  const fields = {
    'Jenis Kendaraan': String(vehicleType || '').trim(),
    Nopol: String(plate || '').trim(),
    'Warna Kendaraan': String(color || '').trim()
  };
  if (fields['Jenis Kendaraan'].length > 100) throw new Error('Jenis Kendaraan maksimal 100 karakter.');
  if (fields.Nopol.length > 30) throw new Error('Nopol maksimal 30 karakter.');
  if (fields['Warna Kendaraan'].length > 50) throw new Error('Warna Kendaraan maksimal 50 karakter.');

  const schema = getSchema_('Siswa');
  const sheet = getReadySheet_('Siswa');
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  let newFileId = '';
  let rowUpdated = false;
  try {
    if (recordId > sheet.getLastRow()) {
      throw new Error('Data siswa tidak ditemukan. Muat ulang halaman dan coba lagi.');
    }
    const record = sheet.getRange(recordId, 1, 1, schema.length).getDisplayValues()[0];
    const studentName = String(record[0] || '').trim();
    if (!studentName) throw new Error('Data siswa tidak ditemukan. Muat ulang halaman dan coba lagi.');

    Object.keys(fields).forEach(function (field) {
      record[schema.indexOf(field)] = fields[field];
    });
    const photoIndex = schema.indexOf('Foto Kendaraan');
    if (dataUrl) {
      newFileId = savePhoto_('Siswa', studentName, dataUrl);
      record[photoIndex] = newFileId;
    }
    const range = sheet.getRange(recordId, 1, 1, schema.length);
    range.setNumberFormat('@');
    range.setValues([record.map(escapeSheetValue_)]);
    rowUpdated = true;
  } catch (error) {
    if (newFileId && !rowUpdated) DriveApp.getFileById(newFileId).setTrashed(true);
    throw error;
  } finally {
    lock.releaseLock();
  }
  return {
    message: 'Data kendaraan siswa berhasil disimpan.',
    photoId: newFileId
  };
}

function deleteRecord(category, id) {
  getSchema_(category);
  const recordId = Number(id);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getReadySheet_(category);
    if (!Number.isInteger(recordId) || recordId < 2 || recordId > sheet.getLastRow()) {
      throw new Error('Data yang akan dihapus tidak ditemukan. Muat ulang daftar dan coba lagi.');
    }
    sheet.deleteRow(recordId);
  } finally {
    lock.releaseLock();
  }
  return { message: 'Data berhasil dihapus.' };
}

function importCsv(category, csvContent, mode) {
  const schema = getSchema_(category);
  const importMode = String(mode || '');
  if (importMode !== 'update') {
    throw new Error('Impor CSV hanya mendukung penambahan data dan pengisian kolom yang masih kosong.');
  }
  const content = String(csvContent || '');
  if (!content.trim()) throw new Error('Berkas CSV kosong.');
  if (content.length > 5000000) throw new Error('Ukuran CSV terlalu besar. Batas maksimum 5 MB.');

  const parsed = Utilities.parseCsv(content);
  if (parsed.length < 2) throw new Error('CSV tidak memiliki baris data.');
  const header = parsed[0].map(normalizeHeader_);
  const nameIndex = getCsvFieldIndex_(category, 'Nama Lengkap', header);
  if (nameIndex < 0) throw new Error('Kolom "Nama Lengkap" tidak ditemukan di CSV.');

  const indexes = schema.map(function (field) {
    return getCsvFieldIndex_(category, field, header);
  });
  const keyColumns = getImportKeyColumns_(category, schema, header);
  const seenKeys = {};
  const rows = parsed.slice(1).reduce(function (result, source, index) {
    const values = indexes.map(function (columnIndex) {
      return columnIndex < 0 ? '' : String(source[columnIndex] || '').trim();
    });
    if (!values[0]) return result;

    const keys = keyColumns.map(function (item) {
      return {
        field: item.field,
        value: String(source[item.csvIndex] || '').trim()
      };
    }).filter(function (item) { return item.value; });
    if (!keys.length) throw new Error('Kolom kunci ' + getImportKeyFields_(category).join('/') +
      ' kosong pada baris CSV ' + (index + 2) + '.');
    keys.forEach(function (key) {
      const normalizedKey = key.field + ':' + key.value.toLocaleLowerCase();
      if (Object.prototype.hasOwnProperty.call(seenKeys, normalizedKey)) {
        throw new Error('Kunci data "' + key.value + '" duplikat pada baris CSV ' +
          seenKeys[normalizedKey] + ' dan ' + (index + 2) + '.');
      }
      seenKeys[normalizedKey] = index + 2;
    });
    result.push({ keys: keys, values: values });
    return result;
  }, []);
  if (!rows.length) throw new Error('Tidak ada baris dengan Nama Lengkap yang dapat diimpor.');
  const incomingNameCounts = {};
  rows.forEach(function (record) {
    const nameKey = normalizeRecordName_(record.values[0]);
    incomingNameCounts[nameKey] = (incomingNameCounts[nameKey] || 0) + 1;
  });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = getReadySheet_(category);
    const existingLastRow = sheet.getLastRow();
    const existingRows = existingLastRow > 1
      ? sheet.getRange(2, 1, existingLastRow - 1, schema.length).getDisplayValues()
      : [];
    const existingByKey = {};
    const legacyByName = {};
    existingRows.forEach(function (existing, index) {
      const hasIdentity = keyColumns.some(function (keyColumn) {
        return String(existing[keyColumn.schemaIndex] || '').trim() !== '';
      });
      if (!hasIdentity) {
        const nameKey = normalizeRecordName_(existing[0]);
        if (nameKey) {
          if (Object.prototype.hasOwnProperty.call(legacyByName, nameKey)) {
            legacyByName[nameKey] = null;
          } else {
            legacyByName[nameKey] = index;
          }
        }
      }
      keyColumns.forEach(function (keyColumn) {
        const key = String(existing[keyColumn.schemaIndex] || '').trim();
        if (!key) return;
        const normalizedKey = keyColumn.field + ':' + key.toLocaleLowerCase();
        if (Object.prototype.hasOwnProperty.call(existingByKey, normalizedKey) &&
            existingByKey[normalizedKey] !== index) {
          throw new Error('Kunci "' + key + '" muncul lebih dari sekali di tab ' + category +
            '. Perbaiki duplikasi sebelum memperbarui data.');
        }
        existingByKey[normalizedKey] = index;
      });
    });

    const changedRows = [];
    const addedRows = [];
    let unchanged = 0;
    rows.forEach(function (record) {
      let existingIndex;
      record.keys.forEach(function (key) {
        const recordKey = key.field + ':' + key.value.toLocaleLowerCase();
        const matchingIndex = existingByKey[recordKey];
        if (matchingIndex === undefined) return;
        if (existingIndex !== undefined && existingIndex !== matchingIndex) {
          throw new Error('Identitas data "' + record.values[0] +
            '" cocok dengan lebih dari satu baris. Periksa NIP/NUPTK di tab ' + category + '.');
        }
        existingIndex = matchingIndex;
      });
      if (existingIndex === undefined) {
        const nameKey = normalizeRecordName_(record.values[0]);
        if (incomingNameCounts[nameKey] === 1 &&
            Object.prototype.hasOwnProperty.call(legacyByName, nameKey) &&
            legacyByName[nameKey] !== null) {
          existingIndex = legacyByName[nameKey];
        }
      }
      if (existingIndex === undefined) {
        addedRows.push(record.values.map(escapeSheetValue_));
        return;
      }
      const current = existingRows[existingIndex];
      let changed = false;
      indexes.forEach(function (columnIndex, column) {
        if (columnIndex < 0 || current[column] || !record.values[column]) return;
        current[column] = record.values[column];
        changed = true;
      });
      if (changed) changedRows.push({ row: existingIndex + 2, values: current.map(escapeSheetValue_) });
      else unchanged++;
    });

    changedRows.sort(function (a, b) { return a.row - b.row; });
    let blockStart = 0;
    while (blockStart < changedRows.length) {
      let blockEnd = blockStart + 1;
      while (blockEnd < changedRows.length &&
          changedRows[blockEnd].row === changedRows[blockEnd - 1].row + 1) {
        blockEnd++;
      }
      const block = changedRows.slice(blockStart, blockEnd);
      const range = sheet.getRange(block[0].row, 1, block.length, schema.length);
      range.setNumberFormat('@');
      range.setValues(block.map(function (record) { return record.values; }));
      blockStart = blockEnd;
    }
    if (addedRows.length) {
      const firstRow = sheet.getLastRow() + 1;
      const range = sheet.getRange(firstRow, 1, addedRows.length, schema.length);
      range.setNumberFormat('@');
      range.setValues(addedRows);
    }
    return {
      message: 'Impor selesai: ' + changedRows.length + ' data dilengkapi, ' +
        addedRows.length + ' data baru ditambahkan, ' + unchanged + ' data yang sudah ada tidak diubah.',
      updated: changedRows.length,
      added: addedRows.length,
      unchanged: unchanged,
      skipped: parsed.length - rows.length - 1
    };
  } finally {
    lock.releaseLock();
  }
}

function getImportKeyFields_(category) {
  const keys = {
    Siswa: ['NISN', 'NIPD'],
    Guru: ['NIP', 'NUPTK'],
    'Tenaga Pendidik': ['NIP', 'NUPTK']
  };
  return keys[category] || [];
}

function getImportKeyColumns_(category, schema, header) {
  const columns = getImportKeyFields_(category).reduce(function (result, field) {
    const schemaIndex = schema.indexOf(field);
    const csvIndex = getCsvFieldIndex_(category, field, header);
    if (schemaIndex >= 0 && csvIndex >= 0) {
      result.push({ field: field, schemaIndex: schemaIndex, csvIndex: csvIndex });
    }
    return result;
  }, []);
  if (!columns.length) {
    throw new Error('Kolom kunci unik (' + getImportKeyFields_(category).join(' atau ') +
      ') tidak ditemukan di CSV. Impor dibatalkan agar data tidak tertukar.');
  }
  return columns;
}

function getCsvFieldIndex_(category, field, header) {
  const aliases = {
    Guru: {
      'Nama Lengkap': ['Nama Lenkap', 'Nama'],
      'Jenis Kelamin': ['JK'],
      Status: ['Status Kepegawaian'],
      'No Hp': ['HP'],
      Alamat: ['Alamat Jalan']
    },
    'Tenaga Pendidik': {
      'Nama Lengkap': ['Nama'],
      'Jenis Kelamin': ['JK'],
      Status: ['Status Kepegawaian'],
      'No HP': ['HP'],
      Alamat: ['Alamat Jalan']
    },
    Siswa: {
      'Nama Lengkap': ['Nama'],
      'Jenis Kelamin': ['JK'],
      Email: ['E-Mail'],
      'Anak Ke': ['Anak ke-berapa'],
      'Kelas Terakhir': ['Rombel Saat Ini']
    }
  };
  const fieldAliases = aliases[category] && aliases[category][field];
  if (category === 'Siswa' && field === 'Pekerjaan Ayah') {
    return findCsvHeaderIndex_(header, 'Pekerjaan', 0);
  }
  if (category === 'Siswa' && field === 'Pekerjaan Ibu') {
    return findCsvHeaderIndex_(header, 'Pekerjaan', 1);
  }
  const legacyAliases = field === 'Pas Foto' ? ['Photo', 'Foto'] : [];
  const candidates = (fieldAliases || []).concat(legacyAliases, [field]);
  for (let index = 0; index < candidates.length; index++) {
    const found = findCsvHeaderIndex_(header, candidates[index], 0);
    if (found >= 0) return found;
  }
  return -1;
}

function findCsvHeaderIndex_(header, name, occurrence) {
  const normalizedName = normalizeHeader_(name);
  let matches = 0;
  for (let index = 0; index < header.length; index++) {
    if (header[index] !== normalizedName) continue;
    if (matches === occurrence) return index;
    matches++;
  }
  return -1;
}

function normalizeRecordName_(value) {
  return String(value || '').trim().replace(/\s+/g, ' ').toLocaleLowerCase();
}

function getJournalStaff() {
  const sheet = getReadySheet_('Tenaga Pendidik');
  const nameColumn = SCHEMAS['Tenaga Pendidik'].indexOf('Nama Lengkap') + 1;
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  const names = sheet.getRange(2, nameColumn, lastRow - 1, 1).getDisplayValues()
    .map(function (row) { return row[0].trim(); })
    .filter(function (name) { return Boolean(name); });
  return Array.from(new Set(names)).sort(function (a, b) {
    return a.localeCompare(b, 'id');
  });
}

function getArchivePeople() {
  const people = {};
  ['Guru', 'Tenaga Pendidik', 'Siswa'].forEach(function (category) {
    const sheet = getReadySheet_(category);
    const nameColumn = SCHEMAS[category].indexOf('Nama Lengkap') + 1;
    const lastRow = sheet.getLastRow();
    const names = lastRow < 2 ? [] : sheet.getRange(2, nameColumn, lastRow - 1, 1)
      .getDisplayValues()
      .map(function (row) { return row[0].trim(); })
      .filter(Boolean);
    people[category] = Array.from(new Set(names)).sort(function (a, b) {
      return a.localeCompare(b, 'id');
    });
  });
  return people;
}

function getDigitalArchiveRecords() {
  const sheet = getArchiveSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  return sheet.getRange(2, 1, lastRow - 1, ARCHIVE_HEADERS.length).getDisplayValues()
    .map(function (row, index) {
      return {
        id: index + 2,
        fileName: row[0],
        category: row[1],
        personName: row[2],
        year: row[3],
        note: row[4],
        fileId: row[5],
        originalName: row[6],
        uploadedAt: row[7],
        url: 'https://drive.google.com/open?id=' + encodeURIComponent(row[5])
      };
    })
    .filter(function (record) { return record.fileId; })
    .reverse();
}

function getDigitalArchiveRecordsForPerson(category, personName) {
  const selectedCategory = String(category || '').trim();
  const selectedName = String(personName || '').trim();
  if (['Guru', 'Tenaga Pendidik', 'Siswa'].indexOf(selectedCategory) < 0 || !selectedName) {
    throw new Error('Kategori atau nama data tidak valid.');
  }
  const sheet = getArchiveSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  return sheet.getRange(2, 1, lastRow - 1, ARCHIVE_HEADERS.length).getDisplayValues()
    .map(function (row, index) {
      return {
        id: index + 2,
        fileName: row[0],
        category: row[1],
        personName: row[2],
        year: row[3],
        note: row[4],
        fileId: row[5],
        uploadedAt: row[7],
        url: 'https://drive.google.com/open?id=' + encodeURIComponent(row[5])
      };
    })
    .filter(function (record) {
      return record.fileId && record.category === selectedCategory && record.personName === selectedName;
    })
    .reverse();
}

function uploadDigitalArchive(entry) {
  if (!entry || typeof entry !== 'object') throw new Error('Data berkas tidak valid.');
  const category = String(entry.category || '').trim();
  const personName = String(entry.personName || '').trim();
  const displayName = String(entry.fileName || '').trim();
  const year = String(entry.year || '').trim();
  const note = String(entry.note || '').trim();
  const dataUrl = String(entry.dataUrl || '');
  const originalName = String(entry.originalName || '').trim();
  if (['Guru', 'Tenaga Pendidik', 'Siswa'].indexOf(category) < 0) {
    throw new Error('Pilih kategori yang valid.');
  }
  if (!personName) throw new Error('Pilih nama pemilik berkas.');
  if (!displayName || displayName.length > 200) {
    throw new Error('Nama File wajib diisi dan maksimal 200 karakter.');
  }
  if (!/^(19|20|21)\d{2}$/.test(year)) throw new Error('Pilih tahun berkas yang valid.');
  if (note.length > 1000) throw new Error('Keterangan maksimal 1.000 karakter.');
  if (!originalName || originalName.length > 255) throw new Error('Berkas yang dipilih tidak valid.');
  if (dataUrl.length > Math.ceil(MAX_ARCHIVE_BYTES * 4 / 3) + 512) {
    throw new Error('Ukuran berkas maksimal 20 MB.');
  }

  const match = dataUrl.match(/^data:([A-Za-z0-9!#$&^_.+-]+\/[A-Za-z0-9!#$&^_.+-]+);base64,([A-Za-z0-9+/=]+)$/);
  if (!match) throw new Error('Isi berkas tidak valid. Pilih ulang berkas yang akan diunggah.');
  const bytes = Utilities.base64Decode(match[2]);
  if (!bytes.length || bytes.length > MAX_ARCHIVE_BYTES) {
    throw new Error('Ukuran berkas maksimal 20 MB.');
  }

  const availablePeople = getArchivePeople()[category];
  if (availablePeople.indexOf(personName) < 0) {
    throw new Error('Nama tidak ditemukan pada kategori yang dipilih. Muat ulang halaman dan coba lagi.');
  }

  const safePersonName = sanitizeFolderName_(personName);
  const safeDisplayName = sanitizeDriveFileName_(displayName);
  const safeOriginalName = sanitizeDriveFileName_(originalName);
  const extensionMatch = safeOriginalName.match(/(\.[^.]{1,20})$/);
  const extension = extensionMatch ? extensionMatch[1] : '';
  const finalName = extension && !safeDisplayName.toLocaleLowerCase().endsWith(extension.toLocaleLowerCase())
    ? safeDisplayName.substring(0, 200 - extension.length) + extension
    : safeDisplayName;
  const mimeType = match[1].toLocaleLowerCase();
  const blob = Utilities.newBlob(bytes, mimeType, finalName);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  let uploadedFile;
  try {
    const parentFolder = getDatabaseParentFolder_();
    const rootFolder = getOrCreateFolder_(parentFolder, PHOTO_ROOT_FOLDER_NAME);
    const personFolder = getOrCreateFolder_(rootFolder, safePersonName);
    uploadedFile = personFolder.createFile(blob);
    const sheet = getArchiveSheet_();
    const row = [
      finalName,
      category,
      personName,
      year,
      note,
      uploadedFile.getId(),
      safeOriginalName,
      Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss')
    ];
    const targetRow = sheet.getLastRow() + 1;
    sheet.getRange(targetRow, 1, 1, row.length).setNumberFormat('@');
    sheet.getRange(targetRow, 1, 1, row.length).setValues([row.map(escapeSheetValue_)]);
  } catch (error) {
    if (uploadedFile) uploadedFile.setTrashed(true);
    throw error;
  } finally {
    lock.releaseLock();
  }
  return { message: 'Berkas berhasil disimpan.', record: {
    fileName: finalName,
    category: category,
    personName: personName,
    year: year,
    url: 'https://drive.google.com/open?id=' + encodeURIComponent(uploadedFile.getId())
  } };
}

function updateDigitalArchive(entry) {
  if (!entry || typeof entry !== 'object') throw new Error('Data berkas tidak valid.');
  const recordId = Number(entry.id);
  const category = String(entry.category || '').trim();
  const personName = String(entry.personName || '').trim();
  const displayName = String(entry.fileName || '').trim();
  const year = String(entry.year || '').trim();
  const note = String(entry.note || '').trim();
  const dataUrl = String(entry.dataUrl || '');
  const originalName = String(entry.originalName || '').trim();
  if (!Number.isInteger(recordId) || recordId < 2) throw new Error('Berkas yang akan diubah tidak valid.');
  if (['Guru', 'Tenaga Pendidik', 'Siswa'].indexOf(category) < 0) {
    throw new Error('Pilih kategori yang valid.');
  }
  if (!personName) throw new Error('Pilih nama pemilik berkas.');
  if (!displayName || displayName.length > 200) {
    throw new Error('Nama File wajib diisi dan maksimal 200 karakter.');
  }
  if (!/^(19|20|21)\d{2}$/.test(year)) throw new Error('Pilih tahun berkas yang valid.');
  if (note.length > 1000) throw new Error('Keterangan maksimal 1.000 karakter.');
  if (dataUrl && (!originalName || originalName.length > 255)) {
    throw new Error('Berkas pengganti yang dipilih tidak valid.');
  }
  if (dataUrl.length > Math.ceil(MAX_ARCHIVE_BYTES * 4 / 3) + 512) {
    throw new Error('Ukuran berkas maksimal 20 MB.');
  }
  const availablePeople = getArchivePeople()[category];
  if (availablePeople.indexOf(personName) < 0) {
    throw new Error('Nama tidak ditemukan pada kategori yang dipilih. Muat ulang halaman dan coba lagi.');
  }

  let replacementBlob = null;
  let replacementName = '';
  if (dataUrl) {
    const match = dataUrl.match(/^data:([A-Za-z0-9!#$&^_.+-]+\/[A-Za-z0-9!#$&^_.+-]+);base64,([A-Za-z0-9+/=]+)$/);
    if (!match) throw new Error('Isi berkas tidak valid. Pilih ulang berkas yang akan diunggah.');
    const bytes = Utilities.base64Decode(match[2]);
    if (!bytes.length || bytes.length > MAX_ARCHIVE_BYTES) {
      throw new Error('Ukuran berkas maksimal 20 MB.');
    }
    const safeName = sanitizeDriveFileName_(displayName);
    const safeOriginalName = sanitizeDriveFileName_(originalName);
    const extensionMatch = safeOriginalName.match(/(\.[^.]{1,20})$/);
    const extension = extensionMatch ? extensionMatch[1] : '';
    replacementName = extension && !safeName.toLocaleLowerCase().endsWith(extension.toLocaleLowerCase())
      ? safeName.substring(0, 200 - extension.length) + extension
      : safeName;
    replacementBlob = Utilities.newBlob(bytes, match[1].toLocaleLowerCase(), replacementName);
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  let newFile = null;
  let oldFile = null;
  let previousName = '';
  let movedOldFile = false;
  let previousParent = null;
  let archiveSheet = null;
  let previousRow = null;
  let sheetUpdated = false;
  try {
    archiveSheet = getArchiveSheet_();
    if (recordId > archiveSheet.getLastRow()) throw new Error('Berkas yang akan diubah tidak ditemukan. Muat ulang daftar dan coba lagi.');
    const current = archiveSheet.getRange(recordId, 1, 1, ARCHIVE_HEADERS.length).getDisplayValues()[0];
    previousRow = current.slice();
    if (!current[5]) throw new Error('Berkas yang akan diubah tidak ditemukan. Muat ulang daftar dan coba lagi.');
    const folder = getOrCreateFolder_(
      getOrCreateFolder_(getDatabaseParentFolder_(), PHOTO_ROOT_FOLDER_NAME),
      sanitizeFolderName_(personName)
    );
    oldFile = DriveApp.getFileById(current[5]);
    previousName = oldFile.getName();
    if (replacementBlob) {
      newFile = folder.createFile(replacementBlob);
    } else {
      const parents = oldFile.getParents();
      if (parents.hasNext()) previousParent = parents.next();
      const isAlreadyInFolder = previousParent && previousParent.getId() === folder.getId();
      if (!isAlreadyInFolder) {
        oldFile.moveTo(folder);
        movedOldFile = true;
      }
      const currentExtensionMatch = String(current[6] || '').match(/(\.[^.]{1,20})$/);
      const currentExtension = currentExtensionMatch ? currentExtensionMatch[1] : '';
      const safeDisplayName = sanitizeDriveFileName_(displayName);
      const nextName = currentExtension && !safeDisplayName.toLocaleLowerCase().endsWith(currentExtension.toLocaleLowerCase())
        ? safeDisplayName.substring(0, 200 - currentExtension.length) + currentExtension
        : safeDisplayName;
      if (nextName !== previousName) oldFile.setName(nextName);
    }

    const file = newFile || oldFile;
    const row = [
      file.getName(),
      category,
      personName,
      year,
      note,
      file.getId(),
      replacementBlob ? sanitizeDriveFileName_(originalName) : current[6],
      current[7]
    ];
    archiveSheet.getRange(recordId, 1, 1, row.length).setNumberFormat('@');
    archiveSheet.getRange(recordId, 1, 1, row.length).setValues([row.map(escapeSheetValue_)]);
    sheetUpdated = true;
    if (newFile) oldFile.setTrashed(true);
  } catch (error) {
    if (sheetUpdated && archiveSheet && previousRow) {
      archiveSheet.getRange(recordId, 1, 1, previousRow.length)
        .setValues([previousRow.map(escapeSheetValue_)]);
    }
    if (newFile) newFile.setTrashed(true);
    if (oldFile && oldFile.isTrashed()) oldFile.setTrashed(false);
    if (oldFile && movedOldFile) oldFile.moveTo(previousParent);
    if (oldFile && previousName && oldFile.getName() !== previousName) oldFile.setName(previousName);
    throw error;
  } finally {
    lock.releaseLock();
  }
  return { message: 'Data berkas berhasil diperbarui.' };
}

function deleteDigitalArchive(recordId) {
  const id = Number(recordId);
  if (!Number.isInteger(id) || id < 2) throw new Error('Berkas yang akan dihapus tidak valid.');
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  let file = null;
  try {
    const sheet = getArchiveSheet_();
    if (id > sheet.getLastRow()) throw new Error('Berkas yang akan dihapus tidak ditemukan. Muat ulang daftar dan coba lagi.');
    const fileId = sheet.getRange(id, 6).getDisplayValue();
    if (!fileId) throw new Error('Berkas yang akan dihapus tidak ditemukan. Muat ulang daftar dan coba lagi.');
    file = DriveApp.getFileById(fileId);
    file.setTrashed(true);
    try {
      sheet.deleteRow(id);
    } catch (error) {
      file.setTrashed(false);
      throw error;
    }
  } finally {
    lock.releaseLock();
  }
  return { message: 'Berkas berhasil dihapus.' };
}

function saveJournalEntry(entry) {
  if (!entry || typeof entry !== 'object') throw new Error('Data jurnal tidak valid.');
  const name = String(entry.name || '').trim();
  const date = String(entry.date || '').trim();
  const activities = Array.isArray(entry.activities)
    ? entry.activities.map(function (activity) { return String(activity || '').trim(); }).filter(Boolean)
    : [String(entry.activity || '').trim()].filter(Boolean);
  const activity = activities.join('\n');
  const rawOutput = entry.output;
  const note = String(entry.note || '').trim();
  let submittedOutput = null;
  if (!name) throw new Error('Pilih nama tenaga pendidik.');
  if (!isValidIsoDate_(date)) throw new Error('Tanggal jurnal tidak valid.');
  if (!activity) throw new Error('Kegiatan wajib diisi.');
  if (activity.length > 5000) throw new Error('Kegiatan maksimal 5.000 karakter.');
  if (note.length > 5000) throw new Error('Keterangan maksimal 5.000 karakter.');
  let output = null;
  let outputBlob = null;
  let outputFileName = '';
  if (rawOutput !== null && rawOutput !== undefined && rawOutput !== '') {
    submittedOutput = typeof rawOutput === 'string'
      ? { type: 'text', text: rawOutput.trim() }
      : rawOutput;
    if (!submittedOutput || typeof submittedOutput !== 'object' ||
        ['photo', 'file', 'text', 'link'].indexOf(submittedOutput.type) < 0) {
      throw new Error('Jenis output tidak valid.');
    }
    if (submittedOutput.type === 'text') {
      const text = String(submittedOutput.text || '').trim();
      if (!text) throw new Error('Isi teks output atau pilih jenis output lainnya.');
      if (text.length > 5000) throw new Error('Output kegiatan maksimal 5.000 karakter.');
      output = { type: 'text', text: text };
    } else if (submittedOutput.type === 'link') {
      const url = String(submittedOutput.url || '').trim();
      if (url.length > 2000 || !/^https?:\/\/\S+$/i.test(url)) {
        throw new Error('Tautan output harus diawali http:// atau https:// dan maksimal 2.000 karakter.');
      }
      output = { type: 'link', url: url };
    } else {
      const dataUrl = String(submittedOutput.dataUrl || '');
      if (dataUrl) {
        if (dataUrl.length > Math.ceil(MAX_JOURNAL_FILE_BYTES * 4 / 3) + 512) {
          throw new Error('Ukuran file output maksimal 20 MB.');
        }
        const match = dataUrl.match(/^data:([A-Za-z0-9!#$&^_.+-]+\/[A-Za-z0-9!#$&^_.+-]+);base64,([A-Za-z0-9+/=]+)$/);
        if (!match) throw new Error('Isi file output tidak valid. Pilih ulang file yang akan diunggah.');
        const mimeType = match[1].toLocaleLowerCase();
        const bytes = Utilities.base64Decode(match[2]);
        const maximumSize = submittedOutput.type === 'photo' ? MAX_PHOTO_BYTES : MAX_JOURNAL_FILE_BYTES;
        if (!bytes.length || bytes.length > maximumSize) {
          throw new Error(submittedOutput.type === 'photo'
            ? 'Ukuran foto output maksimal 2 MB.'
            : 'Ukuran file output maksimal 20 MB.');
        }
        if (submittedOutput.type === 'photo' && !/^image\/(png|jpeg|webp|gif)$/.test(mimeType)) {
          throw new Error('Foto output harus berupa PNG, JPG, WebP, atau GIF.');
        }
        outputFileName = sanitizeDriveFileName_(String(submittedOutput.fileName || '').trim());
        outputBlob = Utilities.newBlob(bytes, mimeType, outputFileName);
      } else {
        const fileId = String(submittedOutput.fileId || '').trim();
        outputFileName = String(submittedOutput.fileName || '').trim();
        if (!fileId || !outputFileName) throw new Error('Pilih file untuk output.');
        output = {
          type: submittedOutput.type,
          fileId: fileId,
          fileName: outputFileName
        };
      }
    }
  }
  const isCurrentStaffMember = getJournalStaff().indexOf(name) >= 0;

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  let sheet = null;
  let previousRow = null;
  let row = null;
  let rowUpdated = false;
  let uploadedFile = null;
  let oldFile = null;
  let oldFileWasTrashed = false;
  let movedExistingFile = false;
  let previousParent = null;
  try {
    sheet = getJournalSheet_();
    const recordId = entry.id === null || entry.id === undefined || entry.id === ''
      ? null
      : Number(entry.id);
    row = sheet.getLastRow() + 1;
    let existingOutput = null;
    if (recordId !== null) {
      if (!Number.isInteger(recordId) || recordId < 2 || recordId > sheet.getLastRow()) {
        throw new Error('Jurnal yang akan diubah tidak ditemukan. Muat ulang history dan coba lagi.');
      }
      previousRow = sheet.getRange(recordId, 1, 1, 5).getDisplayValues()[0];
      const currentName = sheet.getRange(recordId, 1).getDisplayValue();
      if (!isCurrentStaffMember && currentName !== name) {
        throw new Error('Nama tidak ditemukan pada data Tenaga Pendidik. Perbarui data tenaga pendidik lalu coba lagi.');
      }
      row = recordId;
      existingOutput = parseJournalOutput_(previousRow[3]);
    } else if (!isCurrentStaffMember) {
      throw new Error('Nama tidak ditemukan pada data Tenaga Pendidik. Perbarui data tenaga pendidik lalu coba lagi.');
    }
    const existingFileId = existingOutput &&
      (existingOutput.type === 'photo' || existingOutput.type === 'file')
      ? existingOutput.fileId
      : '';
    if (outputBlob) {
      const outputFolder = getJournalOutputFolder_(name);
      uploadedFile = outputFolder.createFile(outputBlob);
      output = {
        type: submittedOutput.type,
        fileId: uploadedFile.getId(),
        fileName: uploadedFile.getName()
      };
    } else if (output && (output.type === 'photo' || output.type === 'file')) {
      if (!existingFileId || output.fileId !== existingFileId ||
          output.type !== existingOutput.type) {
        throw new Error('Berkas output tidak cocok dengan jurnal yang dipilih. Muat ulang history dan coba lagi.');
      }
      oldFile = DriveApp.getFileById(existingFileId);
      const parents = oldFile.getParents();
      if (parents.hasNext()) previousParent = parents.next();
      const outputFolder = getJournalOutputFolder_(name);
      if (!previousParent || previousParent.getId() !== outputFolder.getId()) {
        oldFile.moveTo(outputFolder);
        movedExistingFile = true;
      }
      output.url = 'https://drive.google.com/open?id=' + encodeURIComponent(existingFileId);
    }
    if (existingFileId && (!output || output.fileId !== existingFileId)) {
      oldFile = oldFile || DriveApp.getFileById(existingFileId);
    }
    const range = sheet.getRange(row, 1, 1, 5);
    range.setNumberFormat('@');
    range.setValues([[
      escapeSheetValue_(name),
      date,
      escapeSheetValue_(activity),
      escapeSheetValue_(output
        ? JSON.stringify(Object.assign({ format: 'journal-output-v1' }, output))
        : ''),
      escapeSheetValue_(note)
    ]]);
    rowUpdated = true;
    if (oldFile && oldFile.getId() !== (output && output.fileId)) {
      oldFile.setTrashed(true);
      oldFileWasTrashed = true;
    }
  } catch (error) {
    if (rowUpdated && sheet && previousRow) {
      sheet.getRange(row, 1, 1, previousRow.length).setValues([previousRow]);
    }
    if (uploadedFile) uploadedFile.setTrashed(true);
    if (oldFileWasTrashed && oldFile) oldFile.setTrashed(false);
    if (movedExistingFile && oldFile && previousParent) oldFile.moveTo(previousParent);
    throw error;
  } finally {
    lock.releaseLock();
  }
  return { message: 'Jurnal harian berhasil disimpan.' };
}

function deleteJournalEntry(id) {
  const recordId = Number(id);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  let file = null;
  let fileWasTrashed = false;
  try {
    const sheet = getJournalSheet_();
    if (!Number.isInteger(recordId) || recordId < 2 || recordId > sheet.getLastRow()) {
      throw new Error('Jurnal yang akan dihapus tidak ditemukan. Muat ulang history dan coba lagi.');
    }
    const output = parseJournalOutput_(sheet.getRange(recordId, 4).getDisplayValue());
    if (output && (output.type === 'photo' || output.type === 'file') && output.fileId) {
      file = DriveApp.getFileById(output.fileId);
      file.setTrashed(true);
      fileWasTrashed = true;
    }
    try {
      sheet.deleteRow(recordId);
    } catch (error) {
      if (fileWasTrashed) file.setTrashed(false);
      throw error;
    }
  } finally {
    lock.releaseLock();
  }
  return { message: 'Jurnal harian berhasil dihapus.' };
}

function getJournalHistory(name, month) {
  const selectedName = String(name || '').trim();
  const selectedMonth = String(month || '').trim();
  if (selectedMonth && !/^\d{4}-(0[1-9]|1[0-2])$/.test(selectedMonth)) {
    throw new Error('Filter bulan tidak valid.');
  }

  const sheet = getJournalSheet_();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return { records: [], total: 0 };

  const records = sheet.getRange(2, 1, lastRow - 1, 5).getDisplayValues()
    .map(function (row, index) {
      return {
        id: index + 2,
        name: row[0],
        date: row[1],
        activity: row[2],
        output: parseJournalOutput_(row[3]),
        note: row[4] || ''
      };
    })
    .filter(function (record) {
      return record.name && record.date &&
        (!selectedName || record.name === selectedName) &&
        (!selectedMonth || record.date.indexOf(selectedMonth) === 0);
    })
    .sort(function (a, b) {
      return a.date.localeCompare(b.date) || a.id - b.id;
    });

  return { records: records, total: records.length };
}

function parseJournalOutput_(value) {
  const raw = String(value || '').trim();
  if (!raw) return null;
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    return { type: 'text', text: raw };
  }
  if (!parsed || typeof parsed !== 'object' || parsed.format !== 'journal-output-v1' ||
      ['photo', 'file', 'text', 'link'].indexOf(parsed.type) < 0) {
    return { type: 'text', text: raw };
  }
  if (parsed.type === 'text') {
    return { type: 'text', text: String(parsed.text || '') };
  }
  if (parsed.type === 'link') {
    const url = String(parsed.url || '');
    return /^https?:\/\/\S+$/i.test(url)
      ? { type: 'link', url: url }
      : { type: 'text', text: raw };
  }
  const fileId = String(parsed.fileId || '');
  if (!fileId) return { type: 'text', text: raw };
  return {
    type: parsed.type,
    fileId: fileId,
    fileName: String(parsed.fileName || 'Buka berkas'),
    url: 'https://drive.google.com/open?id=' + encodeURIComponent(fileId)
  };
}

function getJournalPdfData(name, month) {
  const history = getJournalHistory(name, month);
  const settings = getLeadershipSettings();
  const staffSheet = getReadySheet_('Tenaga Pendidik');
  const schema = SCHEMAS['Tenaga Pendidik'];
  const nameColumn = schema.indexOf('Nama Lengkap');
  const nipColumn = schema.indexOf('NIP');
  const lastRow = staffSheet.getLastRow();
  const staffRecords = lastRow > 1
    ? staffSheet.getRange(2, 1, lastRow - 1, schema.length).getDisplayValues()
    : [];
  const staffByName = {};
  staffRecords.forEach(function (row) {
    const staffName = row[nameColumn].trim();
    if (staffName) {
      staffByName[normalizeRecordName_(staffName)] = {
        name: staffName,
        nip: row[nipColumn].trim()
      };
    }
  });

  const selectedName = String(name || '').trim();
  const includedNames = selectedName
    ? [selectedName]
    : Array.from(new Set(history.records.map(function (record) { return record.name; })));
  const staff = includedNames.map(function (staffName) {
    return staffByName[normalizeRecordName_(staffName)] || { name: staffName, nip: '' };
  });

  return {
    records: history.records,
    total: history.total,
    settings: settings,
    staff: staff
  };
}

function ensureDatabase_(spreadsheet) {
  Object.keys(SCHEMAS).forEach(function (name) {
    let sheet = spreadsheet.getSheetByName(name);
    if (!sheet) sheet = spreadsheet.insertSheet(name);

    const schema = SCHEMAS[name];
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, schema.length).setValues([schema]);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, schema.length)
        .setBackground('#174d36')
        .setFontColor('#ffffff')
        .setFontWeight('bold');
      sheet.setColumnWidths(1, schema.length, 150);
      sheet.setColumnWidth(1, 220);
      return;
    }

    if (sheet.getMaxColumns() < schema.length) {
      sheet.insertColumnsAfter(sheet.getMaxColumns(), schema.length - sheet.getMaxColumns());
    }
    let currentHeader = sheet.getRange(1, 1, 1, schema.length).getDisplayValues()[0];
    schema.forEach(function (field, index) {
      if (field === 'Pas Foto' && currentHeader[index] === 'Photo') {
        sheet.getRange(1, index + 1).setValue('Pas Foto');
        currentHeader[index] = 'Pas Foto';
      }
    });
    const matches = schema.every(function (field, index) {
      return currentHeader[index] === field;
    });
    const currentWidth = sheet.getLastColumn();
    const canAppendColumns = currentWidth > 0 && currentWidth < schema.length &&
      schema.slice(0, currentWidth).every(function (field, index) {
        return currentHeader[index] === field;
      });
    if (!matches && canAppendColumns) {
      sheet.getRange(1, currentWidth + 1, 1, schema.length - currentWidth)
        .setValues([schema.slice(currentWidth)]);
      sheet.getRange(1, currentWidth + 1, 1, schema.length - currentWidth)
        .setBackground('#174d36')
        .setFontColor('#ffffff')
        .setFontWeight('bold');
      sheet.setFrozenRows(1);
      return;
    }
    if (!matches) {
      throw new Error(
        'Header tab "' + name + '" tidak sesuai. Periksa baris pertama sebelum menjalankan aplikasi.'
      );
    }
  });
  ensureJournalSheet_(spreadsheet);
  ensureArchiveSheet_(spreadsheet);
  ensureSchoolProfileSheet_(spreadsheet);
  ensureLeadershipSettingsSheet_(spreadsheet);
}

function ensureLeadershipSettingsSheet_(spreadsheet) {
  const database = spreadsheet || getDatabaseSpreadsheet_();
  let sheet = database.getSheetByName(LEADERSHIP_SETTINGS_SHEET_NAME);
  if (!sheet) sheet = database.insertSheet(LEADERSHIP_SETTINGS_SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    const rows = [LEADERSHIP_SETTINGS_HEADERS].concat(
      LEADERSHIP_SETTINGS_ROWS.map(function (title) { return [title, '', '']; })
    );
    sheet.getRange(1, 1, rows.length, LEADERSHIP_SETTINGS_HEADERS.length).setValues(rows);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, LEADERSHIP_SETTINGS_HEADERS.length)
      .setBackground('#174d36')
      .setFontColor('#ffffff')
      .setFontWeight('bold');
    sheet.setColumnWidth(1, 200);
    sheet.setColumnWidths(2, 2, 240);
    return sheet;
  }
  const header = sheet.getRange(1, 1, 1, LEADERSHIP_SETTINGS_HEADERS.length).getDisplayValues()[0];
  if (!LEADERSHIP_SETTINGS_HEADERS.every(function (name, index) { return header[index] === name; })) {
    throw new Error('Header tab "' + LEADERSHIP_SETTINGS_SHEET_NAME + '" tidak sesuai. Periksa baris pertama sebelum menggunakan Pengaturan.');
  }
  const existingRoles = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, 1).getDisplayValues().map(function (row) { return row[0]; })
    : [];
  LEADERSHIP_SETTINGS_ROWS.forEach(function (title) {
    if (existingRoles.indexOf(title) < 0) {
      sheet.appendRow([title, '', '']);
    }
  });
  return sheet;
}

function getLeadershipSettingsSheet_() {
  return ensureLeadershipSettingsSheet_(getDatabaseSpreadsheet_());
}

function normalizeLeadershipField_(person, field, maxLength) {
  if (!person || typeof person !== 'object' || Array.isArray(person)) {
    throw new Error('Data petinggi tidak valid.');
  }
  const value = person[field] === null || person[field] === undefined ? '' : String(person[field]).trim();
  if (value.length > maxLength) throw new Error('Nilai ' + field + ' maksimal ' + maxLength + ' karakter.');
  return value;
}

function ensureSchoolProfileSheet_(spreadsheet) {
  let sheet = spreadsheet.getSheetByName('Profil Sekolah');
  if (!sheet) sheet = spreadsheet.insertSheet('Profil Sekolah');
  if (sheet.getLastRow() === 0) {
    const rows = [SCHOOL_PROFILE_HEADERS].concat(SCHOOL_PROFILE_DATA);
    sheet.getRange(1, 1, rows.length, SCHOOL_PROFILE_HEADERS.length)
      .setValues(rows.map(function (row) { return row.map(escapeSheetValue_); }));
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, SCHOOL_PROFILE_HEADERS.length)
      .setBackground('#174d36')
      .setFontColor('#ffffff')
      .setFontWeight('bold');
    sheet.setColumnWidth(1, 230);
    sheet.setColumnWidth(2, 420);
    sheet.setColumnWidth(3, 520);
    return;
  }
  const header = sheet.getRange(1, 1, 1, SCHOOL_PROFILE_HEADERS.length).getDisplayValues()[0];
  if (!SCHOOL_PROFILE_HEADERS.every(function (name, index) { return header[index] === name; })) {
    throw new Error('Header tab "Profil Sekolah" tidak sesuai. Periksa baris pertama sebelum menjalankan aplikasi.');
  }
}

function ensureArchiveSheet_(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(ARCHIVE_SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(ARCHIVE_SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, ARCHIVE_HEADERS.length).setValues([ARCHIVE_HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, ARCHIVE_HEADERS.length)
      .setBackground('#174d36')
      .setFontColor('#ffffff')
      .setFontWeight('bold');
    sheet.setColumnWidths(1, ARCHIVE_HEADERS.length, 170);
    sheet.setColumnWidth(1, 240);
    sheet.setColumnWidth(5, 280);
    return;
  }
  const header = sheet.getRange(1, 1, 1, ARCHIVE_HEADERS.length).getDisplayValues()[0];
  if (!ARCHIVE_HEADERS.every(function (name, index) { return header[index] === name; })) {
    throw new Error('Header tab "' + ARCHIVE_SHEET_NAME + '" tidak sesuai. Periksa baris pertama sebelum menggunakan Lemari Digital.');
  }
}

function ensureJournalSheet_(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(JOURNAL_SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(JOURNAL_SHEET_NAME);
  const headers = ['Nama', 'Tanggal', 'Kegiatan', 'Output', 'Keterangan'];
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, headers.length)
      .setBackground('#174d36')
      .setFontColor('#ffffff')
      .setFontWeight('bold');
    sheet.setColumnWidths(1, headers.length, 180);
    sheet.setColumnWidth(2, 140);
    sheet.setColumnWidth(3, 420);
    sheet.setColumnWidth(4, 300);
    sheet.setColumnWidth(5, 360);
    return;
  }

  if (sheet.getMaxColumns() < 5) {
    sheet.insertColumnsAfter(sheet.getMaxColumns(), 5 - sheet.getMaxColumns());
  }
  let currentHeader = sheet.getRange(1, 1, 1, 5).getDisplayValues()[0];
  const legacyHeadersMatch = headers.slice(0, 3).every(function (header, index) {
    return currentHeader[index] === header;
  });
  if (legacyHeadersMatch && (currentHeader[3] === 'Output Kegiatan' || !currentHeader[3])) {
    sheet.insertColumnBefore(4);
    sheet.getRange(1, 4, 1, 2).setValues([[headers[3], headers[4]]]);
    sheet.getRange(1, 4, 1, 2)
      .setBackground('#174d36')
      .setFontColor('#ffffff')
      .setFontWeight('bold');
    sheet.setColumnWidth(4, 300);
    sheet.setColumnWidth(5, 360);
    sheet.setFrozenRows(1);
    return;
  }
  currentHeader = sheet.getRange(1, 1, 1, 5).getDisplayValues()[0];
  if (!headers.every(function (header, index) { return currentHeader[index] === header; })) {
    throw new Error('Header tab "' + JOURNAL_SHEET_NAME + '" tidak sesuai. Periksa baris pertama sebelum menjalankan aplikasi.');
  }
}

function getJournalSheet_() {
  const spreadsheet = getDatabaseSpreadsheet_();
  ensureJournalSheet_(spreadsheet);
  return spreadsheet.getSheetByName(JOURNAL_SHEET_NAME);
}

function getArchiveSheet_() {
  const spreadsheet = getDatabaseSpreadsheet_();
  ensureArchiveSheet_(spreadsheet);
  return spreadsheet.getSheetByName(ARCHIVE_SHEET_NAME);
}

function getSchoolProfileSheet_() {
  const spreadsheet = getDatabaseSpreadsheet_();
  ensureSchoolProfileSheet_(spreadsheet);
  return spreadsheet.getSheetByName('Profil Sekolah');
}

function getReadySheet_(category) {
  const schema = getSchema_(category);
  const spreadsheet = getDatabaseSpreadsheet_();
  ensureDatabase_(spreadsheet);
  const sheet = spreadsheet.getSheetByName(category);
  const header = sheet.getRange(1, 1, 1, schema.length).getDisplayValues()[0];
  if (!schema.every(function (field, index) { return header[index] === field; })) {
    throw new Error('Struktur tab "' + category + '" berubah. Jalankan Siapkan database untuk memeriksa tab.');
  }
  return sheet;
}

function getDatabaseSpreadsheet_() {
  const properties = PropertiesService.getScriptProperties();
  const spreadsheetId = properties.getProperty('DATABASE_SPREADSHEET_ID');
  if (spreadsheetId) return SpreadsheetApp.openById(spreadsheetId);

  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!activeSpreadsheet) {
    throw new Error('Database belum disiapkan. Buka spreadsheet lalu pilih menu SMAN 1 ANGKINANG → Siapkan database.');
  }
  properties.setProperty('DATABASE_SPREADSHEET_ID', activeSpreadsheet.getId());
  return activeSpreadsheet;
}

function getSchema_(category) {
  if (!Object.prototype.hasOwnProperty.call(SCHEMAS, category)) {
    throw new Error('Kategori data tidak dikenal.');
  }
  return SCHEMAS[category];
}

function normalizeRecord_(schema, values) {
  if (!values || typeof values !== 'object' || Array.isArray(values)) {
    throw new Error('Data formulir tidak valid.');
  }
  return schema.map(function (field) {
    const value = values[field];
    return value === null || value === undefined ? '' : String(value).trim();
  });
}

function escapeSheetValue_(value) {
  const text = String(value || '');
  if (/^[=+@]/.test(text) || /^-[^0-9.\s]/.test(text)) return "'" + text;
  return text;
}

function normalizeHeader_(value) {
  return String(value || '')
    .replace(/^\uFEFF/, '')
    .trim()
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

function isValidIsoDate_(value) {
  const match = String(value || '').match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const date = new Date(Date.UTC(year, month - 1, day));
  return year > 0 && date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

function getLogoDataUri_(spreadsheet) {
  const folder = DriveApp.getFolderById(LOGO_FOLDER_ID);
  const files = folder.getFilesByName(LOGO_FILE_NAME);
  if (!files.hasNext()) return '';

  const blob = files.next().getBlob();
  return 'data:' + blob.getContentType() + ';base64,' +
    Utilities.base64Encode(blob.getBytes());
}

function savePhoto_(category, personName, dataUrl) {
  const match = String(dataUrl).match(/^data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/=]+)$/);
  if (!match) throw new Error('Foto harus berupa PNG, JPG, atau WebP yang valid.');
  const bytes = Utilities.base64Decode(match[2]);
  if (!bytes.length || bytes.length > MAX_PHOTO_BYTES) {
    throw new Error('Ukuran foto maksimal 2 MB.');
  }

  const spreadsheetFile = DriveApp.getFileById(getDatabaseSpreadsheet_().getId());
  const parents = spreadsheetFile.getParents();
  const parentFolder = parents.hasNext() ? parents.next() : DriveApp.getRootFolder();
  const rootFolder = getOrCreateFolder_(parentFolder, PHOTO_ROOT_FOLDER_NAME);
  const categoryFolderName = category === 'Tenaga Pendidik' ? 'Pegawai' : category;
  const categoryFolder = getOrCreateFolder_(rootFolder, categoryFolderName);
  const personFolder = getOrCreateFolder_(categoryFolder, sanitizeFolderName_(personName));
  const extension = match[1] === 'jpeg' ? 'jpg' : match[1];
  const photoBlob = Utilities.newBlob(bytes, 'image/' + match[1],
    'Foto ' + sanitizeFolderName_(personName) + ' ' + new Date().getTime() + '.' + extension);
  return personFolder.createFile(photoBlob).getId();
}

function getJournalOutputFolder_(personName) {
  const fileFolder = getOrCreateFolder_(getDatabaseParentFolder_(), PHOTO_ROOT_FOLDER_NAME);
  const journalFolder = getOrCreateFolder_(fileFolder, 'Jurnal Harian');
  return getOrCreateFolder_(journalFolder, sanitizeFolderName_(personName));
}

function getPhotoDataUri_(fileId) {
  const file = DriveApp.getFileById(String(fileId));
  const blob = file.getBlob();
  return 'data:' + blob.getContentType() + ';base64,' +
    Utilities.base64Encode(blob.getBytes());
}

function getOrCreateFolder_(parent, name) {
  const folders = parent.getFoldersByName(name);
  return folders.hasNext() ? folders.next() : parent.createFolder(name);
}

function getDatabaseParentFolder_() {
  const spreadsheetFile = DriveApp.getFileById(getDatabaseSpreadsheet_().getId());
  const parents = spreadsheetFile.getParents();
  return parents.hasNext() ? parents.next() : DriveApp.getRootFolder();
}

function sanitizeDriveFileName_(name) {
  const sanitized = String(name || '').replace(/[\\/:*?"<>|\u0000-\u001f\u007f]/g, '_').trim();
  if (!sanitized || sanitized === '.' || sanitized === '..') {
    throw new Error('Nama berkas tidak valid.');
  }
  return sanitized.substring(0, 200);
}

function sanitizeFolderName_(name) {
  const sanitized = String(name || '').replace(/[\\/:*?"<>|]/g, '_').trim();
  if (!sanitized) throw new Error('Nama folder foto tidak valid.');
  return sanitized.substring(0, 100);
}
