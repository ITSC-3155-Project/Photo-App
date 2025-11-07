<!-- Photo Sharing Application - Sprint 1

# Install dependencies
npm install

# Run both frontend and backend
npm start

Visit http://localhost:3000 to view the application.  -->

# Photo Sharing Application - Sprint 1

A full-stack photo sharing web application built with React, Material-UI, and Express.js. Users can browse photographers, view detailed profiles, and explore photo galleries with community comments.

## 🎯 Project Overview

This application demonstrates a complete single-page application (SPA) with:
- RESTful API backend
- React frontend with routing
- AJAX data fetching (XMLHttpRequest)
- Material-UI component library
- Proper MVC architecture

## 👥 Team & Scrum Roles

| Role | Team Member |
|------|-------------|
| **Product Owner** | Monish Munagala |
| **Scrum Master** | Monish Munagala |
| **Developer** | Monish Munagala |

*Note: Individual project with one person fulfilling multiple roles*

## 📋 Sprint Information

**Sprint 1 Goal:** Create a functional photo-sharing application with user browsing, profile viewing, and photo gallery features.

**Sprint Duration:** [Your dates]  
**Total Story Points:** 21 points  
**Status:** ✅ Complete

### User Stories Completed:
1. ✅ User List Navigation (3 pts)
2. ✅ User Detail View (3 pts)
3. ✅ User Photos Gallery (5 pts)
4. ✅ Top Bar Context (2 pts)
5. ✅ FetchModel Implementation (3 pts)
6. ✅ Express Server API (3 pts)
7. ✅ Project Setup (2 pts)

## 🔗 Scrum Artifacts

- **User Stories:** See [USER_STORIES.md](./USER_STORIES.md) for detailed user stories
- **Scrum Documentation:** See [SCRUM.md](./SCRUM.md) for sprint planning and ceremonies
- **Daily Standups:** See [STANDUP.md](./STANDUP.md) for daily progress tracking
- **Project Board:** [https://github.com/ITSC-3155-Project/Photo-Sprint-App-1]
- **GitHub Issues:** [https://github.com/ITSC-3155-Project/Photo-Sprint-App-1/issues]

### Project Board Workflow:
```
To Do → In Progress → In Review → Done
```

All issues flow through these states with proper documentation of:
- Status changes
- Developer assignments
- Time estimates and actuals
- Commit history aligned with progress

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation Steps

1. **Clone the repository**
```bash
git clone 
cd photo-sharing-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the application**
```bash
npm start
```

This command starts both the Express backend (port 3001) and Vite frontend (port 3000) concurrently.

4. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Entry point: http://localhost:3000/photo-share.html

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs both frontend and backend concurrently |
| `npm run dev` | Starts Vite development server (frontend only) |
| `npm run server` | Starts Express server (backend only) |
| `npm run build` | Builds production bundle |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint to check for errors |
| `npm run lint:fix` | Automatically fix ESLint errors |

## 🏗️ Project Structure

```
photo-sharing-app/
├── server/
│   └── webServer.js          # Express server with API endpoints
├── src/
│   ├── components/
│   │   ├── topBar/
│   │   │   └── TopBar.jsx    # Navigation bar with context
│   │   ├── userList/
│   │   │   └── UserList.jsx  # Sidebar user list
│   │   ├── userDetail/
│   │   │   └── UserDetail.jsx # User profile page
│   │   └── userPhotos/
│   │       └── UserPhotos.jsx # Photo gallery page
│   ├── lib/
│   │   └── fetchModelData.js # XMLHttpRequest AJAX wrapper
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── public/
│   └── images/               # Photo assets
├── photo-share.html          # Main HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── .eslintrc.cjs             # ESLint configuration
├── USER_STORIES.md           # Detailed user stories
├── SCRUM.md                  # Scrum documentation
├── STANDUP.md                # Daily standup notes
└── README.md                 # This file
```

## 🔌 API Endpoints

The Express server provides the following RESTful endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/test/info` | Returns schema info with version number |
| GET | `/user/list` | Returns array of all users |
| GET | `/user/:id` | Returns specific user by ID |
| GET | `/photosOfUser/:id` | Returns all photos for a user with comments |

### Example API Response:

**GET /user/1**
```json
{
  "_id": "1",
  "first_name": "John",
  "last_name": "Doe",
  "location": "San Francisco, CA",
  "description": "Photography enthusiast and software developer",
  "occupation": "Software Engineer"
}
```

## 🎨 Features

### User List (Sidebar)
- Displays all registered users
- Shows first name, last name, and occupation
- Highlights currently selected user
- Clickable for navigation to user details

### User Detail Page
- Shows complete user profile:
  - Full name with avatar
  - Location
  - Occupation
  - Bio/description
- "View Gallery" button to see user's photos
- Supports deep linking (bookmarkable URLs)

### User Photos Gallery
- Displays all photos by a user
- Each photo shows:
  - High-quality image with fallback
  - Upload date and time
  - All community comments
- Comments display:
  - Commenter name (clickable to their profile)
  - Comment text
  - Timestamp
- Empty state for users without photos

### Top Navigation Bar
- Shows developer name on left
- Dynamic context in center:
  - "Photo Sharing App" on home
  - User name on profile page
  - "Photos of [Name]" on gallery
- Version number badge on right

## 🛠️ Technical Implementation

### Frontend Technologies
- **React 18.2** - UI library
- **React Router 6** - Client-side routing
- **Material-UI 5** - Component library
- **Vite** - Build tool and dev server
- **Emotion** - CSS-in-JS styling

### Backend Technologies
- **Express 4.18** - Web server framework
- **Node.js** - Runtime environment
- **CORS** - Cross-origin resource sharing

### Key Technical Decisions

1. **XMLHttpRequest over Fetch**
   - Educational requirement to understand low-level AJAX
   - Promise-based wrapper for modern async/await usage

2. **Vite over Create React App**
   - Faster development server
   - Better build performance
   - More flexible configuration

3. **Material-UI v5**
   - Comprehensive component library
   - Built-in theming
   - Excellent TypeScript support (for future)

4. **MVC Architecture**
   - Clear separation of concerns
   - Reusable components
   - Easy to test and maintain

## ✅ Code Quality

### ESLint Configuration
- React recommended rules
- React Hooks rules
- Custom rules for code consistency
- Automatic fixing available

### Zero Lint Errors
Run `npm run lint` to verify:
```bash
npm run lint
# ✅ All files pass linting
```

### Code Style
- Consistent component structure
- Proper PropTypes (or TypeScript for future)
- Error boundaries and loading states
- Graceful error handling

## 🧪 Testing

### Manual Testing Checklist
- ✅ All users load in sidebar
- ✅ Clicking user navigates to detail page
- ✅ User detail shows all information
- ✅ "View Photos" button navigates to gallery
- ✅ Photos display correctly with fallbacks
- ✅ Comments show with clickable usernames
- ✅ TopBar context updates on navigation
- ✅ Version number displays correctly
- ✅ Deep linking works (refresh on any page)
- ✅ No console errors
- ✅ Loading states show while fetching
- ✅ Error states handle failures gracefully

## 📝 Scrum Process

### Sprint Planning
- Created 7 user stories with acceptance criteria
- Sized stories using story points (2-5 points)
- Prioritized by dependency and business value

### Daily Standups
- Documented in STANDUP.md
- Updated after each development session
- Tracked blockers and progress

### Sprint Review
- Demoed all completed features
- Verified acceptance criteria
- Collected feedback

### Sprint Retrospective
**What went well:**
- Clear user stories made development smooth
- Breaking work into small commits helped debugging
- Material-UI sped up UI development

**What to improve:**
- More frequent commits
- Better time estimation for complex features

## 🐛 Known Issues

- None! All acceptance criteria met.

## 🔮 Future Enhancements

- User authentication and authorization
- Photo upload functionality
- Like/favorite photos
- Real-time commenting
- User profiles editing
- Search functionality
- Photo filtering and sorting
- Responsive mobile design improvements

## 📚 Learning Outcomes

### Technical Skills Developed
- ✅ XMLHttpRequest and AJAX fundamentals
- ✅ React Router for SPA navigation
- ✅ Material-UI component library
- ✅ Express.js RESTful API design
- ✅ MVC architecture patterns
- ✅ Promise-based async programming

### Soft Skills Developed
- ✅ User story writing
- ✅ Sprint planning and estimation
- ✅ Daily standup discipline
- ✅ Documentation best practices

## 👤 Author

**Monish Munagala**

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- Course instructors and TAs
- Material-UI team for excellent documentation
- React team for amazing developer experience

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Run application (both frontend and backend)
npm start

# Run ESLint
npm run lint

# Fix ESLint errors automatically
npm run lint:fix

# Build for production
npm run build
```

---

*Last Updated: November 6, 2025*  
*Sprint 1 - Photo Sharing Application*  