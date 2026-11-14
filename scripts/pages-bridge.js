(function () {
  var apiUrl = window.APP_GAS_API_URL;
  var requestSequence = 0;
  var pendingRequests = new Map();
  var requestTimeoutMs = 360000;

  function finishRequest(id, response) {
    var pending = pendingRequests.get(id);
    if (!pending) return;

    pendingRequests.delete(id);
    window.clearTimeout(pending.timeout);
    pending.form.remove();
    pending.frame.remove();

    if (response.ok) {
      if (typeof pending.success === 'function') pending.success(response.result);
    } else if (typeof pending.failure === 'function') {
      pending.failure(new Error(response.error || 'Permintaan ke server gagal.'));
    }
  }

  window.addEventListener('message', function (event) {
    var response = event.data;
    if (!response || typeof response.id !== 'string') return;
    finishRequest(response.id, response);
  });

  function createRunner(success, failure) {
    return new Proxy({}, {
      get: function (target, property) {
        if (property === 'withSuccessHandler') {
          return function (handler) { return createRunner(handler, failure); };
        }
        if (property === 'withFailureHandler') {
          return function (handler) { return createRunner(success, handler); };
        }
        if (property === 'then') return undefined;
        if (typeof property !== 'string') return undefined;

        return function () {
          if (!apiUrl) {
            if (typeof failure === 'function') {
              failure(new Error('URL backend Apps Script belum dikonfigurasi untuk GitHub Pages.'));
            }
            return;
          }

          var id = Date.now().toString(36) + '-' +
            (++requestSequence).toString(36) + '-' +
            Math.random().toString(36).slice(2);
          var frameName = 'gas-api-' + id;
          var frame = document.createElement('iframe');
          frame.name = frameName;
          frame.title = 'Koneksi backend';
          frame.hidden = true;

          var form = document.createElement('form');
          form.method = 'post';
          form.action = apiUrl;
          form.target = frameName;
          form.hidden = true;

          var payload = document.createElement('input');
          payload.type = 'hidden';
          payload.name = 'payload';
          payload.value = JSON.stringify({
            id: id,
            method: property,
            args: Array.prototype.slice.call(arguments)
          });
          form.appendChild(payload);
          document.body.appendChild(frame);
          document.body.appendChild(form);

          var timeout = window.setTimeout(function () {
            finishRequest(id, {
              ok: false,
              error: 'Backend tidak merespons. Periksa URL dan deployment Apps Script.'
            });
          }, requestTimeoutMs);
          pendingRequests.set(id, {
            success: success,
            failure: failure,
            frame: frame,
            form: form,
            timeout: timeout
          });

          try {
            form.submit();
          } catch (error) {
            finishRequest(id, {
              ok: false,
              error: error && error.message ? error.message : String(error)
            });
          }
        };
      }
    });
  }

  window.google = {
    script: {
      run: createRunner()
    }
  };
})();
