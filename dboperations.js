var config = require('./dbconfig');
const sql = require('mssql');


async function getLibrarys(){
    try {
        let pool = await sql.connect(config);
        let librarys = await pool.request().query("select * from Library");
        return librarys.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

async function getBooks(){
    try {
        let pool = await sql.connect(config);
        let books = await pool.request().query("select * from Book");
        return books.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function getAbook(Item_Id){
    try {
        let pool = await sql.connect(config);
        let aBook = await pool.request()
        .input('input_parameter', sql.Int, Item_Id)
        .query("select * from Book where Item_Id = @input_parameter");
        return aBook.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addAbook(book){
    try {
        let pool = await sql.connect(config);
        let insertBook = await pool.request()
        .input('Item_Id', sql.Int, book.Item_Id)
        .input('ISBN', sql.Int, book.ISBN)
        .input('Edition', sql.NVarChar, book.Edition)
        .input('Publisher', sql.NVarChar, book.Publisher)
        .input('Subject_area', sql.NVarChar, book.Subject_area)
        .input('Price', sql.Int, book.Price)
        .query("insert into Book values = @input_parameter");
        console.log()
        return insertBook.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getLibrarys : getLibrarys,
    getAbook : getAbook,
    addAbook : addAbook,
    getBooks : getBooks
}