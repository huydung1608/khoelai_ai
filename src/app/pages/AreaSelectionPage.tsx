import { useNavigate } from "react-router";
import { ArrowLeft, User, Footprints, Heart } from "lucide-react";
import "./AreaSelectionPage.scss";

export function AreaSelectionPage() {
  const navigate = useNavigate();

  const areas = [
    {
      id: "co-vai",
      name: "Cổ & Vai",
      description: "Thả lỏng, giảm căng cơ cổ vai",
      icon: User,
      gradient: "mint",
    },
    {
      id: "eo",
      name: "Eo",
      description: "Tăng linh hoạt, giảm đau lưng",
      icon: Heart,
      gradient: "yellow",
    },
    {
      id: "goi-hong",
      name: "Gối & Hông",
      description: "Tăng sức mạnh, cải thiện di động",
      icon: Footprints,
      gradient: "red",
    },
  ];

  return (
    <div className="area-selection-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-container">
          <button onClick={() => navigate("/home")} className="btn-back">
            <ArrowLeft className="icon" />
          </button>
          <div className="header-text">
            <h1>Chọn vùng cần tập</h1>
            <p>Hãy chọn vùng cơ thể bạn muốn tập luyện</p>
          </div>
        </div>
      </header>

      <div className="content-container">
        {/* Hướng dẫn */}
        <div className="hint-box">
          <p>
            <span className="hint-icon">💡</span>
            <span className="hint-label">Gợi ý:</span> Chọn vùng cơ thể bạn đang cảm thấy căng thẳng hoặc đau nhức
          </p>
        </div>

        {/* Danh sách vùng */}
        <div className="areas-grid">
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <button
                key={area.id}
                onClick={() => navigate(`/bai-tap/${area.id}`)}
                className="area-card"
              >
                <div className={`area-icon ${area.gradient}`}>
                  <Icon className="icon" />
                </div>
                <h3>{area.name}</h3>
                <p>{area.description}</p>
              </button>
            );
          })}
        </div>

        {/* Thông tin bổ sung */}
        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon mint">
              <span>🎯</span>
            </div>
            <h4>Bài tập phục hồi chức năng</h4>
            <p>
              Được thiết kế để giúp bạn phục hồi sau chấn thương hoặc giảm đau mãn tính
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon yellow">
              <span>🤖</span>
            </div>
            <h4>AI phản hồi thời gian thực</h4>
            <p>
              Hệ thống AI sẽ theo dõi tư thế và đưa ra phản hồi ngay lập tức
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
