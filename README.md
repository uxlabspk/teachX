# TeachX

A modern teaching platform for 1-on-1 private online sessions. Teachers can create courses and manage their schedule, while students can explore, book, and track their learning progress.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- React Router v7

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── Layout.tsx        # Dashboard layout wrapper
│   │   └── Sidebar.tsx       # Role-based sidebar navigation
│   ├── Navbar.tsx             # Main navigation bar
│   ├── Footer.tsx             # Site footer
│   ├── Hero.tsx               # Landing page hero section
│   ├── Features.tsx           # Landing page features grid
│   ├── Stats.tsx              # Landing page stats banner
│   ├── Testimonials.tsx       # Landing page testimonials
│   ├── Pricing.tsx            # Landing page pricing cards
│   └── CTA.tsx                # Landing page call-to-action
├── pages/
│   ├── Landing.tsx            # Landing page
│   ├── Features.tsx           # Features page
│   ├── Testimonials.tsx       # Testimonials page
│   ├── Pricing.tsx            # Pricing page
│   ├── Login.tsx              # Login page
│   ├── Register.tsx           # Register page
│   ├── ForgotPassword.tsx     # Forgot password page
│   ├── ResetPassword.tsx      # Reset password page
│   ├── VerifyEmail.tsx        # Email verification page
│   ├── teacher/
│   │   ├── Dashboard.tsx      # Teacher dashboard overview
│   │   ├── Profile.tsx        # Teacher profile settings
│   │   ├── Courses.tsx        # Teacher course management
│   │   └── Schedule.tsx       # Teacher schedule management
│   └── student/
│       ├── Dashboard.tsx      # Student dashboard overview
│       ├── Explore.tsx        # Browse and book courses
│       ├── MyCourses.tsx      # View enrolled courses
│       └── Profile.tsx        # Student profile settings
├── App.tsx                    # Router and route definitions
├── main.tsx                   # App entry point
└── index.css                  # Global styles
```

## Routes

### Public Pages

| Path | Description |
|------|-------------|
| `/` | Landing page |
| `/features` | Features overview |
| `/testimonials` | User testimonials |
| `/pricing` | Pricing plans |

### Auth Pages

| Path | Description |
|------|-------------|
| `/login` | Sign in |
| `/register` | Create account |
| `/forgot-password` | Request password reset |
| `/reset-password` | Set new password |
| `/verify-email` | Email verification |

### Teacher Dashboard

| Path | Description |
|------|-------------|
| `/teacher` | Dashboard overview |
| `/teacher/profile` | Edit profile, interests, experience |
| `/teacher/courses` | Manage courses |
| `/teacher/schedule` | Manage availability and bookings |

### Student Dashboard

| Path | Description |
|------|-------------|
| `/student` | Dashboard overview |
| `/student/explore` | Browse and book courses |
| `/student/my-courses` | View active courses, unenroll |
| `/student/profile` | Edit profile and interests |

## Features

### Teacher

- Dashboard with stats (students, courses, sessions, rating)
- Profile management (name, bio, hourly rate)
- Add/remove interests and skills
- Add/remove teaching experience
- Create, edit, delete courses
- Toggle course status (active/draft)
- Manage weekly availability slots
- View upcoming student bookings

### Student

- Dashboard with stats (enrolled courses, sessions, hours, progress)
- Browse courses with search and subject filter
- Book 1-on-1 sessions
- View enrolled courses with progress tracking
- Unenroll from courses
- Profile management (name, bio, interests)
- Notification preferences

### Landing Page

- Responsive navigation with mobile menu
- Hero section with dashboard preview
- Stats banner
- Features grid
- Testimonials section
- Pricing with monthly/annual toggle
- Call-to-action section
- Footer with links

## Design

Minimal black and white design inspired by Notion. No gradients, no decorative elements. Uses Tailwind CSS utility classes.

## License

MIT
