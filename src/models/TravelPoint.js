import mongoose from "mongoose";

export const TravelPoint = mongoose.model('TravelPoint',
    {
        name: String,
        type: String,
        lat: Number,
        lng: Number,
    });
