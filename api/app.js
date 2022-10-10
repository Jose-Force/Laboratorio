const express = require('express')
const app = express()

const modelCase = require('./models').Case
const modelNote = require('./models').Note

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.post('/create', (req,res)=>{
  modelCase.create(req.body)
    .then((data)=>{
      res.json({case:data})
    })
    .catch((error)=>{
      res.json({error:error})
    })
})

app.post('/createNote', (req,res)=>{
  modelNote.create(req.body)
    .then((data)=>{
      res.json({case:data})
    })
    .catch((error)=>{
      res.json({error:error})
    })
})

app.get('/notes', (req,res)=>{
  modelNote.findAll({
  })
  .then((data)=>{
    res.json({case:data})
  })
  .catch((error)=>{
    res.json({error:error})
  })
})

app.put('/edit/:id', (req,res)=>{
  modelNote.update( req.body,{
      where:{id : req.params.id}
  }
  )
  .then((data)=>{
    res.json({case:data})
  })
  .catch((error)=>{
    res.json({error:error})
  })
})

app.listen(3001, ()=>{
  console.log('Server up runnig in http://localhost:3001')
})