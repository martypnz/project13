//document.querySelector('h1')
//document.querySelector('#heading')
//document.querySelector('.header')
//document.querySelector('h1.header')

//document.querySelector("[type='text']")

const h1= document.querySelector('h1')
h1.style.color='red'
h1.style.FontSize='4em'
h1.style.textAlign='center'

const myForm = document.querySelector('form')
myForm.setAttribute('id','form')
myForm.setAttribute('class','my-random-class')

const body=document.querySelector('body')

//h1.classList.remove('heading')

const h2= document.createElement('h2')
//const body= document.body;
h2.innerHTML='you just created this in javascript'
h2.classList.add('subheading')
document.body.appendChild(h2)


const FormButton =document.querySelector('[type="submit"]')
FormButton.style.setProperty('background-color','red')