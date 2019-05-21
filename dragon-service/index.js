const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://dragons123:cgmBl3sa5nCZgDaS@dragons-nwfxm.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "Tracker";

const uri = "/api/dragons";
const uri2 = "/api/colors";

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// Get all Dragons

app.get(`${uri}`, (request, response) => {
    collection.find({}, {_id: 0}).toArray((error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

// Get Dragon by ID
app.get(`${uri}/:id`, (request, response) => {
    collection.findOne({ "dragonId": +request.params.id },{_id: 0}, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

// Add Dragon
app.post(`${uri}`, (request, response) => {
    collection.insertOne(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
});

// Update Dragon
app.put(`${uri}/:id`), (request, response) => {
    collection.findOneAndUpdate(
        console.log(request.params.id),
        { "dragonId": +request.params.id },
        request.body, 
        {new: true},
        (error, result) => {
            if (error) {
                response.status(500).send(error);
            }
            console.log(result);
            response.status(200).json(result);
        }
    )
}

// Delete Dragon
app.delete(`${uri}/:id`), (request, response) => {
    collection.remove(
        {"dragonId": +request.params.id}, (error, dragon) => {
            if (error) {
                response.status(400).send(error);
            }
            response.status(200).json({ message: "Dragon successfully deleted" });;
        }
    )
}

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("Dragons");
        collectionColors = database.collection("Colors");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});



// let dragons = [
//     {id: 3864048, name: 'Stoli', gender: 'Male', breed: 'Nocturne', primary_color: 'Obsidian', primary_gene: 'Wasp',
//     secondary_color: 'Azure', secondary_gene: 'Bee', tertiary_color: 'Blue', tertiary_gene: 'Stained', flight: 'Shadow',
//     eye_type: 'Common', breeding_pair: true, generation_one: true, mate: 'Etera',}, 
//     {id: 29572379, name: 'Etera', gender: 'Female', breed: 'Nocturne', primary_color: 'Obsidian', primary_gene: 'Wasp',
//     secondary_color: 'Teal', secondary_gene: 'Bee', tertiary_color: 'Cerulean', tertiary_gene: 'Stained', flight: 'Lightning',
//     eye_type: 'Common', breeding_pair: true, generation_one: false, mate: 'Stoli',}, 
//     {id: 43029482, name: 'Isa', gender: 'Female', breed: 'Wildclaw', primary_color: 'Cerulean', primary_gene: 'Python',
//     secondary_color: 'Radioactive', secondary_gene: 'Trail', tertiary_color: 'Radioactive', tertiary_gene: 'Ghost', flight: 'Light',
//     eye_type: 'Unusual', breeding_pair: true, generation_one: false, mate: 'Odell',},
//     {id: 42694825, name: 'Odell', gender: 'Male', breed: 'Wildclaw', primary_color: 'Teal', primary_gene: 'Python',
//     secondary_color: 'Radioactive', secondary_gene: 'Trail', tertiary_color: 'Radioactive', tertiary_gene: 'Ghost', flight: 'Lightning',
//     eye_type: 'Common', breeding_pair: true, generation_one: false, mate: 'Isa',}, 
//     {id: 50462051, name: 'Nyktos', gender: 'Male', breed: 'Nocturne', primary_color: 'Cerulean', primary_gene: 'Starmap',
//     secondary_color: 'Cerulean', secondary_gene: 'Constellation', tertiary_color: 'Charcoal', tertiary_gene: 'Stained', flight: 'Shadow',
//     eye_type: 'Swirl', breeding_pair: false, generation_one: false, mate: '',},
//     {id: 51186426, name: 'Speirr', gender: 'Male', breed: 'Coatl', primary_color: 'Teal', primary_gene: 'Starmap',
//     secondary_color: 'Teal', secondary_gene: 'Constellation', tertiary_color: 'Raspberry', tertiary_gene: 'Stained', flight: 'Lightning',
//     eye_type: 'Common', breeding_pair: true, generation_one: false, mate: 'Mido',},
//     {id: 51351517, name: 'Mido', gender: 'Female', breed: 'Wildclaw', primary_color: 'Cerulean', primary_gene: 'Starmap',
//     secondary_color: 'Cerulean', secondary_gene: 'Constellation', tertiary_color: 'Platinum', tertiary_gene: 'Stained', flight: 'Lightning',
//     eye_type: 'Common', breeding_pair: true, generation_one: false, mate: 'Speirr',}
// ];

// // I'm @ 24:09 in the video

// app.use(bodyParser.json());
// app.use(BodyParser.urlencoded({ extended: true }));

// // getDragons OR searchDragons
// // ${uri}/?name=${term}
// app.get(uri, (req, res) => {
//     res.status(status.OK).json(dragons);
// } );

// // get Dragon by id
// app.get(`${uri}/:id`, (req, res) => {
//     res.status(status.OK).json(
//         dragons.filter(dragon => dragon.id === req.params.id)[0]
//         );
// });

// // updateDragon
// app.put(uri, (req, res) => {
//     req.json.id
//     dragons = dragons.map((dragon) => {
//        if(dragon.id === req.json.id) return Object.assign({}, dragon, {
//            id: req.json,id,
//            name: req.json.name,
//            gender: req.json.gender,
//            breed: req.json.reed,
//            primary_color: req.json.primary_color,
//            primary_gene: req.json.primary_gene,
//            secondary_color: req.json.secondary_color,
//            secondary_gene: req.json.secondary_gene,
//            tertiary_color: req.json.tertiary_color,
//            tertiary_gene: req.json.tertiary_gene,
//            flight: req.json.flight,
//            eye_type: req.json.eye_type,
//            breeding_pair: req.json.breeding_pair,
//            generation_one: req.json.generation_one,
//            mate: req.json.mate
//        }
//        );
//        return dragon;
//     })
//     res.status(200).json({'message': 'ok'});
// });


// // addDragon
// app.post(uri, (req, res) => {
//     dragons.push({id: req.json.id, dragon: req.json.draon});
//     res.status(201).json(dragons);
// });

// // deleteDragon by id
// app.delete(`${uri}/:id`, (req, res) => {
//     dragons = dragons.filter(dragon => dragon.id !== req.params.id)
// });