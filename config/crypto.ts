import dotenv from "dotenv";

dotenv.config();

export default {
  hashSaltRounds: 10,
  jwt: {
    secret: process.env.JWT_SECRET|| "Ola Mundo",
    duration: process.env.JWT_DURATION || "1h",
    privateKey: process.env.JWT_PRIVATE_KEY || "",
    publicKey: process.env.JWT_PUBLIC_KEY || "",
  },
};
