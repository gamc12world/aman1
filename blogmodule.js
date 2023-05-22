import BLOG from './blog.js'
import  Router from 'express';
const Route=Router()
Route.get('/', (req, res) => {
    BLOG.find().sort({ createdAt: -1 })
      .then(result => {
        res.render('index', { blogs:result, title: 'All blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  });
  Route.post('/',(req,res)=>{
     const blog=new BLOG(req.body)
     console.log(blog);
      blog.save().then((Res)=>{
       res.redirect('/blogs');
      }).catch((er)=>{
        console.log(er);
      })
  })
   Route.get('/:id',(req,res)=>{
     const id=req.params.id
     BLOG.findById(id).then((Results)=>{
          res.render('detail',{blogs:Results,title:"blog by id"})
       }).catch((Err)=>{
        console.log(Err);
       })
   })
   Route.delete('/:id', (req, res) => {
    const id = req.params.id;
    BLOG.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/create' })
      })
      .catch(err => {
        console.log(err);
      });
  });
  Route.get('/:title',(req,res)=>{
    const title1=req.params.title
      BLOG.findBytitle({title:title1}).then((Results)=>{
        res.render('detail',{blogs:Results,title:"blog by title"})
      }).catch((err)=>console.log(err))
  })

  export default Route;