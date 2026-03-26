import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Play, Clock, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import exampleImage from "../../assets/cb3bc40db399f8e8dfb095aa9a52715e02715927.png";
import "./ExerciseDetailPage.scss";

export function ExerciseDetailPage() {
  const navigate = useNavigate();
  const { exerciseId } = useParams();

  const exerciseDetails: Record<string, any> = {
    "1": {
      name: "Cross-Body Shoulder Stretch",
      area: "Cổ & Vai",
      duration: "2 phút",
      difficulty: "Dễ",
      reps: "12 lần",
      benefits: [
        "Giảm căng thẳng vùng vai",
        "Tăng độ linh hoạt",
        "Giảm đau mỏi",
      ],
      steps: [
        "Đứng hoặc ngồi thẳng lưng",
        "Đưa tay phải qua trước ngực",
        "Dùng tay trái ôm và kéo nhẹ về phía cơ thể",
        "Giữ trong 20-30 giây",
        "Đổi bên và lặp lại",
      ],
      precautions: [
        "Không kéo quá mạnh",
        "Ngừng ngay nếu đau",
        "Thở đều trong khi thực hiện",
      ],
    },
    "2": {
      name: "Neck Stretch with Hand Assist",
      area: "Cổ & Vai",
      duration: "3 phút",
      difficulty: "Dễ",
      reps: "10 lần",
      benefits: [
        "Giảm đau cổ",
        "Cải thiện tư thế",
        "Thư giãn cơ cổ",
      ],
      steps: [
        "Ngồi thẳng lưng",
        "Đặt tay phải lên đầu",
        "Nghiêng đầu về bên phải nhẹ nhàng",
        "Giữ 15-20 giây",
        "Đổi bên",
      ],
      precautions: [
        "Động tác nhẹ nhàng",
        "Không gập đầu về trước",
        "Giữ vai thẳng",
      ],
    },
  };

  const exercise = exerciseDetails[exerciseId || "1"] || exerciseDetails["1"];

  return (
    <div className="exercise-detail-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-container">
          <button onClick={() => navigate(-1)} className="btn-back">
            <ArrowLeft className="icon" />
          </button>
          <div className="header-text">
            <h1>Chi tiết bài tập</h1>
            <p>{exercise.area}</p>
          </div>
        </div>
      </header>

      <div className="content-container">
        {/* Video/Hình ảnh hướng dẫn */}
        <div className="video-card">
          <div className="video-wrapper">
            <img src={exampleImage} alt="Exercise demo" className="video-image" />
            <div className="video-overlay">
              <div className="play-button">
                <Play className="icon" />
              </div>
            </div>
          </div>
          <div className="video-info">
            <h2>{exercise.name}</h2>
            <div className="meta-row">
              <div className="meta-item">
                <Clock className="icon" />
                <span>{exercise.duration}</span>
              </div>
              <div className="meta-item">
                <TrendingUp className="icon" />
                <span>{exercise.difficulty}</span>
              </div>
              <div className="reps-badge">
                <span>{exercise.reps}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lợi ích */}
        <div className="benefits-card">
          <h3>
            <CheckCircle2 className="icon" />
            Lợi ích
          </h3>
          <ul>
            {exercise.benefits.map((benefit: string, index: number) => (
              <li key={index}>
                <div className="bullet" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hướng dẫn từng bước */}
        <div className="steps-card">
          <h3>Hướng dẫn thực hiện</h3>
          <div className="steps-list">
            {exercise.steps.map((step: string, index: number) => (
              <div key={index} className="step-item">
                <div className="step-number">{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lưu ý an toàn */}
        <div className="precautions-card">
          <h3>
            <AlertCircle className="icon" />
            Lưu ý an toàn
          </h3>
          <ul>
            {exercise.precautions.map((precaution: string, index: number) => (
              <li key={index}>
                <span className="warning-icon">⚠️</span>
                <span>{precaution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nút bắt đầu */}
        <button
          onClick={() => navigate(`/tap-luyen/${exerciseId}`)}
          className="btn-start"
        >
          Bắt đầu tập luyện
        </button>
      </div>
    </div>
  );
}
