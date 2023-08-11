// const express = require("express");
//
// const app = express();
//
// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 4555;
//
// app.use(cors());
//
// app.use(express.json());
//
// app.use(require("./routes/record"));
//
// // Get MongoDB driver connection
// const dbo = require("./db/conn");
//
// app.listen(port, () => {
//     // Perform a database connection when server starts
//     dbo.connectToServer(function (err) {
//         if (err) console.error(err);
//
//     });
//     console.log(`Server is running on port: ${port}`);
// });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const postModel = require("./models/schema");
const ObjectId = require('mongoose').Types.ObjectId;
const methodOverride = require('method-override');

app.use(express.json());
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

// Add method override middleware
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

app.get('/read', async (req, res) => {
    try {
        const posts = await postModel.find();
        //console.log('Fetched posts:', posts); // Add this line
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.put('/update/:id', async (req, res) => {
    const idToUpdate = req.params.id;
    const { expectedRent } = req.body;

    try {
        // Convert the string id to an ObjectId
        const objectIdToUpdate = mongoose.Types.ObjectId(idToUpdate);

        const updatedPost = await postModel.findByIdAndUpdate(objectIdToUpdate, {
            expectedRent, // Update the field you want to edit (expectedRent in this case)
        }, { new: true });
        res.json({message: "rent updated"});
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
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
    // console.log('Server started on port 3002');
});

module.exports = app;
//mongodb+srv://subletuser:sublet123@cluster0.45y9pic.mongodb.net/Cluster0?retryWrites=true&w=majority