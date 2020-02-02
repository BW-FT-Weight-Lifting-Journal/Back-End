//                                                                                   
const jwt = require("jsonwebtoken");                                              // import JSON web token API
//
const secret = require("../config/secret.js");                                    // import secret {jwtSecret: process.env.JWT_SECRET || "secret string"}
//
module.exports = (req, res, next) => {                                            // run auth middleware by receiving request obj, returning res obj, and then running
//                                                                                          <next> middleware function in line.
  const token = req.headers.authorization;                                        // 
//
  if (token) {                                                                    // conditional statement - if user has the token from authoriztion header from req obj
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {                  //          run the following:
      if (err) {                                                                  // jwt verify method takes jwtString, secret or public key, options, and a CB function  
        res                                                                       //        and then uses these params to verify token is string, is present, greater then 3
          .status(401)                                                            //        chars, that decoded token = original, signature is provided etc.
          .json({ message: "You are not authorized to see this content." });      // if verify method returns error, then status 401 with message
      } else {                                                                    // 
        req.decodedToken = decodedToken;                                          // 
        next();                                                                   // otherwise the jwt is verified and req obj receives decoded token. Onto next middleware
      }                                                                           //
    });                                                                           //
  } else {                                                                        //
    res                                                                           // else token was not received so retur error message status 400
      .status(400)                                                                //
      .json({ message: "Please provide a token to view this content." });         //
  }
};

//                                                                                  SO LONG STORY SHORTER -> 
//                                                                                  The auth middleware returns a decoded token upon success
//                                                                                  and returns status code 400 or 401 and json message on error