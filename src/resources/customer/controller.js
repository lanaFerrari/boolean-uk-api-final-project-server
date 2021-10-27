const prisma = require("../../utils/database");

const createCustomer = async (req, res) => {
    const { name, age, preferredGenre } = req.body;

    try {
        const result = await prisma.customer.create({
            data: {
                name,
                age: parseInt(age),
                preferredGenre,
            },
        })
        res.json({ data: result });
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).json({ error: error.message });
    }
};

const deleteById = async (req, res) => {
    const reqId = req.params.id;

    const result = await prisma.customer.delete({
        where: {
            id: parseInt(reqId),
        },
    })
    res.json({ data: result });
}

module.exports = {
    createCustomer,
    deleteById
}