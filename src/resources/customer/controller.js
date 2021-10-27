const prisma = require("../../utils/database");

const getAllCustomers = async (req, res) =>{
    try {
        const result = await prisma.customer.findMany()
        res.json({ data: result });
    } catch (error) {
        console.error({ error: error.message });
        res.status(500).json({ error: error.message });    
    }
};

const createCustomer = async (req, res) =>{
    const { name, age, preferredGenre } = req.body;

    try {
      const result = await prisma.customer.create({
        data:{
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

const deleteById = async (req, res) =>{
try {
    const reqId = req.params.id;
    console.log("connected", reqId);

    const deleteCustomer = await prisma.customer.delete({
        where:{
            id: parseInt(reqId),
        },
    })

    res.json({ data: deleteCustomer }); 
} catch (error) {
    console.error({ error: error.message });
    res.status(500).json({ error: error.message });
} 
}

module.exports ={
    createCustomer,
    deleteById,
    getAllCustomers
}