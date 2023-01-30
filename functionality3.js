const textInput = document.getElementById('textAreaBlog2');
const emailInput = document.getElementById('inputrectBlog2');
const frmInput = document.getElementById('contactBlog2'); 
const nameInput = document.getElementById('inputrectBlog1');


frmInput.addEventListener('submit' , (e) => {
    e.preventDefault();
    validateInputcmmt();
  });
  
   function validateInputcmmt() {
    let email = emailInput.value.trim();
    let text = textInput.value.trim();
    if(!email && !text){
      setErrorLn( emailInput , 'Please fill the Email box');
      setErrorLc(textInput , 'Please fill the Comment box');
    } else if(!text && email){
      setErrorLc(textInput , 'Please fill the comment box');
  
    }else if(text.length<4){
      setErrorLc(textInput , 'Please write a clear comment');
            
             
    } else{
      setSuccess(textInput.parentElement , 'comment sent to Author. Thank you!')
      storeComment(); 
      emailInput.value = ''
      textInput.value = ''
     
  }
    
}

function storeComment(){
  if(localStorage.getItem('comment') == null){

    localStorage.setItem('comment' , '[]')
    
  }

  var comments = JSON.parse(localStorage.getItem('comment'))
  comments.push({'name': nameInput.value, 'email': emailInput.value, 'comment': textInput.value, 'id': comments.length+1});
  localStorage.setItem('comment' , JSON.stringify(comments));

}

  
  function setErrorLn(input, message){
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  small.innerText = message;
  formcontrol.className = "formControl2 error";
  }
   function setErrorLc(input , message){
    const formcontrol = input.parentElement;
    const textError =formcontrol.querySelector('.txtError')
    textError.innerText = message;
    formcontrol.className = "formControl2 error";
   }

   function setSuccess(input , message){

    const formcontrol = input.parentElement;
    const textError =formcontrol.querySelector('.sentMessage')
    textError.innerText = message;
    formcontrol.className = "formControl2 succes";

    setTimeout(() => {
        textError.classList.add('hide')
        textError.addEventListener('transitionend', () => {
          textError.remove()
        })
      }, 5000)

   }
  