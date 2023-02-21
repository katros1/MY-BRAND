const namInput = document.querySelector('.name')
const emlInput = document.querySelector('.email')
const telpInput = document.querySelector('.tel')
const textInput = document.querySelector('.textarea')
const contctForm = document.querySelector('.contact-form')
const buttonBr = document.querySelector('.bars')
const buttonT = document.querySelector('.times')
const sideB = document.querySelector('.aside')


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






contctForm.addEventListener('submit', async (evt) => {
    evt.preventDefault()
    validateInput()
    try {
      const result = await fetch('https://my-brand-o2aa.onrender.com/api/v1/messages', {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name: namInput.value,
          email: emlInput.value,
          message: textInput.value
        })
         
        
      })
      const data = await result.json();
      
      console.log(data);
      // window.location = 'loginPage.html';
      // alert("The account created successfully")

      textInput.value = ''
      emlInput.value = ''
      namInput.value = ''
      telpInput.value = ''

    }
    
    catch (error) {
    console.log(error);
    }
  
  })
  
  const validateInput = () => {
    let email = emlInput.value
    let textarea = textInput.value
    if (!email && !textarea) {
      setError(emlInput.parentElement)
      setError(textInput.parentElement)
      showMessage('Please fill in the Email and Message')
      return false;
    } else if (!email && textarea) {
      setError(emlInput.parentElement)
      showMessage("Please fill the Email box")
      return false;
    } else if (!textarea && email) {
      setError(textInput.parentElement)
      showMessage('Please Enter a message')
      return false;
    } else if(textarea.length<3){
      setError(textInput.parentElement)
      showMessage('Please Enter a  clear message')
      return false;
      
    }
    else if (email && textarea) {
     
      setSuccess(emlInput.parentElement)
      setSuccess(textInput.parentElement)
      showMessage('Message sent to Author', '#08fdd8')
      
      // if(localStorage.getItem('Query')== null){
       
      //   localStorage.setItem('Query' ,'[]') 
  
      // }
      // var query = JSON.parse(localStorage.getItem('Query'));
      // query.push({'name':namInput.value ,'tel':telpInput.value , 'email':emlInput.value , 'Message':textInput.value , 'id':query.length + 1});
      // localStorage.setItem('Query' , JSON.stringify(query));
      
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