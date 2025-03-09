## Documentation de l'API

La documentation complète est accessible via la route */docs* ([http://localhost:3002/docs](http://localhost:3002/docs))

## Proposition de procédure de tests

### 0. **User Registration**

#### **Register (POST /users/)**
- **URL**: `http://localhost:3002/api/users/`
- **Method**: `POST`
- **Request Body**:
```json
{
  "username": "bill",
  "password": "password"
}
```
- **Response** (Example):
```json
{
  "message": "User registered successfully",
  "user": {
  "id": "user.id",
  "username": "bill",
    },
}
```

---

### 1. **User Authentication**

#### **Login (POST /login)**
- **URL**: `http://localhost:3002/api/users/login`
- **Method**: `POST`
- **Request Body**:
```json
{
  "username": "bill",
  "password": "password"
}
```
- **Response** (Example):
```json
{
  "token": "your-jwt-token-here"
}
```
- **Note**: This will return a JWT token. Save this token because you'll need to include it in the Authorization header for protected routes.

---

### 2. **Users Fetching**

#### **Get All Users (GET /users)**
- **URL**: `http://localhost:3002/api/users`
- **Method**: `GET`
- **Response** (Example):
```json
[
  {
    "id": "user-id",
    "username": "testuser"
  },
  {
    "id": "user-id-2",
    "username": "newuser"
  }
]
```

---

### 3. **Task Routes**
Once authenticated, you can proceed to test the task routes.

#### **Get All Tasks (GET /tasks)**
- **URL**: `http://localhost:3002/api/tasks`
- **Method**: `GET`
- **Headers**: Add `Authorization: Bearer <your-jwt-token>`
- **Response** (Example):
```json
[
  {
    "id": "task-id",
    "title": "Sample Task",
    "description": "Task description",
    "status": "NOTENDED",
    "priority": 5,
    "userId": "user-id",
    "tags": [
      {
        "id": "tag-id",
        "title": "Sample Tag"
      }
    ]
  }
]
```

#### **Create a Task (POST /tasks)**
- **URL**: `http://localhost:3002/api/tasks`
- **Method**: `POST`
- **Headers**: Add `Authorization: Bearer <your-jwt-token>`
- **Request Body**:
```json
{
  "title": "New Task",
  "description": "Task description",
  "status": "NOTENDED",
  "priority": 3
}
```
- **Response** (Example):
```json
{
  "task": {
    "id": "new-task-id",
    "title": "New Task",
    "description": "Task description",
    "status": "NOTENDED",
    "priority": 3,
    "userId": "user-id",
    "tags": []
  }
}
```

#### **Get Task by ID (GET /tasks/:id)**
- **URL**: `http://localhost:3002/api/tasks/{task-id}`
- **Method**: `GET`
- **Headers**: Add `Authorization: Bearer <your-jwt-token>`
- **Response** (Example):
```json
{
  "id": "task-id",
  "title": "Sample Task",
  "description": "Task description",
  "status": "NOTENDED",
  "priority": 5,
  "userId": "user-id",
  "tags": [
    {
      "id": "tag-id",
      "title": "Sample Tag"
    }
  ]
}
```

#### **Update Task (PUT /tasks/:id)**
- **URL**: `http://localhost:3002/api/tasks/{task-id}`
- **Method**: `PUT`
- **Headers**: Add `Authorization: Bearer <your-jwt-token>`
- **Request Body**:
```json
{
  "title": "Updated Task Title",
  "description": "Updated task description",
  "status": "ENDED",
  "priority": 2
}
```
- **Response** (Example):
```json
{
  "task": {
    "id": "task-id",
    "title": "Updated Task Title",
    "description": "Updated task description",
    "status": "ENDED",
    "priority": 2,
    "userId": "user-id",
    "tags": []
  }
}
```

#### **Delete Task (DELETE /tasks/:id)**
- **URL**: `http://localhost:3002/api/tasks/delete/{task-id}`
- **Method**: `GET`
- **Headers**: Add `Authorization: Bearer <your-jwt-token>`
- **Response** (Example):
```json
{
  "message": "Task successfully deleted.",
  "task": {
    "id": "task-id",
    "title": "Task to delete",
    "description": "Task description",
    "status": "NOTENDED",
    "priority": 5,
    "userId": "user-id"
  }
}
```

---

### 4. **Tag Routes**
Les routes `api/tags` ne sont pas protégées.

#### **Create a Tag (POST /tags)**
- **URL**: `http://localhost:3002/api/tags`
- **Method**: `POST`
- **Request Body**:
```json
{
  "title": "New Tag"
}
```
- **Response** (Example):
```json
{
  "id": "new-tag-id",
  "title": "New Tag"
}
```

#### **Get All Tags (GET /tags)**
- **URL**: `http://localhost:3002/api/tags`
- **Method**: `GET`
- **Response** (Example):
```json
[
  {
    "id": "tag-id",
    "title": "Sample Tag",
    "tasks": [
      {
        "id": "task-id",
        "title": "Sample Task"
      }
    ]
  }
]
```

---

### 5. Connect / disconnect task to tag

#### **Connect Task to Tag (GET /tasks/connect/:task_id/:tag_id)**
- **URL**: `http://localhost:3002/api/tasks/connect/{task-id}/{tag-id}`
- **Method**: `GET`
- **Headers**: Add `Authorization: Bearer <your-jwt-token>`
- **Response** (Example):
```json
{
  "task": {
    "id": "task-id",
    "title": "Sample Task",
    "tags": [
      {
        "id": "tag-id",
        "title": "Sample Tag"
      }
    ]
  }
}
```

#### **Disconnect Task from Tag (GET /tasks/disconnect/:task_id/:tag_id)**
- **URL**: `http://localhost:3002/api/tasks/disconnect/{task-id}/{tag-id}`
- **Method**: `GET`
- **Headers**: Add `Authorization: Bearer <your-jwt-token>`
- **Response** (Example):
```json
{
  "task": {
    "id": "task-id",
    "title": "Sample Task",
    "tags": []
  }
}
```
---

### Testing with Postman or Thunder Client
0. **Register**: Register a new user
1. **Login**: Get your JWT token with the `users/login` endpoint.
2. **Tasks**: Use the token in the `Authorization` header for creating, fetching, updating, or deleting tasks.
3. **Tags**: Similarly, no need the token for adding, getting, and managing tags.
4. **Connect/Disconnect**: Test linking and unlinking tasks from tags using their respective routes.

In Thunder Client, you'll add the **Authorization header** as:
- **Key**: `Authorization`
- **Value**: `Bearer <your-jwt-token>`
