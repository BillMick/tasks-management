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
 * /api/tags/connect/{tag_id}/{task_id}:
 *   get:
 *     summary: Connect a task to a tag
 *     description: Connects the task with the specified ID to the tag with the specified ID.
 *     tags:
 *       - Tags Management
 *     parameters:
 *       - name: tag_id
 *         in: path
 *         required: true
 *         description: The ID of the tag to update
 *         schema:
 *           type: string
 *       - name: task_id
 *         in: path
 *         required: true
 *         description: The ID of the task to connect to the tag
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tag updated successfully with the connected task
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tag:
 *                   type: object
 *                   description: The updated tag with the connected task
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The tag's unique ID
 *                     tasks:
 *                       type: array
 *                       description: A list of tasks associated with the tag
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: The task's unique ID
 *                           title:
 *                             type: string
 *                             description: The title of the task
 *       400:
 *         description: Bad request. Possibly due to missing or incorrect parameters.
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
 *                   description: error content
 *                   example: "Bad request. Please check the tag_id or task_id."
 *       404:
 *         description: Tag or task not found.
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
 *                   description: error content
 *                   example: "Tag or task not found."
 */

/**
 * @swagger
 * /api/tags/disconnect/{tag_id}/{task_id}:
 *   get:
 *     summary: Disconnect a task from a tag
 *     description: Disconnects the task with the specified ID from the tag with the specified ID.
 *     tags:
 *       - Tags Management
 *     parameters:
 *       - name: tag_id
 *         in: path
 *         required: true
 *         description: The ID of the tag to update
 *         schema:
 *           type: string
 *       - name: task_id
 *         in: path
 *         required: true
 *         description: The ID of the task to disconnect from the tag
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tag updated successfully with the disconnected task
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tag:
 *                   type: object
 *                   description: The updated tag with the disconnected task
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The tag's unique ID
 *                     tasks:
 *                       type: array
 *                       description: A list of tasks associated with the tag after the disconnection
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: The task's unique ID
 *                           title:
 *                             type: string
 *                             description: The title of the task
 *       400:
 *         description: Bad request. Possibly due to missing or incorrect parameters.
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
 *                   description: error content
 *                   example: "Bad request. Please check the tag_id or task_id."
 *       404:
 *         description: Tag or task not found.
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
 *                   description: error content
 *                   example: "Tag or task not found."
 */
