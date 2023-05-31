const express = require("express");
const moongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path=require("path");
const { default: mongoose } = require("mongoose");
const { urlencoded } = require("body-parser");
const app = express();
// const sendmail=require("./mail");
const sendmail2=require("./mail");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port=process.env.PORT|| 1337;
const static_path=path.join(__dirname,"../client");
app.use(express.static(static_path));

const start=async()=>{
  mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    app.listen(port,()=>{
      console.log(`server started listening on port ${port}`)
  })  
}


const details=require('./details');

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.post('/details/new',async(req,res,next)=>{
    const reqd_details=new details({
    name: req.body.name,
    email: req.body.email,
    service: req.body.service,
    message:req.body.message
  })
  await reqd_details.save();
  // await sendmail(req.body.email,req.body.service,req.body.message,req.body.name);
  await sendmail2(req.body.email,req.body.service,req.body.message,req.body.name)
  console.log(reqd_details);
// res.send(reqd_details);
const index_path=path.join(__dirname,"../client");
res.send(`<style>
body {
  text-align: center;
  padding: 40px 0;
  background: #EBF0F5;
}
h1 {
  color: #88B04B;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
  }
  p {
    color: #404F5E;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-size:20px;
    margin: 0;
  }
i {
  color: #9ABC66;
  font-size: 100px;
  line-height: 200px;
  margin-left:-15px;
}
.card {
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #C8D0D8;
  display: inline-block;
  margin: 0 auto;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #88B04B;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: #679640;
}

</style>
<body>
<div class="card">
<div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
  <i class="checkmark">✓</i>
</div>
  <h1>Success</h1> 
  <p>We received your request;<br/> we will be in touch shortly!</p>
  <button onclick="location.href='/index.html'"> BACK TO HOME </button>
</div>
</body>`);
})
start();