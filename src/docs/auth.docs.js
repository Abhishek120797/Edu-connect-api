/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags:
 *      - Authentication And Authorization
 *     summary: Register a new user
 *     description: Creates a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fName:
 *                 type: string
 *               lName:
 *                 type: string
 *               email:
 *                 type: string
 *               contact:
 *                 type: string
 *               user_type:
 *                 type: string
 *                 enum: [STUDENT, INSTRUCTOR, ADMIN]
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Registration details saved successfully
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
 *                     first_name:
 *                       type: string
 *                     last_name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     contact_number:
 *                       type: string
 *                     user_type:
 *                       type: string
 *                     verified:
 *                       type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input - one or more required fields are missing
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
 *         description: Internal server error - Something went wrong while registering the user
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
 * /auth/register/verifyRegister:
 *   post:
 *     tags:
 *      - Authentication And Authorization
 *     summary: Verify user registration
 *     description: Sends a verification code to the user's email to complete the registration.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email address of the user to send the verification code.
 *     responses:
 *       201:
 *         description: Verification code sent successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *       404:
 *         description: User not registered.
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
 *         description: User already registered and verified.
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
 *         description: Internal server error - Something went wrong while sending the verification code.
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
 * /auth/register/verifyRegister/verifyCode:
 *   post:
 *     tags:
 *      - Authentication And Authorization
 *     summary: Verify the registration code
 *     description: Verifies the registration code sent to the user's email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email address of the user.
 *               code:
 *                 type: string
 *                 description: Verification code received by the user.
 *     responses:
 *       201:
 *         description: User registration verification done successfully.
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
 *         description: Incorrect verification code.
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
 *         description: User not registered.
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
 *         description: Internal server error - Something went wrong during the verification process.
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
 * /auth/login:
 *   post:
 *     tags:
 *      - Authentication And Authorization
 *     summary: Log in a user
 *     description: Authenticates a user with their email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The user's email address.
 *               password:
 *                 type: string
 *                 description: The user's password.
 *     responses:
 *       201:
 *         description: Successfully logged in.
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
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                         first_name:
 *                           type: string
 *                         last_name:
 *                           type: string
 *                         email:
 *                           type: string
 *                         contact_number:
 *                           type: string
 *                         user_type:
 *                           type: string
 *                     accessToken:
 *                       type: string
 *                     refreshToken:
 *                       type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input - email or password is missing.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *       401:
 *         description: Wrong password.
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
 *         description: User does not exist.
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
 *         description: Internal server error - Something went wrong during login.
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
 * /auth/logout:
 *   post:
 *     tags:
 *      - Authentication And Authorization
 *     summary: Log out a user
 *     description: Logs out the authenticated user and clears the session tokens.
 *     responses:
 *       200:
 *         description: Successfully logged out.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                 message:
 *                   type: string
 *       403:
 *         description: No token found - Unauthorized.
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
 * /auth/refresh-access-Token:
 *   post:
 *     tags:
 *      - Authentication And Authorization
 *     summary: Refresh access token
 *     description: Generates a new access token using the provided refresh token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: Refresh token.
 *     responses:
 *       201:
 *         description: Access token refreshed successfully.
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
 *                     accessToken:
 *                       type: string
 *                 message:
 *                   type: string
 *       403:
 *         description: Refresh token not found.
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
 *         description: Internal server error - Something went wrong while refreshing the token.
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
