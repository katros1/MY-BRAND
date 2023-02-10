import passportJwt from "passport-jwt";


const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'weyuiwiwdhwiuwduwuwuhfw',
};
export const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  return done(null, { userId: payload.userId });
});


























/*import pkg from "jsonwebtoken"
const { Jwt } = pkg;


export function authrzt(req,res,next){
	var token=req.headers['authorization'];
	if(!token){
	    return res.status(401).send({
	      message:"Please login to continue"
	    })
	}else{
		
		try {
		  const decoded = pkg.verify(token, "weyuiwiwdhwiuwduwuwuhfw");
		  if(decoded){
		  	req.user=decoded.data;
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
	           message:"Please login to continue."
	          })
	        }

		}
		next();
	}	
}*/