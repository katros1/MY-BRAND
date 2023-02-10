import passport from "passport";
import passportJWT from "passport-jwt";
import UserInfo from "../model/signUp.js";
import { jwtSecret, jwtSession } from "../config.js";


const extractJWT = passportJWT.ExtractJwt;
const strategy = passportJWT.Strategy;
const params = {
    secretOrKey: jwtSecret,
  jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken("jwt")
};

 const auth = () => {
    const strategy = new strategy(params, ({id, expire}, done) => {
        const user = UserInfo.findById(id, (err, user) => {
          if (err) {
            return done(new Error("UserNotFound"), null);
          } else if(expire<=Date.now()) {
            return done(new Error("TokenExpired"), null);
          } else{
            return done(null, user);
          }
        });
      });

      passport.use(strategy);
  return {
    initialize() {
      return passport.initialize();
    },
    authenticate() {
      return passport.authenticate("jwt", jwtSession);
    }
  };
};

export default auth;