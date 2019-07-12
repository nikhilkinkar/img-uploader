// Configure Environment
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
    MongoClient,
    ObjectID
} = require('mongodb');

// DB connection function
const mongo = async (cb) => {
    try {
        await MongoClient.connect(process.env.DBURL, {
            useNewUrlParser: true
        }, async (err, client) => {
            if (err) throw err;
            let dba = await client.db('exceptionaire');
            await cb(dba);
            client.close();
        })
    } catch (error) {
        console.error(error);
    }
};

// Setup Express app
const app = express();
app.use(bodyParser.urlencoded({
    limit: '20mb',
    extended: true
}));
app.use(bodyParser.json({
    limit: '20mb'
}));
app.use(cors());

app.use(express.static(__dirname+'/public'));

// Express APIs
app.post('/upload', (req, res) => {
    try {
        mongo((dba) => {
            dba.collection('imgdb').insertMany(req.body, {}, (err, result) => {
                if (err) throw err;
                res.status(200).json(result.result);
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong at server.');
    }
})

app.get('/images', (req, res) => {
    try {
        mongo((dba) => {
            dba.collection('imgdb').find().toArray((err, result) => {
                if (err) throw err;
                res.status(200).json(result);
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong at server.');
    }
})

app.delete('/images/:id', (req, res) => {
    try {
        mongo((dba) => {
            dba.collection('imgdb').deleteOne({
                _id: ObjectID(req.params.id)
            }, (err, result) => {
                if (err) throw err;
                res.status(200).json(result);
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong at server.');
    }
})

// Start Server
app.listen(process.env.PORT, () => {
    console.log('Server Running at ', process.env.HOST + ':' + process.env.PORT);
});