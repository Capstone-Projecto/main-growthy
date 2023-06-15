# Cloud Computing Path

Creating **RESTful APIs** using NodeJS (Express) and deploying to [Google Cloud Platform](https://cloud.google.com) by using [Google App Engine](https://cloud.google.com/appengine) for connection between android application and database. Using Cloud SQL and Sequelize for creating the database server, and Cloud Storage for images storage.

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

> `USE`

**Description :**

> Handles authentication-related routes.

<br>

#### User Routes

**Base URL :**

> /user

**Method :**

> `USE`

**Middleware :**

> verifiedToken

**Description :**

> Handles user-related routes. Requires authentication.

<br>

#### Plant Routes 

**Base URL :**

> /plant

**Method :**

> `USE`

**Description :**

> Handles routes related to plants. 

<br>

#### Disease Routes 

**Base URL :**

> /disease

**Method :**

> `USE`

**Middleware :**

> diseaseRoute

**Description :**

> Handles routes related to diseases. 

<br>

#### Financial Routes

**Base URL :**

> /financial

**Method :**

> `USE`

**Middleware :**

> verifiedToken

**Description :**

> Handles routes related to financial operations. Requires authentication

<br>

## Authentication Route

### Auth Endpoints

#### Google Authentication 

**Method :**

> `GET`

**Base URL :**

> /google

**Description :**

> Initiates the Google authentication process.

**Response :**

- Redirects the user to the Google authentication page.

**Success Redirect :**

- URL         : /auth/google/protected
- Description : Redirects the user to this URL after successful Google authentication.

**Failure Redirect :**

- URL         : /auth/google/failure
- Description : Redirects the user to this URL if Google authentication fails.

<br>

#### Google Authentication Success

**Method :**

> `GET`

**Base URL :**

> /google/protected

**Description :**

> Handles the callback after successful Google authentication.

**Response :**

 - Creates or finds a user in the database based on the Google account information.
 - Generates a JWT token for the user.
 - Redirects the user to /auth/google/success/:token with the generated token as a parameter.

<br>

#### Google Authentication Success Message

**Method :**

> `GET`

**Base URL :**

> /google/success/:token

**Description :**

> Displays a success message after Google authentication is completed successfully.

**URL Parameters :**

- token : The JWT token generated for the authenticated user.

**Response :**

- Status Code : 200 (OK)
- Body        : Object containing a success message and the generated token.

<br> 

#### Google Authentication Failure 

**Method :**

> `GET`

**Base URL :**

> /google/failure

**Description :**

> Handles the callback when Google authentication fails.

**Response :**

- Status Code  : 200 (OK)
- Body         : Error message indicating the failure to login.

<br>

#### Test Endpoint for Google Authentication

**Method :**

> `GET`

**Base URL :**

> /test

**Description :**

> Test endpoint for authentication with Google

**Response :**

- Status Code : 200 (OK)
- Body	      	: HTML content with a link to authenticate with Google

<br>

#### Login

**Method :**

> `POST`

**Base URL :**

> /login

**Description :**

> Handles the login logic for users with email and password.

**Request Body :**

- Email     : Email of the user
- Password  : Password of the user

**Response :**

- Status Code : 200 (OK)
- Body		      : Object containing a success message and the generated token, and the name of the user. 

**Error Response :**
- Status Code : 404 (Not Found)
- Body		      : Error message if the user with the specified email was not found.
- Status Code : 401 (Unauthorized)
- Body        : Error message if the provided password is incorrect.
- Status Code : 500 (Internal Server Error)
- Body        : Error message if there was an internal server error.

<br>

#### Register

**Method :**

> `POST`

**Base URL :**

> /register

**Description :**

> Handles the registration logic for new users.

**Request Body :**

- Name      : Name of the user
- Email     : Email of the user
- Password  : Password of the user

**Response :**

- Status Code : 200 (OK)
- Body		      : Object containing a success message, the generated token, and the name of the user. 

**Error Response :**
- Status Code : 409 (Conflict)
- Body		      : Error message if there was an internal server error
- 
<br>

## User Route

### User Endpoints

#### Get All Users

**Method :**

> `GET`

**Base URL :**

> /users

**Description :**

> Retrieves data for all users 

**Response :**

- Status Code : 200 (OK)
- Body		      : Array of user objects, including associated financial dashboard data.

<br>

#### Get User Profile by ID

**Method :**

> `GET`

**Base URL :**

> /profile/:id

**Description :**

> Retrieves the profile of a specific user by their ID.

**URL Parameters :**

- id   : The ID of the user
  
**Response :**

- Status Code : 200 (OK)
- Body		      : User object, including associated financial dashboard data.

**Error Response :**

- Status Code : 404 (Not Found)
- Body		      : Error message if the user with the specified ID was not found. 

<br>

#### Update User Profile by ID

**Method :**

> `PUT`

**Base URL :**

> /edit_profile/:id

**Description :**

> Updates the profile of a specific user by their ID.

**URL Parameters :**

> id    : The ID of the user. 

**Request Body:**

- name     :  Updated name of the user.
- email    :  Updated email of the user.
- gender   :  Updated gender of the user.
- phone    :  Updated phone number of the user.
- address  :  Updated address of the user.
- avatar   :  Updated avatar file to be uploaded.
   
**Response :**

- Status Code : 200 (OK)
- Body		      : Success message indicating the profile update.

**Error Response :**

- Status Code : 404 (Not Found)
- Body		      : Error message if the user with the specified ID was not found. 
- Status Code : 500 (Internal Server Error)
- Body		      : Error message if there was an error updating the profile.

<br>

#### Update User Password by ID

**Method :**

> `PUT`

**Base URL :**

> /password /:id

**Description :**

> Updates the password for a specific user by their ID.

**URL Parameters :**

> id    : The ID of the user.

**Request Body:**

- currentPassword : Current password of the user.
- newPassword     : New password to be set for the user.

**Response :**

- Status Code : 200 (OK)
- Body		      : Success message indicating that the password update. 

**Error Response :**

- Status Code : 404 (Not Found)
- Body		      : Error message if the user with the specified ID was not found. 
- Status Code	: 401 (Unauthorized)
- Body	      	: Error message if the current password provided is incorrect.
- Status Code : 500 (Internal Server Error)
- Body       	:Error message if there was an error updating the password. 

<br>








