const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
global.Model = require('./api/models/itemModel')
const routes = require('./api/routes/Route')
const cors = require('cors')
// const routes2 = require('./api/routes/clientRoute')
// global.Client = require('./api/models/clientModel')



const app = express()

const port =  3000
mongoose.connect('mongodb://localhost:27017/CameraBox', {useNewUrlParser: true})
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

routes(app)
// routes2(app)
app.listen(port)

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

console.log('RESTful API server started on: ' + port)
console.log(`Server started on port http://localhost:${port}`);
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






// const express = require('express')
// const app = express()
// const port = 3000

// app.post('/', (req, res) => {
//   res.send('Hello world')
// })

// app.listen(port, () => { 
//   console.log(`Example app listening at http://localhost:${port}`)
// })