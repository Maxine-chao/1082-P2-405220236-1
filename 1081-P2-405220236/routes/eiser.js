var express = require('express');
var router = express.Router();

const eiserController = require('../controllers/eiserController');
const classdemoController = require('../controllers/classdemoController');

router.get('/featured', eiserController.getFeatured);
router.get('/new', eiserController.getNew);
router.get('/combined', eiserController.getCombined);
router.get('/tictactoe', (req,res) =>{
    res.render('tictactoe',{title:'108-2 tictactoe demo'});
});
// router.get('/classdemo', (req, res) => {
//     res.render('classdemo', {title:'108-2 midProject'});
// });

router.get('/classdemo', classdemoController.getClass);
module.exports = router;
