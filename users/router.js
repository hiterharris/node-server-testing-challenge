const router = require('express').Router();

const Users = require('./model.js');

router.post('/', (req, res) => {
    Users.add()
    .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
});

router.get('/', (req, res) => {
    Users.find()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => res.send(err));

  });

// router.get('/', (req, res) => {
//     res.status(200).json({router: 'users'});
// });

module.exports = router;