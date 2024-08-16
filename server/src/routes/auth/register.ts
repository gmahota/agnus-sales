import { Router, Request, Response } from 'express';
import { prisma } from "../../lib/prisma";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";

const router = Router();

router.post('/register', [
    // Add validation rules using express-validator
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], async (req: Request, res: Response) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const passwordEncrypt = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await prisma.user.create({
          data: {
            username,
            email,
            password: passwordEncrypt
          },
        });

        return res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;