import { Router, Request, Response } from 'express';
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import { createToken } from '../../lib/crypto';

import { z } from "zod";

const router = Router();

// Zod schemas
const createUserNameSchema = z.object({
  email: z.string(),
  password: z.string(),
});


router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = createUserNameSchema.parse(req.body); req.body;

    try {
        const user = await prisma.user.findUnique({
          where: { email },
          include: { profile: true },
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // TODO: Implement password validation logic here
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        // TODO: Generate and return JWT token
        const jwtToken = createToken({ userId: user.id });
        
        res.status(200).json({
          message: "Login successful",
          token: jwtToken,
          User: {
            email: user.email,
            name: user.name,
            Profile: user.profile,
          },
        });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;