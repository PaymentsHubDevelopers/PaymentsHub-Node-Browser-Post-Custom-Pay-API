# Securely Embed Payments in a NodeJS App and Accept Refunds
This is a JavaScript application that uses Node.js to demonstrate accepting a payment with an ecommerce payment form using <a href='https://developer.paymentshub.com/products/card-not-present/browser-post'>Payments Hub's Browser Post API</a>, then using the returned transaction token to perform a refund on the sale using <a href=''>Payments Hub's Custom Pay API</a>. The code in this repository handles both the front-end and back-end payment process.

## Get Sandbox Credentials
To get started, create a free <a href='https://developer.paymentshub.com/auth/signup'>Payments Hub Developer Portal account</a>. This will allow you to get the sandbox credentials that are required to test the app. Log in to your account to view the official <a href='https://developer.paymentshub.com/products/card-not-present/browser-post/integration'>Browser Post API Integration Guide</a>, then <a href='https://developer.paymentshub.com/contact'>contact</a> the Payments Hub Sales Engineering team to get sandbox credentials added to your Developer Portal account.

## Follow Along with the Tutorial
Your completed ecommerce app will look similar to the following. Click the "Pay Now" button to open the payment form:

![payments-hub-node-browser-post-custom-pay-api](https://github.com/PaymentsHubDevelopers/PaymentsHub-Node-Browser-Post-Custom-Pay-API/assets/136620102/8d8214b3-d202-4a9e-831c-d371d20028ab)

Click the "Submit" button to submit payment and complete a sale:

![payments-hub-node-browser-post-custom-pay-api-2](https://github.com/PaymentsHubDevelopers/PaymentsHub-Node-Browser-Post-Custom-Pay-API/assets/136620102/f3a6056a-6540-41cd-8214-71438a3f5f52)

On the payment result page, customers have the option to request a refund:

![payments-hub-node-browser-post-custom-pay-api-3](https://github.com/PaymentsHubDevelopers/PaymentsHub-Node-Browser-Post-Custom-Pay-API/assets/136620102/2e25dae8-0ead-4526-844d-e810bb0202dc)

The results of the refund will be displayed after processing is complete:

![payments-hub-node-browser-post-custom-pay-api-4](https://github.com/PaymentsHubDevelopers/PaymentsHub-Node-Browser-Post-Custom-Pay-API/assets/136620102/9ad6badb-1291-444c-81b3-0061adaebba3)
