var books = require('./library');
const dboperations = require('./dboperations')

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const { response } = require('express');
var app = express();
var router = express.Router();




app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);



router.use((request, response, next) => {
    console.log('middleware');
    next();
});

router.route("/librarys").get((request, response) => {

dboperations.getLibrarys().then(result => {
   // console.log(result);
   response.json(result[0]);
});
});

router.route("/book/:id").get((request, response) => {

    dboperations.getAbook(request.params.id).then(result => {
       // console.log(result);
       response.json(result[0]);
    });
    });

    router.route("/abook").get((request, response) => {
        dboperations.getAbook().then(result => {
           // console.log(result);
           response.json(result[0]);
        });
        });


    router.route("/newbook").post((request, response) => {

        let book = {...request.body}
        dboperations.addAbook(book).then(result => {
           // console.log(result);
           response.status(201).json(result);
        });
        });


var port = 8080;
app.listen(port);
console.log('API running at ' + port);



