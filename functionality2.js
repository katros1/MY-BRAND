const usernameInput = document.getElementById('inputBox1');
const passwordInput = document.getElementById('inputBox2');
const formInput = document.getElementById('form');  

/* comment section   */


const textInput = document.getElementById('textAreaBlog2');
const emailInput = document.getElementById('inputBox2');
const frmInput = document.getElementById('contactBlog2');  


formInput.addEventListener('submit' , (e) => {
  e.preventDefault();
  validateInputlogin();
});

function validateInputlogin() {
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();
    if(!username && !password){
      setErrorF( usernameInput , 'Please fill the Username box');
      setErrorF( passwordInput , 'Please fill the Password box');
    } else if(username.length<4){
      setErrorF(usernameInput , 'Invalid Username');
    }
    else if(!password && username){
      setErrorF(passwordInput , 'Please fill the Password box');

    }else if(password.length<6){
      setErrorF(passwordInput , 'Invalid Password');
            
             
    } else{
  window.location = 'dashboard.html';

  }
  }
 function setErrorF(input, message){
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  small.innerText=message;
  formcontrol.className = "formControl check";
 }



