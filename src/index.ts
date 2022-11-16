// Dependencies
import express from "express";

// Service
const service = express();

// Default global middleware
service.use(express.json()); // Parse body for POST
service.use(express.urlencoded({ extended: true })); // Parse body for PUT

// Add Routes
service.get('/',async (req:any,res:any) => {
    res.send('hola mundo')
})

// Export
export default service;
