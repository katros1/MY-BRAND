const queryForm = document.querySelector('.dashform')
const deleteQuery = document.getElementById('QueryButton2')

 function displayQuery(){

    var queries = JSON.parse(localStorage.getItem('Query'));

    for(i=0 ; i <queries.length ; i++){

        
        let display = `<div class="Queryform" id="Queryform">
    <section class="Qtopsection" id="Qtopsection"> <div class="qname">${queries[i].name} </div>
         <div class="tel">  
            ${queries[i].tel}
        </div>
        <div class="Email">
            ${queries[i].email}
        </div>

        <div class="qButton2">
        <a href = "mailto: ${queries[i].email}">    <button class="QueryButton1">
                       contact Author
            </button></a>
                    <button class="QueryButton2" id="QueryButton2" onclick=" deleteItem (${queries[i].id})">
                        Delete Query
                    </button>
        </div>
    </section>
    <p>${queries[i].Message}</p>
        
   </div> <hr>`

   queryForm.innerHTML += display;

   

    }
   
   

 }


