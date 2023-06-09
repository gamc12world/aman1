import Express from 'express'
import mongoose from 'mongoose'
import Route from './blogmodule.js'
const app=Express()
app.listen(3000)
const mongo='mongodb+srv://aman1:aman1234@aman.fqrgtjd.mongodb.net/anish?retryWrites=true&w=majority'
mongoose.connect(mongo).then((Results)=>{
  console.log('connected to db');
}).catch((err)=>{
  console.log(err);
})
app.set('view engine','ejs')
app.use(Express.static('public'))
app.use(Express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
  const blogs=[
    {title:"iron man",snippet:"is an superhero",body:"kdjlsfjsdjlfk;",subtitle:12}
  ]
  res.render('index',{
    title:"index page"
  ,blogs})
})
app.get('/create',(req,res)=>{
  res.render('create',{
    title:"creating for blog"
  })
})
app.use('/blogs',Route)
app.get('/about',(req,res)=>{
  res.render('about',{
    title:"about page"
  })
})
app.use((req,res)=>{
  res.status(404).render('404',{
    title:"404 page"
  })
})