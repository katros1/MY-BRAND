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
const textfrla = document.getElementById('edit')
const uploadButton = document.querySelector('.contact-button2')
const imgInput = document.getElementById('photo')

window.addEventListener("load", ()=>{
  const loader = document.querySelector(".center")
  loader.classList.add("loader-hiden")
  loader.addEventListener("transitionend", () =>{
  document.body.removeChild("center");
  })
})

// imgInput.addEventListener('change', (event) => {
//     const img = event.target.files[0];
    
//     const reader = new FileReader();

//     reader.readAsDataURL(img);

//     reader.addEventListener('load', () => {
//         localStorage.setItem('photo', reader.result);
//     });

   
// });
  


let params = (new URL(document.location)).searchParams;
    let name = params.get('id')

fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs')
.then(res => {
    return res.json();
})
.then(data => {
      let datas = data.Blogs
    console.log(datas)

    datas.forEach(blog => {
    if(name == blog._id){
      titleInput.value = blog.title
      editor.html.set(blog.content)
      imgInput.value = blog.Image
    }

    })
        
  })



//let myBlog=JSON.parse(localStorage.getItem('blogs'));


formInput.addEventListener('submit' ,async (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('token'));
    try {
      const result = await fetch(`https://my-brand-o2aa.onrender.com/api/v1/blogs/${name}`, {
        method: "PATCH",
        headers: {
          "Content-Type" : "application/json",
          Authorization :`Bearer ${token}`
        },
        body: JSON.stringify({
          title: titleInput.value,
          content: textfrla.value,
          Image: imgInput.value
        }),
        })
         
        
      
      const data = await result.json();
      
      console.log(data);
      validate();
      alert(data.message)
    }
    
    catch (error) {
    console.log(error);
    }

    // validate();

    
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
    }else if(text.length < 5){
      ErrorM(textfrla , 'short content')
    } 
    else {

      titleInput.value = ''
       editor.html.set('')
       imgInput.value = ''

      uploadButton.addEventListener('click' , function upload(e){         //storing blog info
   

        if(localStorage.getItem('blogs') == null){
           
          localStorage.setItem('blogs' , '[]');
  
        }
        // var retriveImage = localStorage.getItem('photo');
        // var myBlogs = JSON.parse(localStorage.getItem('blogs'));
        // myBlogs.push({'title':titleInput.value, 'body':textfrla.value, 'image': retriveImage  });
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