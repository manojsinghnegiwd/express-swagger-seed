import express from 'express';
import User from '../models/user';

const router = express.Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A Array of users
 *         schema:
 *           type: array
 *           items: 
 *             $ref: '#/definitions/User'
 */

router.route('/')
	.get((req, res) => {
		User.find({}, (err, users) => {
			if(err)
				res.send(err)
			res.json(users);
		});
	})

export default router;