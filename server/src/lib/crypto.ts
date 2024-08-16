import jwt from 'jsonwebtoken';

// Secret key used for signing and verifying tokens
const secretKey = process.env.JWT_SECRET || "Hello Word";

// Interface for the token payload
interface TokenPayload {
    userId: string;
    // Add any additional properties you need in the token payload
}

// Function to verify a token
export function verifyToken(token: string): TokenPayload | null {
    try {

        const decoded = jwt.verify(
          token,
          secretKey
        ) as TokenPayload;
        return decoded;
    } catch (error) {
        // Token verification failed
        console.error(error);
        return null;
    }
}

// Function to create a token
export function createToken(payload: TokenPayload): string {
    const token = jwt.sign(payload, secretKey, {
      expiresIn: process.env.JWT_DURATION || "24h",
    });
    return token;
}