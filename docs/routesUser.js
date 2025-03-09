/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: get users list.
 *     description: Route serving to get users list.
 *     tags:
 *       - Users Management
 *     responses:
 *       200:
 *         description: users sent successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  status:
 *                     type: boolean
 *                     description: true
 *                     example: true
 *       500:
 *         description: There was an error on the server and the request could not be completed.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   status:
 *                     type: boolean
 *                     description: false
 *                     example: false
 *                   error:
 *                     type: string
 *                     description: error content
 *                     example: Problem with server. Contact Administrator.
*/

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Register a new user
 *     tags: 
 *       - Users Management
 *     parameters:
 *       - name: username
 *         in: formData
 *         required: true
 *         type: string
 *         description: The user username.
 *         example: "billmichael"
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 *         description: The user password.
 *         example: "password"
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 'uid-99'
 *                     username:
 *                       type: string
 *                       example: billmichael
 *       400:
 *         description: Bad Request (e.g. missing parameters or username already exists)
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     summary: Login a user and return a JWT token
 *     tags: 
 *       - Users Management
 *     parameters:
 *       - name: username
 *         in: formData
 *         required: true
 *         type: string
 *         description: The user username.
 *         example: "billmichael"
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 *         description: The user password.
 *         example: "password"
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful
 *                 token:
 *                   type: string
 *                   example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Invalid username or password
 *       500:
 *         description: Internal Server Error
 */

