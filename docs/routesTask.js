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
 * /api/tasks/connect/{task_id}/{tag_id}:
 *   get:
 *     summary: Connect a tag to a task
 *     description: Connects the tag with the specified ID to the task with the specified ID.
 *     tags:
 *       - Tasks Management
 *     parameters:
 *       - name: task_id
 *         in: path
 *         required: true
 *         description: The ID of the task to update
 *         schema:
 *           type: string
 *       - name: tag_id
 *         in: path
 *         required: true
 *         description: The ID of the tag to connect to the task
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task updated successfully with the connected tag
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 task:
 *                   type: object
 *                   description: The updated task with the connected tag
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The task's unique ID
 *                     tags:
 *                       type: array
 *                       description: A list of tags associated with the task
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: The tag's unique ID
 *                           name:
 *                             type: string
 *                             description: The tag's name
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
 *                   example: "Bad request. Please check the task_id or tag_id."
 *       404:
 *         description: Task or tag not found.
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
 *                   example: "Task or tag not found."
 */

/**
 * @swagger
 * /api/tasks/disconnect/{task_id}/{tag_id}:
 *   get:
 *     summary: Disconnect a tag from a task
 *     description: Disconnects the tag with the specified ID from the task with the specified ID.
 *     tags:
 *       - Tasks Management
 *     parameters:
 *       - name: task_id
 *         in: path
 *         required: true
 *         description: The ID of the task to update
 *         schema:
 *           type: string
 *       - name: tag_id
 *         in: path
 *         required: true
 *         description: The ID of the tag to disconnect from the task
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Task updated successfully with the disconnected tag
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 task:
 *                   type: object
 *                   description: The updated task with the disconnected tag
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: The task's unique ID
 *                     tags:
 *                       type: array
 *                       description: A list of tags associated with the task after the disconnection
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: The tag's unique ID
 *                           name:
 *                             type: string
 *                             description: The tag's name
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
 *                   example: "Bad request. Please check the task_id or tag_id."
 *       404:
 *         description: Task or tag not found.
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
 *                   example: "Task or tag not found."
 */

/**
 * @swagger
 * /api/limit:
 *   get:
 *     summary: Get tasks with pagination
 *     description: Retrieves tasks with pagination, showing 10 tasks per page. The `page` query parameter specifies the page number.
 *     tags:
 *       - Tasks Management
 *     parameters:
 *       - name: page
 *         in: query
 *         description: Page number for pagination. Defaults to 1 if not provided.
 *         required: false
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Tasks retrieved successfully with pagination.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tasks:
 *                   type: array
 *                   description: A list of tasks for the current page, sorted by priority.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The task's unique ID
 *                       title:
 *                         type: string
 *                         description: The title of the task
 *                       description:
 *                         type: string
 *                         description: A description of the task
 *                       status:
 *                         type: string
 *                         description: The status of the task
 *                         example: "NOTENDED"
 *                       priority:
 *                         type: integer
 *                         description: The priority of the task
 *                         example: 3
 *                 page:
 *                   type: integer
 *                   description: The current page number.
 *                   example: 1
 *       500:
 *         description: Internal server error. The request could not be completed.
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
 *                   example: "Error fetching tasks. Please try again later."
 */

/**
 * @swagger
 * /api/desc:
 *   get:
 *     summary: Get all tasks sorted by descendant priority
 *     description: Retrieves all tasks for the authenticated user, sorted by their priority .
 *     tags:
 *       - Tasks Management
 *     responses:
 *       200:
 *         description: Tasks retrieved successfully, sorted by priority.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tasks:
 *                   type: array
 *                   description: A list of tasks sorted by priority.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The task's unique ID
 *                       title:
 *                         type: string
 *                         description: The title of the task
 *                       description:
 *                         type: string
 *                         description: A description of the task
 *                       status:
 *                         type: string
 *                         description: The status of the task
 *                         example: "NOTENDED"
 *                       priority:
 *                         type: integer
 *                         description: The priority of the task
 *                         example: 3
 *       500:
 *         description: Internal server error. The request could not be completed.
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
 *                   example: "Problem with server. Contact Administrator."
 */

/**
 * @swagger
 * /api/byTag:
 *   get:
 *     summary: Filter tasks by tag ID.
 *     description: Route to filter tasks based on a given tag ID.
 *     tags:
 *       - Tasks Management
 *     parameters:
 *       - in: params
 *         name: tag_id
 *         required: true
 *         description: The ID of the tag to filter tasks by.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tasks filtered by the provided tag.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 tasks:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       status:
 *                         type: string
 *                       priority:
 *                         type: integer
 *                       tags:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                             title:
 *                               type: string
 *       400:
 *         description: Missing tag ID parameter.
 *       404:
 *         description: No tasks found for the provided tag.
 *       500:
 *         description: Server error when fetching tasks.
 */
