# Cloud Computing Path

Creating **RESTful APIs** using NodeJS and deploying to [Google Cloud Platform](https://cloud.google.com) by using [Google App Engine](https://cloud.google.com/appengine) and [Google Compute Engine](https://cloud.google.com/compute) for connection between android application and database. Using Cloud SQL for creating the database server, and Cloud Storage for saving user data.

# ERD
![GROWTHY (2)](https://github.com/Capstone-Projecto/main-growthy/assets/117957014/88d56d95-fe24-42a2-9bfa-efeb73c37899)

# RESTful APIs
In making the RESTful APIs we use NodeJS with the Express Framework for building an API server, and for responses using JSON format.
Explanation for each URL that can be used :

## Base Routes

Base URL
> https://backend-dot-growthy-app.et.r.appspot.com/

### Index Endpoints

#### Authentication Routes

**Base URL :**

> /auth

**Method :**

> USE

**Description :**

> Handles authentication-related routes.

<br>

#### User Routes

**Base URL :**

> /user

**Method :**

> USE

**Middleware :**

> verifiedToken

**Description :**

> Handles user-related routes. Requires authentication.

<br>

#### Plant Routes 

**Base URL :**

> /plant

**Method :**

> USE

**Description :**

> Handles routes related to plants. 

<br>

#### Disease Routes 

**Base URL :**

> /disease

**Method :**

> USE

**Middleware :**

> diseaseRoute

**Description :**

> Handles routes related to diseases. 

<br>

#### Financial Routes

**Base URL :**

> /financial

**Method :**

> USE

**Middleware :**

> verifiedToken

**Description :**

> Handles routes related to financial operations. Requires authentication

<br>

## Authentication Route

### Auth Endpoints

#### Google Authentication 

**Method :**

> GET

**Base URL :**

> /google

**Description :**

> Initiates the Google authentication process.

**Response :**

 - Redirect to ‘/auth/google/protected’ on successful authentication.
 - Redirect to ‘/auth/google/failure’ on authentication failure.

<br>

#### Google Authentication Succes

**Method :**

> GET

**Base URL :**

> /google/protected

**Description :**

> Endpoint called after successful Google authentication.

**Response :**

 - User data is stored in the database.
 - Redirect to ‘/auth/google/success/:token’, passing the generated JWT token as a parameter.

<br>

#### Google Authentication Succes Redirect

**Method :**

> GET

**Base URL :**

> /google/success/:token

**Description :**

> Endpoint called after successful Google authentication and token generation.

** URL Parameters :**

> ‘token’ : The generated JWT token

**Response :**

- Status Code : 200 (OK)
- Body		      : JSON object containing a success message and the JWT token

<br>

#### Google Authentication Failure

**Method :**

> GET

**Base URL :**

> /google/failure

**Description :**

> Endpoint called when Google authentication fails. 

**Response :**

- Status Code : 200 (OK)
- Body		      : Error message indicating the failure

<br>

#### Test Endpoint for Google Authentication

**Method :**

> GET

**Base URL :**

> /test

**Description :**

> Test endpoint for authentication with Google

**Response :**

- Status Code : 200 (OK)
- Body	      	: HTML content with a link to authenticate with Google

<br>

#### User Login

**Method :**

> POST

**Base URL :**

> /login

**Description :**

> Endpoint for user login

**Request Body :**

- Email     : The email of the user
- Password  : The password of the user

**Response :**

- Status Code : 200 (OK)
- Body		      : JSON object containing a success message and the generated JWT token

**Error Response :**
- Status Code : 04 (Not Found)
- Body		      : Error message if there was an internal server error

<br>

#### User Registration

**Method :**

> POST

**Base URL :**

> /register

**Description :**

> Endpoint for user registration

**Request Body :**

- Name      : The name od the user
- Email     : The email of the user
- Password  : The password of the user

**Response :**

- Status Code : 200 (OK)
- Body		      : JSON object containing a success message and the generated JWT token

**Error Response :**
- Status Code : 04 (Not Found)
- Body		      : Error message if there was an internal server error

<br>

## User Route

### User Endpoints

#### Get All Users

**Method :**

> GET

**Base URL :**

> /users

**Description :**

> Retrieves all users 

**Response :**

- Status Code : 200 (OK)
- Body		      : JSON array containing user data, including associated financial dashboards.

<br>

#### Get User Profile by ID

**Method :**

> GET

**Base URL :**

> /profile/:id

**Description :**

> Retrieves a user’s profile by ID

**Response :**

- Status Code : 200 (OK)
- Body		      : JSON object containing the user’s profile, including associated financial dashboards.

**Error Response :**

- Status Code : 404 (Not Found)
- Body		      : Error message if the user with the specified ID was not found.

<br>

#### Update User Profile by ID

**Method :**

> PUT

**Base URL :**

> /edit_profile/:id

**Description :**

> Updates the profile data for a specific user identified by the provided ‘id’ parameter.

**URL Parameters :**

> id    : The unique identifier of the user.

**Request Body:**

- name     : (optional) Updated name of the user.
- email    : (optional) Updated email of the user.
- gender   : (optional) Updated gender of the user.
- phone    : (optional) Updated phone number of the user.
- address  : (optional) Updated address of the user.
- avatar   : (optional) Updated avatar file to be uploaded.
   - File size limit : 5 MB
   - Field name      : avatar
   
**Response :**

- Status Code : 200 (OK)
- Body		      : Success message indicating that the profile was updated successfully.

**Error Response :**

- Status Code : 404 (Not Found)
- Body		      : Error message if the user with the specified ID was not found. 
- Status Code : 500 (Internal Server Error)
- Body		: Error message if there was an error updating the user profile or uploading the avatar file.

<br>

#### Update User Password by ID

**Method :**

> PUT

**Base URL :**

> /password /:id

**Description :**

> Updates the password for a specific user identified by the provided ‘id’ parameter.

**URL Parameters :**

> id    : The unique identifier of the user.

**Request Body:**

- currentPassword : The user’s current password.
- newPassword     : The user’s new password.

**Response :**

- Status Code : 200 (OK)
- Body		      : Success message indicating that the password was updated successfully.

**Error Response :**

- Status Code : 404 (Not Found)
- Body		      : Error message if the user with the specified ID was not found. 
- Status Code	: 401 (Unauthorized)
- Body	      	: Error message if the current password provided is incorrect.
- Status Code : 500 (Internal Server Error)
- Body       	:Error message if there was an error updating the password. 

<br>






