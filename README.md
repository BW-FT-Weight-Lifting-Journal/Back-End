# Weight Lifting Journal

## Schema Flow Chart
  * https://dbdesigner.page.link/ZeVM85p1TXbQvMh89 <br>

## Table of Contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overview
This database allows users to register, login, and view all of their workouts in the database. It also allows users to create, edit, and delete their OWN workouts.

## API Endpoints

### Authentication
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | / | N/A | N/A | returns object -> { "message": "Server Up!" }
POST | /api/auth/register | email, password | name, avatarUrl | Creates a new user object in the database. Returns id, name, JSON Web Token, and avatarURL |
POST | /api/auth/login |  email, password | N/A | Returns name, JSON Web Token, and the user object. |
```
***EXAMPLES***
POST Register
{
  'id': 1,
  'token': '<really long token value here.....>,
}
POST Login
{
  'id': 1,
  'token': '<really long token value here.....>,
}
```
### Workouts
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/users/:id/workouts/ | user_id | N/A | Returns an object of all the workouts in the database associated to a particular user. |
GET | /api/users/:id/workouts/:id | user_id, workout_id | N/A | Returns a singular event object based on user_id. |
POST | /api/users/:id/workouts | workoutName, date, user_id | N/A | Allows users to post a brand new workout to the their account in database. |
DELETE | /api/users/:id/workouts/:id | user_id, workout_id | N/A | Allows users to delete ANY OF THEIR OWN events. |
```
***EXAMPLES***
GET Users Workouts
{

}
GET User Workout by ID
{

}
POST User Workout to User Account
{

}
DELETE User Workout from User Account
{

}
```
### Exercises
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
POST | /api/users/:id/workout/:id/exercises | exerciseName, musclesName, user_id, workout_id | completed | Allows users to post brand new exercises to specific workout routine in database. |
PUT | /api/users/:id/workout/:id/exercises/:id | user_id, workout_id, exercise_id | exerciseName, musclesName, completed | Allows users to edit their OWN exercises from workout. |
DELETE | /api/users/:id/workout/:id/exercises/:id | user_id, workout_id, exercise_id | N/A | Allows users to delete their OWN exercises from workout. |
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
POST | /api/users/:id/workout/:id/exercises/ | reps, weight, user_id, workout_id | N/A | Allows users to post brand new sets to specific exercise routine in database. |
PUT | /api/users/:id/workout/:id/exercises/:id/sets/:id | user_id, workout_id, exercise_id, set_id | reps, weight | Allows users to edit their OWN sets from an exercise routine. |
DELETE | /api/users/:id/workout/:id/exercises/:id/sets/:id | user_id, workout_id, exercise_id, set_id | N/A | Allows users to delete their OWN sets from exercise routine. |
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