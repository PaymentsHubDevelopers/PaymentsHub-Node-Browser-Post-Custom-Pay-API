# Securely Embed Payments in a NodeJS App and Accept Refunds
This is a JavaScript application that uses Node.js to demonstrate accepting a payment with an ecommerce payment form using <a href='https://developer.paymentshub.com/products/card-not-present/browser-post'>Payments Hub's Browser Post API</a>, then using the returned transaction token to perform a refund on the sale using <a href=''>Payments Hub's Custom Pay API</a>. The code in this repository handles both the front-end and back-end payment process.

## Get Sandbox Credentials
To get started, create a free <a href='https://developer.paymentshub.com/auth/signup'>Payments Hub Developer Portal account</a>. This will allow you to get the sandbox credentials that are required to test the app. Log in to your account to view the official <a href='https://developer.paymentshub.com/products/card-not-present/browser-post/integration'>Browser Post API Integration Guide</a> and <a href='https://developer.paymentshub.com/products/full-featured/custom-pay-api/integration'>Custom Pay API Integration Guide</a>, then <a href='https://developer.paymentshub.com/contact'>contact</a> the Payments Hub Sales Engineering team to get sandbox credentials added to your Developer Portal account.

## Follow Along with the Tutorial
When you're ready to start building your app, you can follow along with [this tutorial](
https://developer.paymentshub.com/blog/tutorial-nodejs-browser-post-custom-pay-api) for step-by-step instructions.

## Completed App
Your completed ecommerce app will look similar to the following. Click the Pay button to open the payment form:

![payments-hub-node-browser-post-custom-pay-api](https://github.com/PaymentsHubDevelopers/PaymentsHub-Node-Browser-Post-Custom-Pay-API/assets/136620102/96b42337-77e5-4c6d-9b9e-46b0fffa8b67)

Click the "Submit" button to submit a payment:

![payments-hub-node-browser-post-custom-pay-api-2](https://github.com/PaymentsHubDevelopers/PaymentsHub-Node-Browser-Post-Custom-Pay-API/assets/136620102/ba278062-782e-4a56-ac7c-bfd1d5fa0563)

On the payment result page, customers have the option to request a refund:

![payments-hub-node-browser-post-custom-pay-api-3](https://github.com/PaymentsHubDevelopers/PaymentsHub-Node-Browser-Post-Custom-Pay-API/assets/136620102/4e510e13-a4ff-420e-ba8d-0cc1e9819ad7)

The results of the refund will be displayed after processing is complete:

![payments-hub-node-browser-post-custom-pay-api-4](https://github.com/PaymentsHubDevelopers/PaymentsHub-Node-Browser-Post-Custom-Pay-API/assets/136620102/77a84a14-72dc-4832-a99f-7cd40371826c)
