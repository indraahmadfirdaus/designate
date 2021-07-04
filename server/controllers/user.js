const { User } = require('../models')

const { validatePassword } = require("../helpers/bcrypt");

const { generateToken } = require("../helpers/jwt");

class UserController {
    static async register(req, res, next) {
        try {
            let {
                email,
                password,
                username,
                avatar
            } = req.body;
            const newUser = await User.create({
                email,
                password,
                username,
                avatar
            });

            res.status(201).json({
                id: newUser.id,
                email: newUser.email,
                username: newUser.username
            });

        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {

            const {
                email,
                password
            } = req.body;

            const findUser = await User.findOne({
                where: {
                    email,
                },
            });

            if (!findUser) {
                // next buat user not found (invalid email / password)
                throw {
                    status: 400,
                    message: 'invalid email / password'
                }

            } else {
                if (validatePassword(password, findUser.password)) {

                    const access_token = generateToken({
                        id: findUser.id,
                        email: findUser.email,
                    });

                    res.status(200).json({
                        id: findUser.id,
                        email: findUser.email,
                        access_token
                    });
                } else {
                    throw {
                        status: 400,
                        message: 'invalid email / password'
                    }
                }
            }
        } catch (err) {
            // next error 500 err.message || internal server error
            next(err)
        }
    }

    static async getUsers(req, res, next) {
        try {
            const users = await User.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            
            res.status(200).json(users)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = UserController