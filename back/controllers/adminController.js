import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

const verifyAdmin = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) return res.json({ error: "No token provided" }).status(401);
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.json({ error : "Invalid Token"}).status(401);
    next();
})
}

router.get('/', verifyAdmin, async (req, res) => {
  res.json({ auth: true, message: 'User is auth' }).status(200);
})


export default router;