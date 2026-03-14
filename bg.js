function createStar(starNum) {
  for (let i = 0; i < starNum; i++) {
    let star = document.createElement('div')
    document.getElementById('star-bg').appendChild(star)
    star.classList.add('star')
  }
}
function setStarPosition() {
  let stars = document.getElementsByClassName('star')
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.left = Math.random() * window.innerWidth + 'px'
    stars[i].style.top = Math.random() * window.innerHeight + 'px'
    stars[i].style.animationDelay = Math.random() * 10 + 's'
  }
}
function clone() {
  let second = document.getElementById('star-bg').cloneNode(true)
  second.style.left = '50%'
  document.querySelector('.total-bg').appendChild(second)
}
var prevMusic
function playAudio() {
  hold = 0
  let musicAudio = document.querySelector('audio')
  musicAudio.load()
  musicAudio.play()
  musicAudio.onended = function () {
    musicAudio.play()
    // showLiuyan()
  }
}
function stop() {
  let anjing = document.querySelector('.anjing')
  if (anjing.innerText == '暂停') {
    prevMusic && prevMusic.pause()
    anjing.innerText = '播放'
  } else if (anjing.innerText == '播放') {
    prevMusic && prevMusic.play()
    anjing.innerText = '暂停'
  } else {
    shutDailog()
  }
}
function shutDailog() {
  hold = 0
  let dailog = document.querySelector('.dailog')
  prevMusic && prevMusic.pause()
  dailog.style.display = 'none'
}
function showLiuyan() {
  let liuyan = document.createElement('div')
  liuyan.classList.add('liuyan')
  liuyan.style.width = '100px'
  document.body.appendChild(liuyan)
  let p = []
  for (let i = 0; i < 4; i++) {
    let current = document.createElement('p')
    liuyan.appendChild(current)
    p.push(current)
  }
  p[0].innerText = '一直开心^_^'
  p[1].innerText = '一直安康^_^'
  p[2].innerText = '一直幸福^_^'
  p[3].innerText = '真的喜欢呜呜呜~~~'
  for (let i = 0; i < 4; i++) {
    p[i].style.animation = `zhuhang 2s linear ${i * 2}s forwards`
  }
}

function isMobileDevice() {
  if(document.documentElement.clientWidth <= 768) {
    return true
  }
  return false
}
var isMobile = isMobileDevice()
function init() {
  const moonDom = document.getElementById('moon')
  const wrapDom = document.getElementById('wrap')
  const textDom = document.getElementById('love-text')
  if (isMobile) {
    moonDom.className = 'm-moon'
    wrapDom.className = 'm-wrap'
    textDom.className = 'text m-text'
  }else{
    moonDom.className = 'p-moon'
    wrapDom.className = 'p-wrap'
    textDom.className = 'text p-text'
  }
}
init()
createStar(100)
setStarPosition()
clone()
