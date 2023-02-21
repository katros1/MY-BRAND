function editBlog(e){
    // var myBlog = JSON.parse(localStorage.getItem('blogs'));
     const titles = document.querySelectorAll('.nameBlog');
     fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs')
    .then(res => {
        return res.json();
    })
    .then(data => {
          let datas = data.Blogs
        console.log(datas)

        datas.forEach(blog => {

            let title = titles[x].innerHTML;
    })
        
})

     for(x=0 ; x<titles.length ; x++){
        title = titles[x].innerHTML;
        for(i=0 ; i< myBlog.length ; i++){
            if(myBlog[i].title == title){
                window.location='EditTheBlog.html'
            }
         }
     }
     
}