const blogSection = document.querySelector('.blog-articles');
var blogs = JSON.parse(localStorage.getItem('blogs'));

window.addEventListener("load", ()=>{
    const loader = document.querySelector(".center")
    loader.classList.add("loader-hiden")
    loader.addEventListener("transitionend", () =>{
    document.body.removeChild("center");
    })
 })
function postBlogs(){

    fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs')
    .then(res => {
        return res.json();
    })
    .then(data => {
          let datas = data.Blogs
        console.log(datas)
        datas.forEach(blog => {
        

        let post = `<article class="post-articles" style="border-top: 2px solid#81D8F7">
    <div class="post-content">
        <time class="post-date" style="color:#81D8F7;"> ${blog.title}</time>
        <div class="blog-post-title">
            <h5>
                <a data-id="2354" href="singleBlogView.html?id=${blog._id}">
                    ${blog.title}		
                </a>
            </h5>
        </div>
        <div class="blog-post-content">
          <img src = "${blog.Image}">     
        </div>
    </div>
</article>`
       
blogSection.innerHTML += post; 
   

    })
        
    })

//     for(i=0 ; i < blogs.length ; i++){
       

//         let post = `<article class="post-articles" style="border-top: 2px solid#81D8F7">
//     <div class="post-content">
//         <time class="post-date" style="color:#81D8F7;"> ${blogs[i].title}</time>
//         <div class="blog-post-title">
//             <h5>
//                 <a data-id="2354" href="singleBlogView.html?id=${blogs[i].id}">
//                     ${blogs[i].title}		
//                 </a>
//             </h5>
//         </div>
//         <div class="blog-post-content">
//           <img src = "${blogs[i].image}">     
//         </div>
//     </div>
// </article>`
       
// blogSection.innerHTML += post; 
   

//     }

   
    
}