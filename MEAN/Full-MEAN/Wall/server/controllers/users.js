var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    loginUser: (req, res) => {
        console.log("POST DATA: ", req.body);
        if(req.body.userName){
            User.findOne({userName: (req.body.userName)})
                .then(user => {
                    if(!user){
                        console.log("no user");
                        var newUser = new User({userName: req.body.userName})
                        newUser.save()
                            .catch((err)=>{
                                    console.log("something went wrong")
                            })
                            .then(()=>{
                                    console.log("User Saved", newUser.userName,newUser._id);
                                    req.session.userName = newUser.userName
                                    req.session.userid = newUser.id
                                    console.log("Saved to Session::::::", req.session.userName,req.session.userid);
                                    res.json({"userName":req.session.userName, "userid":req.session.userid})
                            })
                    } else{
                        req.session.userName = user.userName
                        req.session.userid = user.id
                        console.log("Saved to Session(In db)::::::", req.session.userName,req.session.userid);
                        res.json({"userName":req.session.userName, "userid":req.session.userid})
                    }
            })
        } else {
            console.log("No name given");
			res.status(500).json("No name given")
		}
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect("/")
    },
    loggedInUser: (req, res) => {
        console.log("Session(logged in user):", req.session.userName,req.session.userid);
        res.json({id: req.session.userid, userName:req.session.userName})
    }
}
