async function deleteItem (id){
    //console.log(id, "to be deleted");

    const deleted = await fetch(`https://my-brand-o2aa.onrender.com/api/v1/comments/${id}`, {
        method:'DELETE'
    })
      
    if(deleted.status == 200){
        window.location.reload(); 
    }else {
        console.error();
    }




    let post = JSON.parse(localStorage.getItem("blogs"));
    let index = post.findIndex(x => x.id ==id)
    post.splice(index,1);
    localStorage.setItem('comment', JSON.stringify(post));
    window.location.reload();
}
















/*function GFG_click() {
    var  usrform =
    document.getElementById("Userfrm");
    usrform.parentNode.removeChild(usrform);
    
    const myBlog = JSON.parse(localStorage.getItem('comment'));
    const nmBlg = document.querySelectorAll('.Usrfrom1');

    for(x=0 ; x<nmBlg.length ; x++){
      let  nameBlg = nmBlg[x].innerHTML;

    for(i=0 ; i < myBlog.length ; i++){

        if(myBlog[i].title==nameBlg){
            myBlog.splice(i)
            localStorage.setItem('comment' , JSON.stringify(myBlog));
           

        }
    }}
}*/