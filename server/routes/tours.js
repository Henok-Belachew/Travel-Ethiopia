import express from "express";
import { 
    createTour, 
    deleteTour, 
    getAllTour, 
    getFeaturedTour, 
    getSingleTour, 
    getTourBySearch, 
    getTourCount, 
    updateTour, 
} from "./../controllers/tourController.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//create new toure
router.post("/",verifyUser, createTour);

//upate toure
router.put("/:id",verifyAdmin, updateTour);

//delete toure
router.delete("/:id",verifyAdmin, deleteTour);

//get single toure
router.get("/:id", getSingleTour);

//get All toure
router.get("/", getAllTour);

//get toure by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;
