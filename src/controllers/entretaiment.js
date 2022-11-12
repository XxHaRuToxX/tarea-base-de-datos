const { createEntretaiment, deleteEntretaiment, getAllEntretaiments, getEntretaimentById, updateEntretaiment } = require('../services/entretaimentService');
 
const CGetAllEntretaiments = async (req, res) => {

    try {
        const Entretaiments = await getAllEntretaiments();

        res.json({ data: Entretaiments, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CCreateEntretaiment = async (req, res) => {

    try {

        const Entretaiment = await createEntretaiment(req.body);

        res.json({ data: Entretaiment, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CGetEntretaimentById = async (req, res) => {

    try {

        const Entretaiment = await getEntretaimentById(req.params.id);

        res.json({ data: Entretaiment, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CUpdateEntretaiment = async (req, res) => {

    try {

        const Entretaiment = await updateEntretaiment(req.params.id, req.body);

        console.log('*****', req.params);

        res.json({ data: Entretaiment, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CDeleteEntretaiment = async (req, res) => {

    try {

        const Entretaiment = await deleteEntretaiment(req.params.id);

        res.json({ data: Entretaiment, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });
        
    }
};

module.exports = {
    CGetAllEntretaiments,
    CCreateEntretaiment,
    CGetEntretaimentById,
    CUpdateEntretaiment,
    CDeleteEntretaiment,
}