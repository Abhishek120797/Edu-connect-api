/**
 * @swagger
 * /course/:
 *   get:
 *     tags:
 *       - Course
 *     summary: Get all courses
 *     description: Retrieves a list of all courses.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Successfully retrieved all courses.
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
 *                       id:
 *                         type: integer
 *                         description: Course ID.
 *                       title:
 *                         type: string
 *                         description: Course title.
 *                       description:
 *                         type: string
 *                         description: Course description.
 *                       price:
 *                         type: number
 *                         format: float
 *                         description: Course price.
 *                       duration:
 *                         type: string
 *                         description: Course duration.
 *                       status:
 *                         type: string
 *                         description: Course status.
 *                       coverImage:
 *                         type: string
 *                         description: URL to the cover image of the course.
 *                       category_id:
 *                         type: integer
 *                         description: ID of the course category.
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error - Something went wrong while fetching courses.
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
 * /course/{categoryTitle}:
 *   get:
 *     tags:
 *       - Course
 *     summary: Get courses by category
 *     description: Retrieves courses that belong to a specific category based on its title.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: categoryTitle
 *         required: true
 *         description: Title of the category to retrieve courses from.
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Successfully retrieved courses by category.
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
 *                       id:
 *                         type: integer
 *                         description: Course ID.
 *                       title:
 *                         type: string
 *                         description: Course title.
 *                       description:
 *                         type: string
 *                         description: Course description.
 *                       price:
 *                         type: number
 *                         format: float
 *                         description: Course price.
 *                       duration:
 *                         type: string
 *                         description: Course duration.
 *                       status:
 *                         type: string
 *                         description: Course status.
 *                       coverImage:
 *                         type: string
 *                         description: URL to the cover image of the course.
 *                       category_id:
 *                         type: integer
 *                         description: ID of the course category.
 *                 message:
 *                   type: string
 *       404:
 *         description: Category not found - The provided category does not exist.
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
 *         description: Internal server error - Something went wrong while fetching courses by category.
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
 * /course/:
 *   post:
 *     tags:
 *       - Course
 *     summary: Create a new course
 *     description: Creates a new course with the provided details.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the course.
 *               description:
 *                 type: string
 *                 description: The description of the course.
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The price of the course.
 *               duration:
 *                 type: string
 *                 description: The duration of the course.
 *               status:
 *                 type: string
 *                 description: The status of the course.
 *               categoryTitle:
 *                 type: string
 *                 description: The category of the course.
 *               coverImage:
 *                 type: string
 *                 format: binary
 *                 description: The cover image of the course.
 *     responses:
 *       201:
 *         description: Course successfully created.
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
 *                     id:
 *                       type: integer
 *                       description: Course ID.
 *                     title:
 *                       type: string
 *                       description: Course title.
 *                     description:
 *                       type: string
 *                       description: Course description.
 *                     price:
 *                       type: number
 *                       format: float
 *                       description: Course price.
 *                     duration:
 *                       type: string
 *                       description: Course duration.
 *                     status:
 *                       type: string
 *                       description: Course status.
 *                     coverImage:
 *                       type: string
 *                       description: URL to the cover image of the course.
 *                     category_id:
 *                       type: integer
 *                       description: ID of the course category.
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - Missing required fields or course already exists.
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
 *         description: Internal server error - Something went wrong while creating the course.
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
 * /course/{courseTitle}:
 *   patch:
 *     tags:
 *       - Course
 *     summary: Update a course
 *     description: Updates the details of a specific course based on its title.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseTitle
 *         required: true
 *         description: Title of the course to update.
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
 *                 description: The new title of the course (optional).
 *               description:
 *                 type: string
 *                 description: The new description of the course (optional).
 *               price:
 *                 type: number
 *                 format: float
 *                 description: The new price of the course (optional).
 *               duration:
 *                 type: string
 *                 description: The new duration of the course (optional).
 *               status:
 *                 type: string
 *                 description: The new status of the course (optional).
 *               coverImage:
 *                 type: string
 *                 format: binary
 *                 description: The new cover image of the course (optional).
 *     responses:
 *       201:
 *         description: Course successfully updated.
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
 *                     id:
 *                       type: integer
 *                       description: Course ID.
 *                     title:
 *                       type: string
 *                       description: Course title.
 *                     description:
 *                       type: string
 *                       description: Course description.
 *                     price:
 *                       type: number
 *                       format: float
 *                       description: Course price.
 *                     duration:
 *                       type: string
 *                       description: Course duration.
 *                     status:
 *                       type: string
 *                       description: Course status.
 *                     coverImage:
 *                       type: string
 *                       description: URL to the cover image of the course.
 *                     category_id:
 *                       type: integer
 *                       description: ID of the course category.
 *                 message:
 *                   type: string
 *       400:
 *
 *         description: Bad request - Missing fields or invalid course title.
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
 *       500:
 *         description: Internal server error - Something went wrong while updating the course.
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
 * /course/{courseTitle}:
 *   delete:
 *     tags:
 *       - Course
 *     summary: Delete a course
 *     description: Deletes a specific course based on its title.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseTitle
 *         required: true
 *         description: Title of the course to delete.
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Course successfully deleted.
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
 *                     id:
 *                       type: integer
 *                       description: Course ID.
 *                     title:
 *                       type: string
 *                       description: Course title.
 *                     description:
 *                       type: string
 *                       description: Course description.
 *                     price:
 *                       type: number
 *                       format: float
 *                       description: Course price.
 *                     duration:
 *                       type: string
 *                       description: Course duration.
 *                     status:
 *                       type: string
 *                       description: Course status.
 *                     coverImage:
 *                       type: string
 *                       description: URL to the cover image of the course.
 *                     category_id:
 *                       type: integer
 *                       description: ID of the course category.
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
 *       500:
 *         description: Internal server error - Something went wrong while deleting the course.
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
