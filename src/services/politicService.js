const PoliticModel = require ('../models/Politic');
 
const getAllPolitics = async () => {
  return await PoliticModel.find();
};
 
const createPolitic = async (politic) => {
  return await PoliticModel.create(politic);
};

const getPoliticById = async (id) => {
  return await PoliticModel.findById(id);
};
 
const updatePolitic = async (id, politic) => {
  return await PoliticModel.findByIdAndUpdate(id, politic);
};
 
const deletePolitic = async (id) => {
  return await PoliticModel.findByIdAndDelete(id);
};

module.exports = {
  getAllPolitics,
  createPolitic,
  getPoliticById,
  updatePolitic,
  deletePolitic,
}