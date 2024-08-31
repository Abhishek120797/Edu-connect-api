/**
 * @swagger
 * /video/:
 *   get:
 *     tags:
 *       - Video Lecture
 *     summary: Get all videos
 *     description: Retrieves a list of all videos.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Successfully retrieved all videos.
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
 *                       video_id:
 *                         type: integer
 *                         description: Video ID.
 *                       title:
 *                         type: string
 *                         description: Video title.
 *                       description:
 *                         type: string
 *                         description: Video description.
 *                       video_url:
 *                         type: string
 *                         description: URL of the video.
 *                       course_id:
 *                         type: integer
 *                         description: ID of the associated course.
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error - Something went wrong while fetching videos.
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
 * /video/{courseTitle}:
 *   get:
 *     tags:
 *       - Video Lecture
 *     summary: Get videos by course
 *     description: Retrieves videos that belong to a specific course based on its title.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseTitle
 *         required: true
 *         description: Title of the course to retrieve videos from.
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Successfully retrieved videos by course.
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
 *                       video_id:
 *                         type: integer
 *                         description: Video ID.
 *                       title:
 *                         type: string
 *                         description: Video title.
 *                       description:
 *                         type: string
 *                         description: Video description.
 *                       video_url:
 *                         type: string
 *                         description: URL of the video.
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
 *         description: Internal server error - Something went wrong while fetching videos by course.
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
 * /video/{courseTitle}:
 *   post:
 *     tags:
 *       - Video Lecture
 *     summary: Add a new video
 *     description: Adds a new video to a specific course.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseTitle
 *         required: true
 *         description: Title of the course to add the video to.
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
 *                 description: Title of the video.
 *               description:
 *                 type: string
 *                 description: Description of the video.
 *               video:
 *                 type: string
 *                 format: binary
 *                 description: The video file to upload.
 *     responses:
 *       201:
 *         description: Video successfully created.
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
 *                     video_id:
 *                       type: integer
 *                       description: Video ID.
 *                     title:
 *                       type: string
 *                       description: Video title.
 *                     description:
 *                       type: string
 *                       description: Video description.
 *                     video_url:
 *                       type: string
 *                       description: URL of the video.
 *                     course_id:
 *                       type: integer
 *                       description: ID of the associated course.
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - Missing required fields or video file.
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
 *         description: Internal server error - Something went wrong while adding the video.
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
 * /video/{courseTitle}/{videoTitle}:
 *   patch:
 *     tags:
 *       - Video Lecture
 *     summary: Update a video
 *     description: Updates the details of a specific video based on its title and course.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseTitle
 *         required: true
 *         description: Title of the course where the video is located.
 *         schema:
 *           type: string
 *       - in: path
 *         name: videoTitle
 *         required: true
 *         description: Title of the video to update.
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
 *                 description: New title for the video (optional).
 *               description:
 *                 type: string
 *                 description: New description for the video (optional).
 *               video:
 *                 type: string
 *                 format: binary
 *                 description: New video file to upload (optional).
 *     responses:
 *       201:
 *         description: Video successfully updated.
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
 *                     video_id:
 *                       type: integer
 *                       description: Video ID.
 *                     title:
 *                       type: string
 *                       description: Video title.
 *                     description:
 *                       type: string
 *                       description: Video description.
 *                     video_url:
 *                       type: string
 *                       description: URL of the video.
 *                     course_id:
 *                       type: integer
 *                       description: ID of the associated course.
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request - Missing fields or invalid video title.
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
 *         description: Video not found - The specified video does not exist.
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
 *         description: Internal server error - Something went wrong while updating the video.
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
 * /video/{courseTitle}/{videoTitle}:
 *   delete:
 *     tags:
 *       - Video Lecture
 *     summary: Delete a video
 *     description: Deletes a specific video based on its title and course.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: courseTitle
 *         required: true
 *         description: Title of the course where the video is located.
 *         schema:
 *           type: string
 *       - in: path
 *         name: videoTitle
 *         required: true
 *         description: Title of the video to delete.
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Video successfully deleted.
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
 *                     video_id:
 *                       type: integer
 *                       description: Video ID.
 *                     title:
 *                       type: string
 *                       description: Video title.
 *                     description:
 *                       type: string
 *                       description: Video description.
 *                     video_url:
 *                       type: string
 *                       description: URL of the video.
 *                     course_id:
 *                       type: integer
 *                       description: ID of the associated course.
 *                 message:
 *                   type: string
 *       404:
 *         description: Video not found - The specified video does not exist.
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
 *         description: Internal server error - Something went wrong while deleting the video.
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
