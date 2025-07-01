import { Request, Response, NextFunction } from 'express';
import { getUserByApiKey } from '../services/user.service';

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'] || req.headers['authorization'];

  if (!apiKey) {
    return res.status(401).json({ error: 'API key required' });
  }

  const user = await getUserByApiKey(apiKey.toString());

  if (!user) {
    return res.status(403).json({ error: 'Invalid API key' });
  }

  (req as any).user = user;
  next();
};
