const aboutInput =document.getElementById('name')
const titleInput = document.getElementById('subject')
const textInput = document.getElementById('froala')
const formInput = document.getElementById('contact-form')

formInput.addEventListener('submit' , (evt) => {
    evt.preventDefault();
    validateInput();
  });

  function validateInput() {
    let title = titleInput.value.trim();
    let text = textInput.value;
    if(!title){
     ErrorM(titleInput, 'Please enter the blog title')

    }else if(title.length<10){
      ErrorM(titleInput , 'short title')
    }else if(text ===''){
        ErrorM(textInput, 'Please enter the blog title')
    }
  }
function ErrorM(input , message){
    const blogform = input.parentElement;
    const content = blogform.querySelector('small')
    content.innerText = message;
    blogform.className = "blogForm eror"
}
