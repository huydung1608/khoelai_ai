import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Clock, Star, TrendingUp } from "lucide-react";
import "./ExerciseListPage.scss";

export function ExerciseListPage() {
  const navigate = useNavigate();
  const { area } = useParams();

  const areaNames: Record<string, string> = {
    "co-vai": "Cổ & Vai",
    "eo": "Eo",
    "goi-hong": "Gối & Hông",
  };

  const exercises = {
    "co-vai": [
      {
        id: "1",
        name: "Cross-Body Shoulder Stretch",
        duration: "2 phút",
        difficulty: "Dễ",
        reps: "12 lần",
        isFavorite: true,
      },
      {
        id: "2",
        name: "Neck Stretch with Hand Assist",
        duration: "3 phút",
        difficulty: "Dễ",
        reps: "10 lần",
        isFavorite: true,
      },
      {
        id: "3",
        name: "Shoulder Rolls",
        duration: "2 phút",
        difficulty: "Dễ",
        reps: "15 lần",
        isFavorite: false,
      },
      {
        id: "4",
        name: "Upper Trapezius Stretch",
        duration: "3 phút",
        difficulty: "Trung bình",
        reps: "8 lần mỗi bên",
        isFavorite: false,
      },
    ],
    "eo": [
      {
        id: "5",
        name: "Cat-Cow Stretch",
        duration: "3 phút",
        difficulty: "Dễ",
        reps: "15 lần",
        isFavorite: false,
      },
      {
        id: "6",
        name: "Seated Spinal Twist",
        duration: "4 phút",
        difficulty: "Trung bình",
        reps: "10 lần mỗi bên",
        isFavorite: false,
      },
      {
        id: "7",
        name: "Child's Pose",
        duration: "2 phút",
        difficulty: "Dễ",
        reps: "Giữ 30 giây",
        isFavorite: false,
      },
    ],
    "goi-hong": [
      {
        id: "8",
        name: "Hip Flexor Stretch",
        duration: "3 phút",
        difficulty: "Trung bình",
        reps: "8 lần mỗi bên",
        isFavorite: false,
      },
      {
        id: "9",
        name: "Knee Circles",
        duration: "2 phút",
        difficulty: "Dễ",
        reps: "12 lần",
        isFavorite: false,
      },
      {
        id: "10",
        name: "Butterfly Stretch",
        duration: "3 phút",
        difficulty: "Dễ",
        reps: "Giữ 45 giây",
        isFavorite: false,
      },
    ],
  };

  const currentExercises = exercises[area as keyof typeof exercises] || [];

  return (
    <div className="exercise-list-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-container">
          <button onClick={() => navigate("/chon-vung")} className="btn-back">
            <ArrowLeft className="icon" />
          </button>
          <div className="header-text">
            <h1>Chọn bài tập</h1>
            <p>{areaNames[area || ""] || "Danh sách bài tập"}</p>
          </div>
        </div>
      </header>

      <div className="content-container">
        {/* Banner */}
        <div className="banner">
          <h2>{areaNames[area || ""]}</h2>
          <p>{currentExercises.length} bài tập được đề xuất cho bạn</p>
        </div>

        {/* Danh sách bài tập */}
        <div className="exercises-list">
          {currentExercises.map((exercise) => (
            <div key={exercise.id} className="exercise-card">
              <div className="exercise-header">
                <div className="exercise-info">
                  <div className="name-row">
                    <h3>{exercise.name}</h3>
                    {exercise.isFavorite && (
                      <Star className="icon-star" />
                    )}
                  </div>
                  <div className="meta-row">
                    <div className="meta-item">
                      <Clock className="icon" />
                      <span>{exercise.duration}</span>
                    </div>
                    <div className="meta-item">
                      <TrendingUp className="icon" />
                      <span>{exercise.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="exercise-footer">
                <div className="reps-badge">
                  <span>{exercise.reps}</span>
                </div>
                <button
                  onClick={() => navigate(`/chi-tiet/${exercise.id}`)}
                  className="btn-detail"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
