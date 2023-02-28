const buttonBr = document.querySelector('.bars')
const buttonT = document.querySelector('.times')
const sideB = document.querySelector('.aside')
const mBlogFrm = document.querySelector('.dashform')
const nameBlog = document.querySelector('.nameBlog')
const refreshBttn = document.querySelector('.refresh')
const blogArticle = document.querySelector('.blog-article')
const deleteBttn = document.querySelector('.mblogButton2')

const logoutButtn = document.getElementById('Logout1')



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



logoutButtn.addEventListener('click', ()=>{
    localStorage.setItem('token', '')
})

window.addEventListener("load", ()=>{
    const loader = document.querySelector(".center")
    loader.classList.add("loader-hiden")
    loader.addEventListener("transitionend", () =>{
    document.body.removeChild("center");
    })
 })





// var infoBlog = JSON.parse(localStorage.getItem('blogs'))

// function updateBlogs(){
//     const loader = document.querySelector(".center")
//     loader.classList.add("loader-hiden");
    
//     fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs')
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//           let datas = data.Blogs
//           let likes = data.likes
//         console.log(data)
//         datas.forEach(infoBlog => {


//             let name = infoBlog.title;
//             let likes = infoBlog.blogLikes


//             let displayedMssg = `<div class="Mblogform" id="Mblogform">
//             <p class="nameBlog" id="nameBlog">${name}</p>
//             <div class="bDate">05 Feb 2022</div> 
//             <div class="bLikes"><i class="fa-solid fa-thumbs-up"></i> ${likes.length}Likes</div>
//                 <div class="bButton">
//                 <a data-id="2354" href="EditTheBlog.html?id=${infoBlog._id}"><button class="mblogButton1">
//                                Edit Blog
//                     </button></a>
//                             <button class="mblogButton2" onclick="deleteItem ('${infoBlog._id}')">
//                                 Delete Blog
//                             </button>
//                 </div>
             
                
//            </div> <hr>`;
     
//             mBlogFrm.innerHTML += displayedMssg;
//         })


            
            
           
//         })
    
    
    

    //     for(let n = 0 ; n < infoBlog.length ; n++){

    //         let name = infoBlog[n].title;

    //         let displayedMssg = `<div class="Mblogform" id="Mblogform">
    //         <p class="nameBlog" id="nameBlog">${name}</p>
    //         <div class="bDate">05 Feb 2022</div> <div class="bViews"> <i class="fa-solid fa-eye"></i> 5viewers</div>
    //         <div class="bLikes"><i class="fa-regular fa-heart"></i>5Likes</div>

    //             <div class="bButton">
    //                 <button class="mblogButton1" onclick="editBlog()">
    //                            Edit Blog
    //                 </button>
    //                         <button class="mblogButton2" onclick="deleteItem (${infoBlog[n].id})">
    //                             Delete Blog
    //                         </button>
    //             </div>
             
                
    //        </div> <hr>`;
     
    //         mBlogFrm.innerHTML += displayedMssg;
            
           
    //     }
        
    // }

    // function deleteBlog(){
    //  let blogDiv =mblogButton2.parentNode.parentNode
     
    // let blogName = blogDiv.querySelector('.nameBlog').innerText;

    // for(i=0 ; i < infoBlog.length ; i++ ){

    //     if(blogName === infoBlog[i].title){
    //         blogDiv.remove(); 
    //         infoBlog.splice(i , 1);
    //         localStorage.setItem('blogs' , JSON.stringify(infoBlog));
    //     }
    // }
    // } 
















 