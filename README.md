
# 🧠 AI-Powered Plagiarism Detection Platform

An AI-assisted web platform that detects and visualizes plagiarism in academic writing. Built with a full-stack architecture using **React**, **Django**, and **MongoDB**, this tool is designed to offer an intuitive user experience, robust backend processing, and future cloud deployment capabilities.

> 🚧 This project is actively under development.

---

## 🌐 Features

- 🔒 **Authentication System**  
  Secure signup and login functionality using Django REST Framework.

- 📄 **PDF Upload & Analysis**  
  Users can upload academic texts in PDF format for plagiarism detection.

- 📊 **AI-Powered Plagiarism Reports**  
  AI models analyze text similarity and generate visual, easy-to-read reports.

- 🧾 **Dashboard**  
  Users can view their previous submissions and access detailed plagiarism reports.

- 🖼️ **Modern UI**  
  Clean, responsive interface styled with Tailwind CSS.

---

## 🖥️ Project Structure

```
turnitin_mvp/
├── backend/            # Django REST backend
│   ├── api/            # App for processing uploads & reports
│   └── users/          # Auth system
├── frontend/           # React frontend (Vite or Create React App)
│   ├── pages/          # Homepage, Dashboard, Report, Auth
│   └── components/     # Reusable UI components
├── .env/               # Python virtual environment (excluded from repo)
└── README.md
```

---

## ⚙️ Tech Stack

### Frontend:
- React (with Hooks)
- Tailwind CSS
- React Router

### Backend:
- Django & Django REST Framework
- MongoDB (via Motor for async performance)
- PyMuPDF or PDFMiner (for PDF parsing)

---

## 🧪 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/turnitin-mvp.git
cd turnitin-mvp
```

### 2. Backend Setup (Django)
```bash
cd backend
python3 -m venv .env
source .env/bin/activate
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver
```

### 3. Frontend Setup (React)
```bash
cd frontend
npm install
npm run dev  # or npm start if using CRA
```

---

## 📁 Pages Overview

- **Landing Page** – Intro & upload area
- **Login/Signup** – Authenticated access
- **Dashboard** – View previous submissions
- **Report Page** – Detailed analysis with AI-generated insights

---

## 🚀 Deployment Plan

- Local development using SQLite + MongoDB
- Future deployment on **Render**, **Vercel**, or **AWS**
- CI/CD pipeline with GitHub Actions (planned)

---

## 🧑‍💻 Author

**Dean Magara**  
Built with ❤️ and a passion for ethical AI in academia.
