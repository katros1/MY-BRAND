const buttonBr = document.querySelector('.bars')
const buttonT = document.querySelector('.times')
const sideB = document.querySelector('.aside')
const nameInput = document.querySelector('.name')
const emailInput = document.querySelector('.email')
const subjectInput = document.querySelector('.subject')
const textareaInput = document.querySelector('.textarea')
const contactForm = document.querySelector('.contact-form')


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
    textareaInput.value = ''
    emailInput.value = ''
    nameInput.value = ''
    subjectInput.value = ''
  }
  
}

const setError = (input) => {
  if (input.classList.contains('success')) {
    input.classList.remove('success')
  } else {
    input.classList.add('error')
  }
}
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



/* create blog */


const aboutInput =document.getElementById('name')
const titleInput = document.getElementById('subject')
const formInput = document.getElementById('contact-form')

formInput.addEventListener('submit' , (e) => {
    e.preventDefault();
    validate();
  });


  function validate() {
    let title = titleInput.value.trim();
    if(!title){
     ErrorM(titleInput, 'Please enter the blog title')

    }else if(title.length<10){
      ErrorM(titleInput , 'short title')
    }else if(text ===''){
        
    }
  }
function ErrorM(input , message){
    const blogform = input.parentElement;
    const content = blogform.querySelector('small')
    content.innerText = message;
    blogform.className = "blogForm eror"

}
$('contact-form').on('submit', function (e) {
  if ($('editor_selector').froalaEditor('core.isEmpty')) {
    e.preventDefault();

    ErrorM(textInput, 'Please enter the blog title') // Display error message.

    return false;
  }
});
