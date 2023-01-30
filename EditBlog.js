function editBlog(e){
    var myBlog = JSON.parse(localStorage.getItem('blogs'));
     const titles = document.querySelectorAll('.nameBlog');
     for(x=0 ; x<titles.length ; x++){
        title = titles[x].innerHTML;
        for(i=0 ; i< myBlog.length ; i++){
            if(myBlog[i].title == title){
                window.location='EditTheBlog.html'
            }
         }
     }
     
}