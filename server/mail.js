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
  <!DOCTYPE html>
<html>

<head>
  <style>
    /* CSS for Animation */
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* CSS for UI/UX */
    body {
      background-color: #f3f3f3;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      animation: fadeIn 1s ease-in-out;
    }

    h1 {
      color: #333333;
      font-size: 28px;
      font-weight: bold;
      margin-top: 0;
      margin-bottom: 20px;
    }

    p {
      color: #666666;
      font-size: 18px;
      line-height: 1.5;
      margin-bottom: 20px;
    }

    .image {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
      border-radius: 4px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #4caf50;
      color: #ffffff;
      text-decoration: none;
      border-radius: 4px;
      font-size: 16px;
      transition: background-color 0.3s ease;
    }

    .button:hover {
      background-color: #45a049;
    }

    /* Responsive Styles */
    @media only screen and (max-width: 600px) {
      .container {
        padding: 20px;
      }
      h1 {
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
      .button {
        font-size: 14px;
      }
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Thank You for Choosing Us,${firstname}!</h1>
    <p>We appreciate your decision to partner with our AI business. Our team will review your request and get back to you within 24 hours.</p>
    <p>In the meantime, if you have any urgent questions or concerns, feel free to reach out to us.</p>
    <img class="image" src="https://www.analyticsinsight.net/wp-content/uploads/2021/08/How-can-AI-transform-business-intelligence.jpg" alt="AI Business">
    <p>Best regards,<br>Your AI Business Team</p>
    <a class="button" href="mailto:info@yourbusiness.com">Contact Us</a>
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