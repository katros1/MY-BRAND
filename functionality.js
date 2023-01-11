const btnBars = document.querySelector('.bars')
const btnTimes = document.querySelector('.times')
const SideNav = document.querySelector('.aside')

btnBars.addEventListener('click', () => myFunc('open'))
btnTimes.addEventListener('click', () => myFunc('close'))

const myFunc = (navCondition) => {
  if (navCondition === 'open') {
    SideNav.classList.add('show-nav')
    btnTimes.style.display = 'block'
    btnBars.style.display = 'none'
  } else if (navCondition === 'close') {
    SideNav.classList.remove('show-nav')
    btnTimes.style.display = 'none'
    btnBars.style.display = 'block'
  }
}