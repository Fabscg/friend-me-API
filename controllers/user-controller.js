const { User } = require('../models')

const userController = {
    getAllUser(req, res) {
        User.find({})
        .select('__v')
        .sort({ _id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400)
        })
    },
    

// get one user
    getUserById({ params }, res) {
        User.findOne({_id: params.id })
        .populate({
            path:'thoughts',
            select: '__v'
        })
        .select('__v')
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({ message: 'No user found with this id! '})
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    },

//create new user
    createUser({ body }, res){
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }
}

//createFriend function goes here



// deleteFriend fucntion goes heres



module.exports = userController;