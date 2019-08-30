# backend

# Register
https://diabetesmanager.herokuapp.com/api/users/register

# Login
https://diabetesmanager.herokuapp.com/api/users/login



//	USERS ENDPOINTS

POST req for registering a user - /api/users/register - It requires a username and password, and it sends a token once registered.

POST req  for logging in a user - /api/users/login - It requires a username and password, and it sends a token once log in is verified.

GET req to see individual user - /api/users/users - Allows front end access to users.

------------------------------------------------

# GET/POST
https://diabetesmanager.herokuapp.com/api/manager/manage

# POST/DELETE/PUT
https://diabetesmanager.herokuapp.com/api/manager/manage/:id

//	MANAGER ENDPOINTS

GET req to see posts by manage (on feed) - /api/manager/manage - Allows front end access to manage.

POST req to add user_id that is existing on the api - /api/manager/manage - requires a timestamp, code, value, user_id. We also accept a user_id as an optional input but not preferred.

POST req to getByUserId the user_id that is existing on the api - /api/manager/manage/:id - requires nothing. but sends a timestamp, code, value, user_id. We also accept get a respones from the ds backend with there prodictive modle.

DELETE req to delete a article - api/manager/manage/:id - use id of manage to delete it

PUT req to update a article - /api/manager/manage/:id - requires a timestamp, code, value, user_id. We also accept a user_id as an optional input but not preferred.