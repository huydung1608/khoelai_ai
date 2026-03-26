import { useNavigate } from "react-router";
import { ArrowLeft, TrendingUp, Calendar, Award, Clock } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./DashboardPage.scss";

export function DashboardPage() {
  const navigate = useNavigate();

  const accuracyData = [
    { day: "T2", accuracy: 75 },
    { day: "T3", accuracy: 82 },
    { day: "T4", accuracy: 78 },
    { day: "T5", accuracy: 85 },
    { day: "T6", accuracy: 88 },
    { day: "T7", accuracy: 87 },
    { day: "CN", accuracy: 90 },
  ];

  const volumeData = [
    { day: "T2", exercises: 3 },
    { day: "T3", exercises: 5 },
    { day: "T4", exercises: 4 },
    { day: "T5", exercises: 6 },
    { day: "T6", exercises: 5 },
    { day: "T7", exercises: 4 },
    { day: "CN", exercises: 3 },
  ];

  const recentWorkouts = [
    {
      name: "Cross-Body Shoulder Stretch",
      date: "26/03/2026 - 14:30",
      reps: 12,
      accuracy: 87,
      duration: "8 phút",
    },
    {
      name: "Neck Stretch with Hand Assist",
      date: "26/03/2026 - 09:15",
      reps: 10,
      accuracy: 92,
      duration: "6 phút",
    },
    {
      name: "Shoulder Rolls",
      date: "25/03/2026 - 18:45",
      reps: 15,
      accuracy: 84,
      duration: "5 phút",
    },
    {
      name: "Cat-Cow Stretch",
      date: "25/03/2026 - 07:20",
      reps: 15,
      accuracy: 89,
      duration: "7 phút",
    },
  ];

  const achievements = [
    { icon: "🔥", title: "Chuỗi 7 ngày", description: "Tập luyện liên tục" },
    { icon: "🎯", title: "Đạt 90%", description: "Độ chính xác cao" },
    { icon: "💪", title: "30 bài tập", description: "Hoàn thành tháng này" },
  ];

  return (
    <div className="dashboard-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-container">
          <button onClick={() => navigate("/home")} className="btn-back">
            <ArrowLeft className="icon" />
          </button>
          <div className="header-text">
            <h1>Lịch sử tập luyện</h1>
            <p>Theo dõi tiến độ của bạn</p>
          </div>
        </div>
      </header>

      <div className="content-container">
        {/* Tổng quan */}
        <div className="overview-grid">
          <div className="overview-card">
            <div className="card-header">
              <div className="icon-wrapper trend">
                <TrendingUp className="icon" />
              </div>
              <span>Tổng bài tập</span>
            </div>
            <p className="value">42</p>
          </div>

          <div className="overview-card">
            <div className="card-header">
              <div className="icon-wrapper time">
                <Clock className="icon" />
              </div>
              <span>Tổng thời gian</span>
            </div>
            <p className="value">3.2h</p>
          </div>

          <div className="overview-card">
            <div className="card-header">
              <div className="icon-wrapper calendar">
                <Calendar className="icon" />
              </div>
              <span>Chuỗi ngày</span>
            </div>
            <p className="value">7</p>
          </div>

          <div className="overview-card">
            <div className="card-header">
              <div className="icon-wrapper award">
                <Award className="icon" />
              </div>
              <span>Độ chính xác TB</span>
            </div>
            <p className="value">87%</p>
          </div>
        </div>

        {/* Biểu đồ */}
        <div className="charts-grid">
          {/* Biểu đồ độ chính xác */}
          <div className="chart-card">
            <h3>Độ chính xác 7 ngày qua</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E8E8" />
                <XAxis dataKey="day" stroke="#7F8C8D" />
                <YAxis stroke="#7F8C8D" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "2px solid #4ECDC4",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="accuracy"
                  stroke="#4ECDC4"
                  strokeWidth={3}
                  dot={{ fill: "#4ECDC4", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Biểu đồ số lượng bài tập */}
          <div className="chart-card">
            <h3>Số bài tập mỗi ngày</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E8E8E8" />
                <XAxis dataKey="day" stroke="#7F8C8D" />
                <YAxis stroke="#7F8C8D" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "2px solid #FFD93D",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="exercises" fill="#FFD93D" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Thành tựu */}
        <div className="achievements-card">
          <h3>
            <Award className="icon" />
            Thành tựu
          </h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-icon">{achievement.icon}</div>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lịch sử gần đây */}
        <div className="history-card">
          <h3>Bài tập gần đây</h3>
          <div className="workouts-list">
            {recentWorkouts.map((workout, index) => (
              <div key={index} className="workout-item">
                <div className="workout-info">
                  <h4>{workout.name}</h4>
                  <p>{workout.date}</p>
                </div>
                <div className="workout-stats">
                  <div className="stat">
                    <p className="label">Số lần</p>
                    <p className="value">{workout.reps}</p>
                  </div>
                  <div className="stat">
                    <p className="label">Chính xác</p>
                    <p className="value accuracy">{workout.accuracy}%</p>
                  </div>
                  <div className="stat">
                    <p className="label">Thời gian</p>
                    <p className="value">{workout.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
