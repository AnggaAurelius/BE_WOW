const { User } = require("../../models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("joi");

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const schema = joi.object({
            fullName: joi.string().min(3).required(),
            email: joi.string().email().min(6).required(),
            password: joi.string().min(8).required(),
        });

        const { error } = schema.validate(req.body);

        if ( error ) 
            return res.status(400).send({
                message: error.details[0].message,
            })

        const checkEmail = await User.findOne({
            where: {
                email,
            },
        });
        if (checkEmail)
            return res.status(400).send({
             message: "Email already Registered",
        })

        const hashedStrenght = 10;
        const hashedPassword = await bcrypt.hash(password, hashedStrenght);

        const user = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        const secretKey = "your-secret-key";
        const token = jwt.sign(
            {
            id: user.id
            },
            secretKey
        );

        res.send({
            status: "succes",
            message: "Register Succces",
            data: {
                user: {
                    email,
                    token, 
                },
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const schema = joi.object({
            email: joi.string().email().min(6).required(),
            password: joi.string().min(8).required(),
        });

        const { error } = schema.validate(req.body);
        if ( error ) 
            return res.status(400).send({
                message: error.details[0].message,
            })

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) return res.status(400).send({
            message: "Your Credentials is not valid"
        });

        const validPass = await bcrypt.compare(password, user.password);

        if(!validPass)
        return res.status(400).send({
            message: "Your password is not valid",
        })

        const secretKey = "your-secret-key";
        const token = jwt.sign(
            {
            id: user.id
            },
            secretKey
        );

        res.send({
            status: "succes",
            message: "Login Succcess",
            data: {
                user: {
                    email,
                    token, 
                },
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Server Error",
        });
    }
}