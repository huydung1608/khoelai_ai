import { useState } from "react";
import { useNavigate } from "react-router";
import "./LoginPage.scss";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="logo-section">
            <div className="logo-icon">K</div>
            <h1 className="logo-title">KhoeLai</h1>
            <p className="logo-subtitle">Tập đúng, khoẻ lại nhanh</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                id="password"
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-login">
              Đăng nhập
            </button>
          </form>

          <div className="form-footer">
            <button className="btn-link">Quên mật khẩu?</button>
          </div>

          <div className="form-register">
            <span>Chưa có tài khoản? </span>
            <button className="btn-link-bold">Đăng ký ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
