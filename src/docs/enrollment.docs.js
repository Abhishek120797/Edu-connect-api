/**
 * @swagger
 * /enrollment/:
 *   get:
 *     tags:
 *       - Enrollment
 *     summary: Get enrolled courses
 *     description: Retrieves a list of courses the authenticated user is enrolled in.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Successfully retrieved enrolled courses.
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
 *                       user_course_id:
 *                         type: integer
 *                         description: Enrollment ID.
 *                       user_id:
 *                         type: integer
 *                         description: User ID.
 *                       course_id:
 *                         type: integer
 *                         description: Course ID.
 *                 message:
 *                   type: string
 *       404:
 *         description: No enrolled courses found - The user is not enrolled in any courses.
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
 *         description: Internal server error - Something went wrong while fetching enrolled courses.
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
 * /enrollment/:
 *   post:
 *     tags:
 *       - Enrollment
 *     summary: Enroll in a course
 *     description: Enrolls the authenticated user in a specified course.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseTitle:
 *                 type: string
 *                 description: Title of the course to enroll in.
 *     responses:
 *       200:
 *         description: Successfully enrolled in the course.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - Missing course title or other issues with the request.
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
 *         description: Course not found - The specified course does not exist.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *       409:
 *         description: Conflict - The user is already enrolled in the course.
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
 *         description: Internal server error - Something went wrong while enrolling in the course.
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
