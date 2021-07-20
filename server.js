const express = require ('express');
const app = express();

//untuk manggil tabel di db nya
const { user_biodata } = require ('./models');
const { user_games } = require ('./models');
const { user_experiences } = require ('./models');

//untuk mengubah data yg masuk jadi json
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.set('view engine', 'ejs');

app.get('/dashboard', (req, res) => {
    user_game.findAll().then(
    res.render('viewDashboard', { user_game })
    );
});

app.get('/add/user', (req, res) => {
    res.render('createUser');
 })

app.post('/user/saved', (req, res) => {
    user_biodata.create({
        fullnama: req.body.fullnama,
        country: req.body.country,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }).then(user_biodata => res.redirect(301, '/dashboard'));
});

app.get( '/user/delete/:id' , (req, res) => {
    const id = req.params.id;
    user_game.destroy({
       where: {
          id
       }
    }).then(user_game => res.redirect(301, '/dashboard'));
 });

 app.get('/user/detail/:id', (req, res) => {
    const userId = req.params.id;

    user_biodata.findOne({
        where: {
            id: userId
        }
    }).then(user_biodata => res.render('userDetail', { user_biodata} )
    );

 })

 app.get('/user/update/:id', (req, res) => {
    const id = req.params.id;
     user_biodata.findOne({
        where: {
            id
        }
    }).then(user_biodata => res.render('userUpdate', { user_biodata} )
    );
 })

 app.post('/user/simpan', (req, res) => {
    user_biodata.create({
        fullname: req.body.fullname,
        country: req.body.country,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }).then(user_biodata => {
        user_game.create({
            user_game_id: user_biodata.id,
            username: req.body.username,
            country: req.body.country
        }).then(biodata => {
            res.redirect(301,'/dashboard')
        })
    });
});
app.listen(8000, () => console.log('apps berjalan di port 8000'));