# Simple Task Tracker

A modern, lightweight task management application built with React, demonstrating best practices in component-based architecture, RESTful API integration, and responsive design.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.11-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.16-cyan?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)



---

## Features

- ✅ **CRUD Operations** - Create, Read, Update, and Delete tasks
- ✅ **RESTful API** - JSON Server backend with persistent storage
- ✅ **Real-time Updates** - Instant UI updates without page refresh
- ✅ **Form Validation** - Client-side validation with error messages
- ✅ **Toast Notifications** - User feedback for all actions
- ✅ **Responsive Design** - Mobile-first design that works on all devices
- ✅ **Loading States** - Skeleton screens and loading indicators
- ✅ **Routing** - Client-side navigation with React Router
- ✅ **Modern UI** - Gradient designs, smooth animations, and hover effects

---

## Tech Stack

### Frontend
- **React 19** - Component-based UI library
- **React Router DOM 7** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Toast notification system
- **Tailwind CSS 3** - Utility-first CSS framework

### Backend & Build Tools
- **JSON Server** - Mock REST API with file-based database
- **Vite 7** - Fast build tool and dev server
- **PostCSS & Autoprefixer** - CSS processing
- **Concurrently** - Run multiple commands simultaneously
- **ESLint** - Code quality and consistency

---

## Project Structure

```
simpletasktracker/
├── src/
│   ├── api/
│   │   └── tasks.js              # API functions (GET, POST, PUT, DELETE)
│   ├── components/
│   │   ├── AboutPage.jsx         # About page with project info
│   │   ├── AddTaskPage.jsx       # Task creation form
│   │   ├── NavigationBar.jsx     # Responsive navigation header
│   │   ├── TaskDashboard.jsx     # Main task list view
│   │   └── TaskItem.jsx          # Individual task card component
│   ├── App.jsx                   # Main app component with routing
│   ├── main.jsx                  # Application entry point
│   └── index.css                 # Global styles with Tailwind directives
├── public/                       # Static assets
├── db.json                       # JSON Server database
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── README.md                     # Project documentation

```

---

## Component Architecture

### **App.jsx**
- Main application component
- Manages global state (tasks array)
- Configures React Router with 3 routes
- Provides toast notification configuration

### **NavigationBar.jsx**
- Sticky header with logo and navigation links
- Mobile-responsive hamburger menu
- Active route highlighting
- Smooth transitions

### **TaskDashboard.jsx** (Route: `/`)
- Displays all tasks in a responsive grid
- Loading skeleton screens
- Empty state with call-to-action
- Task count badge
- Quick "Add Task" button

### **TaskItem.jsx**
- Individual task card component
- Displays task title and description
- Task ID badge
- Hover effects and animations

### **AddTaskPage.jsx** (Route: `/add`)
- Task creation form with controlled inputs
- Client-side validation
- Loading state during submission
- Success/error toast notifications
- Auto-redirect to dashboard after creation

### **AboutPage.jsx** (Route: `/about`)
- Project purpose and description
- Tech stack showcase
- MVP feature highlights
- Development team information

---

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd simpletasktracker
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start the Application
Run both the API server and development server concurrently:

```bash
npm start
```

This command will:
- Start JSON Server on `http://localhost:3001`
- Start Vite dev server on `http://localhost:5173`
- Show color-coded console output (blue for API, green for APP)

### Alternative: Run Servers Separately

Terminal 1 - API Server:
```bash
npm run server
```

Terminal 2 - Development Server:
```bash
npm run dev
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run both API and dev server concurrently |
| `npm run dev` | Start Vite development server only |
| `npm run server` | Start JSON Server API only |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code checks |

---

## API Endpoints

The JSON Server provides a RESTful API at `http://localhost:3001`:

### **GET /tasks**
Fetch all tasks
```bash
curl http://localhost:3001/tasks
```

### **POST /tasks**
Create a new task
```bash
curl -X POST http://localhost:3001/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "My Task", "description": "Task details"}'
```

### **PUT /tasks/:id**
Update a task
```bash
curl -X PUT http://localhost:3001/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Task", "description": "New details"}'
```

### **DELETE /tasks/:id**
Delete a task
```bash
curl -X DELETE http://localhost:3001/tasks/1
```

---

## Design System

### Color Palette
- **Primary Blue**: `#2563eb` - Buttons, links, accents
- **Gray Scale**: Various shades for text and backgrounds
- **Success Green**: `#10b981` - Success notifications
- **Error Red**: `#ef4444` - Error messages

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Inter/System UI font stack
- **Code**: Monospace for technical content

### Components
- **Cards**: Rounded corners (12px-16px), subtle shadows
- **Buttons**: Gradient backgrounds, hover lift effect
- **Forms**: 2px borders, blue focus rings
- **Icons**: Heroicons (outlined stroke style)

---

## Task Data Structure

Each task object has the following structure:

```json
{
  "id": 1,
  "title": "Task Title",
  "description": "Detailed description of the task"
}
```

- `id` (number): Auto-generated unique identifier
- `title` (string): Task title (required)
- `description` (string): Task details (required)

---

## Key Features Explained

### 1. **Immediate State Updates**
When a task is added via the form, the UI updates immediately without requiring a page refresh. This is achieved by:
- Calling the API to persist data
- Updating local state via `addTaskToState` callback
- Triggering React re-render

### 2. **Loading States**
The app shows loading indicators during async operations:
- Skeleton screens while fetching tasks
- Animated spinner on form submission
- Prevents multiple submissions

### 3. **Form Validation**
Client-side validation ensures data quality:
- Required field checks
- Trim whitespace
- Display error toasts for invalid input

### 4. **Responsive Design**
Mobile-first approach with Tailwind breakpoints:
- Mobile: Single column layout
- Tablet (md): 2-column grid
- Desktop (lg): 3-column grid
- Hamburger menu on mobile

---

## Testing the Application

### Manual Testing Checklist

**Dashboard:**
- [ ] Tasks load on initial page visit
- [ ] Loading skeletons appear during fetch
- [ ] Empty state shows when no tasks exist
- [ ] Task count badge updates correctly

**Add Task:**
- [ ] Form validation prevents empty submissions
- [ ] Success toast appears after creation
- [ ] Redirects to dashboard after 1 second
- [ ] New task appears in dashboard immediately

**Navigation:**
- [ ] All routes are accessible
- [ ] Active route is highlighted
- [ ] Mobile menu works correctly
- [ ] Back button navigation works

**API:**
- [ ] Tasks persist after page refresh
- [ ] JSON Server logs show API calls
- [ ] db.json file updates correctly

---


## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Acknowledgments; This Project Was Made By

- **Ibrahim Nawir**
- **Abigail Seenoi**
- **Ayman Abdi**
- **Ephrahim Peace**
- **Emmanuel Hongo**
- **Fredrick Rangara**

---


**Made with ❤️**
