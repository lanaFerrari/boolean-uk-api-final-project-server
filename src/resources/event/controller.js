const prisma = require("../../utils/database");

function getEventById(req, res) {
    console.log("working")
    prisma.event.findUnique({
        where: {
            id: parseInt(req.params.id)
        }
    })
        .then((result) => {
            console.log(result)
            res.json({ data: result })
        })
        .catch(error => {
            console.error(error)
            res.status(500).json(error)
        })
}

const getAllEvents = async (req, res) => {
    try {
        const result = await prisma.event.findMany()
        res.json({ data: result });
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).json({ error: error.message });    
    }
}


module.exports = { getEventById, getAllEvents }