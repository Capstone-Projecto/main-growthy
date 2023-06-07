# Cloud Computing Path

Creating RESTful APIs and deploying to Google Cloud Platform by using App Engine for connection between android application and database. Using Cloud SQL for creating the database server, and Cloud Storage for ... .

## RESTful APIs
In making the RESTful APIs we use NodeJS with the Express Framework for building an API server, and for responses using JSON format.
Explanation for each URL that can be used :

**Soon**
- ERD
![GROWTHY (2)](https://github.com/Capstone-Projecto/main-growthy/assets/117957014/88d56d95-fe24-42a2-9bfa-efeb73c37899)


- List API

###Index.js###

Base URL

The base URL for the endpoints is ‘/’,

Endpoints 

Authentication Routes

Base URL	 : ‘/auth’
Route Handler	 : ‘authRoute’
Description	 : Handles authentication-related routes.

User Routes

Base URL	: ‘/user’
Middleware	: ‘verifiedToken’
Route Handler   : ‘userRoute’
Description        : Handles user-related routes. Requires authentication.

Plant Routes 

Base URL	: ‘/plant’
Route Handler	: ‘plantsRoute’
Description	: Handles routes related to plants. 

Disease Routes 

Base URL	: ‘/disease’
Middleware	: ‘diseaseRoute’
Description	: Handles routes related to diseases. 

Financial Routes

Base URL	: ‘/financial’
Middleware	: ‘verifiedToken’
Route Handler   : ‘financialRoute’
Description	: Handles routes related to financial operations. Requires authentication


- Used URL, endpoint, etc 
> src: https://story-api.dicoding.dev/v1/#/
- any suggest?
