import { useState, useEffect } from "react";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./login.css";
import { USER_ROLE } from "../../constants/roles";
import { USER_DASHBOARD_ROUTE, ADMIN_DASHBOARD_ROUTE } from "../../constants/routes";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  //Naviguer vers le dashboard si l'utilisateur est déjà connecté
  useEffect(() => {
    navigate(user?.userRole === USER_ROLE? USER_DASHBOARD_ROUTE : ADMIN_DASHBOARD_ROUTE);
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };


  return (
    <div className="login-page">
      <div className="card login-card p-4 bg-glass w-100">
        <div className="text-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            width="50"
            height="50"
          >
            <path
              d="M 14 7.438 C 14 11.062 11.122 14 7.571 14 L 1.143 14 L 1.143 7.438 C 1.143 3.813 4.021 0.875 7.571 0.875 C 11.122 0.875 14 3.813 14 7.438 Z M 14 20.563 C 14 16.938 16.878 14 20.429 14 L 26.857 14 L 26.857 20.563 C 26.857 24.187 23.979 27.125 20.429 27.125 C 16.878 27.125 14 24.187 14 20.563 Z M 1.143 20.563 C 1.143 24.187 4.021 27.125 7.571 27.125 L 14 27.125 L 14 20.563 C 14 16.938 11.122 14 7.571 14 C 4.021 14 1.143 16.938 1.143 20.563 Z M 26.857 7.438 C 26.857 3.813 23.979 0.875 20.429 0.875 L 14 0.875 L 14 7.438 C 14 11.062 16.878 14 20.429 14 C 23.979 14 26.857 11.062 26.857 7.438 Z"
              fill="rgb(255, 255, 255)"
            />
          </svg>
          <h4 className="fw-bold text-white">Celeste IA</h4>
        </div>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="mb-3">
            <div className="input-group mb-0">
              <input
                type="email"
                id="email"
                name="user_log"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                autoComplete="off"
                required
                className={error ? "is-invalid" : ""}
              />
              <label htmlFor="email">Adresse e-mail</label>
            </div>
            {error && (
              <div className="alert alert-danger bg-transparent border-0 m-0 p-0 mt-1 ms-2 d-flex align-items-center" role="alert">
                <i class="bi bi-exclamation-circle flex-shrink-0 me-2"></i>
                <small>{error}</small>
              </div>
            )}
          </div>

          <div className="mb-3">
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="user_secret"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                autoComplete="new-pass"
                required
              />
              <label htmlFor="password">Mot de passe</label>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label
                className="form-check-label small text-white opacity-50"
                htmlFor="rememberMe"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="small text-decoration-none main-color">
              Forgot password?
            </a>
          </div>

          {/* <button
            type="submit"
            disabled={isLoading}
            className="btn-login fw-bold w-100"
          >
            {isLoading ? "Login en cours..." : "Login"}
          </button> */}

          <button
            type="submit"
            disabled={isLoading}
            className="btn-login fw-bold w-100 d-flex align-items-center justify-content-center"
          >
            {isLoading ? (
              <>
                <i className="bi bi-arrow-repeat spin me-2 fs-6 fw-bold"></i>
                Connexion...
              </>
            ) : (
              "Login"
            )}
          </button>

        </form>

        {/* {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )} */}

        <p className="text-center mt-3 mb-0 small text-white opacity-75">
          Don't have an account?{" "}
          <a href="#" className="text-decoration-none main-color fw-bold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
