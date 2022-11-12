const { createSport, deleteSport, getAllSports, getSportById, updateSport } = require('../services/sportService');
 
const CGetAllSports = async (req, res) => {

    try {
        const Sports = await getAllSports();

        res.json({ data: Sports, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CCreateSport = async (req, res) => {

    try {

        const Sport = await createSport(req.body);

        res.json({ data: Sport, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CGetSportById = async (req, res) => {

    try {

        const Sport = await getSportById(req.params.id);

        res.json({ data: Sport, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CUpdateSport = async (req, res) => {

    try {

        const Sport = await updateSport(req.params.id, req.body);

        console.log('*****', req.params);

        res.json({ data: Sport, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CDeleteSport = async (req, res) => {

    try {

        const Sport = await deleteSport(req.params.id);

        res.json({ data: Sport, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });
        
    }
};

module.exports = {
    CGetAllSports,
    CCreateSport,
    CGetSportById,
    CUpdateSport,
    CDeleteSport,
}