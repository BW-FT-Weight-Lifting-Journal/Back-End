# Weight Lifting Journal

## Schema Flow Chart
  * https://dbdesigner.page.link/ZeVM85p1TXbQvMh89 <br>

## Table of Contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>
- **[Credits](#credits)**<br>

## <a name='overview'></a>Overview
This database allows users to register, login, and view all of their workouts in the database. It also allows users to create, edit, and delete their OWN workouts.
Users can also create, edit and delete exercises within workouts, and create edit and delete sets within exercises.

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
  'name': null,
  'avatarURL': null,
}
POST Login
{
  'id': 2,
  'token': '<really long token value here.....>,
  'name': null,
  'avatarURL': null,
}
```
### Workouts
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/workouts/ | N/A | N/A | Returns an object of all the workouts in the database associated to a particular user. |
GET | /api/workouts/:id | N/A | N/A | Returns a singular workout object based on user_id and workout_id. |
POST | /api/workouts | workoutName, date | N/A | Allows users to post a brand new workout to the their account in database. |
DELETE | /api/workouts/:id | N/A | N/A | Allows users to delete ANY OF THEIR OWN events. |
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