/**
 * @swagger
 * /courseCategory/:
 *   get:
 *     tags:
 *       - Course Category
 *     summary: Get all course categories
 *     description: Retrieves a list of all course categories.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Successfully retrieved all course categories.
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
 *                         description: Category ID.
 *                       title:
 *                         type: string
 *                         description: Category title.
 *                       description:
 *                         type: string
 *                         description: Category description.
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error - Something went wrong while fetching categories.
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
 * /courseCategory/{categoryTitle}:
 *   get:
 *     tags:
 *       - Course Category
 *     summary: Get course category by title
 *     description: Retrieves a single course category based on its title.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: categoryTitle
 *         required: true
 *         description: Title of the course category to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Successfully retrieved course category by title.
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
 *                       description: Category ID.
 *                     title:
 *                       type: string
 *                       description: Category title.
 *                     description:
 *                       type: string
 *                       description: Category description.
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error - Something went wrong while fetching category by title.
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
 * /courseCategory/:
 *   post:
 *     tags:
 *       - Course Category
 *     summary: Create a new course category
 *     description: Creates a new course category with the specified title and description.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the new course category.
 *               description:
 *                 type: string
 *                 description: The description of the new course category.
 *     responses:
 *       201:
 *         description: Course category successfully created.
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
 *                       description: Category ID.
 *                     title:
 *                       type: string
 *                       description: Category title.
 *                     description:
 *                       type: string
 *                       description: Category description.
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - Category title is required or category already exists.
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
 *         description: Internal server error - Something went wrong while creating category.
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
 * /courseCategory/:
 *   post:
 *     tags:
 *       - Course Category
 *     summary: Create a new course category
 *     description: Creates a new course category with the specified title and description.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the new course category.
 *               description:
 *                 type: string
 *                 description: The description of the new course category.
 *     responses:
 *       201:
 *         description: Course category successfully created.
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
 *                       description: Category ID.
 *                     title:
 *                       type: string
 *                       description: Category title.
 *                     description:
 *                       type: string
 *                       description: Category description.
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - Category title is required or category already exists.
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
 *         description: Internal server error - Something went wrong while creating category.
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
 * /courseCategory/{categoryTitle}:
 *   delete:
 *     tags:
 *       - Course Category
 *     summary: Delete a course category
 *     description: Deletes a specific course category based on its title.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: categoryTitle
 *         required: true
 *         description: Title of the course category to delete.
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Course category successfully deleted.
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
 *         description: Internal server error - Something went wrong while deleting category.
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
