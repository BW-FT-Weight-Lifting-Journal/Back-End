# Weight Lifting Journal

## Schema Flow Chart
  * https://dbdesigner.page.link/ZeVM85p1TXbQvMh89 <br>
  
## Heroku URL
  * https://weight-lifting-journal-web25.herokuapp.com/ <br>
  
## Table of Contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overview
This database allows users to register, login, and view all of their workouts in the database. It also allows users to create, edit, and delete their OWN workouts.
Users can also create, edit and delete exercises within workouts, and create edit and delete sets within exercises.

## API Endpoints


### Server is Up!
### Authentication
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | / | N/A | N/A | returns object -> { "message": "Server Up!" }

### Authentication
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
POST | /api/auth/register | email, password | name, avatarUrl | Creates a new user object in the database. Returns userID |
POST | /api/auth/login |  email, password | N/A | Returns JSON Web Token |
```
***EXAMPLES***
POST Register
2
POST Login
{
  'token': '<really long token value here.....>,
}
```
### Workouts
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/users/:userID/workouts | N/A | N/A | Returns a singular workout object based on user_id and workout_id. |
POST | /api/users/:userID/workouts | workoutName | N/A | Workout ID |
PUT | /api/workouts/:id | workoutName | N/A | Workout ID |
DELETE | /api/workouts/:id | N/A | N/A | Allows users to delete ANY OF THEIR OWN events. |
```
***EXAMPLES***
GET User Workouts by userID in req.body.params
[
    {
        "name": "Willy L",
        "workoutName": "leg-day",
        "date": "Saturday"
    },
    {
        "name": "Willy L",
        "workoutName": "core",
        "date": "Monday"
    },
    {
        "name": "Willy L",
        "workoutName": "upper-body",
        "date": "Tuesday"
    },
    {
        "name": "Willy L",
        "workoutName": "Back day",
        "date": null
    },
    {
        "name": "Willy L",
        "workoutName": "Back day",
        "date": null
    }
]
POST Added Workout to User Account
13
PUT Edited Workout previously added 
{
    "message": "Updated workout",
    "workout": [
        {
            "id": 13,
            "workoutName": "testEditName"
        }
    ]
}
DELETE User Workout from User Account
{
    "message": "Deleted Workout"
}
```
### Exercises
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/workouts/:id/exercises | N/A | N/A | Returns all exercises for a users workout routine. |
POST | /api/workouts/:id/exercises | exerciseName, musclesName | completed | Allows users to post brand new exercises to specific workout routine in database. |
PUT | /api/workouts/:id/exercises/:id | N/A | exerciseName, musclesName, completed | Allows users to edit their OWN exercises from workout. |
DELETE | /api/workout/:id/exercises/:id | N/A | N/A | Allows users to delete their OWN exercises from workout. |
```
***EXAMPLES***
POST User Exercise inside User Workout
{

}
PUT User Exercise inside User Workout
{

}
DELETE User Exercise inside User Workout
{

}
```
### Sets
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/workouts/:id/exercises/:id | N/A | N/A | Returns all sets for a user workout routine. |
POST | /api/workout/:id/exercises/:id | reps, weight | N/A | Allows users to post brand new sets to specific exercise routine in database. |
PUT | /api/workout/:id/exercises/:id/sets/:id | N/A | reps, weight | Allows users to edit their OWN sets from an exercise routine. |
DELETE | /api/workout/:id/exercises/:id/sets/:id | N/A | N/A | Allows users to delete their OWN sets from exercise routine. |
```
***EXAMPLES***
POST User Set inside User Exercise
{

}
PUT User set inside User Exercise
{

}
DELETE User Exercise inside User Exercise 
{

}
```
## Credits
### Project Manager
Jackson Ogles: https://github.com/cjogles <br>

### User Interface
Eddie Madrigal: http://github.com/eddiemadrigal <br>
Matthew Heideman: https://github.com/MatthewHeideman <br>

### Frontend
#### Senior React Devs
Myco Sullivan: https://github.com/mjs001 <br>
Nicole White: https://github.com/Nicci498 <br>
#### Junior React Devs
Jake Johnson: https://github.com/ekajjj <br>
Leo Sanchez: https://github.com/LeoSanchez89 <br>

### Backend
Jackson Ogles: https://github.com/cjogles <br>
Abdi Farah: https://github.com/abdirahmanfarah <br>
