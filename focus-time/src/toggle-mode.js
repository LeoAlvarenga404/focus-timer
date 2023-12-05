let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) => {
  event.currentTarget.querySelector('span').textContent = 'Light mode ativado '
  document.querySelector('html').classList.toggle('light')
})