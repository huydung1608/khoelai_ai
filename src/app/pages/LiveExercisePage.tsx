import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { Camera, Pause, Play, X, AlertCircle, CheckCircle2 } from "lucide-react";
import "./LiveExercisePage.scss";

export function LiveExercisePage() {
  const navigate = useNavigate();
  const { exerciseId } = useParams();
  const [isPaused, setIsPaused] = useState(false);
  const [reps, setReps] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [time, setTime] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [currentFeedback, setCurrentFeedback] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const feedbackMessages = [
    "Tuyệt vời! Giữ tư thế này",
    "Lưng của bạn cần thẳng hơn",
    "Hạ vai xuống",
    "Hoàn hảo! Tiếp tục",
    "Cánh tay cần ngang hơn",
  ];

  // Giả lập camera
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.log("Camera not available, using placeholder");
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Giả lập đếm reps và feedback
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTime((prev) => prev + 1);

      // Random feedback mỗi 3-5 giây
      if (Math.random() > 0.7) {
        const newFeedback = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
        setCurrentFeedback(newFeedback);
        setFeedback((prev) => [...prev.slice(-2), newFeedback]);
      }

      // Random tăng reps
      if (Math.random() > 0.9) {
        setReps((prev) => prev + 1);
        setAccuracy(Math.min(100, 70 + Math.random() * 30));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleFinish = () => {
    navigate("/home");
  };

  const isGoodPosture = accuracy > 80;

  return (
    <div className="live-exercise-page">
      {/* Header */}
      <header className="live-header">
        <div className="header-container">
          <div className="header-left">
            <button onClick={handleFinish} className="btn-close">
              <X className="icon" />
            </button>
            <div className="header-info">
              <h1>Đang tập luyện</h1>
              <p>Cross-Body Shoulder Stretch</p>
            </div>
          </div>
          <div className="ai-badge">
            <Camera className="icon" />
            <span>AI đang theo dõi</span>
          </div>
        </div>
      </header>

      <div className="content-container">
        <div className="main-grid">
          {/* Camera View */}
          <div className="camera-section">
            <div className="camera-card">
              {/* Video với skeleton overlay */}
              <div className="video-container">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="video-element"
                />

                {/* Skeleton overlay giả lập */}
                <svg className="skeleton-overlay" viewBox="0 0 640 480">
                  {/* Head */}
                  <circle cx="320" cy="100" r="30" fill="none" stroke={isGoodPosture ? "#4ECDC4" : "#FF6B6B"} strokeWidth="3" />

                  {/* Body */}
                  <line x1="320" y1="130" x2="320" y2="250" stroke={isGoodPosture ? "#4ECDC4" : "#FF6B6B"} strokeWidth="3" />

                  {/* Left arm */}
                  <line x1="320" y1="150" x2="250" y2="200" stroke={isGoodPosture ? "#4ECDC4" : "#FF6B6B"} strokeWidth="3" />
                  <line x1="250" y1="200" x2="220" y2="260" stroke={isGoodPosture ? "#4ECDC4" : "#FF6B6B"} strokeWidth="3" />
                  <circle cx="250" cy="200" r="8" fill={isGoodPosture ? "#4ECDC4" : "#FF6B6B"} />

                  {/* Right arm */}
                  <line x1="320" y1="150" x2="390" y2="200" stroke="#4ECDC4" strokeWidth="3" />
                  <line x1="390" y1="200" x2="420" y2="260" stroke="#4ECDC4" strokeWidth="3" />
                  <circle cx="390" cy="200" r="8" fill="#4ECDC4" />

                  {/* Left leg */}
                  <line x1="320" y1="250" x2="290" y2="350" stroke="#4ECDC4" strokeWidth="3" />
                  <line x1="290" y1="350" x2="280" y2="440" stroke="#4ECDC4" strokeWidth="3" />

                  {/* Right leg */}
                  <line x1="320" y1="250" x2="350" y2="350" stroke="#4ECDC4" strokeWidth="3" />
                  <line x1="350" y1="350" x2="360" y2="440" stroke="#4ECDC4" strokeWidth="3" />

                  {/* Joints */}
                  <circle cx="320" cy="150" r="8" fill="#4ECDC4" />
                  <circle cx="320" cy="250" r="8" fill="#4ECDC4" />
                </svg>

                {/* Overlay feedback */}
                {!isGoodPosture && (
                  <div className="posture-badge bad">
                    <AlertCircle className="icon" />
                    <span>Cần điều chỉnh tư thế</span>
                  </div>
                )}

                {isGoodPosture && (
                  <div className="posture-badge good">
                    <CheckCircle2 className="icon" />
                    <span>Tư thế hoàn hảo!</span>
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="controls">
                <div className="controls-left">
                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="btn-play"
                  >
                    {isPaused ? (
                      <Play className="icon play" />
                    ) : (
                      <Pause className="icon pause" />
                    )}
                  </button>
                  <div className="time-info">
                    <p className="status">
                      {isPaused ? "Đang tạm dừng" : "Đang tập luyện"}
                    </p>
                    <p className="time">{formatTime(time)}</p>
                  </div>
                </div>

                <button onClick={handleFinish} className="btn-finish">
                  Kết thúc
                </button>
              </div>
            </div>
          </div>

          {/* Stats & Feedback Panel */}
          <div className="sidebar-section">
            {/* Stats */}
            <div className="stats-card">
              <h3>Thống kê</h3>
              <div className="stats-content">
                <div className="stat-item">
                  <div className="stat-row">
                    <span className="stat-label">Số lần</span>
                    <span className="stat-value reps">{reps}</span>
                  </div>
                </div>

                <div className="stat-item">
                  <div className="stat-row">
                    <span className="stat-label">Độ chính xác</span>
                    <span className="stat-value accuracy">
                      {accuracy.toFixed(0)}%
                    </span>
                  </div>
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${accuracy}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Feedback */}
            <div className="feedback-card">
              <h3>Phản hồi thời gian thực</h3>
              <div className="feedback-content">
                {feedback.length === 0 ? (
                  <p className="feedback-empty">
                    AI đang phân tích tư thế của bạn...
                  </p>
                ) : (
                  feedback.map((msg, index) => (
                    <div
                      key={index}
                      className={`feedback-item ${
                        msg.includes("Tuyệt vời") || msg.includes("Hoàn hảo")
                          ? "good"
                          : "bad"
                      }`}
                    >
                      <p>{msg}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Tips */}
            <div className="tips-card">
              <h3>💡 Mẹo</h3>
              <ul>
                <li>• Giữ lưng thẳng trong suốt bài tập</li>
                <li>• Thở đều, không nín thở</li>
                <li>• Di chuyển chậm và kiểm soát</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
