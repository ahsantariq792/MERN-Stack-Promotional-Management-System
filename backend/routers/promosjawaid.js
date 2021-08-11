// const { default: userEvent } = require('@testing-library/user-event');
const express=require('express');
const app=express();
const router=new express.Router();

let Promojawaid = require('../models/promojawaidmodels.js');



router.route('/').get((req,res)=>{
    Promojawaid.find()
    .then(admdata=>res.json(admdata))
    .catch(err=>res.status(400).json('Error: ' + err));
}


)

router.route('/setpromojawaid').post((req,res)=>{
  console.log("ERROR")
    const title=req.body.title; 
    const type=req.body.type;
    const promocode = req.body.promocode;
    const restaurant = req.body.restaurant;
    const beforeprice=req.body.beforeprice;
    const afterprice=req.body.afterprice;
    const expirydate=req.body.expirydate;
    const newPromojawaid= new Promojawaid({
        title, 
        type,
        promocode,
        restaurant,
        beforeprice,
        afterprice,
        expirydate,
      })
      newPromojawaid.save()
      .then(() => res.json('Promo added to Jawaid Nehari !'))
      .catch(err => res.status(400).json('Error: ' + err));
    });
    
router.route('/:id').get((req, res) => {
    Promojawaid.findById(req.params.id)
      .then(use => res.json(use))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//delete

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const table = await Promojawaid.findByIdAndDelete(id)
  } catch (error) {
    console.log(error)
  }
})

//Here


    

// router.post('/login',async (req,res)=>{
//     // console.log(req.body)
//     // res.json( {message:"awesome"})
//     try {
       
//         const {username,password}=req.body;
//         if(!username || !password){
//             return res.status(400).json({error:"Plz Filled all the required fields"})
//         }
//         const user_login= await User.findOne({username:username});

//         if(user_login){
//             const isMatch= password==user_login.password;
            
//            const token= await user_login.generateAuthToken();

//           console.log(token)
//         if(!isMatch){
//             res.status(400).json({error:"invalid credentials"});
//         } else{
//             res.status(400).json({error:"success"});
//         } 
//          }else{
//         res.json({message:"no found"})
//        }
    
        
       
//     } catch (error) {
//         console.log(error)
//     }
// })





module.exports=router;