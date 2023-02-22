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
    const token = JSON.parse(localStorage.getItem('token'))

    const deleted = await fetch(`https://my-brand-o2aa.onrender.com/api/v1/messages/${id}`, {
        method:'DELETE',
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
      
    if(deleted.status == 200){
        // setTimeout(() => {
        //     const loader = document.querySelector(".center")
        //     loader.classList.remove('loader-hiden')
        //     loader.classList.add('loader-hiden')

        // }, 3500)
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



    // let post = JSON.parse(localStorage.getItem("Query"));
    // let index = post.findIndex(x => x.id ==id)
    // post.splice(index,1);
    // localStorage.setItem('Query', JSON.stringify(post));
    // window.location.reload();

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

 
   

