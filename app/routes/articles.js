import express from 'express';
import Article from '../models/article';

const router = express.Router();

/**
 * @swagger
 * /api/article:
 *   post:
 *     tags:
 *       - Articles
 *     description: Submit a article
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: Article details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/ArticleNew'
 *     responses:
 *       200:
 *         description: Newly created Article
 *         schema:
 *           $ref: '#/definitions/ArticleResponse'
 */

router.route('/')
	.post((req, res) => {

		const {body} = req;

		const newArticle = new Article(body);

		newArticle.save((err, article) => {
			if(err)
				res.status(400).json(err);
			else
				res.status(200).json(article)
		})

	})


/**
 * @swagger
 * /api/article:
 *   get:
 *     tags:
 *       - Articles
 *     description: Returns articles
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A Array of articles
 *         schema:
 *           type: array
 *           items: 
 *             $ref: '#/definitions/Article'
 */

router.route('/')
	.get((req, res) => {
		Article.find({}, (err, articles) => {
			if(err)
				res.send(err)
			res.json(articles);
		});
	})

export default router;