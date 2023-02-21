/*const deleteBtn =document.getElementById('Queryform');
console.log(deleteBtn)
 /*deleteBtn.forEach(dltfunc)
   
 deleteBtn.addEventListener('click' , function dltfunct(){
    const prnt = deleteBtn.closest('div.Queryform')
    prnt.remove();
});*/



 /*function dltfunc(dlt){
    dlt.addEventListener('click' , function dltfunct(i){
        const prnt = dlt.closest('div.Queryform')
        prnt.remove();
    });
   
 }*/

 async function deleteItem (id){
    //console.log(id, "to be deleted");

    const deleted = await fetch(`https://my-brand-o2aa.onrender.com/api/v1/messages/${id}`, {
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



    let post = JSON.parse(localStorage.getItem("Query"));
    let index = post.findIndex(x => x.id ==id)
    post.splice(index,1);
    localStorage.setItem('Query', JSON.stringify(post));
    window.location.reload();
}
















function GFG_click() {
    var  Qryform =
    document.getElementById("Qtopsection");
    Qryform.parentNode.remove();
    
    const myQueries = JSON.parse(localStorage.getItem('Query'));
    const nmQry = document.querySelector('.qname');
    let queryName = nmQry.innerHTML;
    for(i=0 ; i < myQueries.length ; i++){

        if(myQueries[i].name == queryName){
            myQueries.splice(i, 1);
            localStorage.setItem('Query' , JSON.stringify(myQueries));
            

        }
    }}

 
   

