import tokenAuth from "../services/auth/token";
import { Request, Response, NextFunction } from "express";

const extractToken = async (request: Request) => {
  const authorization = request.headers.authorization || "";
  return authorization.replace("Bearer ", "");
};

const handleError = async (error: any) => {
  console.error("Failed to verify token", error);
  // illustration purposes only
  // for production-ready code, use error codes/types and a catalog (maps codes -> responses)

  /* eslint-disable prefer-promise-reject-errors */
  return Promise.reject({
    status: 401,
    message: "Invalid authentication token",
    code: "UNAUTHENTICATED",
  });
};

const authMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const token = await extractToken(request);

  const tokenValid = await tokenAuth.verify(token)

  try {
    if( tokenValid) {
      next();
    }else{
      handleError
    }    
  } catch (e) {
    handleError;
  }
};

export default authMiddleware;
