/**
 * @swagger
 * /api/tags:
 *   get:
 *     summary: get tags list.
 *     description: Route serving to get tags list.
 *     tags:
 *       - Tags Management
 *     responses:
 *       200:
 *         description: tags sent successfully.
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
 * /api/tags:
 *   post:
 *     summary: insertion of a new task
 *     description: Route serving to insert of a new task.
 *     tags:
 *       - Tags Management
 *     parameters:
 *       - name: title
 *         in: formData
 *         required: true
 *         type: string
 *         description: The task title.
 *         example: "Polytech tasks"
 *     responses:
 *       200:
 *         description: Task inserted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  task:
 *                     type: object
 *                     description: the inserted task
 *       400:
 *         description: Bad Request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                     error:
 *                       type: string
 *                       description: Bad request
 *                       example: Bad Request.
 *                     message:
 *                       type: string
 *                       description: explanation
 *                       example: List of missing keys.
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
 * /api/tags/{id}:
 *   put:
 *     summary: Update a task completely.
 *     description: Route serving to update a task by its ID.
 *     tags:
 *       - Tags Management
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The task ID to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The task title.
 *                 example: "Updated Task Title"
 *     responses:
 *       200:
 *         description: Task updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 task:
 *                   type: object
 *                   description: The updated task object.
 *                   example:
 *                     id: "38"
 *                     title: "Updated Task Title"
 *                     description: "Updated task description."
 *                     status: "IN_PROGRESS"
 *                     priority: 10
 *       400:
 *         description: Bad Request. Invalid task data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Bad request."
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Problem with server. Contact Administrator."
 */

/**
 * @swagger
 * /api/tags/delete/{id}:
 *   get:
 *     summary: Delete a task.
 *     description: Route serving to delete a task by its ID.
 *     tags:
 *       - Tags Management
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The task ID to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: true
 *                   example: true
 *       404:
 *         description: Task not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: false
 *                   example: false
 *                 error:
 *                   type: string
 *                   description: error message
 *                   example: Task not found.
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Problem with server. Contact Administrator."
 */

/**
 * @swagger
 * /connect/{tag_id}/{task_id}:
 *   get:
 *     summary: Connect a task to a tag
 *     description: Adds an association between a tag and a task by their IDs
 *     tags:
 *       - Tags Management
 *     parameters:
 *       - name: tag_id
 *         in: path
 *         required: true
 *         description: The ID of the tag to be updated
 *         schema:
 *           type: string
 *       - name: task_id
 *         in: path
 *         required: true
 *         description: The ID of the task to be associated with the tag
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully connected the tag and the task
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tag:
 *                   type: object
 *                   description: The updated tag object after the connection
 *                   additionalProperties: true
 *       400:
 *         description: Bad request if parameters are invalid or other issues
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: false
 *                   example: false
 *                 error:
 *                   type: string
 *                   description: error message
 *                   example: "Invalid parameters."
 *       404:
 *         description: Not found if either tag or task with given IDs are not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: false
 *                   example: false
 *                 error:
 *                   type: string
 *                   description: error message
 *                   example: "Tag or Task not found."
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: error message
 *                   example: "Problem with server. Contact Administrator."
 */

/**
 * @swagger
 * /disconnect/{tag_id}/{task_id}:
 *   get:
 *     summary: Disconnect a task from a tag
 *     description: Removes the association between a tag and a task by their IDs
 *     tags:
 *       - Tags Management
 *     parameters:
 *       - name: tag_id
 *         in: path
 *         required: true
 *         description: The ID of the tag to be updated
 *         schema:
 *           type: string
 *       - name: task_id
 *         in: path
 *         required: true
 *         description: The ID of the task to be dissociated from the tag
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully disconnected the tag and the task
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tag:
 *                   type: object
 *                   description: The updated tag object after the disconnection
 *                   additionalProperties: true
 *       400:
 *         description: Bad request if parameters are invalid or other issues
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: false
 *                   example: false
 *                 error:
 *                   type: string
 *                   description: error message
 *                   example: "Invalid parameters."
 *       404:
 *         description: Not found if either tag or task with given IDs are not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   description: false
 *                   example: false
 *                 error:
 *                   type: string
 *                   description: error message
 *                   example: "Tag or Task not found."
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: error message
 *                   example: "Problem with server. Contact Administrator."
 */
