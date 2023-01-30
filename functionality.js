const buttonBr = document.querySelector('.bars')
const buttonT = document.querySelector('.times')
const sideB = document.querySelector('.aside')
const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const telInput = document.querySelector('.tel')
const textareaInput = document.querySelector('.textarea')
const contactForm = document.querySelector('.contact-form')

// the side bar

buttonBr.addEventListener('click', () => action('open'))
buttonT.addEventListener('click', () => action('close'))

const action = (navCondition) => {
  if (navCondition === 'open') {
    sideB.classList.add('show-nav')
    buttonT.style.display = 'block'
    buttonBr.style.display = 'none'
  } else if (navCondition === 'close') {
    sideB.classList.remove('show-nav')
    buttonT.style.display = 'none'
    buttonBr.style.display = 'block'
  }
}

//contact validation

contactForm.addEventListener('submit', (evt) => {
  evt.preventDefault()
  validateInput()
})

const validateInput = () => {
  let email = emailInput.value
  let textarea = textareaInput.value
  if (!email && !textarea) {
    setError(emailInput.parentElement)
    setError(textareaInput.parentElement)
    showMessage('Please fill in the Email and Message')
    return false;
  } else if (!email && textarea) {
    setError(emailInput.parentElement)
    showMessage("Please fill the Email box")
    return false;
  } else if (!textarea && email) {
    setError(textareaInput.parentElement)
    showMessage('Please Enter a message')
    return false;
  } else if(textarea.length<15){
    setError(textareaInput.parentElement)
    showMessage('Please Enter a  clear message')
    return false;
    
  }
  else if (email && textarea) {
   
    setSuccess(emailInput.parentElement)
    setSuccess(textareaInput.parentElement)
    showMessage('Message sent to Author', '#08fdd8')
    
    if(localStorage.getItem('Query')== null){
     
      localStorage.setItem('Query' ,'[]') 

    }
    var query = JSON.parse(localStorage.getItem('Query'));
    query.push({'name':nameInput.value ,'tel':telInput.value , 'email':emailInput.value , 'Message':textareaInput.value , 'id':query.length + 1});
    localStorage.setItem('Query' , JSON.stringify(query));
    textareaInput.value = ''
    emailInput.value = ''
    nameInput.value = ''
    telInput.value = ''
  }
  
}

const setError = (input) => {
  if (input.classList.contains('success')) {
    input.classList.remove('success')
  } else {
    input.classList.add('error')
  }
}


//success pop-up

const setSuccess = (input) => {
  if (input.classList.contains('error')) {
    input.classList.remove('error')
  } else {
    input.classList.add('success')
  }
}

const messageDiv = document.querySelector('.message')
const showMessage = (message, updateColor) => {
  const divContent = document.createElement('div')
  divContent.textContent = message
  divContent.classList.add('message-content')
  divContent.style.backgroundColor = updateColor
  messageDiv.prepend(divContent)

  messageDiv.style.transform = `translate(${(0, 0)}%)`
  setTimeout(() => {
    divContent.classList.add('hide')
    divContent.addEventListener('transitionend', () => {
      divContent.remove()
    })
  }, 5000)
}













