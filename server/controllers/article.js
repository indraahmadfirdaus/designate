const {
    Article
} = require('../models')

class ArticleController {
    static async getArticles(req, res, next) {
        try {
            let posts;
            // get all
            if(!req.query.userId) {
                posts = await Article.findAll({
                    order: [
                        ['id','ASC']
                    ]
                })
            } else {
                // article related to user
                posts = await Article.findAll({
                    where: {
                        UserId: req.query.userId
                    },
                    order: [
                        ['id','ASC']
                    ]
                })
            }
            res.status(200).json({
                message: 'Read Article Success',
                data: posts
            })
        }
        catch (err) {
            next(err)
        }
    }

    static async getArticleById(req, res, next) {
        try {
            const post = await Article.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                message: 'Read Article Success',
                data: post
            })
        }
        catch (err) {
            next(err)
        }
    }

    static async postArticle(req, res, next) {
        console.log(req.loggedUser.id)
        console.log(req.body);
        try {
            const createdArticle = await Article.create({
                UserId: req.loggedUser.id,
                title: req.body.title,
                imgUrl: req.body.imgUrl,
                body: req.body.body
            })

            res.status(201).json({
                message: "Success created article",
                data: createdArticle
            })

        } catch (err) {
            next(err)
        }
    }

    static async updateArticle(req, res, next) {
        try {
            await Article.update({
                title: req.body.title,
                body: req.body.body
            }, { 
                where: { id: req.params.id }
             })

             res.status(200).json({
                 message: "Success update article"
             })
        } catch (err) {
            next(err);
        }
    }

    static async deleteArticle(req, res, next) {
        try {
            await Article.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                message: 'Delete Article Success',
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ArticleController