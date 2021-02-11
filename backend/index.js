const firebase = require("firebase");
const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = 8000;

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
};

var fire_app = firebase.initializeApp(firebaseConfig);

const db = fire_app.firestore();

app.get("/Templates", async (req, res) => {

    try {
        let collection = req.body.collection
        let document = req.body.document

        let templates = []

        let snapShot = await db.collection("Templates").doc(`${document}`).collection(`${collection}`).get()

        snapShot.forEach(doc => {

            let id = doc.id
            let data = doc.data()
            templates.push({ id, ...data })

        })

        res.status(200).send(JSON.stringify(templates));
    }
    catch (error) {
        res.status(400).send("Bad Request")
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



