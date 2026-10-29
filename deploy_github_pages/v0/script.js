const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') setTheme('dark');

themeButton.addEventListener('click', () => {
  setTheme(document.body.classList.contains('dark') ? 'light' : 'dark');
});

function setTheme(theme) {
  const dark = theme === 'dark';
  document.body.classList.toggle('dark', dark);
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`);
  localStorage.setItem('portfolio-theme', theme);
}

document.querySelectorAll('.details-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const details = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    details.hidden = expanded;
    button.innerHTML = `${expanded ? 'Read' : 'Hide'} contribution details <span aria-hidden="true">${expanded ? '+' : '−'}</span>`;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
