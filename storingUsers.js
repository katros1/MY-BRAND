const dashform = document.querySelector('.Udashform');
const Uname = document.querySelector('.Usrfrom1')
const Uemail = document.querySelector('.Usrform3')
const refreshBttn = document.querySelector('.refresh')
const deleteBttn  = document.querySelector('mblogButton2')

function update(){
    var usr = JSON.parse(localStorage.getItem('comment'))
    for(x=0 ; x < usr.length ; x++){
     
        let nme = usr[x].name;
        let eml = usr[x].email;
        

   
       let displayedMssg = `<div class="Userfrm" id ="Userfrm"><div class="Usrfrom1">${nme}</div> 
       <div class="Usrform2"></div>
       <div class="Usrform3">${eml}

       </div>
       <div class="Usrform4"><i class="fa-solid fa-newspaper"></i>${ usr[x].id} Article</div>
       <div class="buButton1">
       <a href = "mailto: ${eml}">  <button class="mblogButton1">
                              Contact User
                   </button></a>
                           <button class="mblogButton2" onclick="deleteItem (${usr[x].id})">
                               Delete User
                           </button>
               </div></div><hr>
`;
        
       dashform.innerHTML += displayedMssg;
        
        }
    }
   
   

   deleteBttn.addEventListener("click" , function(e){
    e.preventDefault
   })