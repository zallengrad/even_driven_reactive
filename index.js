const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.post('/', (req, res) => {
  res.json('Hello World!')
})

app.get('/login', (req, res) => {
    
    const username = 'zale';
    const password = 'zale';

    if(req.body.username === username){
        if(req.body.username === username){
            res.json({
                status : 'succes',   
            })
        } else {
            res.json({
                status : 'wrong password',   
            })
        }
    } else  {
        res.json({
            status : 'error, username not found',   
        })
    }
    
   
    res.json({
        status : 'succes',   
    })
  })  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})