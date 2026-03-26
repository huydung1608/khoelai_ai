import { useNavigate } from "react-router";
import { Activity, Clock, Heart, LogOut, Star, TrendingUp } from "lucide-react";
import "./HomePage.scss";

export function HomePage() {
  const navigate = useNavigate();

  const favoriteExercises = [
    { name: "Cross-Body Shoulder Stretch", area: "Cổ & Vai", reps: 12 },
    { name: "Neck Stretch with Hand Assist", area: "Cổ & Vai", reps: 10 },
    { name: "Cat-Cow Stretch", area: "Lưng", reps: 15 },
  ];

  const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <div className="logo-icon">K</div>
            <div className="logo-text">
              <h1>KhoeLai</h1>
              <p>Tập đúng, khoẻ lại nhanh</p>
            </div>
          </div>
          <button onClick={() => navigate("/")} className="btn-logout">
            <LogOut className="icon" />
            <span>Đăng xuất</span>
          </button>
        </div>
      </header>

      <div className="content-container">
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-header">
            <span className="emoji">👋</span>
            <h2>Xin chào!</h2>
          </div>
          <p className="welcome-text">
            Hãy bắt đầu tập luyện để cải thiện sức khỏe của bạn
          </p>
          <button onClick={() => navigate("/chon-vung")} className="btn-start">
            Bắt đầu tập luyện mới
          </button>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon activity">
                <Activity className="icon" />
              </div>
              <h3>Hoạt động hôm nay</h3>
            </div>
            <p className="stat-value">5</p>
            <p className="stat-label">bài tập hoàn thành</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon time">
                <Clock className="icon" />
              </div>
              <h3>Thời gian tập</h3>
            </div>
            <p className="stat-value">42</p>
            <p className="stat-label">phút</p>
          </div>

          <div className="stat-card">
            <div className="stat-header">
              <div className="stat-icon accuracy">
                <Heart className="icon" />
              </div>
              <h3>Độ chính xác</h3>
            </div>
            <p className="stat-value">87%</p>
            <p className="stat-label">trung bình</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="main-grid">
          {/* Favorite Exercises */}
          <div className="section-card">
            <div className="section-header">
              <Star className="icon-star" />
              <h3>Bài tập yêu thích</h3>
            </div>
            <div className="exercise-list">
              {favoriteExercises.map((exercise, index) => (
                <button
                  key={index}
                  onClick={() => navigate(`/chi-tiet/${index + 1}`)}
                  className="exercise-item"
                >
                  <div className="exercise-badge">{exercise.reps}</div>
                  <div className="exercise-info">
                    <h4>{exercise.name}</h4>
                    <p>{exercise.area}</p>
                  </div>
                  <Star className="icon-star-fill" />
                </button>
              ))}
            </div>
          </div>

          {/* Weekly Progress */}
          <div className="section-card">
            <div className="section-header">
              <TrendingUp className="icon-trend" />
              <h3>Tiến độ tuần này</h3>
            </div>
            <div className="progress-section">
              <div className="progress-header">
                <span>Mục tiêu: 20 bài tập</span>
                <span className="progress-value">15/20</span>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: "75%" }} />
              </div>
            </div>
            <div className="week-grid">
              {weekDays.map((day, index) => (
                <div key={index} className="day-item">
                  <div className={`day-badge ${index < 5 ? "completed" : ""}`}>
                    <span>{day}</span>
                  </div>
                  <span className="day-check">{index < 5 ? "✓" : ""}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* History Button */}
        <div className="history-section">
          <button onClick={() => navigate("/lich-su")} className="btn-history">
            Xem lịch sử tập luyện
          </button>
        </div>
      </div>
    </div>
  );
}
