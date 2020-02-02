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
POST | /api/auth/register | email, password | name, avatarUrl | Creates a new user object in the database. Returns id, name, JSON Web Token, and avatarURL |
POST | /api/auth/login |  email, password | N/A | Returns name, JSON Web Token, and the user object. |
```
***EXAMPLES***
POST Register
{
  'id': 1,
  'name': 'jackson',
  'token': '<really long token value here.....>,
  'avatarURL': '
}
POST Login
{
  'id': 1,
  'name': 'jackson',
  'token': '<really long token value here.....>,
  'avatarURL': '
}
```
### Workouts
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
GET | /api/workouts | N/A | N/A | Returns an object of all the workouts in the database. |
GET | /api/workouts/:id | N/A | N/A | Returns a singular event object based on user_id. |
POST | /api/workouts | workoutName, date, user_id | N/A | Allows users to post brand new workouts to the database. |
DELETE | /api/:id/workouts | user_id | N/A | Allows users to delete ANY OF THEIR OWN events. |
```
***EXAMPLES***
GET Workouts

GET Workouts by ID

POST Workout

DELETE Workout

```
### Exercises
Method | Endpoint | Body (required) | Body (optional) | Notes
| ----- | ----------------- | -------------------- | --------------------- | ------------------ |
POST | /api/exercises | exerciseName, musclesName | completed | Allows users to post brand new exercises to specific workout routine in database. |
DELETE | /api/exercises/:id | N/A | N/A | Allows users to delete their OWN events. |
PUT | /api/exercises/:id | Title, Date, Time, Location | Description, Link, Image, approved | Allows users to edit their OWN events. |
```
***EXAMPLES***
POST Exercise

DELETE Exercise

PUT Exercise

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