const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    //make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        console.log('response',response.data);
        res.render("index",{ users: response.data});
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.add_user = (req,res)=>{
    res.render('add_user');
}

exports.update_user = (req,res)=>{
    axios.get('http://localhost:3000/api/users',{ params : { id : req.query.id}})
    .then(function(userdata){
        console.log('userdata.data',userdata.data);
        res.render("update_user",{ user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })

}