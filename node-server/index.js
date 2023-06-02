const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))


app.post('/api/create', (request, response) => {
  let name = request.body.name || '';
  let username = request.body.username || '';
  let email = request.body.email || '';
  let password = request.body.password || '';
  let confirm_password = request.body.confirm_password || '';
  let agree = request.body.agree || "";

  data = `
    <h1 class="text-center">Account value</h1>
    <table class="table table-bordered">
      <tr>
        <td>Name</td>
        <td>${name}</td>
      </tr> 
      <tr>
        <td>Username</td>
        <td>${username}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>${email}</td>
      </tr> 
      <tr>
        <td>Password</td>
        <td>${password}</td>
      </tr>
      <tr>
        <td>Confirm Password</td>
        <td>${confirm_password}</td>
      </tr>
      <tr>
        <td>Agree</td>
        <td>${agree}</td>
      </tr>
    </table>
  `;

  response.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect('mongodb://localhost:27017/express-demo', {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.log(err));