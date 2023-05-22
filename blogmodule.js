import BLOG from './blog.js'
import  Router from 'express';
const Route=Router()
Route.get('/blogs', (req, res) => {
    BLOG.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { blogs:result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });
  Route.post('/blogs',(req,res)=>{
     const blog=new BLOG(req.body)
     console.log(blog);
      blog.save().then((Res)=>{
       res.redirect('/blogs');
      }).catch((er)=>{
        console.log(er);
      })
  })
   Route.get('/blogs/:id',(req,res)=>{
     const id=req.params.id
     BLOG.findById(id).then((Results)=>{
          res.render('detail',{blogs:Results,title:"blog by id"})
       }).catch((Err)=>{
        console.log(Err);
       })
   })
   Route.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    BLOG.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/create' })
      })
      .catch(err => {
        console.log(err);
      });
  });

  export default Route;