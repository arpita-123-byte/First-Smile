
const { dbconnect } = require("./connectdb/connect.js");
const { saveDoc, getData, updateData, deleteData } = require("./model/model.js");


const crudOperations = () => {
    dbconnect();

    saveDoc();

    getData();

    // updateData(1);

    // deleteData(1);
}

module.exports = crudOperations;