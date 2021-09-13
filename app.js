const express =require("express")
const hbs=require("hbs")
const path=require('path')
const port=process.env.PORT || 3000 //PORT setup

const app=express();

const partialPath=path.join(__dirname,'../templates/partial')
const viewpath=path.join(__dirname,'../templates/view')


app.set('view engine','hbs')
app.set('views',viewpath)
app.use('/js',express.static(path.join(__dirname,'../public/js')))
hbs.registerPartials(partialPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'TIC TOC TOE'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Page'
    })
})

app.listen(port,()=>{
    console.log('server upto date')
})