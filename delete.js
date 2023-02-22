async function deleteItem(id){
    //console.log(id, "to be deleted");
//    let post = JSON.parse(localStorage.getItem("blogs"));
//     let index = post.findIndex(x => x.id ==id)
//     post.splice(index,1);
//     localStorage.setItem('blogs', JSON.stringify(post));
const token = JSON.parse(localStorage.getItem('token'))
    const deleted = await fetch(`https://my-brand-o2aa.onrender.com/api/v1/blogs/${id}`, {
        method:'DELETE',
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
      
    if(deleted.status == 200){
        window.location.reload();
        window.addEventListener("load", ()=>{
            const loader = document.querySelector(".center")
            loader.classList.add("loader-hiden")
            loader.addEventListener("transitionend", () =>{
            document.body.removeChild("center");
            })
         })
          
    }else {
        console.error();
    }
   



    // .then(res => res.json()) 
    // .then(res => console.log('id'))
    // .catch(err => console.log(err))
   


}


/*function GFG_click() {
    var  Mblgform =
    document.getElementById("Mblogform");
    Mblgform.parentNode.removeChild(Mblgform);
    
    const myBlog = JSON.parse(localStorage.getItem('blogs'));

    const nameBlg =document.querySelectorAll('.nameBlog')
    
    for(x=0 ; x<nameBlg.length ; x++){
   let  Blgname = nameBlg[x].innerHTML;

      newBlogList =[...myBlog]; 
    for(i=0 ; i < myBlog.length ; i++){

        if(myBlog[i].title === Blgname){
           newBlogList.splice(i , 1);
            localStorage.setItem('blogs' , JSON.stringify(newBlogList));
            

        }
    }
}
}*/