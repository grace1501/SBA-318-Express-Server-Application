# SBA 318: Express Server Application
## Project name: A Plant API
## Objectives
Create a server application with Node and Express.
Create a RESTful API using Express.
Create Express middleware.
Use Express middleware.
Use a template engine to render views with Express.
Interact with a self-made API through HTML forms.

## List of all routes in this application:
- GET / : View main page as an html with css styles applied
  
- GET /users: View all users
- POST /users: Add a new user
- GET /users/new: Add a new user using a form, this form then get submitted to POST /users route 
- GET /users/:id : View a user info by id
- PATCH /users/:id : Change a user info by id
- DELETE /users/:id : Delete a user by id
  
- GET /plants : View all plants
- GET /plants/:id : View a plant info by id
  
- GET /favoriteList : View all favorite list 
- GET /favoriteList/:id : View all favorite list by id
- GET /favoriteList?userId=VALUE : View a favorite list of a user by userId query

