import jwt from 'jsonwebtoken';
export function auth(req,res,next){
	const token=req.headers['authorization'];
	if(!token){
	    return res.status(401).send({
	      message:"Please login to continue"
	    })
	}else{
		// invalid token - synchronous
		const jwt_secret="weyuiwiwdhwiuwduwuwuhfw";
// console.log(token);
		try {

   /*const  parseJwt = (token)=> {
    const base64Url =   token.split('.')[1];
    const base64 = decodeURIComponent(atob(base64Url).split('').map((c)=>{
        return '%' +('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(base64);
   };*/


   function parseJwt(t) {
    var base64Payload = t.split('.')[1];
    var payload = Buffer.from(base64Payload, 'base64');
    return JSON.parse(payload.toString());
  }
  const decoded = parseJwt(token);

 //const decoded = jwt.verify(token, jwt_secret);

//console.log(decoded)
		  if(decoded){
		  	req.user=decoded;
		  }else{
		  	  return res.status(401).send({
	           message:"Please login to continue."
	          });
		  }
		} catch(err) {
	        // err
	        if(err.expiredAt && err.expiredAt< new Date()){
	          return res.status(401).send({
	            message:"Session expired."
	          })
	        }else{
	          return res.status(401).send({
	           message:err
	          })
	        }

		}
		next();
	}	
}