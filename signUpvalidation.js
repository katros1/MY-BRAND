// const nameInput = document.getElementById('name').value;
// const usernameInput = document.getElementById('uname').value;
// const passwordInput = document.getElementById('pass').value;

const frmInput = document.getElementById('formSignup');  


frmInput.addEventListener('submit' , async (e) => {
  e.preventDefault();
const nameInput = document.getElementById('name').value;
const usernameInput = document.getElementById('uname').value;
const passwordInput = document.getElementById('pass').value;
const confirmInput = document.getElementById('Confirm').value;
validateInputlogin();
try {
  const result = await fetch('https://my-brand-o2aa.onrender.com/api/v1/auth/signUp', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      name:nameInput,
      UserName: usernameInput,
      Password: passwordInput
    })
     
    
  })
  const data = await result.json();
  
  console.log(data);
  window.location = 'loginPage.html';
  alert("The account created successfully")
}

catch (error) {
console.log(error);
}
  
});

function validateInputlogin() {
  const nameInput = document.getElementById('name');
const usernameInput = document.getElementById('uname');
const passwordInput = document.getElementById('pass');
const confirmInput = document.getElementById('Confirm');
    
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
        // alert("The account created successfully")
      if(localStorage.getItem('autho') == null){
        localStorage.setItem('autho', '[]')
      }}


      // var savInfo = JSON.parse(localStorage.getItem('autho'))
      // savInfo.push({'name': name, 'username':username, 'password': password})
      // localStorage.setItem('autho', JSON.stringify(savInfo))

      // let usrInfo = {
      //   name: nameInput,
      //   UserName: usernameInput,
      //   Password: passwordInput
      // }

      // console.log(usrInfo)

      // const option ={
      //   method: "POST",
      //   header: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(usrInfo)
      // }
        

// async function createAcc(){
// const account = await fetch('http://localhost:8000/api/v1/auth/signUp', {
//   method: "POST",
//   header: {
//     "Content-Type": "application/json"
//   },
//   // body: JSON.stringify({
//   //   name: nameInput.value,
//   //   UserName: usernameInput.value,
//   //   Password: passwordInput.value
//   // })
// })
// // .then(data => {console.log(usrInfo)})
// // .then(usrInfo => console.log(usrInfo))
// console.log(account)
// if(account.status == 201){
//   window.location = 'loginPage.html';
//   alert("The account created successfully")
// }else{
//   console.error();
// }


//   }

  // createAcc()
  }


// }


 function setErrorF(input, message){
  const frmcontrol = input.parentElement;
  const small = frmcontrol.querySelector('small')
  small.innerText=message;
  frmcontrol.className = "formcontrol chick";
 }
 function setSuccess(input, message){
    const frmcontrol = input.parentElement;
    frmcontrol.className = "formcontrol succes";
   }

