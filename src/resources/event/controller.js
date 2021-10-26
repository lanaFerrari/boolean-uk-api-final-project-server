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

function createEventWithBandAndVenue(req, res) {
    console.log("createEventWithBand working")
    prisma.event.create({
        data: {
            ...req.body,
            date: new Date(req.body.date),
            band: {
                create:
                    { ...req.body.band },
            },
            venue: {
                create:
                    { ...req.body.venue },
            }
        },
        include: {
            band: true,
            venue: true
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


module.exports = { getEventById, createEventWithBandAndVenue }