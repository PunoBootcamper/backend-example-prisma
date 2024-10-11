import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config";

export const authRequired = (req: Request, res: Response, next: NextFunction) => {
    // Your authentication logic here
    //const cookie = req.cookies.token;
    const {token} = req.cookies;
    
    if(!token){
        res.status(401).json({error: "No token provided"});
        return
    }
    
    jwt.verify(token, TOKEN_SECRET, (err: jwt.VerifyErrors | null, user: any)=>{
        if(err){
            res.status(401).json({error: "Invalid token"});
            return
        }
        req.user = user;
        next();
    })
    
}
