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


module.exports = { getEventById }