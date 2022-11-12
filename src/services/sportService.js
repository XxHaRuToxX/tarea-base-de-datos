const SportModel = require ('../models/Sport');
 
const getAllSports = async () => {
  return await SportModel.find();
};
 
const createSport = async (sport) => {
  return await SportModel.create(sport);
};

const getSportById = async (id) => {
  return await SportModel.findById(id);
};
 
const updateSport = async (id, sport) => {
  return await SportModel.findByIdAndUpdate(id, sport);
};
 
const deleteSport = async (id) => {
  return await SportModel.findByIdAndDelete(id);
};

module.exports = {
  getAllSports,
  createSport,
  getSportById,
  updateSport,
  deleteSport,
}