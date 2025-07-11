# 🧪 Frontend Developer Task

Welcome! This repository provides a scaffold for completing a task as part of our frontend developer hiring process.

This challenge is tailored for **Mid-Level Developers**, and it is designed to assess your frontend engineering skills, problem-solving ability, and overall code quality.

---

## 🎯 Assignment Objective

Your task is to build a frontend web application using **React**, **Vue**, or **Angular** that integrates with a **public open-source API**. The application should support full **CRUD functionality**, and demonstrate intermediate-level frontend concepts including:

- Pagination with caching
- State management
- Form validation
- Error handling
- Dockerized deployment
- Unit testing for core logic

---

## 🧱 Requirements

### Technical Requirements
- **Framework**: Angular
- **State Management**: NgRx
- **Forms**: Use a custom validation logic
- **Docker**: Containerize your app for deployment
- **Testing**: Add unit tests for key logic

### Functional Requirements
- Implement **CRUD operations** for a resource (e.g., users, posts, products)
  - Create
  - Read (with pagination)
  - Update
  - Delete
- Integrate with a public API such as:
  - [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - [Fakestore API](https://fakestoreapi.com/)
  - [ReqRes](https://reqres.in/)
- Support client-side or server-side **pagination** with caching
- Show **loading indicators** and **error messages**
- Implement **form validation** with proper user feedback

---

## ✅ How to Score Points

You’ll be evaluated based on the following:

| Area                        | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| ✅ CRUD Functionality       | Can perform create, read (with pagination), update, and delete operations   |
| ✅ Pagination + Caching     | Smooth navigation across pages without unnecessary re-fetching              |
| ✅ State Management         | Clear separation of logic and scalable state organization                   |
| ✅ Error Handling           | Graceful handling of failed API requests with user-friendly feedback        |
| ✅ Form Validation          | Field-level validation with visual indicators and messaging                 |
| ✅ Optimistic UI Updates    | UI reflects changes immediately and rolls back if the request fails         |
| ✅ Docker Support           | Build and run the app in a Docker container with minimal setup              |
| ✅ Code Style & Structure   | Modular, readable, and maintainable code                                    |
| ✅ Documentation            | Clear README with setup, architecture, and usage instructions               |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-org/your-assignment-repo.git
cd your-assignment-repo


## 🧠 Notes

- You are encouraged to go beyond the minimum and impress with thoughtful UX and engineering.
- Feel free to use TypeScript or JavaScript.
- Keep your commits clean and meaningful.
- Add comments where appropriate to explain complex logic.
