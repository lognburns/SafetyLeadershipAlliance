// ── ACTIVE NAV ──
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page) a.classList.add('active');
  });
})();

// ── DONATE AMOUNT SELECTOR ──
document.querySelectorAll('.donate-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    document.querySelectorAll('.donate-opt').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    const custom = document.getElementById('custom-amount');
    if (custom) custom.value = opt.dataset.amount || '';
  });
});
