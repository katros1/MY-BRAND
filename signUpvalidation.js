const nameInput = document.querySelector('.inputBoxs1');
const usernameInput = document.querySelector('.inputBoxs2');
const passwordInput = document.querySelector('.inputBoxs3');
const confirmInput = document.querySelector('.inputBoxs4');
const frmInput = document.querySelector('.formSignup');  
  


frmInput.addEventListener('submit' , (e) => {
  e.preventDefault();
  validateInputlogin();
});

function validateInputlogin() {
    
    let password = passwordInput.value.trim();
    let username = usernameInput.value.trim();
    let confirm = confirmInput.value.trim();
    let name = nameInput.value.trim()
    if(!username && !password && !name && !confirm){
      setErrorF( usernameInput , 'Please fill the Username box');
      setErrorF( passwordInput , 'Please fill the Password box');
      setErrorF( nameInput , 'Please fill the Name box');
      setErrorF( confirmInput , 'Please fill the Confirm Password box');
    }else if(username.length<2){
        setErrorF(usernameInput , 'Short Username');
      }
    
    else if(!username && !password && name && !confirm){
        setSuccess(nameInput);
        setErrorF( usernameInput , 'Please fill the Username box');
        setErrorF( passwordInput , 'Please fill the Password box');
        setErrorF( confirmInput , 'Please fill the Confirm Password box');
    } else if(username && !password && name && !confirm){
        setSuccess(nameInput);
        setSuccess(usernameInput);
        setErrorF( passwordInput , 'Please fill the Password box');
        setErrorF( confirmInput , 'Please fill the Confirm Password box');
    }else if(username && password && name && !confirm){
        setSuccess(usernameInput);
        setSuccess(nameInput);
        setSuccess(passwordInput);
        setErrorF( confirmInput , 'Please fill the Confirm Password box');
    } else if(!username){
        setErrorF( usernameInput , 'Please fill the Username box');
    }else if(!name){
        setErrorF( nameInput , 'Please fill the Name box');
    }else if(!password){
        setErrorF( passwordInput , 'Please fill the Password box');   

    } else if(password.length<6){
        setErrorF(passwordInput , 'Password should be 6 charaters or more');
              
               
      }
    else if(!confirm){
        setErrorF( confirmInput , 'Please fill the Confirm Password box'); 
        
    } else if(password != confirm){
        setSuccess(usernameInput);
        setSuccess(nameInput);
        setSuccess(passwordInput);
        setErrorF( confirmInput , 'The corfirmation password is not the same as the password'); 
    }

      else{
        alert("The account created successfully")
      if(localStorage.getItem('autho') == null){
        localStorage.setItem('autho', '[]')
      }
      var savInfo = JSON.parse(localStorage.getItem('autho'))
      savInfo.push({'name': name, 'username':username, 'password': password})
      localStorage.setItem('autho', JSON.stringify(savInfo))

       window.location = 'loginPage.html';
       alert("The account created successfully")

  }
  }
 function setErrorF(input, message){
  const frmcontrol = input.parentElement;
  const small = frmcontrol.querySelector('small');
  small.innerText=message;
  frmcontrol.className = "formcontrol check";
 }
 function setSuccess(input, message){
    const frmcontrol = input.parentElement;
    frmcontrol.className = "formcontrol succes";
   }

