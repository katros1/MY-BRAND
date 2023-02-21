const queryForm = document.querySelector('.dashform')
const deleteQuery = document.getElementById('QueryButton2')

     function displayQuery(){

    var queries = JSON.parse(localStorage.getItem('Query'));


  fetch('https://my-brand-o2aa.onrender.com/api/v1/messages', {
        headers:{ 
        Authorization :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW91ciBuYW1lIiwiVXNlck5hbWUiOiJjaG9vc2UgcGFzc3dvcmQiLCJ1c2VySWQiOiI2M2ViZDNhNmU0N2MzODE0YjQ2NDU4MzQiLCJpYXQiOjE2NzY1NjQ2ODV9.oJiGp7X6JyUAKyDZ0pAcE7hbU7ne3SOTq_AI0QsE8vc'}})



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


