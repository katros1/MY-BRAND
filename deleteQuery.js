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

 function deleteItem (id){
    //console.log(id, "to be deleted");
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

 
   

