const router = require('express').Router();
const UserController = require('../controllers/user')
const ArticleController = require('../controllers/article')
const { authentication, articleAuthorization } = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.send('API connected, current time: ' + Date.now());
})

// user routes
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/users', UserController.getUsers)

// article routes
router.get('/articles', ArticleController.getArticles)
router.get('/articles/:id', ArticleController.getArticleById)
router.use(authentication)
router.post('/articles', ArticleController.postArticle)
router.put('/articles/:id', articleAuthorization, ArticleController.updateArticle)
router.delete('/articles/:id', articleAuthorization, ArticleController.deleteArticle)

module.exports = router