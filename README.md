# 📝 Modern Todo App

<div align="center">

![Todo App Logo](https://img.shields.io/badge/📝-Todo%20App-blue?style=for-the-badge&logo=react)

**A feature-rich, full-stack Todo application built with React, Vite, Node.js, and MongoDB**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](https://github.com/yourusername/todo-app)
[![Version](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)](https://github.com/yourusername/todo-app)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/)

[🚀 Live Demo](https://your-todo-app.vercel.app) • [📖 Documentation](https://github.com/yourusername/todo-app/wiki) • [🐛 Report Bug](https://github.com/yourusername/todo-app/issues)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📸 Screenshots](#-screenshots)
- [🚀 Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🎯 Usage](#-usage)
- [🌐 API Documentation](#-api-documentation)
- [🚀 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ Features

### 🔐 **Authentication & Security**
- **Secure User Registration & Login** with JWT tokens
- **Password Encryption** using bcryptjs
- **Protected Routes** with authentication middleware
- **Automatic Token Refresh** and session management

### 📝 **Todo Management**
- **Create, Read, Update, Delete** todos with ease
- **Rich Text Support** with title and description fields
- **Real-time Updates** without page refresh
- **Search & Filter** functionality for better organization
- **Todo Statistics** with completion tracking

### 🎨 **User Experience**
- **Dark/Light Theme Toggle** with persistent preferences
- **Responsive Design** that works on all devices
- **Smooth Animations** and modern UI transitions
- **Loading States** with beautiful animated loaders
- **Error Handling** with user-friendly messages

### 🔧 **Technical Features**
- **RESTful API** with Express.js backend
- **MongoDB Integration** with Mongoose ODM
- **Modern React Hooks** and Context API
- **Vite Build Tool** for lightning-fast development
- **CORS Configuration** for secure cross-origin requests

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19.1.1** - Modern UI library with latest features
- **Vite 7.1.7** - Next-generation frontend tooling
- **React Router DOM 7.9.3** - Declarative routing
- **Axios 1.12.2** - Promise-based HTTP client
- **Lucide React 0.544.0** - Beautiful icon library
- **Tailwind CSS 4.1.14** - Utility-first CSS framework

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database with Atlas cloud hosting
- **Mongoose 8.19.0** - Elegant MongoDB object modeling
- **JWT** - Secure token-based authentication
- **bcryptjs 3.0.2** - Password hashing library

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Nodemon** - Auto-restart development server
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

---

## 📸 Screenshots

<div align="center">

### 🌅 Light Theme
![Light Theme Dashboard](https://via.placeholder.com/800x500/f8fafc/1e293b?text=Light+Theme+Dashboard)

### 🌙 Dark Theme
![Dark Theme Dashboard](https://via.placeholder.com/800x500/1e293b/f8fafc?text=Dark+Theme+Dashboard)

### 📱 Mobile Responsive
![Mobile View](https://via.placeholder.com/400x600/3b82f6/ffffff?text=Mobile+Responsive+Design)

</div>

---

## 🚀 Quick Start

Get the Todo app running locally in just a few minutes:

```bash
# Clone the repository
git clone https://github.com/yourusername/todo-app.git
cd todo-app

# Install dependencies for both frontend and backend
npm install
cd frontend && npm install
cd ../backend && npm install

# Set up environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Start the development servers
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) to view the app in your browser! 🎉

---

## 📦 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v8.0.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **MongoDB Atlas Account** - [Sign up](https://www.mongodb.com/cloud/atlas)

### Step-by-Step Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

#### 2. Install Root Dependencies

```bash
npm install
```

#### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

#### 4. Install Backend Dependencies

```bash
cd ../backend
npm install
```

#### 5. Verify Installation

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Verify all dependencies are installed
npm list --depth=0
```

---

## ⚙️ Configuration

### Environment Variables

#### Backend Configuration (`backend/.env`)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todo-db?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# CORS Configuration
FRONTEND_URL=http://localhost:5174
```

#### Frontend Configuration (`frontend/.env`)

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# App Configuration
VITE_APP_NAME=Modern Todo App
VITE_APP_VERSION=1.0.0
```

### MongoDB Atlas Setup

1. **Create a MongoDB Atlas Account**
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account

2. **Create a New Cluster**
   - Choose the free tier (M0 Sandbox)
   - Select your preferred cloud provider and region

3. **Configure Database Access**
   - Create a database user with read/write permissions
   - Note down the username and password

4. **Configure Network Access**
   - Add your IP address to the IP Access List
   - For development, you can use `0.0.0.0/0` (not recommended for production)

5. **Get Connection String**
   - Click "Connect" → "Connect your application"
   - Copy the connection string and update `MONGODB_URI` in your `.env` file

---

## 🎯 Usage

### Starting the Development Environment

#### Option 1: Start Both Servers Simultaneously

```bash
# From the root directory
npm run dev
```

#### Option 2: Start Servers Individually

```bash
# Terminal 1 - Backend Server
cd backend
npm run dev

# Terminal 2 - Frontend Server
cd frontend
npm run dev
```

### Available Scripts

#### Root Directory

```bash
npm run dev          # Start both frontend and backend
npm run build        # Build both applications
npm run start        # Start production servers
npm run clean        # Clean node_modules and build files
```

#### Frontend Scripts

```bash
npm run dev          # Start development server (http://localhost:5174)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

#### Backend Scripts

```bash
npm run dev          # Start development server with nodemon
npm start            # Start production server
npm run test         # Run tests (when implemented)
```

### Using the Application

#### 1. **User Registration**
- Navigate to the registration page
- Enter username, email, and password
- Click "Sign Up" to create your account

#### 2. **User Login**
- Enter your email and password
- Click "Login" to access your todos

#### 3. **Managing Todos**
- **Create**: Click the "+" button and fill in todo details
- **Edit**: Click on any todo to edit its content
- **Complete**: Check the checkbox to mark as completed
- **Delete**: Click the delete button to remove a todo

#### 4. **Search & Filter**
- Use the search bar to find specific todos
- Filter by: All, Active, or Completed todos

#### 5. **Theme Toggle**
- Click the theme toggle button to switch between light and dark modes
- Your preference is automatically saved

---

## 🌐 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Todo Endpoints

#### Get All Todos
```http
GET /todos
Authorization: Bearer <jwt_token>
```

#### Create Todo
```http
POST /todos
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API docs"
}
```

#### Update Todo
```http
PUT /todos/:id
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "title": "Updated title",
  "description": "Updated description",
  "completed": true
}
```

#### Delete Todo
```http
DELETE /todos/:id
Authorization: Bearer <jwt_token>
```

### Response Format

#### Success Response
```json
{
  "success": true,
  "data": {
    "_id": "60d5ecb74b24a1234567890",
    "title": "Sample Todo",
    "description": "This is a sample todo",
    "completed": false,
    "createdAt": "2023-06-25T10:30:00.000Z",
    "updatedAt": "2023-06-25T10:30:00.000Z"
  }
}
```

#### Error Response
```json
{
  "success": false,
  "error": {
    "message": "Todo not found",
    "code": "TODO_NOT_FOUND"
  }
}
```

---

## 🚀 Deployment

### Frontend Deployment (Vercel)

#### 1. Prepare for Deployment

```bash
cd frontend
npm run build
```

#### 2. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts to configure your deployment
```

#### 3. Environment Variables

Add these environment variables in your Vercel dashboard:

```env
VITE_API_URL=https://your-backend-url.onrender.com/api
```

### Backend Deployment (Render)

#### 1. Prepare Backend

Create `backend/.gitignore`:
```
node_modules/
.env
```

#### 2. Deploy to Render

1. Push your code to GitHub
2. Go to [Render.com](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `todo-app-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

#### 3. Environment Variables

Add these in your Render dashboard:

```env
NODE_ENV=production
MONGODB_URI=your-mongodb-atlas-connection-string
JWT_SECRET=your-super-secret-jwt-key
FRONTEND_URL=https://your-frontend-url.vercel.app
```

### Database Deployment (MongoDB Atlas)

Your MongoDB Atlas database is already cloud-hosted and production-ready. Just ensure:

1. **Network Access**: Update IP whitelist for production
2. **Database User**: Use strong credentials
3. **Connection String**: Update in production environment variables

---

## 🧪 Testing

### Running Tests

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test

# Run all tests
npm run test
```

### Manual Testing Checklist

#### Authentication Flow
- [ ] User can register with valid credentials
- [ ] User cannot register with invalid email
- [ ] User cannot register with weak password
- [ ] User can login with correct credentials
- [ ] User cannot login with incorrect credentials
- [ ] User is redirected after successful login
- [ ] User can logout successfully

#### Todo Management
- [ ] User can create a new todo
- [ ] User can view all their todos
- [ ] User can edit existing todos
- [ ] User can mark todos as complete/incomplete
- [ ] User can delete todos
- [ ] User can search through todos
- [ ] User can filter todos by status

#### UI/UX Testing
- [ ] Theme toggle works correctly
- [ ] App is responsive on mobile devices
- [ ] Loading states display properly
- [ ] Error messages are user-friendly
- [ ] Navigation works smoothly

### API Testing with Postman

Import the provided Postman collection:

```bash
# Download the collection
curl -o todo-app.postman_collection.json https://raw.githubusercontent.com/yourusername/todo-app/main/postman/todo-app.postman_collection.json

# Import into Postman and test all endpoints
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork the Repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-new-feature
   ```

4. **Make Your Changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

5. **Commit Your Changes**
   ```bash
   git commit -m "Add amazing new feature"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-new-feature
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes

### Development Guidelines

#### Code Style

- **JavaScript**: Follow ESLint configuration
- **React**: Use functional components with hooks
- **CSS**: Use Tailwind CSS utility classes
- **Naming**: Use camelCase for variables, PascalCase for components

#### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add user profile page
fix: resolve authentication bug
docs: update API documentation
style: improve button styling
refactor: optimize todo filtering logic
test: add unit tests for auth service
```

#### Pull Request Guidelines

- **Title**: Clear and descriptive
- **Description**: Explain what changes were made and why
- **Screenshots**: Include for UI changes
- **Testing**: Describe how you tested your changes
- **Breaking Changes**: Clearly document any breaking changes

### Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

#### Our Standards

- **Be Respectful**: Treat everyone with respect and kindness
- **Be Inclusive**: Welcome newcomers and help them learn
- **Be Constructive**: Provide helpful feedback and suggestions
- **Be Patient**: Remember that everyone is learning

#### Reporting Issues

If you encounter any issues or have suggestions:

1. **Check Existing Issues**: Search for similar issues first
2. **Create Detailed Reports**: Include steps to reproduce, expected behavior, and screenshots
3. **Use Labels**: Help categorize your issue (bug, enhancement, question)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Todo App Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

### Technologies & Libraries

- **[React](https://reactjs.org/)** - The library for web and native user interfaces
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[Node.js](https://nodejs.org/)** - JavaScript runtime built on Chrome's V8 engine
- **[Express.js](https://expressjs.com/)** - Fast, unopinionated, minimalist web framework
- **[MongoDB](https://www.mongodb.com/)** - The database for modern applications
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit

### Inspiration & Resources

- **[TodoMVC](http://todomvc.com/)** - Helping you select an MV* framework
- **[React Documentation](https://react.dev/)** - Official React documentation
- **[MongoDB University](https://university.mongodb.com/)** - Free MongoDB courses
- **[Tailwind UI](https://tailwindui.com/)** - Beautiful UI components

### Contributors

Thanks to all the amazing people who have contributed to this project:

<div align="center">

[![Contributors](https://contrib.rocks/image?repo=yourusername/todo-app)](https://github.com/yourusername/todo-app/graphs/contributors)

</div>

### Special Thanks

- **Open Source Community** - For providing amazing tools and libraries
- **Stack Overflow** - For helping solve countless development challenges
- **GitHub** - For providing an excellent platform for collaboration
- **Vercel & Render** - For free hosting solutions

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

**🐛 Found a bug? [Report it here](https://github.com/yourusername/todo-app/issues)**

**💡 Have an idea? [Share it with us](https://github.com/yourusername/todo-app/discussions)**

---

**Made with ❤️ by [Your Name](https://github.com/yourusername)**

**© 2024 Todo App. All rights reserved.**

</div>