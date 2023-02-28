
// let params = (new URL(document.location)).searchParams;
//     let name = params.get('id')

//     function setLike(){
//       const Like = document.querySelector('.Likes');
//       Like.className = "Likes Like";
//      }
//      function removeLike(){
//       const Like = document.querySelector('.Likes');
//       Like.className = "Likes ";
//      }

     window.addEventListener("load", ()=>{
      const loader = document.querySelector(".center")
      loader.classList.add("loader-hiden")
      loader.addEventListener("transitionend", () =>{
      document.body.removeChild("center");
      })
   })
    

//  function blogPost(){
//     // let blog = JSON.parse(localStorage.getItem('blogs'))

//   //   fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs/:id')
//   //   .then(res => {
//   //     return res.json();
//   //    })
//   //    .then(data => {
//   //     let datas = data.Blogs

//   // })

//     fetch(`https://my-brand-o2aa.onrender.com/api/v1/blogs/${name}`)
//     .then(res => {
//       return res.json();
//      })
//     .then(data => {
//       let datas = data.Blogs
//       console.log(datas)
//       let blogArticle = document.querySelector('.blog-article')
//       let blogDiv = document.createElement('div')

//       blogDisplay = `<h1>${datas.title}</h1>
//         <img src="${datas.Image}">
//       <p>${datas.content}</p>  <div class="Likes"><i class="fa-solid fa-thumbs-up"></i>${datas.blogLikes.length} Like <i class="fa-solid fa-comment"></i>  ${datas.blogComments
//         .length} Comments</div>`;
//       // blogDiv.innerHTML = `<h1>${datas.title}</h1>
//       //   <img src="${datas.Image}">
//       // <p>${datas.content}</p>`;

//       blogArticle.innerHTML += blogDisplay;

//       const likes = document.querySelector('.Likes')

//       likes.addEventListener('click', async (e) => {
         
//          try{ 
//           if(likes.className == 'Likes'){
//             setLike()
//           } else{
//             removeLike()
//           }
          
//           const responce= await fetch(`https://my-brand-o2aa.onrender.com/api/v1/blogs/${name}/likes`,{
//             method: 'POST',
//             headers: {
//               Authorization :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW91ciBuYW1lIiwiVXNlck5hbWUiOiJjaG9vc2UgcGFzc3dvcmQiLCJ1c2VySWQiOiI2M2ViZDNhNmU0N2MzODE0YjQ2NDU4MzQiLCJpYXQiOjE2NzY1NjQ2ODV9.oJiGp7X6JyUAKyDZ0pAcE7hbU7ne3SOTq_AI0QsE8vc'
//             }
//           })
        
//           const res = await responce.json();
//           console.log(res)
//           window.location.reload();

        
//         }
//         catch(error){
//           console.log(error)
//         }
        
//       })
    
//      })
    
     
//       // let myBlog = blog.find(x => x.id == name);
//       // let blogArticle = document.querySelector('.blog-article')
//       // let blogDiv = document.createElement('div')
//       // blogDiv.innerHTML = `<h1>${myBlog.title}</h1>
//       //   <img src="${myBlog.image}">
//       // <p>${myBlog.body}</p>`;

//       // blogArticle.appendChild(blogDiv)

//       /* function findBlog(item){
//         for(i=0 ; i<blog.length ; i++){
//         return item.title === blog[i].title;
//        break;
//       }
      
//     }*/
     
   
    
//  }

// //  blogPost();