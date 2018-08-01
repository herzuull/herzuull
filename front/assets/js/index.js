document.addEventListener('DOMContentLoaded', function() {
  console.log('loaded')
  Array.from(document.querySelectorAll('img')).forEach(img => {
    img.addEventListener('click', displayOverlay.bind(img), false)
  })
  document.body.style['overflow-x'] = 'hidden'
})

function displayOverlay(event) {
  if (!document.querySelector('overlayImage')) {
    const imageWrapper = document.createElement('div')
    imageWrapper.classList.add('overlay')
    const position = window.scrollY + window.innerHeight * 0.1
    const imageHeight = window.innerHeight - window.innerHeight * 0.1 * 2
    imageWrapper.setAttribute('style', `top: ${position}px; height: ${imageHeight}px`)
    const close = document.createElement('div')
    close.classList.add('closeButton')
    imageWrapper.appendChild(close)
    const image = document.createElement('img')
    image.setAttribute('src', this.getAttribute('src'))
    image.classList.add('overlayImage')
    image.setAttribute('style', `height: ${imageHeight}px`)
    document.querySelector('body').appendChild(imageWrapper)
    imageWrapper.appendChild(image)
    image.addEventListener('click', hiddeOverlay.bind(imageWrapper), false)
    imageWrapper.addEventListener('click', hiddeOverlay.bind(imageWrapper), false)
    document.querySelector('.main').classList.add('blur')
  }
}

function hiddeOverlay(event) {
  document.querySelector('.main').classList.remove('blur')
  document.querySelector('body').removeChild(this)
}
