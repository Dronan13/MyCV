const User = require('./../models/User')
const fs = require('fs')

module.exports = {
    add: (req, res) => {
        User.create({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            phone : req.body.phone,
            }, function(err, result) {
                if (err)
                    res.send(err);
                else
                {
                    User.find(function(err, user) {
                        if (err)
                        res.send(err)
                        res.json(user);
                    });
                }           
            });
        },
        
    
    one: (req, res) => {
        let id = req.params.id;
        User.findById(id, function(err, user) {
            if (err)
            res.send(err)
            res.json(user);
        });
    },

    all: (req, res) => {
        User.find(function(err, user) {
            if (err)
            res.send(err)
            res.json(user);
        });
    },

    update:(reg, res) => {

        let id = req.params.id;
        var data = {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            phone : req.body.phone
        }
        
        // save the user
        Employee.findByIdAndUpdate(id, data, function(err, user) {
            if (err) throw err;
            res.send('Successfully! User updated');
        });
    },

    delete: (req, res) => {
        User.remove({
            _id : id
            }, function(err) {
            if (err)
                res.send(err);
            else
                res.send('Successfully! User has been Deleted.'); 
            });
    }
}