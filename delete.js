function deleteItem (id){
    //console.log(id, "to be deleted");
   let post = JSON.parse(localStorage.getItem("blogs"));
    let index = post.findIndex(x => x.id ==id)
    post.splice(index,1);
    localStorage.setItem('blogs', JSON.stringify(post));
    window.location.reload();
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