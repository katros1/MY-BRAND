 const Cname = document.querySelector('.qname') 
 const Cemail = document.querySelector('.Email')
 const Ctext = document.querySelector('.commet')
 const refreshBttn = document.querySelector('.refresh')
const dashform = document.querySelector('.Cdashform')
 

 function update(){
 
 var mssg = JSON.parse(localStorage.getItem('comment'))


for(x=0 ; x < mssg.length ; x++){
     
   let nme = mssg[x].name;
   let eml = mssg[x].email;
   let cText = mssg[x].comment;

 if( Ctext != cText ){

    let displayedMssg = `<div class="CQueryform"><section class="topsection"> <div class="qname">${nme}</div><div class="tel"></div><div class="Email">${eml}</div><div class="qButton2"><a href = "mailto: ${eml}"><button class="QueryButton3">Reply</button></a></div></section><p class="commet">${cText}</p></div> <hr>`;
     
    dashform.innerHTML += displayedMssg;
     
     }


}

}
 

 


