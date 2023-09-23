import { parse } from 'dotenv';
import User from '../models/User.js';

// Creating a new user
export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully created",
                data: savedUser,
            });
    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: "Failed to create. Try again" });
    }
};

//update 
export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updateUser = await User.findByIdAndUpdate(id,{
            $set: req.body
        }, {new:true})

        res.status(200).json({
                success: true,
                message: "Successfully update",
                data: updateUser,
            });
        
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "failed to update",
            data: saveUser,
        });

    }
};

//delete
export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({
                success: true,
                message: "Successfully deleted",
            });
        
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "failed to delete",
        });

    }
};

//get Single
export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id);

        res.status(200).json({
                success: true,
                message: "Successfully booked",
                data:user
            });
        
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });

    }
};

//getAll users
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({})

        res
            .status(200)
            .json({
                success: true, 
                message: "Booked All", 
                data: users
            });
        
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};