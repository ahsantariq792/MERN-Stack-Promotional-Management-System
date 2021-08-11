// const { default: userEvent } = require('@testing-library/user-event');
const express=require('express');
const app=express();
const router=new express.Router();

let Promoshaheen = require('../models/promoshaheenmodels.js');



router.route('/').get((req,res)=>{
    Promoshaheen.find()
    .then(admdata=>res.json(admdata))
    .catch(err=>res.status(400).json('Error: ' + err));
}


)

router.route('/setpromoshaheen').post((req,res)=>{
    const title=req.body.title; 
    const type=req.body.type;
    const promocode = req.body.promocode;
    const restaurant = req.body.restaurant;
    const beforeprice=req.body.beforeprice;
    const afterprice=req.body.afterprice;
    const expirydate=req.body.expirydate;
    const newPromoshaheen= new Promoshaheen({
        title, 
        type,
        promocode,
        restaurant,
        beforeprice,
        afterprice,
        expirydate,
      })
      newPromoshaheen.save()
      .then(() => res.json('Promo added to Shaheen Shinwari!'))
      .catch(err => res.status(400).json('Error: ' + err));
    });
    
router.route('/:id').get((req, res) => {
    Promoshaheen.findById(req.params.id)
      .then(use => res.json(use))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//delete

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const table = await Promoshaheen.findByIdAndDelete(id)
  } catch (error) {
    console.log(error)
  }
})

//Here

module.exports=router;