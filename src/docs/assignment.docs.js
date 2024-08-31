/**
 * @swagger
 * /assignment/:
 *   get:
 *     tags:
 *       - Assignment
 *     summary: Get all assignments
 *     description: Retrieves a list of all assignments.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Successfully retrieved all assignments.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       assignment_id:
 *                         type: integer
 *                         description: Assignment ID.
 *                       title:
 *                         type: string
 *                         description: Assignment title.
 *                       description:
 *                         type: string
 *                         description: Assignment description.
 *                       assignment_url:
 *                         type: string
 *                         description: URL of the assignment file.
 *                       course_id:
 *                         type: integer
 *                         description: ID of the associated course.
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error - Something went wrong while fetching assignments.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /assignment/{courseTitle}:
 *   get:
 *     tags:
 *       - Assignment
 *     summary: Get assignments by course
 *     description: Retrieves assignments that belong to a specific course based on its title.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseTitle
 *         required: true
 *         description: Title of the course to retrieve assignments from.
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Successfully retrieved assignments by course.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       assignment_id:
 *                         type: integer
 *                         description: Assignment ID.
 *                       title:
 *                         type: string
 *                         description: Assignment title.
 *                       description:
 *                         type: string
 *                         description: Assignment description.
 *                       assignment_url:
 *                         type: string
 *                         description: URL of the assignment file.
 *                       course_id:
 *                         type: integer
 *                         description: ID of the associated course.
 *                 message:
 *                   type: string
 *       404:
 *         description: Course not found - The provided course does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error - Something went wrong while fetching assignments by course.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /assignment/{courseTitle}:
 *   post:
 *     tags:
 *       - Assignment
 *     summary: Add a new assignment
 *     description: Adds a new assignment to a specific course.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseTitle
 *         required: true
 *         description: Title of the course to add the assignment to.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the assignment.
 *               description:
 *                 type: string
 *                 description: Description of the assignment.
 *               assignment:
 *                 type: string
 *                 format: binary
 *                 description: The assignment file to upload.
 *     responses:
 *       201:
 *         description: Assignment successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 data:
 *                   type: object
 *                   properties:
 *                     assignment_id:
 *                       type: integer
 *                       description: Assignment ID.
 *                     title:
 *                       type: string
 *                       description: Assignment title.
 *                     description:
 *                       type: string
 *                       description: Assignment description.
 *                     assignment_url:
 *                       type: string
 *                       description: URL of the assignment file.
 *                     course_id:
 *                       type: integer
 *                       description: ID of the associated course.
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - Missing required fields or assignment file.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error - Something went wrong while adding the assignment.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /assignment/{courseTitle}/{assignmentTitle}:
 *   patch:
 *     tags:
 *       - Assignment
 *     summary: Update an assignment
 *     description: Updates the details of a specific assignment based on its title and course.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseTitle
 *         required: true
 *         description: Title of the course where the assignment is located.
 *         schema:
 *           type: string
 *       - in: path
 *         name: assignmentTitle
 *         required: true
 *         description: Title of the assignment to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: New title for the assignment (optional).
 *               description:
 *                 type: string
 *                 description: New description for the assignment (optional).
 *               assignment:
 *                 type: string
 *                 format: binary
 *                 description: New assignment file to upload (optional).
 *     responses:
 *       201:
 *         description: Assignment successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 data:
 *                   type: object
 *                   properties:
 *                     assignment_id:
 *                       type: integer
 *                       description: Assignment ID.
 *                     title:
 *                       type: string
 *                       description: Assignment title.
 *                     description:
 *                       type: string
 *                       description: Assignment description.
 *                     assignment_url:
 *                       type: string
 *                       description: URL of the assignment file.
 *                     course_id:
 *                       type: integer
 *                       description: ID of the associated course.
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - Missing fields or invalid assignment title.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *       404:
 *         description: Assignment not found - The specified assignment does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error - Something went wrong while updating the assignment.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /assignment/{courseTitle}/{assignmentTitle}:
 *   delete:
 *     tags:
 *       - Assignment
 *     summary: Delete an assignment
 *     description: Deletes a specific assignment based on its title and course.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseTitle
 *         required: true
 *         description: Title of the course where the assignment is located.
 *         schema:
 *           type: string
 *       - in: path
 *         name: assignmentTitle
 *         required: true
 *         description: Title of the assignment to delete.
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Assignment successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 data:
 *                   type: object
 *                   properties:
 *                     assignment_id:
 *                       type: integer
 *                       description: Assignment ID.
 *                     title:
 *                       type: string
 *                       description: Assignment title.
 *                     description:
 *                       type: string
 *                       description: Assignment description.
 *                     assignment_url:
 *                       type: string
 *                       description: URL of the assignment file.
 *                     course_id:
 *                       type: integer
 *                       description: ID of the associated course.
 *                 message:
 *                   type: string
 *       404:
 *         description: Assignment not found - The specified assignment does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error - Something went wrong while deleting the assignment.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 */
