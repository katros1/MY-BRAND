const blogSection = document.querySelector('.blog-articles');
var blogs = JSON.parse(localStorage.getItem('blogs'));
 
function postBlogs(){

    for(i=0 ; i < blogs.length ; i++){
       

        let post = `<article class="post-articles" style="border-top: 2px solid#81D8F7">
    <div class="post-content">
        <time class="post-date" style="color:#81D8F7;"> ${blogs[i].title}</time>
        <div class="blog-post-title">
            <h5>
                <a data-id="2354" href="singleBlogView.html?id=${blogs[i].id}">
                    ${blogs[i].title}		
                </a>
            </h5>
        </div>
        <div class="blog-post-content">
          <img src = "${blogs[i].image}">     
        </div>
    </div>
</article>`
       
blogSection.innerHTML += post; 
   

    }

   
    
}