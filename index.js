import Express from 'express'
import mongoose from 'mongoose'
import BLOG from './blog.js'
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
app.get('/blogs', (req, res) => {
  BLOG.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs:result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});
app.post('/blogs',(req,res)=>{
   const blog=new BLOG(req.body)
   console.log(blog);
    blog.save().then((Res)=>{
     res.redirect('/blogs');
    }).catch((er)=>{
      console.log(er);
    })
})
 app.get('/blogs/:id',(req,res)=>{
   const id=req.params.id
   BLOG.findById(id).then((Results)=>{
        res.render('detail',{blogs:Results,title:"blog by id"})
     }).catch((Err)=>{
      console.log(Err);
     })
 })
 app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  BLOG.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/create' })
    })
    .catch(err => {
      console.log(err);
    });
});
app.get('/create',(req,res)=>{
  res.render('create',{
    title:"creating for blog"
  })
})
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
app._router(ldsakdj)