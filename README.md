# Project's Title
Social media backend Restapi
# Project Description
User Management:
Registration: Users can sign up and create accounts by providing necessary information.
Authentication: Users can log in securely using options like JWT or session-based authentication.
Posts and Feed:

Post Creation: Users can create posts containing text along with optional image or video attachments.
Following Users: Users can follow other users to see their posts in their personalized feed.
Personalized Feed: Users can view posts from the people they follow in their feed, with efficient pagination for retrieving large amounts of data.
Likes and Comments:

Interactions: Users can like and comment on posts created by others.
Engagement Metrics: Users can view the number of likes and comments on a post, enhancing engagement.
Notifications:

Real-time Notifications: Users receive notifications for mentions, likes, and comments.
Implementation: Bonus points are available for implementing real-time notifications using websockets or push notifications, enhancing the user experience.
# Technologies used
express and mongodb
# How to Install and Run the Project
npm install
node server.js
# How to Use the Project
# To Register
https://social-media-backend-restapi-3.onrender.com/api/users/register
{name, email, password}
# To login
https://social-media-backend-restapi-3.onrender.com/api/users/login
{email, password}
# To follow a user
https://social-media-backend-restapi-3.onrender.com/api/follow/:userId
{followUserId}
# To see a post(get request)
https://social-media-backend-restapi-3.onrender.com/api/feed/userId
# To create a post
https://social-media-backend-restapi-3.onrender.com/api/post/
{text, attachment, userId}
# To like a post
https://social-media-backend-restapi-3.onrender.com/post/:postId/like
{userId}
# To comment on a post(post request)
https://social-media-backend-restapi-3.onrender.com/post/:postid/comment
{userId, text}
# To see number of likes and comment on a post(get request)
https://social-media-backend-restapi-3.onrender.com/feed/:userId
#To create a notification(post request)
https://social-media-backend-restapi-3.onrender.com/notifications
{ recipient_id, action_type, action_data}
#To get Notification(get request)
https://social-media-backend-restapi-3.onrender.com/notifications/userId

