//"mongodb://arduffy:Austin90*@ds231245.mlab.com:31245/cidm4382";

var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var connectionstring = "mongodb://arduffy:Austin90*@ds231245.mlab.com:31245/cidm4382";
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

mongoose.Promise = global.Promise;

var studentSchema = new mongoose.Schema({
    buffID: String,
    firstName: String,
    lastName: String
});

var Student = mongoose.model('Student', studentSchema);

router.get('/add-random-student', function (req, res, next){
    
    var rand = new Student(
        {
            buffID:     '123456',
            firstName:  'Random',
            lastName:   'Student'
        }
    );
    rand.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('The student is saved in the db');
        }
    });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/greeting', function(req, res, next){
    res.send("Hello, I greet you");
});

router.get('/greeting2', function(req, res, next){
    res.send("Hello, I greet you again");
});



module.exports = router;
