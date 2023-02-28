function App (){

    const [post, setposts] = React.useState('');
    let [likes, setlikes] = React.useState('');
    const [comments, setcomments] = React.useState('');
    let params = (new URL(document.location)).searchParams;
    let nameId = params.get('id') 
    
  React.useEffect(() => {
  
    fetch(`https://my-brand-o2aa.onrender.com/api/v1/blogs/${nameId}`)
    .then(res => {
        return res.json();
    })
    .then(data => {
          let datas = data.Blogs
          let like = datas.blogLikes.length
          let comment = datas.blogComments.length
          setposts(datas)
          setlikes(like)
          setcomments(comment)
          
        console.log(datas)
        
    })
    .catch(error => {
      console.log(error)
  })
    
  },[])
  
  console.log(post)

  let content = post.content
  let lik = likes
  function setLike(){
    const Like = document.querySelector('.Likes');
    Like.className = "Likes Like";
   }
   function removeLike(){
    const Like = document.querySelector('.Likes');
    Like.className = "Likes ";
   }
  
  async function likecount(){

            setLike()

    const responce= await fetch(`https://my-brand-o2aa.onrender.com/api/v1/blogs/${nameId}/likes`,{
      method: 'POST',
      headers: {
        Authorization :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW91ciBuYW1lIiwiVXNlck5hbWUiOiJjaG9vc2UgcGFzc3dvcmQiLCJ1c2VySWQiOiI2M2ViZDNhNmU0N2MzODE0YjQ2NDU4MzQiLCJpYXQiOjE2NzY1NjQ2ODV9.oJiGp7X6JyUAKyDZ0pAcE7hbU7ne3SOTq_AI0QsE8vc'
      }
    })
  
    const res = await responce.json();

    (res.message=='Liked')?(lik=setlikes(lik+1)):(lik=lik);
     
  
  }

  
  return (
    
           <div>
           <h1>
            {post.title}
            </h1>
           <img src={post.Image}/>
            <p>  
              <div dangerouslySetInnerHTML={{ __html: content }} />
              </p>
              <div className="Likes">
              
                <i className="fa-solid fa-thumbs-up" onClick={likecount}>
                  </i>
                  {lik} Like <i className="fa-solid fa-comment">
                    </i> 
                     {comments} Comments
                     </div>
    
                     </div>
        
  )
  
  }
  
  
  ReactDOM.render(<App />, document.querySelector('.blog-article'))
  