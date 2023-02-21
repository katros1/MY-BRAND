 const Cname = document.querySelector('.qname') 
 const Cemail = document.querySelector('.Email')
 const Ctext = document.querySelector('.commet')
 const refreshBttn = document.querySelector('.refresh')
const dashform = document.querySelector('.Cdashform')
 

 function update(){
 
//  var mssg = JSON.parse(localStorage.getItem('comment'))

 fetch('https://my-brand-o2aa.onrender.com/api/v1/comments')
    .then(res => {
        return res.json();
    })
    .then(data => {
          let datas = data.Comment
        console.log(datas)
      
        datas.forEach(mssg => {
          let nme = mssg.name;
         let eml = mssg.email;
         let cText = mssg.comment;

          fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs')
          .then(res => {
              return res.json();
          })
          .then(dt => {
            let dts = dt.Blogs
            dts.forEach(infoBlog => {

              if(infoBlog._id == mssg.blogId){
                
                let displayedMssg = `<div class="CQueryform"><section class="topsection"> <div class="qname">Name: ${nme}</div><div class="tel">Article: ${infoBlog.title}</div><div class="Email">Email: ${eml}</div><div class="qButton2"><a href = "mailto: ${eml}"><button class="QueryButton3">Reply</button></a></div></section><p class="commet">${cText}</p></div> <hr>`;
           
                dashform.innerHTML += displayedMssg

              }
            })

          })


        //  let nme = mssg.name;
        //  let eml = mssg.email;
        //  let cText = mssg.comment;
      
      //  if( Ctext != cText ){
      
      //     let displayedMssg = `<div class="CQueryform"><section class="topsection"> <div class="qname">${nme}</div><div class="tel"></div><div class="Email">${eml}</div><div class="qButton2"><a href = "mailto: ${eml}"><button class="QueryButton3">Reply</button></a></div></section><p class="commet">${cText}</p></div> <hr>`;
           
      //     dashform.innerHTML += displayedMssg;
           
      //      }
        })

     
         
      
      
      }


    )


// for(x=0 ; x < mssg.length ; x++){
     
//    let nme = mssg[x].name;
//    let eml = mssg[x].email;
//    let cText = mssg[x].comment;

//  if( Ctext != cText ){

//     let displayedMssg = `<div class="CQueryform"><section class="topsection"> <div class="qname">${nme}</div><div class="tel"></div><div class="Email">${eml}</div><div class="qButton2"><a href = "mailto: ${eml}"><button class="QueryButton3">Reply</button></a></div></section><p class="commet">${cText}</p></div> <hr>`;
     
//     dashform.innerHTML += displayedMssg;
     
//      }


}


 

 


