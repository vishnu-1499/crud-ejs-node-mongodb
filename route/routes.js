const express = require("express");
const router = express.Router();

const user = require("../module/model");

//Get Method

router.get("/", (req,res) =>{
   // res.send("working")
    try {
        res.send("Helloooo");
    } catch (error) {use
        res.send("Error Occured");
    }
})


//Create
router.post("/create", async(req,res) =>{
    // const userBody = req.body;
    // userBody.age = 10;
    // console.log("userBody=========", userBody);
    const User = new user ({
        name: req.body.name,
        age: req.body.age ,
        contact: req.body.contact
    })
    try {
    const value = await User.save()
    // const value = await user.create(userBody);
        res.send({message: "Created",value})
    } catch (error) {
        res.send({message:"NOT Created"});
    }
})


router.get("/user", async(req,res) =>{
        res.render("user");
})

//Update
router.post('/update/:id',async(req,res)=>{
    let id = req.params.id;
    console.log("userId===",id);
    const edit = {
        name : req.body.name,
        age: req.body.age,
        contact: req.body.contact
    }
    try {
        const userId = await user.findOneAndUpdate({_id:id},{$set : edit})
        res.send({message:"Updated",userId});
        // res.render("edit", { data: userId });
        console.log(userId);
    } catch (error) {
        res.send({message:"NOT Updated"});
    }
});

router.get('/edit/:id', async(req, res) => {
    let userId = req.params.id
    const particularUser = await user.findById({_id:userId})
    // console.log(particularUser);
    res.render('edit', { user: particularUser });
  });

//Delete

router.post("/delete/:id",async(req,res) =>{
    let id = req.params.id;
    try {
        const value = await user.findByIdAndRemove({_id:id})
        res.send({message:"Deleted",value});
    } catch (error) {
        res.send({message:"NOT Deleted"});
    }
})        




//Show
router.get("/read", async(req,res) => {

    try {
        const value = await user.find()
        res.render("index",{"set": value})
    } catch (error) {
        res.send({message:"NOT Read"});
    }
})




module.exports = router;