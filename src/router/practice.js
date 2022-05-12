const app   = express()
const port   = process.env.PORT || 3300
const router = express.Router()
const name   = "vikanshu chauhan"

const admin = express()
//Middle walre 
router.use(function(req,res,next){
     
    if(name==="vikanshu chauhan"){
        console.log('Hry ram')
        next()
    }
        
    else return
})
 

router.get('/evenst',(req,resp,next)=>{
    console.log('fer')
    resp.send('Hey buddy how r you !!!')
})

router.param('id',(req,resp,next,id,name)=>{
    console.log(id);
    console.log(name);
    next()
     
})


router.get('/user/:id',function(req,res){
    res.send("req.params.i")
})
