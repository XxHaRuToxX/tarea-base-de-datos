const EntretaimentModel = require ('../models/Entretaiment');
 
const getAllEntretaiments = async () => {
  return await EntretaimentModel.find();
};
 
const createEntretaiment = async (entretaiment) => {
  return await EntretaimentModel.create(entretaiment);
};

const getEntretaimentById = async (id) => {
  return await EntretaimentModel.findById(id);
};
 
const updateEntretaiment = async (id, entretaiment) => {
  return await EntretaimentModel.findByIdAndUpdate(id, entretaiment);
};
 
const deleteEntretaiment = async (id) => {
  return await EntretaimentModel.findByIdAndDelete(id);
};

module.exports = {
  getAllEntretaiments,
  createEntretaiment,
  getEntretaimentById,
  updateEntretaiment,
  deleteEntretaiment,
}