const startBtn = document.getElementById('start')
const grid = document.getElementById('grid')
const btns = document.getElementsByTagName('button')
const buttons = []
let index = 0
let gridSize = 0
class Button {
  constructor() {
    this.id = index
    this.isBomb = false
    index++
  }
}
startBtn.addEventListener('click', function () {
  gridSize = Number(prompt('Enter Size :'))
  for (let i = 0; i < gridSize * gridSize; i++) {
    let btn = new Button()
    if (Math.floor(Math.random() * 100) > 60) btn.isBomb = true
    buttons.push(btn)
  }
  startBtn.style.display = 'none'
  renderGame(buttons)
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e) {
      if (e.target.classList.contains('bomb')) {
        alert('bomb!')
        e.target.innerHTML = `<img width="100%" style="background:transparent;" src="https://previews.123rf.com/images/bestvectorstock/bestvectorstock1808/bestvectorstock180813027/107234109-bomb-vector-icon-isolated-on-transparent-background.jpg"/>`
        e.target.style.backgroundColor = 'red'
      } else {
        e.target.style.backgroundColor = 'blue'
      }
    })
  }
})
function renderGame(array) {
  array = array.sort(() => Math.random() - 0.5)
  let innerHTML = ''
  for (let i = 0; i < array.length; i++) {
    innerHTML += `<button class="${
      array[i].isBomb == true ? 'bomb' : ''
    }"></button>`
  }
  grid.style.width = `${Math.sqrt(array.length) * 50}px`
  grid.innerHTML = innerHTML
}
