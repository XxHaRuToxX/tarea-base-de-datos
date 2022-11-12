const { createPolitic, deletePolitic, getAllPolitics, getPoliticById, updatePolitic } = require('../services/politicService');
 
const CGetAllPolitics = async (req, res) => {

    try {
        const Politics = await getAllPolitics();

        res.json({ data: Politics, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CCreatePolitic = async (req, res) => {

    try {

        const Politic = await createPolitic(req.body);

        res.json({ data: Politic, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CGetPoliticById = async (req, res) => {

    try {

        const Politic = await getPoliticById(req.params.id);

        res.json({ data: Politic, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CUpdatePolitic = async (req, res) => {

    try {

        const Politic = await updatePolitic(req.params.id, req.body);

        console.log('*****', req.params);

        res.json({ data: Politic, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CDeletePolitic = async (req, res) => {

    try {

        const Politic = await deletePolitic(req.params.id);

        res.json({ data: Politic, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });
        
    }
};

module.exports = {
    CGetAllPolitics,
    CCreatePolitic,
    CGetPoliticById,
    CUpdatePolitic,
    CDeletePolitic,
}