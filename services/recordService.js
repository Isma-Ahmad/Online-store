const db = require('../models');


const getAllRecords = async () => {
    
    return await db.Record.findAll();
};

const getRecord = async (recordId) => {

    const record = await db.Record.findOne({ where: { record_id: recordId } });
    if (!record) {
        throw new Error('Record not found');
    }
    return record;

};

const createRecord = async (recordData) => {
 
        return await db.Record.create(recordData);
   
};


const updateRecord = async (recordId, recordData) => {
   
        const record = await db.Record.findOne({ where: { record_id: recordId } });
        if (!record) {
            throw new Error('Record not found');
        }
        return await record.update(recordData);
   
};


const deleteRecord = async (recordId) => {

        const record = await db.Record.findOne({ where: { record_id: recordId } });
        if (!record) {
            throw new Error('Record not found');
        }
        await record.destroy();
   
};



module.exports = {
    createRecord,
    updateRecord,
    deleteRecord,
    getRecord,
    getAllRecords
};
