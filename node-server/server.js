const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
global.Item = require('../node-server/api/models/itemModel')
const routes = require('./api/routes/itemRoutes')
const cors = require('cors')

const app = express()
const port =  process.env || 3000
mongoose.connect('mongodb://localhost:27017/Sasom', {useNewUrlParser: true})
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

routes(app)
app.listen(port)

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

console.log('RESTful API server started on: ' + port)

// app.post('/api/signUp', (request, response) => {
//   let form = request.body;
//   let data ={
//     name: form.name || '',
//     username: form.username || '',
//     email: form.email || '',
//     password: form.password || '',
//     agree: form.agree || false
//   }
//   SignUp.create(data, err => {
//     if (!err) {
//       response.send(true)
//     }
//     else{
//       console.log(err)
//       response.send(false)
//     }
//   })
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });


// const express = require('express')
// const app = express()
// const port = 3000

// app.post('/', (req, res) => {
//   res.send('Hello world')
// })

// app.listen(port, () => { 
//   console.log(`Example app listening at http://localhost:${port}`)
// })