const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const postModel = require("./models/schema");
const ObjectId = require('mongoose').Types.ObjectId;
const methodOverride = require('method-override');
// const bodyParser = require('body-parser');


app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());
// app.use(bodyParser.json());
// var jsonParser = bodyParser.json()
// app.use(jsonParser);



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

// app.get('/read/filter', async (req, res) => {
//     try {
//         const residenceType = req.query.residenceArea; // Get the residenceType from query parameter
//         let posts;
//
//         if (residenceType) {
//             posts = await postModel.find({ residenceArea: residenceType }); // Filter by residenceType
//         } else {
//             posts = await postModel.find();
//         }
//
//         res.json(posts);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });



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

// //Filter
// // Assuming you have a route like this
// app.get('/listings', async (req, res) => {
//     try {
//         const { residenceArea } = req.query;
//         let query = {};
//
//         if (residenceArea) {
//             query = { residenceArea };
//         }
//
//         const listings = await Listing.find(query);
//         res.json(listings);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });



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






// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const cors = require('cors');
// const postModel = require("./models/schema");
// const ObjectId = require('mongoose').Types.ObjectId;
// const methodOverride = require('method-override');
//
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
//
//
// app.use(express.json());
// app.use(cors());
//
// const uri = 'mongodb+srv://parthsehtiya:qwerty2024@assignment4.8wzwdyg.mongodb.net/?retryWrites=true&w=majority';
//
// async function connect() {
//     try {
//         await mongoose.connect(process.env.uri || uri, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error(error);
//     }
// }
//
// connect();
//
// // Add method override middleware
// app.use(methodOverride('_method'));
//
// app.post('/insert', async (req, res) => {
//
//     const { name, contact, residenceArea, roomType, expectedRent, description, image } = req.body;
//
//     const post = new postModel({
//         name, contact, residenceArea,roomType, expectedRent ,description, image,
//     });
//
//     try {
//         const savedPost = await post.save();
//         res.status(201).json(savedPost);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
//
// app.get('/read', async (req, res) => {
//     try {
//         const posts = await postModel.find();
//         //console.log('Fetched posts:', posts); // Add this line
//         res.json(posts);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
//
// //new API endpoint for image upload
// app.post('/upload', upload.single('image'), async (req, res) => {
//     try {
//         // req.file contains the uploaded image file
//         const imagePath = req.file.path;
//
//         // Save imagePath to the database or use it as needed
//         // For example, you can associate imagePath with a specific listing
//
//         res.status(201).json({ message: 'Image uploaded successfully' });
//     } catch (error) {
//         console.error('Image upload error:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
//
// app.put('/update/:id', async (req, res) => {
//     const idToUpdate = req.params.id;
//     const { expectedRent } = req.body;
//
//     try {
//         // Convert the string id to an ObjectId
//         const objectIdToUpdate = mongoose.Types.ObjectId(idToUpdate);
//
//         const updatedPost = await postModel.findByIdAndUpdate(objectIdToUpdate, {
//             expectedRent, // Update the field you want to edit (expectedRent in this case)
//         }, { new: true });
//         res.json({message: "rent updated"});
//         if (!updatedPost) {
//             return res.status(404).json({ error: 'Post not found' });
//         }
//
//         res.json(updatedPost);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
//
//
//
// app.delete('/delete/:id', async (req, res) => {
//     const { id } = req.params;
//     console.log('Received DELETE request:', req.params.id);
//
//     try {
//         if (!ObjectId.isValid(id)) {
//             return res.status(400).json({ error: 'Invalid ObjectId format' });
//         }
//
//         await postModel.findByIdAndDelete(new ObjectId(id));
//         res.json({ message: "item deleted" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });
//
//
// app.listen(4555, () => {
//     // console.log('Server started on port 3002');
// });
//
// module.exports = app;
// //mongodb+srv://subletuser:sublet123@cluster0.45y9pic.mongodb.net/Cluster0?retryWrites=true&w=majority