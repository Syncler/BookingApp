import User from "../models/User.js"

export const register = async (req, res, next) =>{
  try{
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password

    })

    await newUser.save()
    res.status(200).send({
      message:"User has been created",
      user: newUser
    
    })
  }catch(err){
  next(err)
}
}