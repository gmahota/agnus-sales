import jwt, { Secret, SignOptions } from "jsonwebtoken";
import config from "../../config/crypto";

const signOptions: SignOptions = {
  algorithm: "RS256",
  expiresIn: config.jwt.duration,
};

const sign = (payload: any) => jwt.sign(payload, config.jwt.secret);

const verify = async (token: any) => jwt.verify(token, config.jwt.secret);

export default {
  sign,
  verify,
};
