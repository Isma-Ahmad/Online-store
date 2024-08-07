const db = require('../models');


const createRecord = async (recordData) => {
    try {
        return await db.Record.create(recordData);
    } catch (error) {
        throw new Error('Error creating record: ' + error.message);
    }
};


const updateRecord = async (recordId, recordData) => {
    try {
        const record = await db.Record.findOne({ where: { record_id: recordId } });
        if (!record) {
            throw new Error('Record not found');
        }
        return await record.update(recordData);
    } catch (error) {
        throw new Error('Error updating record: ' + error.message);
    }
};


const deleteRecord = async (recordId) => {
    try {
        const record = await db.Record.findOne({ where: { record_id: recordId } });
        if (!record) {
            throw new Error('Record not found');
        }
        await record.destroy();
    } catch (error) {
        throw new Error('Error deleting record: ' + error.message);
    }
};


const getRecord = async (recordId) => {
    try {
        const record = await db.Record.findOne({ where: { record_id: recordId } });
        if (!record) {
            throw new Error('Record not found');
        }
        return record;
    } catch (error) {
        throw new Error('Error retrieving record: ' + error.message);
    }
};


const getAllRecords = async () => {
    try {
        return await db.Record.findAll();
    } catch (error) {
        throw new Error('Error retrieving records: ' + error.message);
    }
};

module.exports = {
    createRecord,
    updateRecord,
    deleteRecord,
    getRecord,
    getAllRecords
};
