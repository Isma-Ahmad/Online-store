const recordService = require('../services/recordService');


const getAllRecords = async (req, res) => {
    try {
        const records = await recordService.getAllRecords();
        res.status(200).json(records);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getRecord = async (req, res) => {
    try {
        const recordId = req.params.id;
        const record = await recordService.getRecord(recordId);
        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createRecord = async (req, res) => {
    try {
        
        const recordData = { ...req.body };
        const record = await recordService.createRecord(recordData);
        res.status(201).json(record);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const updateRecord = async (req, res) => {
    try {
        const recordId = req.params.id;
        const recordData = req.body;
        const record = await recordService.updateRecord(recordId, recordData);
        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const deleteRecord = async (req, res) => {
    try {
        const recordId = req.params.id;
        await recordService.deleteRecord(recordId);
        res.status(204).send(); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



module.exports = {
    createRecord,
    updateRecord,
    deleteRecord,
    getRecord,
    getAllRecords
};
