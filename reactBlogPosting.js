function App (){

const [post, setposts] = React.useState([]);
   
 React.useEffect(() => {

    fetch('https://my-brand-o2aa.onrender.com/api/v1/blogs')
    .then(res => {
        return res.json();
    })
    .then(data => {
          let datas = data.Blogs

          setposts(datas)
        console.log(datas)

    //     datas.forEach(blog => {

    // })
        
    })
    
 },[])

 console.log(post)

 return (
  
    post.map((posts) =>{
        
        let id = posts._id
        const link = () =>{
            window.location.href= `singleBlogView.html?id=${id}`
        }

        
return (

            <article className="post-articles" key={id.toString()}>
        <div className="post-content">
            <time className="post-category"> {posts.title}</time>
            <div className="blog-post-title" onClick ={link}>
                <h5>

                {posts.title}
                    {/* <a data-id="2354" href="singleBlogView.html?id=`${id}`">
                        		
                    </a> */}
                </h5>
            </div>
            <div className="blog-post-content">
              <img src = {posts.Image}/>     
            </div>
        </div>
    </article>
        )

            })
         
 )

}

ReactDOM.render(<App />, document.querySelector('.blog-articles'))
