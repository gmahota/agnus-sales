import jwt, { Secret, SignOptions } from "jsonwebtoken";
import config from "../../../config/crypto";

const signOptions: SignOptions = {
  algorithm: "RS256",
  expiresIn: config.jwt.duration,
};

const sign = (payload: any) => jwt.sign(payload, config.jwt.secret);

const verify = async (token: any): Promise<boolean> =>
  jwt.verify(token, config.jwt.secret, (error, data) => {
    if (error) {
      console.log(error);
      return false;
    } else return true;
  });

export default {
  sign,
  verify,
};
