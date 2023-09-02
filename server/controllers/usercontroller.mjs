import User from "../models/user.mjs";
import logger from "../utils/logger.mjs";
import bcrypt from "bcrypt";


const UserController = {

  createUser: async (req, res) => {
    try {
      const { password, ...userData } = req.body; // Destructure the password
      const user = new User(userData);
  
      // Hash the password asynchronously
      const hashedPassword = await bcrypt.hash(password, 12);
  
      user.password = hashedPassword;
      await user.save();
      
      res.status(201).json(user);
      logger.info(`User created successfully`);
    } catch (error) {
      res.status(400).json({ message: `Error creating user` });
      logger.error(`User Creation Failed`);
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
      logger.info(`User details fetched`);
    } catch (error) {
      res.status(500).json({ message: error });
      logger.error(`Error getting all users ${error.message}`);
    }
  },

  updateUserById: async (req, res) => {
    try {
      const updateUser = req.body;
      await User.findByIdAndUpdate(req.params.id, updateUser);
      res.status(200).send("Done"); //send status
      logger.info(`User details updated successfully`);
    } catch (error) {
      logger.error(`User update failed`);
      res.status(400).send("failed");
    }
  },

  deleteUserById: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id) //delete
        .then(() => {
          res.status(200).json("success"); //send success message to the frontend
          logger.info(`User deleted successfully`);
        });
    } catch (error) {
      logger.error(`User delete failed`);
      res.status(400).send("failed");
    }
  },

  getUserbyId: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
      logger.info(`User data fetched successfully `);
    } catch (error) {
      logger.error(`Couldn't get user details`);
      res.statuFs(400).send("failed");
    }
  },

  userLogin:async (req,res) => {
    
      const{email,password} = req.body;
      const check =  User.findOne({email:email})
      if(check){
        const passwordCheck = await User.findOne({password:password});
        if(passwordCheck){
          res.status(201).send("success");
          logger.info(`User logged in successfully`);
        }
        else{
          res.status(400).send("invalid password")
          logger.error("Invalid password")
        }
      }

      else{
        res.status(400).send("invalid email")
          logger.error("User doesn't exist")
      }
 
  }
  
};

export default UserController;