import Transaction from "../Models/Trans.js";
import transaction from "../Models/Trans.js";
import user from "../Models/User.js";  
import express from 'express';

const router = express.Router(); 

router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const newUser = new user(req.body);  
        console.log(newUser);
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

router.post('/login',async(req,res)=>{
    try{
        console.log(req.body);
        const {email,password}=req.body
        let loguser= await user.findOne({email:email,password:password})
        console.log(loguser);
        res.json(loguser)
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error:"failed to login"})
    }
})



router.get('/vuser',async(req,res)=>{
    let response=await user.find({usertype:'user'})
    console.log(response)
    res.json(response)
})
router.get('/vuserdetail/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id)
    let response=await user.findById(id)
    console.log(response)
    res.json(response)
})

router.put('/addacno/:id',async(req,res)=>{
   let id=req.params.id
   console.log(id);
   console.log(req.body);
   let response=await user.findByIdAndUpdate(id,req.body)
   res.json(response)
})
router.put('/manageuser/:id', async (req, res) => {
    let id = req.params.id;
    console.log(id);
    console.log(req.body);

    try {
        let response = await user.findByIdAndUpdate(id, req.body, { new: true });
        res.json(response);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Server Error');
    }
});

router.put('/editbalance/:id',async(req,res)=>{
    console.log('ttttttttt');
    let id=req.params.id
    console.log(id);
    console.log(req.body);
    let response=await user.findByIdAndUpdate(id,req.body)
    res.json(response)
    
})

router.post('/firstdep',async(req,res)=>{
    try{
        console.log(req.body)
        let newDep=new transaction(req.body)
        console.log(newDep,'new dep');
        let response=await newDep.save()
        res.json(response)
        console.log(response)
    }
    catch(e){
        res.json(e.message)
    }
})
router.post('/deposit',async(req,res)=>{
    try{
        console.log(req.body)
        let newTrans=new transaction(req.body)
        console.log(newTrans,'new Trans');
        let response=await newTrans.save()
        res.json(response)
        console.log(response)
    }
    catch(e){
        res.json(e.message)
    }
})



router.post('/user/transaction/:id', async (req, res) => {
    const { id } = req.params;
    const { trans, type } = req.body;

    try {
        const transaction = await Transaction.findById(id);

        if (!transaction) {
            return res.status(404).send('Transaction record not found.');
        }

        if (type === 'deposit') {
            transaction.amount += trans;
        } else if (type === 'withdraw') {
            transaction.amount -= trans;
        } else {
            return res.status(400).send('Invalid transaction type.');
        }

        await transaction.save();
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});


router.get('/vbalance/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id);
    let response=await transaction.find({userId:id})
    console.log(response);
    res.json(response)
})



export default router;
