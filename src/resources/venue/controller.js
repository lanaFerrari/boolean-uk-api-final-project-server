const prisma = require("../../utils/database");

const editVenueWithId = async (req, res) =>{
    const venueId = req.params.id;
    const { buildingName, city, street, postCode } = req.body;
    
    try {
            const result = await prisma.venue.update({
        where:{
            id: parseInt(venueId),
        },
        data:{
            buildingName,
            city,
            street,
            postCode
        },
    })
    res.json({ data: result })
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).json({ error: error.message }); 
    }
};

const getAllVenues = async (req, res) => {
    try {
        const result = await prisma.venue.findMany()
        res.json({ data: result });
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).json({ error: error.message });
    }
};

module.exports={
    editVenueWithId,
    getAllVenues
};