# User-App

## Table of Contents

1. [General info](#general-info)
2. [Tech Stack](#tech-stack)
3. [Environmental variables](#environmental-variables)
4. [Usage](#usage)
5. [CRUD Operations](#crud-operations)
6. [Author](#author)

## General info

Creating a CRUD app for the student with database

## Tech Stack

- Node.js
- Express

## Main Files: Project Structure

## Environmental variables

- **PORT** -- `server port number`
- **MONGO_URI** -- `database URL`

## Usage

1. Clone this repository.
2. cd into project root directory
3. Run `npm install` to install all dependencies(you must have node installed).
4. Run `npm run start` to start the server.
5. Open up Postman and then test out the Endpoints.

## CRUD Operations

### Create a Student

Adds in a new single student into the Application

| End Point   | Method | Params | Data Type |
| ----------- | ------ | ------ | --------- |
| `/students` | POST   | `none` | `none`    |

- **Request Body**

```
{
    "name": "teststudent",
    "email": "testemail@examplestudent.com",
    "country": "country"
}
```

- **Success Response:**

**Status: `200 OK`**

- **Sample Content:**

```
{
    "message": "new student created",
    "newStudent": {
        "_id": "6098a1993961160ff47fd681",
        "name": "Sheeba Murungi",
        "email": "shebamartha@gmail.com",
        "country": "Uganda",
        "__v": 0
    }
}
```

- **Error Response:**

```
{
    "message": {
        "errors": {
            "name": {
                "name": "ValidatorError",
                "message": "Path `name` is required.",
                "properties": {
                    "message": "Path `name` is required.",
                    "type": "required",
                    "path": "name"
                },
                "kind": "required",
                "path": "name"
            },
            "email": {
                "name": "ValidatorError",
                "message": "Path `email` is required.",
                "properties": {
                    "message": "Path `email` is required.",
                    "type": "required",
                    "path": "email"
                },
                "kind": "required",
                "path": "email"
            },
            "country": {
                "name": "ValidatorError",
                "message": "Path `country` is required.",
                "properties": {
                    "message": "Path `country` is required.",
                    "type": "required",
                    "path": "country"
                },
                "kind": "required",
                "path": "country"
            }
        },
        "_message": "Student validation failed",
        "name": "ValidationError",
        "message": "Student validation failed: name: Path `name` is required., email: Path `email` is required., country: Path `country` is required."
    }
}
```

- **Error Response for missing name field**

```
{
    "message": {
        "errors": {
            "name": {
                "name": "ValidatorError",
                "message": "Path `name` is required.",
                "properties": {
                    "message": "Path `name` is required.",
                    "type": "required",
                    "path": "name"
                },
                "kind": "required",
                "path": "name"
            }
        },
        "_message": "Student validation failed",
        "name": "ValidationError",
        "message": "Student validation failed: name: Path `name` is required."
    }
}
```

- **Error Response for missing email field**

```
{
    "message": {
        "errors": {
            "email": {
                "name": "ValidatorError",
                "message": "Path `email` is required.",
                "properties": {
                    "message": "Path `email` is required.",
                    "type": "required",
                    "path": "email"
                },
                "kind": "required",
                "path": "email"
            }
        },
        "_message": "Student validation failed",
        "name": "ValidationError",
        "message": "Student validation failed: email: Path `email` is required."
    }
}
```

- **Error response for missing country field**

```
{
    "message": {
        "errors": {
            "country": {
                "name": "ValidatorError",
                "message": "Path `country` is required.",
                "properties": {
                    "message": "Path `country` is required.",
                    "type": "required",
                    "path": "country"
                },
                "kind": "required",
                "path": "country"
            }
        },
        "_message": "Student validation failed",
        "name": "ValidationError",
        "message": "Student validation failed: country: Path `country` is required."
    }
}
```

### Fetch Students

Fetches all the students in the application.

| End Point   | Method | Params | Data Type |
| ----------- | ------ | ------ | --------- |
| `/students` | GET    | `none` | `none`    |

- **Response Body**

```
{
    "message": [
        {
            "_id": "6098a1993961160ff47fd681",
            "name": "Sheeba Murungi",
            "email": "shebamartha@gmail.com",
            "country": "Uganda",
            "__v": 0
        },
        {
            "_id": "6098a62dc84e920a805dcc3f",
            "name": "Tana Egbo Adelana",
            "email": "tanaadelana@gmail.com",
            "country": "Nigeria",
            "__v": 0
        }
    ]
}
```

### Fetch single student by Id

Fetches all the students in the application.

| End Point       | Method | Params | Data Type |
| --------------- | ------ | ------ | --------- |
| `/students/:id` | GET    | `none` | `none`    |

- **Response Body**

```
{
    "student": {
        "_id": "6098a1993961160ff47fd681",
        "name": "Sheeba Murungi",
        "email": "shebamartha@gmail.com",
        "country": "Uganda",
        "__v": 0
    }
}
```

### Update student by Id

Fetches all the students in the application.

| End Point       | Method | Params | Data Type |
| --------------- | ------ | ------ | --------- |
| `/students/:id` | PUT    | `none` | `none`    |

- **Response Body**

```
{
    "message": "student updated successfully"
}
```

### Delete student by Id

Fetches all the students in the application.

| End Point       | Method | Params | Data Type |
| --------------- | ------ | ------ | --------- |
| `/students/:id` | DELETE | `none` | `none`    |

- **Response Body**

```
{
    "message": "student deleted successfully"
}
```

## Demo link

[heroku](https://zuri-crud-task-app.herokuapp.com/)

## Author

[@tracycod3r](https://twitter.com/tracycod3r)
