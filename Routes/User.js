import user from "../Models/User.js";  // Correct capitalization of the model
import express from 'express';

const router = express.Router();  // Initialize the router correctly

router.post('/register', async (req, res) => {
    try {
        console.log(req.body);
        const newUser = new user(req.body);  // Use `User` with correct capitalization
        console.log(newUser);
        const savedUser = await newUser.save();
        console.log(savedUser);
        res.json(savedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

router.get('/vuser',async(req,res)=>{
    let response=await user.find()
    console.log(response)
    res.json(response)
})
router.get('/vuserdetail/:id',async(req,res)=>{
    let id=req.params.id
    console.log(id)
    let response=await user.findById()
    console.log(response)
    res.json(response)
})

export default router;
