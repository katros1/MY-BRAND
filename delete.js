async function deleteItem(id){
    //console.log(id, "to be deleted");
//    let post = JSON.parse(localStorage.getItem("blogs"));
//     let index = post.findIndex(x => x.id ==id)
//     post.splice(index,1);
//     localStorage.setItem('blogs', JSON.stringify(post));

    const deleted = await fetch(`https://my-brand-o2aa.onrender.com/api/v1/blogs/${id}`, {
        method:'DELETE',
        headers:{
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW91ciBuYW1lIiwiVXNlck5hbWUiOiJjaG9vc2UgcGFzc3dvcmQiLCJ1c2VySWQiOiI2M2ViZDNhNmU0N2MzODE0YjQ2NDU4MzQiLCJpYXQiOjE2NzY1NjQ2ODV9.oJiGp7X6JyUAKyDZ0pAcE7hbU7ne3SOTq_AI0QsE8vc'
        }
    })
      
    if(deleted.status == 200){
        window.location.reload(); 
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