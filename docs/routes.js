/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: get tasks list.
 *     description: Route serving to get tasks list.
 *     tags:
 *       - Tasks Management
 *     responses:
 *       200:
 *         description: Tasks sent successfully.
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
 * /api/tasks:
 *   post:
 *     summary: insertion of a new task
 *     description: Route serving to insert of a new task.
 *     tags:
 *       - Tasks Management
 *     parameters:
 *       - name: title
 *         in: formData
 *         required: true
 *         type: string
 *         description: The task title.
 *         example: "Done NodeJS API"
 *       - name: description
 *         in: formData
 *         required: false
 *         type: string
 *         description: The task description.
 *         example: "blablabla"
 *       - name: status
 *         in: formData
 *         required: false
 *         type: string
 *         description: The task status (ENDED or NOTENDED).
 *         default: "NOTENDED"
 *         example: "blablabla"
 *       - name: priority
 *         in: formData
 *         required: false
 *         type: integer
 *         description: The task description.
 *         default: 5
 *         example: 5
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
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a task completely.
 *     description: Route serving to update a task by its ID.
 *     tags:
 *       - Tasks Management
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
 *               description:
 *                 type: string
 *                 description: The task description.
 *                 example: "Updated task description."
 *               status:
 *                 type: string
 *                 description: The task status.
 *                 example: "IN_PROGRESS"
 *               priority:
 *                 type: integer
 *                 description: The task priority.
 *                 example: 10
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
 * /api/tasks/{id}:
 *   patch:
 *     summary: Partially update a task.
 *     description: Route serving to partially update a task by its ID.
 *     tags:
 *       - Tasks Management
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
 *               description:
 *                 type: string
 *                 description: The task description.
 *                 example: "Updated task description."
 *               status:
 *                 type: string
 *                 description: The task status.
 *                 example: "IN_PROGRESS"
 *               priority:
 *                 type: integer
 *                 description: The task priority.
 *                 example: 10
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
 * /api/tasks/delete/{id}:
 *   get:
 *     summary: Delete a task.
 *     description: Route serving to delete a task by its ID.
 *     tags:
 *       - Tasks Management
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
 * /api/tasks/priority/{priority}:
 *   get:
 *     summary: Get tasks filtered by priority.
 *     description: Route to get tasks that match a specific priority by inserting the priority number.
 *     tags:
 *       - Tasks Management
 *     parameters:
 *       - name: priority
 *         in: params
 *         required: false
 *         description: The priority level of the tasks to filter by.
 *         schema:
 *           type: integer
 *           example: 5
 *     responses:
 *       200:
 *         description: Tasks retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tasks:
 *                   type: array
 *                   description: A list of tasks filtered by priority.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The unique identifier of the task.
 *                       title:
 *                         type: string
 *                         description: The title of the task.
 *                       description:
 *                         type: string
 *                         description: The description of the task.
 *                       priority:
 *                         type: integer
 *                         description: The priority level of the task.
 *         400:
 *           description: Invalid query parameter.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     example: "Invalid priority value."
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
 * /connect/{task_id}/{tag_id}:
 *   get:
 *     summary: Connect a tag to a task
 *     description: Adds an association between a task and a tag by their IDs
 *     tags:
 *       - Tasks Management
 *     parameters:
 *       - name: task_id
 *         in: path
 *         required: true
 *         description: The ID of the task to be updated
 *         schema:
 *           type: string
 *       - name: tag_id
 *         in: path
 *         required: true
 *         description: The ID of the tag to be associated with the task
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully connected the task and the tag
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 task:
 *                   type: object
 *                   description: The updated task object after the connection
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
 *         description: Not found if either task or tag with given IDs are not found
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
 *                   example: "Task or Tag not found."
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
 * /disconnect/{task_id}/{tag_id}:
 *   get:
 *     summary: Disconnect a tag from a task
 *     description: Removes the association between a task and a tag by their IDs
 *     tags:
 *       - Tasks Management
 *     parameters:
 *       - name: task_id
 *         in: path
 *         required: true
 *         description: The ID of the task to be updated
 *         schema:
 *           type: string
 *       - name: tag_id
 *         in: path
 *         required: true
 *         description: The ID of the tag to be dissociated from the task
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully disconnected the task and the tag
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 task:
 *                   type: object
 *                   description: The updated task object after the disconnection
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
 *         description: Not found if either task or tag with given IDs are not found
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
 *                   example: "Task or Tag not found."
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
