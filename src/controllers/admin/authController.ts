import { Request, Response } from "express";
import userService from "../../services/auth/user";
import token from "../../services/auth/token";
import crypto from "../../services/auth/crypto";

const login = async (request: Request, response: Response) => {
  try{ 
    const {
      username,
      password,
    } = request.body;
  
    const result = await userService.findByName(username);
  
    if (result) {
      
      
      if (
        username.toLowerCase() === result.username.toLowerCase() &&
         await crypto.compare(password, result.password)
      ) {
        const user = {
          username: result.username,
          //password: result.password,
        };
        // Create JWT and send it to user
        const jwt = token.sign(user);
  
        if (jwt) {
          return response.status(200).json({
            userName: user.username,
            token: jwt,
          });
        } else {
          return response.status(500).json({ msg: "Internal server error" });
        }
      }
    }
  
    return response.status(422).json({ msg: "Invalid username or password" });
  }catch(e){
    return response.status(500).json({ msg: "Internal server error" , error:e});
  }
  
};

const guest = (request: Request, response: Response) => {
  return response.status(200).json({ msg: "Guest success" });
};

const auth = (request: Request, response: Response) => {
  return response.status(200).json({ msg: "Auth success" });
};

export default {
  login,
  guest,
  auth
}
