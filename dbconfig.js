const config = {
    user : 'Iamchris',
    password : 'admin',
    server : 'localhost',
    database : 'GTL',
    options : {
        trusted_Connection : true,
        instancename : 'NEWSQLSERVER2',
        encrypt : false
    },
    port : 1433
};

/*const config = {
    user : 'Bingo',
    password : 'admin',
    server : 'localhost\\NEWSQLSERVER2',
    database : 'GTL',
    options : {
        trustedConnection : true,
        enableArithAbort : true,
        instancename : 'NEWSQLSERVER2'
    },
    port : 1433

};
*/


module.exports = config;
