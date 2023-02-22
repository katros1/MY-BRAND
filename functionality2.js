const usernameInput = document.getElementById('inputBox1');
const passwordInput = document.getElementById('inputBox2');
const formInput = document.getElementById('form');  

/* comment section   */


const textInput = document.getElementById('textAreaBlog2');
const emailInput = document.getElementById('inputBox2');
const frmInput = document.getElementById('contactBlog2');  
const loader = document.querySelector(".center")
loader.classList.add("loader-hiden")
formInput.addEventListener('submit' , async (e) => {
  e.preventDefault();
  validateInputlogin();
  loader.classList.remove("loader-hiden")

  try {
    const result = await fetch('https://my-brand-o2aa.onrender.com/api/v1/auth/login', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        UserName: usernameInput.value,
        Password: passwordInput.value
      })
       
      
    })
    const data = await result.json();
    console.log(result)

    userToken = data.token
    localStorage.setItem('token', JSON.stringify(userToken))
    console.log(data.token);

    window.addEventListener("load", ()=>{
      
      loader.classList.add("loader-hiden")
      loader.addEventListener("transitionend", () =>{
      document.body.removeChild("center");
      })
   })
  if(result.status == 200){
    window.location = 'dashboard.html';
  }else{
    alert('Unauthorized User!!!!!!!!', result.status)
  }
    
  
  }
  
  catch (error) {
  console.log(error);
  }
});

function validateInputlogin() {
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();
    if(!username && !password){
      setErrorF( usernameInput , 'Please fill the Username box');
      setErrorF( passwordInput , 'Please fill the Password box');
    } else if(username.length<2){
      setErrorF(usernameInput , 'Invalid Username');
    }
    else if(!password && username){
      setErrorF(passwordInput , 'Please fill the Password box');

    }else if(password.length<6){
      setErrorF(passwordInput , 'Invalid Password');
            
             
    }
   }
    // else{

    //   var savInfo = JSON.parse(localStorage.getItem('autho'))
    //   for(i=0; i<savInfo.length; i++){
    //     if(savInfo[i].username == username && savInfo[i].password != password){
    //       setErrorF(passwordInput , 'Invalid Password');
    //     } 
        
    //     else if(savInfo[i].username == username && savInfo[i].password == password){

    //       if(localStorage.getItem('auth_status') == null){
    //         localStorage.setItem('auth_status', '[]')
    //       }
    //       var savdInfo = JSON.parse(localStorage.getItem('auth_status'))
    //       savdInfo.push({'username':username, 'password': password})
    //       localStorage.setItem('autho', JSON.stringify(savdInfo))
          
    //       window.location = 'dashboard.html';
    //       break;
    
    //   } 

    // }
              
    //         }
    //       }
      
 function setErrorF(input, message){
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small');
  small.innerText=message;
  formcontrol.className = "formControl check";
 }



