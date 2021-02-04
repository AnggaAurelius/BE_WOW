const { User } = require("../../models");

exports.getUsers = async (req, res) => {
    try{
        const users = await User.findAll();
        
        res.send({
            status: "success",
            message: "Post Succesfully Retrives",
            data: {
                users,
            },
        });
    } catch (err){
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        })

    }
};