const express = require('express');
const router = express.Router();
const User = require('../models/users');
const multer = require('multer');
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    },
});

var upload = multer({
    storage: storage,
}).single("image");

// Insert a User in the database route
router.post('/add', upload, async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: req.file.filename,
        });

        await user.save();
        req.session.message = {
            type: "success",
            message: 'User added successfully!'
        };
        res.redirect("/");
    } catch (err) {
        res.json({ message: err.message, type: 'danger' });
    }
});

//Get All Users
router.get('/', async (req, res, next) => {
    try {
        const users = await User.find().exec();
        res.render('index', { title: 'Home Page', users: users });
    } catch (err) {
        res.json({ message: err.message });
    }
});

router.get('/add', (req, res, next) => {
    res.render('add_users', { title: 'Add Users' });
});

//Update Users
router.get("/edit/:id", async (req, res, next) => {
    try {
        let id = req.params.id;
        const user = await User.findById(id).exec();
        if (user == null) {
            res.redirect("/");
        } else {
            res.render('edit_users', {
                title: "Edit Users",
                user: user,
            });
        }
    } catch (err) {
        res.redirect("/");
    }
});

router.post('/update/:id', upload, async (req, res) => {
    let id = req.params.id;
    let new_image = "";
    if (req.file) {
        new_image = req.file.filename;

        try {
            fs.unlinkSync('./uploads/' + req.body.old_img);
        } catch (error) {
            console.log(error);
        }
    } else {
        new_image = req.body.old_img;
    }

    try {
        await User.findByIdAndUpdate(id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: new_image,
        });

        req.session.message = {
            type: "success",
            message: "User Updated Successfully",
        };
        res.redirect("/");
    } catch (err) {
        res.json({ message: err.message });
    }
});

//Delete Users
router.get("/delete/:id", async (req, res, next) => {
    let id = req.params.id;
    try {
        const result = await User.findByIdAndDelete(id).exec();
        if (result.image != '') {
            try {
                fs.unlinkSync("./uploads/" + result.image);
            } catch (err) {
                console.log(err);
            }
        }
        req.session.message = {
            type: "success",
            message: "Deleted Successfully",
        };
        res.redirect("/");
    } catch (err) {
        res.json({ message: err.message });
    }
})

module.exports = router;
