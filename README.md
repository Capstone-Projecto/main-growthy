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
- Body		    : JSON object containing a success message and the JWT token

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
- Body		    : Error message indicating the failure

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
- Body	    	: HTML content with a link to authenticate with Google

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
- Body		    : JSON object containing a success message and the generated JWT token

**Error Response :**
- Status Code : 04 (Not Found)
- Body		    : Error message if there was an internal server error

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
- Body		    : JSON object containing a success message and the generated JWT token

**Error Response :**
- Status Code : 04 (Not Found)
- Body		    : Error message if there was an internal server error

<br>






