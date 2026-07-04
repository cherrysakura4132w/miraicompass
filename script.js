// フッターの年号を自動更新
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // スクロールで要素をふわっと表示
  const targets = document.querySelectorAll('.section, .hero');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    targets.forEach((el) => {
      el.classList.add('fade-init');
      io.observe(el);
    });
  }

  // アコーディオン（details）は1グループ内で1つだけ開く（6ヶ月ロードマップ）
  const flowItems = document.querySelectorAll('.flow-list .flow-item');
  flowItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        flowItems.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});
