const Monarch = require("../models/monarchyModel");

const getMonarchs = async (req, res) => {
  try {
    const Monarchs = await Monarch.find({});
    res.status(200).json(Monarchs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMonarch = async (req, res) => {
  try {
    const { id } = req.params;
    const Monarch = await Monarch.findById(id);
    res.status(200).json(Monarch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMonarch = async (req, res) => {
  try {
    const Monarch = await Monarch.create(req.body);
    res.status(200).json(Monarch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMonarch = async (req, res) => {
  try {
    const { id } = req.params;

    const Monarch = await Monarch.findByIdAndUpdate(id, req.body);

    if (!monarch) {
      return res.status(404).json({ message: "monarch not found" });
    }

    const updatedMonarch = await Monarch.findById(id);
    res.status(200).json(updatedMonarch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMonarch = async (req, res) => {
  try {
    const { id } = req.params;

    const Monarch = await Monarch.findByIdAndDelete(id);

    if (!Monarch) {
      return res.status(404).json({ message: "monarch not found" });
    }

    res.status(200).json({ message: "monarch deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMonarchs,
  getMonarch,
  createMonarch,
  updateMonarch,
  deleteMonarch,
};
