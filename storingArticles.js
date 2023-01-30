const mBlogFrm = document.querySelector('.dashform')
const nameBlog = document.querySelector('.nameBlog')
const refreshBttn = document.querySelector('.refresh')
const blogArticle = document.querySelector('.blog-article')
const deleteBttn = document.querySelector('.mblogButton2')



var infoBlog = JSON.parse(localStorage.getItem('blogs'))

function updateBlogs(){

        for(let n = 0 ; n < infoBlog.length ; n++){

            let name = infoBlog[n].title;

            let displayedMssg = `<div class="Mblogform" id="Mblogform">
            <p class="nameBlog" id="nameBlog">${name}</p>
            <div class="bDate">05 Feb 2022</div> <div class="bViews"> <i class="fa-solid fa-eye"></i> 5viewers</div>
            <div class="bLikes"><i class="fa-regular fa-heart"></i>5Likes</div>

                <div class="bButton">
                    <button class="mblogButton1" onclick="editBlog()">
                               Edit Blog
                    </button>
                            <button class="mblogButton2" onclick="deleteItem (${infoBlog[n].id})">
                                Delete Blog
                            </button>
                </div>
             
                
           </div> <hr>`;
     
            mBlogFrm.innerHTML += displayedMssg;
            
           
        }
        
    }

    function deleteBlog(){
     let blogDiv =mblogButton2.parentNode.parentNode
     
    let blogName = blogDiv.querySelector('.nameBlog').innerText;

    for(i=0 ; i < infoBlog.length ; i++ ){

        if(blogName === infoBlog[i].title){
            blogDiv.remove(); 
            infoBlog.splice(i , 1);
            localStorage.setItem('blogs' , JSON.stringify(infoBlog));
        }
    }
    } 
















 