const express=require("express");
const { getHostels,getHostelsById } = require("../controllers/hostelController");

const router=express.Router();

router.get('/getAll',getHostels);
router.get('/get/:id',getHostelsById);

module.exports= router;