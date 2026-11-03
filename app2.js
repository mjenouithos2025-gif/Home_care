(function () {
  'use strict';
  var r = document.getElementById('temp'), o = document.getElementById('temp-out'), s = document.getElementById('status');
  var b = document.getElementById('led-blue'), g = document.getElementById('led-green'), d = document.getElementById('led-red');
  if (!r || !o || !s || !b || !g || !d) return;
  var MIN = 18, MAX = 25;
  function update() {
    var t = Number(r.value);
    o.textContent = t;
    b.classList.toggle('on', t < MIN);
    g.classList.toggle('on', t >= MIN && t <= MAX);
    d.classList.toggle('on', t > MAX);
    s.textContent = t < MIN ? 'Massa freda: LED blau.' : t > MAX ? 'Massa calenta: LED vermell.' : 'Dins del rang: LED verd.';
  }
  r.addEventListener('input', update);
  update();
})();
