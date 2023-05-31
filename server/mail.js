const nodemailer=require("nodemailer");
const express=require('express');
const dotenv = require("dotenv");
dotenv.config();
const trasporter=nodemailer.createTransport({
    service:'hotmail',
    auth:{
        user:process.env.mail,
        pass:process.env.pass
    }
});
const mailoptions={
    from:process.env.mail,
    to:"",
    subject:'UPDATED RELATED TO  AI-BUISNESS HELP',
    html:"",
};
const sendmail=async(user,service,message,firstname)=>{
    if(service==="" || message==="") return;
    mailoptions.to=process.env.toe;
    mailoptions.html=`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333333;
            text-align: center;
            margin-bottom: 20px;
          }
          p {
            color: #555555;
            margin-bottom: 10px;
          }
          .lead {
            background-color: #f2f2f2;
            padding: 10px;
            border-radius: 5px;
          }
          .img{
            margin:auto;
            width:80vw;
            height:auto
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>You have got a lead!</h1>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Name:</strong> ${firstname}</p>
          <p><strong>Email:</strong> ${user}</p>
          <p><strong>Message:</strong></p>
          <div class="lead">
            <p>${message}</p>
          </div>
        </div>
      </body>
    </html>
  `
    console.log(mailoptions)
    if(service!="" || message!=""){
        trasporter.sendMail(mailoptions,(error,info)=>{
            if(error){
                console.log(error);
            }
            else{
                console.log('Email sent: '+info.response);
            }
            
        });
    }
}


const mailoptions2={
    from:process.env.mail,
    to:"",
    subject:'THANK YOU FOR REGISTERING ',
    html:"",
};




const sendmail2=async(user,service,message,firstname)=>{
  if(service==="" || message==="") return;
  mailoptions2.to=user;
  mailoptions2.html=`
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;rs

          padding: 20px;
          background-color: #ffffff;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333333;
          text-align: center;
          margin-bottom: 20px;
        }
        p {
          color: #555555;
          margin-bottom: 10px;
        }
        .lead {
          background-color: #f2f2f2;
          padding: 10px;
          border-radius: 5px;
        }
        .img{
          margin:auto;
          width:80vw;
          height:auto
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${firstname} you have Succesfully Registered!</h1>
        <h3>Thank you for Choosing us !!!</h3>
        <p>Our Team will Contact you in 24 hours related to your ${service}</p>
        <p> Thank you for your continuous trust in our business. It brings us great joy to serve you. I hope we can continue to earn your business and if you have any comments or concerns, please let us know so we can help you better.</p>
      </div>
    </body>
  </html>
`
  console.log(mailoptions2)
  if(service!="" || message!=""){
      trasporter.sendMail(mailoptions2,(error,info)=>{
          if(error){
              console.log(error);
          }
          else{
              console.log('Email sent: '+info.response);
          }
          
      });
  }
}

module.exports=sendmail2;