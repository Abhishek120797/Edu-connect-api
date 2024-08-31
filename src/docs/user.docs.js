/**
 * @swagger
 * /user/profile:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user profile
 *     description: Fetches the profile details of the currently authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile fetched successfully.
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
 *                       type: string
 *                       description: User ID.
 *                     first_name:
 *                       type: string
 *                       description: User's first name.
 *                     last_name:
 *                       type: string
 *                       description: User's last name.
 *                     email:
 *                       type: string
 *                       description: User's email address.
 *                     contact_number:
 *                       type: string
 *                       description: User's contact number.
 *                     user_type:
 *                       type: string
 *                       description: User's type (e.g., STUDENT, INSTRUCTOR, ADMIN).
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized - No valid token provided.
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
 *         description: Internal server error - Something went wrong while fetching user details.
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
