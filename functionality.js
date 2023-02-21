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


fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs')
.then(res => {
    return res.json();
})
.then(data => {
      let datas = data.Blogs
    console.log(datas)
    const recentBlogs = document.querySelector('.blog-articles')

    if(datas.length > 12 ){
      for(let blog = (datas.length - 1); blog > datas.length/2; blog--){
    

        let post = `<article class="post-articles" style="border-top: 2px solid#81D8F7">
    <div class="post-content">
        <time class="post-date" style="color:#81D8F7;"> ${datas[blog].title}</time>
        <div class="blog-post-title">
            <h5>
                <a data-id="2354" href="singleBlogView.html?id=${datas[blog]._id}">
                    ${datas[blog].title}		
                </a>
            </h5>
        </div>
        <div class="blog-post-content">
          <img src = "${datas[blog].Image}">     
        </div>
    </div>
    </article>`
       
    recentBlogs.innerHTML += post; 
    
    
    }
    } else{
    for(let blog = (datas.length - 1); blog >= 0 ; blog--){
    

    let post = `<article class="post-articles" style="border-top: 2px solid#81D8F7">
<div class="post-content">
    <time class="post-date" style="color:#81D8F7;"> ${datas[blog].title}</time>
    <div class="blog-post-title">
        <h5>
            <a data-id="2354" href="singleBlogView.html?id=${datas[blog]._id}">
                ${datas[blog].title}		
            </a>
        </h5>
    </div>
    <div class="blog-post-content">
      <img src = "${datas[blog].Image}">     
    </div>
</div>
</article>`
   
recentBlogs.innerHTML += post; 


}}})
    







//contact validation

contactForm.addEventListener('submit', async (evt) => {
  evt.preventDefault()
  validateInputs()
  try {
    const result = await fetch('https://my-brand-o2aa.onrender.com/api/v1/messages', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
                        name: nameInput.value,
                        email: emailInput.value,
                        message: textareaInput.value
      })
       
      
    })
    const data = await result.json();
    
    console.log(data);
    // window.location = 'loginPage.html';
    // alert("The account created successfully")

    textareaInput.value = ''
    emailInput.value = ''
    nameInput.value = ''
    telInput.value = ''
  }
  
  catch (error) {
  console.log(error);
  }

})




const validateInputs = () => {
  let email = emailInput.value
  let textarea = textareaInput.value
  if (!email && !textarea) {
    setErr(emailInput.parentElement)
    setErr(textareaInput.parentElement)
    showMessages('Please fill in the Email and Message')
    return false;
  } else if (!email && textarea) {
    setErr(emailInput.parentElement)
    showMessages("Please fill the Email box")
    return false;
  } else if (!textarea && email) {
    setErr(textareaInput.parentElement)
    showMessages('Please Enter a message')
    return false;
  } else if(textarea.length<3){
    setErr(textareaInput.parentElement)
    showMessages('Please Enter a  clear message')
    return false;
    
  }
  else if (email && textarea) {
   
    setSucces(emailInput.parentElement)
    setSucces(textareaInput.parentElement)
    showMessages('Message sent to Author', '#08fdd8')
    
    // if(localStorage.getItem('Query')== null){
     
    //   localStorage.setItem('Query' ,'[]') 

    // }
    // var query = JSON.parse(localStorage.getItem('Query'));
    // query.push({'name':nameInput.value ,'tel':telInput.value , 'email':emailInput.value , 'Message':textareaInput.value , 'id':query.length + 1});
    // localStorage.setItem('Query' , JSON.stringify(query));
    
  }
  
}

const setErr = (input) => {
  if (input.classList.contains('success')) {
    input.classList.remove('success')
  } else {
    input.classList.add('error')
  }
}


//success pop-up

const setSucces = (input) => {
  if (input.classList.contains('error')) {
    input.classList.remove('error')
  } else {
    input.classList.add('success')
  }
}

const messagDiv = document.querySelector('.message')
const showMessages = (message, updateColor) => {
  const divContent = document.createElement('div')
  divContent.textContent = message
  divContent.classList.add('message-content')
  divContent.style.backgroundColor = updateColor
  messagDiv.prepend(divContent)

  messagDiv.style.transform = `translate(${(0, 0)}%)`
  setTimeout(() => {
    divContent.classList.add('hide')
    divContent.addEventListener('transitionend', () => {
      divContent.remove()
    })
  }, 5000)
}













