const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/create', (req, res) => {
  let name = req.body.name || '';
  let username = req.body.username || '';
  let email = req.body.email || '';
  let password = req.body.password || '';
  let confirm_password = req.body.confirm_password || '';

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
    </table>
  `;

  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
