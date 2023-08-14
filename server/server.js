const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const postModel = require("./models/schema");
const ObjectId = require('mongoose').Types.ObjectId;
const methodOverride = require('method-override');


app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());



const uri = 'mongodb+srv://parthsehtiya:qwerty2024@assignment4.8wzwdyg.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(process.env.uri || uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.use(methodOverride('_method'));

app.post('/insert', async (req, res) => {

    const { name, contact, residenceArea, roomType, expectedRent, description, image } = req.body;

    const post = new postModel({
        name, contact, residenceArea,roomType, expectedRent ,description, image,
    });

    try {
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});




app.get('/read/:residenceArea', async (req, res) => {
    const residence = req.params.residenceArea;
    try {
        let posts;
        if (residence === "all") {
            posts = await postModel.find();
        } else {
            posts = await postModel.find({ residenceArea: residence }); // Filter by residenceType
        }        //console.log('Fetched posts:', posts); // Add this line
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.put('/update/:id', async (req, res) => {
    // console.log(req)
    const {id} = req.params;
    const rent  = req.body.expectedRent;
    try {
        const updatedRent = await postModel.findOneAndUpdate(
            {"_id":id},
            {$set:{"expectedRent": rent}},
            {returnNewDocument: true}
        );
        res.json(updatedRent);
        console.log(updatedRent)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred.' });
    }
});


app.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    console.log('Received DELETE request:', req.params.id);

    try {
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ObjectId format' });
        }

        await postModel.findByIdAndDelete(new ObjectId(id));
        res.json({ message: "item deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(4555, () => {
    console.log('Server started on port 4555');
});

module.exports = app;



