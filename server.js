// import the required dependencies
const express = require('express')
require('dotenv').config()
const fetch =  require('node-fetch')
var cors = require('cors')
var formurlencoded = require('form-urlencoded')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const querystring = require('querystring');
const crypto = require('crypto')

// create an instance of the Express app
const app = express()

// Allow CORS
app.use(cors({
 origin: '*',
}))

// configure middleware for parsing incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the server port
const port = 3000

// define a variable to hold payment result data
let paymentResult

// serve the homepage
app.get('/', (req, res) => {
 res.render('home')
})

// make a TAC request to the EPX servers
app.post('/getTAC', async (req, res) => {
 const { amount } = req.body

 const MAC = process.env.MAC
 const TRAN_NBR = Math.floor(Math.random() * 1000000000)
 const TRAN_GROUP = process.env.TRAN_GROUP
 const REDIRECT_URL = process.env.REDIRECT_URL

 const formData = {
   AMOUNT: amount,
   MAC,
   TRAN_NBR,
   TRAN_GROUP,
   REDIRECT_URL
 }

 try {
   const response = await fetch('https://keyexch.epxuap.com', {
       method: 'post',
       body: formurlencoded(formData),
       headers: {'Content-Type': 'application/x-www-form-urlencoded'}
   });

   const data = await response.text()

   const dom = new JSDOM(data)
   const TAC = dom.window.document.querySelector("FIELD").textContent

   res.status(200).json({
       TAC: TAC
   })

 } catch (error) {
   console.log(error)
   res.status(400).json({
       error: 'An error occurred.'
   })
 }
})

// serve the payment form
app.get('/paymentForm', (req, res) => {
 const tran_code = process.env.TRAN_CODE
 const cust_nbr = process.env.CUST_NBR
 const merch_nbr = process.env.MERCH_NBR
 const dba_nbr = process.env.DBA_NBR
 const terminal_nbr = process.env.TERMINAL_NBR
 const industry_type = process.env.INDUSTRY_TYPE

 res.render('paymentForm', {
   tran_code,
   cust_nbr,
   merch_nbr,
   dba_nbr,
   terminal_nbr,
   industry_type
 })
})

// receive the Browser Post API transaction results
app.post('/paymentResult', async (req, res) => {
 try {
   const result = req.body;

   const data = querystring.stringify(result);
   const dataObj = JSON.parse('{"' + decodeURI(data.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')

   paymentResult = dataObj

   res.render('result', {
     status: paymentResult.AUTH_RESP_TEXT
   })

   console.log('payment result', dataObj)

 } catch (error) {
   console.log('error:', error);

   res.status(400).json({
     data: 'Payment failed.'
   });
 }
});

// refund the payment payment using the Custom Pay API
app.get('/refundPayment', async (req, res) => {
 try {
     payload = {
       amount: Number(paymentResult.AUTH_AMOUNT),
       transaction: 123,
       batchID: 10000,
       industryType: 'E',
       cardEntryMethod: 'X'
     }

     const concat_payload = `/refund/${paymentResult.AUTH_GUID}` + JSON.stringify(payload)

     // generate the ePISignature following the instructions in the "How To Authenticate" section of the Custom Pay API Integration Guide
  
     headers={
         'BRIC': paymentResult.AUTH_GUID,
         'EPI-Id': process.env.EPI_ID,
         'EPI-Signature': epi_signature,
         'Content-Type': 'application/json',
         'EPI-Trace': 'test213'
     }

     try {
       const response = await fetch(`https://epi.epxuap.com/refund/${paymentResult.AUTH_GUID}`, {
           method: 'POST',
           body: JSON.stringify(payload),
           headers: headers
       });
  
       const data = await response.json()

       console.log('refund result', data)
  
       res.render('refundResult', {
           refundStatus: data.data.text
       })
  
     } catch (error) {
       console.log(error)
       res.status(400).json({
           error: 'An error occurred.'
       })
     }
 } catch (error) {
   console.log('error:', error);

   res.status(400).json({
     data: 'Refund failed.'
   });
 }
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
