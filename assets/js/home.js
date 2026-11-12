(function () {
  var root = document.documentElement;
  document.getElementById('theme').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
  var box = document.getElementById('lightbox'), big = box.querySelector('img');
  document.querySelectorAll('img.zoomable').forEach(function (img) {
    img.addEventListener('click', function () { big.src = img.src; box.hidden = false; });
  });
  box.addEventListener('click', function () { box.hidden = true; });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') box.hidden = true; });
})();
