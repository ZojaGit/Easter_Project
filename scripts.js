console.log('hello world');

const buttonElement = document.getElementsByTagName('button')

buttonElement[0].onclick = function () {
  console.log('button was clicked')
}