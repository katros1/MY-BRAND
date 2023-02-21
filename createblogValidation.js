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


// validation of createBlog page


const aboutInput =document.getElementById('name')
const titleInput = document.getElementById('subject')
const formInput = document.getElementById('contact-form')
const textfrla = document.getElementById('froala-editor')
const uploadButton = document.querySelector('.contact-button2')
const imgInput = document.getElementById('photo')

imgInput.addEventListener('change', (event) => {
    const img = event.target.files[0];
    
    const reader = new FileReader();

    reader.readAsDataURL(img);

    reader.addEventListener('load', () => {
        localStorage.setItem('photo', reader.result);
    });

   
});

formInput.addEventListener('submit' , async (e) => {
    e.preventDefault();
    

    // const img = e.target.files[0]
    const formData = new FormData();

    formData.append('title', titleInput.value)
    formData.append('content', textfrla.value)
    formData.append('Image', imgInput.files[0])

    try {
      const result = await fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs', {
        method: "POST",
        headers: {
          Authorization :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW91ciBuYW1lIiwiVXNlck5hbWUiOiJjaG9vc2UgcGFzc3dvcmQiLCJ1c2VySWQiOiI2M2ViZDNhNmU0N2MzODE0YjQ2NDU4MzQiLCJpYXQiOjE2NzY1NjQ2ODV9.oJiGp7X6JyUAKyDZ0pAcE7hbU7ne3SOTq_AI0QsE8vc'
        },
        body: formData,
        })
         
        
      
      const data = await result.json();
      
      console.log(data);
      validate();
    }
    
    catch (error) {
    console.log(error);
    }
    
  });


  function validate() {
    let title = titleInput.value.trim();
    let text = textfrla.value.trim();
    if(!title){
     ErrorM(titleInput, 'Please enter the blog title')

    }else if(title.length<10){
      ErrorM(titleInput , 'short title')
    }else if(!text){
      ErrorM(textfrla, 'Please enter the blog body')
    }else if(text.length < 10){
      ErrorM(textfrla , 'short content')
    } 
    else {
       

      titleInput.value = ''
       imgInput.value = ''
       editor.html.set('')


      uploadButton.addEventListener('click' , function upload(e){         //storing blog info
   

        if(localStorage.getItem('blogs') == null){
           
          localStorage.setItem('blogs' , '[]');
         
        }
        // var retriveImage = localStorage.getItem('photo');
        // var myBlogs = JSON.parse(localStorage.getItem('blogs'));
        // myBlogs.push({title:titleInput.value, body:textfrla.value, image: retriveImage, id: myBlogs.length +1});



        // imgInput.addEventListener('change', async(event) => {  

        //   const img = event.target.files[0]
        //   const formData = new FormData();

        //   formData.append('title', titleInput.value)
        //   formData.append('content', textfrla.value)
        //   formData.append('Image', img)
   
        //  const result =  await fetch('http://localhost:8000/api/v1/blogs', { 
        
        //   method: "POST",
        //   headers:{
        //    Authorization :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW91ciBuYW1lIiwiVXNlck5hbWUiOiJjaG9vc2UgcGFzc3dvcmQiLCJ1c2VySWQiOiI2M2ViZDNhNmU0N2MzODE0YjQ2NDU4MzQiLCJpYXQiOjE2NzY1NjQ2ODV9.oJiGp7X6JyUAKyDZ0pAcE7hbU7ne3SOTq_AI0QsE8vc'},
          
   
        //   body: formData,
           
        //  })


        //  const data = result.json();
        //  console.log(data)

        // //  .then(res => res.json())
        // //  .then(data => console.log(data))
        // //  .catch(err => console.log(err))

        // })
          
       





        // localStorage.setItem('blogs' ,JSON.stringify(myBlogs));
       
  
  })
    }
  }

//error message
  
function ErrorM(input , message){
    const blogform = input.parentElement;
    const content = blogform.querySelector('small')
    content.innerText = message;
    blogform.className = "blogForm eror"

}