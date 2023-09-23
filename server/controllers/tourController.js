import { parse } from 'dotenv';
import Tour from '../models/Tour.js';

// Creating a new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully created",
                data: savedTour,
            });
    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: "Failed to create. Try again" });
    }
};

//update 
export const updateTour = async (req, res) => {
    const id = req.params.id

    try {
        const updateTour = await Tour.findByIdAndUpdate(id,{
            $set: req.body
        }, {new:true})

        res.status(200).json({
                success: true,
                message: "Successfully update",
                data: updateTour,
            });
        
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "failed to update",
            data: saveTour,
        });

    }
};

//delete
export const deleteTour = async (req, res) => {
    const id = req.params.id

    try {
        await Tour.findByIdAndDelete(id);

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
export const getSingleTour = async (req, res) => {
    const id = req.params.id

    try {
        const tour = await Tour.findById(id).populate('reviews');

        res.status(200).json({
                success: true,
                message: "Successfully booked",
                data:tour
            });
        
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });

    }
};

//getAll
export const getAllTour = async (req, res) => {
    //for page
    const page = parseInt(req.query.page);

   // console.log(page);

    try {
        const tours = await Tour.find({})
            .populate('reviews')
            .skip(page * 8)
            .limit(8);

        res
            .status(200)
            .json({
                success: true, 
                count: tours.length, 
                message: "Booked All", 
                data: tours
            });
        
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

//search to get tour
export const getTourBySearch = async(req, res) => {

    const city = new RegExp(req.query.city, 'i'); //i case sensitive
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        //gte mean Greater
        const tours = await Tour.find({
            city, 
            distance:{$gte: distance},
            maxGroupSize:{$gte: maxGroupSize} 
        }).populate('reviews');

        res
            .status(200)
            .json({
                success: true, 
                message: "Booked All", 
                data: tours
            });

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
} 

//get featured tour
export const getFeaturedTour = async (req, res) => {
    //const page = parseInt(req.query.page);

   // console.log(page);

    try {
        const tours = await Tour.find({featured:true})
           //.skip(page * 8)
           .populate('reviews')
           .limit(8);

        res
            .status(200)
            .json({
                success: true, 
                count: tours.length, 
                message: "Booked All", 
                data: tours
            });
        
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

//get tour counts
export const getTourCount = async (req, res) => {
    try {
        const tours = await Tour.estimatedDocumentCount();
        
        res
            .status(200)
            .json({
                success: true, 
                data: tours
            });
        
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "failed to fech",
        });
    }
};