const { verifyToken } = require("../helpers/jwt");

const { User, Article } = require("../models")

async function authentication(req, res, next) {
    try {
        const {
            access_token
        } = req.headers;

        if (access_token) {
            const verified = verifyToken(access_token);

            const findUser = await User.findOne({
                where: {
                    email: verified.email,
                },
            });

            if (findUser) {
                req.loggedUser = {
                    id: findUser.id,
                    email: findUser.email,
                };
                console.log("msk authentication");
                // akan ke endpoint utk yang gaperlu authorization, atau ke authorization
                next();
            } else {
                // kalo ada access token tapi ga sesuai sama yang login nya.
                throw {
                    status: 401,
                    message: "Invalid Access Token"
                };
            }
        } else {
            // kalo acess token gak ada (belum login, akan jarang sih ini soalnya di login pasti dapet acess token)
            throw {
                status: 401,
                message: "Please Login First"
            };
        }
    } catch (err) {
        //   res status 500 err.message || internal server error
        next(err);
    }
}

async function articleAuthorization(req, res, next) {
    try {
        const {
            id
        } = req.params;
        console.log("msk authorization");
        const article = await Article.findOne({
            where: {
                id,
            },
        });

        if (!article) {
            //   ini di next, biar ketangkep errornya di not found
            next();
        } else if (article.UserId == req.loggedUser.id) {
            next();
        } else {
            throw {
                status: 401,
                message: "You are Unauthorized"
            };
        }
    } catch (err) {
        //   err status 500 err.message || internal server error
        next(err);
    }
}

module.exports = { authentication, articleAuthorization }