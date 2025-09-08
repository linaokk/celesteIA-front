import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SIGNUP_ENDPOINT } from "../../constants/serverApi";
import { useSignup } from "../../hooks/useSignup";
import { useLogout } from "../../hooks/useLogout";
import "./creatUser.css";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();
  const { logout } = useLogout();
  const { signup, isLoading, error, success } = useSignup();


  //omar li zad hadchi tadir logic d register
  // Navigate to dashboard after successful signup
  useEffect(() => {
    if (success) {
      navigate("/dashboard");
    }
  }, [success, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, phoneNumber, companyName);
  };
  const handleLogout = () => {
    logout();
  };
  return (
    // <form className="create-user" onSubmit={handleSubmit}>
    //     <h2>Créer un nouvel utilisateur</h2>

    //     <label>Adresse e-mail :</label>
    //     <input
    //         type="email"
    //         onChange={(e) => setEmail(e.target.value)}
    //         value={email}
    //         required
    //     />

    //     <label>Mot de passe :</label>
    //     <input
    //         type="password"
    //         onChange={(e) => setPassword(e.target.value)}
    //         value={password}
    //         required
    //     />

    //     <label>Numéro de téléphone :</label>
    //     <input
    //         type="text"
    //         onChange={(e) => setPhoneNumber(e.target.value)}
    //         value={phoneNumber}
    //         required
    //     />

    //     <label>Nom de l'entreprise :</label>
    //     <input
    //         type="text"
    //         onChange={(e) => setCompanyName(e.target.value)}
    //         value={companyName}
    //         required
    //     />

    //     <button disabled={isLoading}>
    //         {isLoading ? 'Création en cours...' : 'Créer un utilisateur'}
    //     </button>
    //             <button onClick={handleLogout}>
    //         logout
    //     </button>
    //     {error && <div className="error">{error}</div>}
    // </form>
    <div className="login-page">
      <div className="card login-card p-4 bg-glass">
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
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                autoComplete="new-email"
                required
              />
              <label htmlFor="email">Adresse e-mail</label>
            </div>
          </div>

          <div className="mb-3">
            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                autoComplete="off"
                required
              />
              <label htmlFor="password">Mot de passe</label>
            </div>
          </div>

          <div className="mb-3">
            <div className="input-group">
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder=""
                autoComplete="off"
                required
              />
              <label htmlFor="phoneNumber">N° Téléphone</label>
            </div>
          </div>

          <div className="mb-3">
            <div className="input-group">
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder=""
                autoComplete="off"
                required
              />
              <label htmlFor="companyName">Nom de société</label>
            </div>
          </div>

          <button type="submit" className="btn-login fw-bold w-100" disabled={isLoading}>
            {isLoading ? (
              <>
                <i className="bi bi-arrow-repeat spin me-2 fs-6 fw-bold"></i>
                Registration...
              </>
            ) : (
              "Register"
            )}
          </button>
        </form>

        <p className="text-center mt-3 mb-0 small text-white opacity-75">
          Already have an account?{" "}
          <a href="#" className="text-decoration-none main-color fw-bold">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default CreateUser;
