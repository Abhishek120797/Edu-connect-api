/**
 * @swagger
 * /user-update/profile:
 *   post:
 *     tags:
 *       - User Update
 *     summary: Update user profile
 *     description: Updates the profile information of the currently authenticated user. At least one field (first name, last name, email, contact) must be provided.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fName:
 *                 type: string
 *                 description: User's new first name.
 *               lName:
 *                 type: string
 *                 description: User's new last name.
 *               email:
 *                 type: string
 *                 description: User's new email address.
 *               contact:
 *                 type: string
 *                 description: User's new contact number.
 *     responses:
 *       201:
 *         description: Profile updated successfully.
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
 *                       description: User's updated first name.
 *                     last_name:
 *                       type: string
 *                       description: User's updated last name.
 *                     email:
 *                       type: string
 *                       description: User's updated email address.
 *                     contact_number:
 *                       type: string
 *                       description: User's updated contact number.
 *                     user_type:
 *                       type: string
 *                       description: User's type (e.g., STUDENT, INSTRUCTOR, ADMIN).
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - At least one field is required for update.
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
 *         description: Internal server error - Something went wrong while updating profile.
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
 * /user-update/password:
 *   post:
 *     tags:
 *       - User Update
 *     summary: Update user password
 *     description: Changes the password of the currently authenticated user. Both current and new passwords must be provided.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 description: The current password of the user.
 *               newPassword:
 *                 type: string
 *                 description: The new password to set for the user.
 *     responses:
 *       200:
 *         description: Password successfully updated.
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
 *         description: Bad request - Current and new passwords are required.
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
 *         description: Internal server error - Something went wrong while updating password.
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
 * /user-update/avatar:
 *   post:
 *     tags:
 *       - User Update
 *     summary: Update user avatar
 *     description: Uploads a new avatar image for the currently authenticated user. An image file must be provided.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *                 description: The avatar image file to upload.
 *     responses:
 *       201:
 *         description: Avatar image updated successfully.
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
 *                     avatar:
 *                       type: string
 *                       description: URL of the updated avatar image.
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - Avatar image file is required.
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
 *         description: Internal server error - Something went wrong while updating avatar.
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
