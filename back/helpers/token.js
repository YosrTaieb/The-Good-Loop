import jwt from 'jsonwebtoken';

const privateKey = process.env.SECRET_KEY

const calculateToken = (userEmail = "", userIsAdmin = "") => {
  return jwt.sign({email: userEmail, admin: userIsAdmin}, privateKey)
}

export default calculateToken;