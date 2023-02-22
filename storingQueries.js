const queryForm = document.querySelector('.dashform')
const deleteQuery = document.getElementById('QueryButton2')


const logoutButtn = document.getElementById('Logout1')

logoutButtn.addEventListener('click', ()=>{
    localStorage.setItem('token', '')
})

     function displayQuery(){

    var queries = JSON.parse(localStorage.getItem('Query'));
    const token = JSON.parse(localStorage.getItem('token'))
    console.log(token)

  fetch('https://my-brand-o2aa.onrender.com/api/v1/messages', {
        headers:{ 
        Authorization :`Bearer ${token}`}})



    .then((response) => response.json())
    .then((data) => {
        
        let datas = data.Queries
        console.log(datas)
        datas.forEach(queries => {

            let display = `<div class="Queryform" id="Queryform">
    <section class="Qtopsection" id="Qtopsection"> <div class="qname">Name: ${queries.name} </div>
        
        <div class="email">
           Email: ${queries.email}
        </div>

        <div class="qButton2">
        <a href = "mailto: ${queries.email}">    <button class="QueryButton1">
                       contact Author
            </button></a>
                    <button class="QueryButton2" id="QueryButton2" onclick=" deleteItem ('${queries._id}')">
                        Delete Query
                    </button>
        </div>
    </section>
    <p>${queries.message}</p>
        
   </div> <hr>`

   queryForm.innerHTML += display;

        })
        
        
        console.log(data)})

        const loader = document.querySelector(".center")
        loader.classList.add("loader-hiden");

//  window.addEventListener("load", ()=>{
//     const loader = document.querySelector(".center")
//     loader.classList.add("loader-hiden")
//     loader.addEventListener("transitioned", () =>{
//     document.body.removeChild("center");
//     })
//  })

//     for(i=0 ; i <queries.length ; i++){

        
//         let display = `<div class="Queryform" id="Queryform">
//     <section class="Qtopsection" id="Qtopsection"> <div class="qname">${queries[i].name} </div>
//          <div class="tel">  
//             ${queries[i].tel}
//         </div>
//         <div class="Email">
//             ${queries[i].email}
//         </div>

//         <div class="qButton2">
//         <a href = "mailto: ${queries[i].email}">    <button class="QueryButton1">
//                        contact Author
//             </button></a>
//                     <button class="QueryButton2" id="QueryButton2" onclick=" deleteItem (${queries[i].id})">
//                         Delete Query
//                     </button>
//         </div>
//     </section>
//     <p>${queries[i].Message}</p>
        
//    </div> <hr>`

//    queryForm.innerHTML += display;

   

//     }
   
   

 }


