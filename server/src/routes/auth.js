import bcrypt from 'bcryptjs';
import {Router} from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/User.js';

const router = Router();

router.post('/register', async (req, res) => {
  const {email, password} = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({email, password: hashedPassword});
    res.status(201).json({message: 'User created', user});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await User.findOne({where: {email}});
    if (!user) return res.status(404).json({message: 'User not found'});

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({message: 'Invalid credentials'});

    const token =
        jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.json({token});
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

export default router;
