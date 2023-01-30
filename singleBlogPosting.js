
let params = (new URL(document.location)).searchParams;
    let name = params.get('id')
    

 function blogPost(){
    let blog = JSON.parse(localStorage.getItem('blogs'))
    
     
      let myBlog = blog.find(x => x.id == name);
      let blogArticle = document.querySelector('.blog-article')
      let blogDiv = document.createElement('div')
      blogDiv.innerHTML = `<h1>${myBlog.title}</h1>
        <img src="${myBlog.image}">
      <p>${myBlog.body}</p>`;

      blogArticle.appendChild(blogDiv)

      /* function findBlog(item){
        for(i=0 ; i<blog.length ; i++){
        return item.title === blog[i].title;
       break;
      }
      
    }*/
     
   
    
 }

 blogPost();