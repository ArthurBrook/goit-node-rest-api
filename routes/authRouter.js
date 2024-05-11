import express from 'express';
<<<<<<< HEAD
import { register, verify, resendVerify, login, updateSubscription, updateAvatar, getCurrentUser, logout } from '../controllers/authControllers.js';
import { registerSchema, emailSchema, loginSchema, updateSubscriptionSchema } from '../schemas/usersSchemas.js';
=======
import { register, login, updateSubscription, updateAvatar, getCurrentUser, logout } from '../controllers/authControllers.js';
import { registerSchema, loginSchema, updateSubscriptionSchema } from '../schemas/usersSchemas.js';
>>>>>>> 9fec51614834f496cae6b48523cbebfe296f5b4f
import authenticate from '../middlewares/authenticate.js';
import upload from '../middlewares/upload.js';
import validateBody from '../middlewares/validateBody.js';

const authRouter = express.Router();

authRouter.post('/register', validateBody(registerSchema), register);

authRouter.get('/verify/:verificationToken', verify);

authRouter.post('/verify', validateBody(emailSchema), resendVerify);

authRouter.post('/login', validateBody(loginSchema), login);

authRouter.patch('/', authenticate, validateBody(updateSubscriptionSchema), updateSubscription);

authRouter.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar);

authRouter.get('/current', authenticate, getCurrentUser);

authRouter.post('/logout', authenticate, logout);

export default authRouter;