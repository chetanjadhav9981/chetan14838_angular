const express = require('express')
const teamretroapp = express()
var cors = require('cors')
const port = 3434
// database connection settings

teamretroapp.use(express.urlencoded({extended:false}))
teamretroapp.use(express.json())
var mysqldb = require('mysql')

const { ValueTransformer } = require('@angular/compiler/src/util')
const e = require('cors')
const {json} = require('body-parser')


var connection = mysqldb.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3333,
    password: 'root',
    database: 'casestudy'
})
connection.connect()

teamretroapp.use(cors());   

//app.METHOD(PATH, HANDLER)
teamretroapp.get('/', (req, res) => {
    console.log("Team Retro Service Called")
  res.send('Retrospective Information Application')
})

teamretroapp.get('/retro/retrodescription/:sectionno',(req,res)=>{
     var selectSQL = 'Select sectionid,sectionname from SECTION'

     connection.query(selectSQL, function (err, rows, fields) {
        if (err) throw err

       console.log('Retros Fetched ', rows.length)
         res.send(rows)
    })
  connection.end()

})

teamretroapp.post('/retro/retrodescription',(req,res)=>{

  var retroid = req.body.retroid
  var sectionid = req.body.sectionid
  var descr=req.body.descr
 
  var insertSQL = "insert into RETRO_DETAIL (retroid,sectionid,descr) values(?,?,?)"

  connection.query(insertSQL,[retroid,sectionid,descr],
    function (err, rows, fields) {
      if (err) throw err

        // console.log(RetroId+" Registered for "+SectionId)

        res.send({"retroid":retroid,"sectionid":sectionid,"descr":descr})
    })
})

 teamretroapp.post('/retro/newsection',(req,res)=>{
   var sectionid = req.body.sectionid
   var sectionname = req.body.sectionname
 
   var insertSQL = "insert into SECTION (sectionid,sectionname) values(?,?)"

   connection.query(insertSQL,[sectionid,sectionname],
     function (err, rows, fields) {
       if (err) throw err

      console.log(sectionname+" Registered for "+sectionname)

         res.send({"sectionid":sectionid,"sectionname":sectionname})
     })
 })

teamretroapp.listen(port, () => {
  console.log(`Retro app started and listening at http://localhost:${port}`)
})