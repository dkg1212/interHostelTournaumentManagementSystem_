const db= require("../config/db");

const getHostels=async(req,res)=>{
    try {
        const data=await db.query('SELECT * FROM hostels')
        if(!data){
            return res.status(404).send({
                success :false,
                message:"No record Found ..."
            });
        }
        res.status(200).send({
            success:true,
            message:"All Hostel Record found ....",
            totalStudents:data[0].length,
            data:data[0]
        })

    } catch (error) {
        console.log(error);
        res.status(400).send({
            success : false,
            message : 'Error in Get the hostel API ...',
            error
        })
    }
};

const getHostelsById=async(req,res)=>{
    try {
        const hostelID=req.params.id;
        const data=await db.query('SELECT * FROM hostels WHERE id=?',[hostelID]);
        if(!data){
            return res.status(404).send({
                success :false,
                message:"No record Found ..."
            });
        }
        res.status(200).send({
            success:true,
            HostelDetails:data[0]
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success : false,
            message : 'Error in Get the hostel API ...',
            error
        })
        
    }

}

module.exports={getHostels,getHostelsById}