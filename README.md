# 💼 Interview Web

An AI-powered full-stack interview preparation platform to practice mock interviews, get smart feedback, and improve your interview skills.

Built with React + Vite on the frontend and Express + MongoDB + Gemini AI on the backend.

## ✨ Features

- AI Mock Interview with Gemini AI
- AI-Generated Interview Questions
- AI Feedback & Scoring After Interview
- Browse Questions by Category & Difficulty
- Filter Questions by Topic & Company
- User Authentication (Login / Signup) with JWT
- Save / Bookmark Important Questions
- Track Your Progress
- Responsive UI for Mobile & Desktop
- Organized Folder Structure - `backend/` + `frontend/`

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, JavaScript, CSS, HTML
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **AI:** Google Gemini AI
- **Authentication:** JWT
- **Tools:** Git, GitHub, VS Code

## 📁 Project Structure

```
interview-web/
├── backend/ # Express + MongoDB + Gemini AI API
├── frontend/ # React + Vite App
├──.gitignore
└── http://README.md
```


## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mayukhmondal42/interview-web.git
cd interview-web
```

2. Backend Setup
```
cd backend
npm install
npm run dev
```

Create `.env` in `backend/`:
```
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173
```

3. Frontend Setup
```
cd frontend
npm install
npm run dev
```

Create `.env` in `frontend/`:
```
VITE_API_BASE_URL=http://localhost:8000
```

App will run at: `http://localhost:5173`
API will run at: `http://localhost:8000`

🔮 Future Improvements

- [ ] Voice-Based AI Interview
- [ ] Company-wise Question Sets
- [ ] Code Editor for DSA Questions
- [ ] Leaderboard & Streaks
- [ ] Resume-Based Interview Questions
- [ ] Dark Mode

🤝 Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature/AmazingFeature`
3. Commit: `git commit -m 'Add some AmazingFeature'`
4. Push: `git push origin feature/AmazingFeature`
5. Open a Pull Request

👨‍💻 Author

*Mayukh Mondal*
- GitHub: https://github.com/mayukhmondal42

⭐ Show your support

If you like this project, give it a ⭐ on GitHub!

Built with ❤️ by Mayukh Mondal
