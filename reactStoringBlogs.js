function App (){

    const [post, setposts] = React.useState([]);
       
     React.useEffect(() => {
    
        fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
              let datas = data.Blogs
    
              setposts(datas)
            console.log(datas)
    
        //     datas.forEach(blog => {
    
        // })
            
        })
        
     },[])
    
     console.log(post)
    //  const [deleteBlg, setdelete] = React.useState([]);
    //  React.useEffect(() => {
    //     const token = JSON.parse(localStorage.getItem('token'))
    //     function deleteBlog(id){
    //     fetch(`https://my-brand-o2aa.onrender.com/api/v1/blogs/${id}`, {
    //     method:'DELETE',
    //     headers:{
    //         Authorization: `Bearer ${token}`
    //     }
    // })
    //     .then(res => {
    //         return res.json();
    //     })
    // }

    //  setdelete(deleteBlog);
        
    //  },[])
    
     return (
      
        post.map((posts) =>{
            
            let id = posts._id
            const link = () =>{
                window.location.href= `EditTheBlog.html?id=${id}`
            }
          let blogId = `${id}`
            async function deleteItem(){
                //console.log(id, "to be deleted");
            //    let post = JSON.parse(localStorage.getItem("blogs"));
            //     let index = post.findIndex(x => x.id ==id)
            //     post.splice(index,1);
            //     localStorage.setItem('blogs', JSON.stringify(post));

            const token = JSON.parse(localStorage.getItem('token'))
                const deleted = await fetch(`https://my-brand-o2aa.onrender.com/api/v1/blogs/${blogId}`, {
                    method:'DELETE',
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                  
                if(deleted.status == 200){
                    window.location.reload();
                //     window.addEventListener("load", ()=>{
                //         const loader = document.querySelector(".center")
                //         loader.classList.add("loader-hiden")
                //         loader.addEventListener("transitionend", () =>{
                //         document.body.removeChild("center");
                //         })
                //      })
                      
                // }else {
                //     console.error();
                // }

            }
        }

    return (
        
    <React.Fragment>
        <div className="Mblogform" id="Mblogform">
        <p className="nameBlog" id="nameBlog">{posts.title}</p>
        <div className="bDate">05 Feb 2022</div> 
        <div className="bLikes"><i className="fa-solid fa-thumbs-up"></i>{posts.blogLikes.length}Likes</div>
            <div className="bButton">
            <button className="mblogButton1" onClick={link}>
                           Edit Blog
                </button>
                        <button className="mblogButton2" onClick={deleteItem}>
                            Delete Blog
                        </button>
            </div>
         
            
       </div> <hr/>

       </React.Fragment>
            )
    
                })
             
     )
    
    }
    
    ReactDOM.render(<App />, document.querySelector('.dashform'))
    