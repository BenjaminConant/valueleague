'use strict';

var express = require('express');
var controller = require('./mastercard.controller');
var PaymentsApi = require('simplify-commerce')
var router = express.Router();
router.post('/token', function (req, res){
	console.log(req.body, "Yo2")
	var Simplify = require("simplify-commerce"),
	    client = Simplify.getClient({
	        publicKey: 'sbpb_ZmUyZWNmNWQtMGY2Ni00Yjg3LTg1MTEtMWE5YjAzYmEyMzdl',
	        privateKey: 'xIMnYCfDVehWC4eWnDT+G5zouTlLexXfTBHN4WvHi6R5YFFQL0ODSXAOkNtXTToq'
	    });
	
	client.payment.create({
	    amount : "100",
	    token : req.body.simplifyToken,
	    description : "payment description",
	    reference : "7a6ef6be31",
	    currency : "USD"
	}, function(errData, data){
	
	    if(errData){
	        console.error("Error Message: " + errData.data.error.message);
	        // handle the error
	        return;
	    }
	
	    console.log("Payment Status: " + data.paymentStatus);
	});
})
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;