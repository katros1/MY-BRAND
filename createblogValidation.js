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

formInput.addEventListener('submit' , (e) => {
    e.preventDefault();
    validate();

    
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
    }else if(text.length < 100){
      ErrorM(textfrla , 'short content')
    } 
    else {

      uploadButton.addEventListener('click' , function upload(e){         //storing blog info
   

        if(localStorage.getItem('blogs') == null){
           
          localStorage.setItem('blogs' , '[]');
         
        }
        var retriveImage = localStorage.getItem('photo');
        var myBlogs = JSON.parse(localStorage.getItem('blogs'));
        myBlogs.push({title:titleInput.value, body:textfrla.value, image: retriveImage, id: myBlogs.length +1});

        localStorage.setItem('blogs' ,JSON.stringify(myBlogs));
       titleInput.value = ''
       imgInput.value = ''
       editor.html.set('')
  
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