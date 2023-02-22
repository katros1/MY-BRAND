const textInput = document.getElementById('textAreaBlog2');
const emailInput = document.getElementById('inputrectBlog2');
const frmInput = document.getElementById('contactBlog2'); 
const nameInput = document.getElementById('inputrectBlog1');
const commentDis = document.querySelector('.commentDisplay')





fetch('https://my-brand-o2aa.onrender.com/api/v1/comments')
.then(res => {
  return res.json();
})
.then(data => {
    let datas = data.Comment
  console.log(datas)

  let params = (new URL(document.location)).searchParams;
    let name = params.get('id')
  datas.forEach(comment => {

    if(comment.blogId == name){

      let post = `<div class="CQueryfrm"><section class="topsection"> <div class="qname">Name: ${comment.name}</div></section><p>${comment.comment}</p></div>`
 
      commentDis.innerHTML += post; 
      
    }
  
 
  


})
  
})

frmInput.addEventListener('submit' , async (e) => {
    e.preventDefault();

    let params = (new URL(document.location)).searchParams;
    let name = params.get('id')

    try {
      const result = await fetch(`https://my-brand-o2aa.onrender.com/api/v1/blogs/${name}/comments`, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          name: nameInput.value,
          email: emailInput.value,
          comment: textInput.value
        })
         
        
      })
      const data = await result.json();
      
      console.log(data);
      alert("'comment sent to Author. Thank you!'")
      window.location.reload()
    }
    
    catch (error) {
    console.log(error);
    }
    validateInputcmmt();
  });
  
   function  validateInputcmmt() {
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
      // setSuccess(textInput.parentElement , 'comment sent to Author. Thank you!')
      storeComment(); 
      emailInput.value = ''
      textInput.value = ''
      nameInput.value = ''
     
  }
    
}

async function storeComment(){
  if(localStorage.getItem('comment') == null){

    localStorage.setItem('comment' , '[]')
    
  }

  var comments = JSON.parse(localStorage.getItem('comment'))
  comments.push({'name': nameInput.value, 'email': emailInput.value, 'comment': textInput.value, 'id': comments.length+1});
  localStorage.setItem('comment' , JSON.stringify(comments));

//   let usrInfo = {
//     name: nameInput.value,
//     email: emailInput.value,
//     comment: textInput.value
//   }

//   console.log(usrInfo)

//   const option ={
//     method: "POST",
//     header: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(usrInfo)
//   }
//   let params = (new URL(document.location)).searchParams;
//   let name = params.get('id')

// console.log(name)
// const pushComment = await fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs/'+name+'/comments', option)
   
// const data = await pushComment.json();

// if(pushComment.status == 200) {


// }
// else { 

// }

// .then(data => {
//   if (!data.ok) {
//     throw Error(data.status);
//    }
//    return data.json();
//   }).then(usrInfo => {
//   console.log(usrInfo);

// })
// .then(usrInfo => console.log(usrInfo))
// }catch(error){alert(Error)}



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
  