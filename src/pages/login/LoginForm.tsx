import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { isValidCredentials, login } from "../../lib/auth";

const ERROR = "Revisa tu documento y tu clave de 6 dígitos.";

export default function LoginForm() {
  const navigate = useNavigate();
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValidCredentials(document, password)) {
      setError(ERROR);
      return;
    }
    setError(null);
    setLoading(true);
    try {
      await login(document, password, remember);
      navigate("/app", { replace: true });
    } catch {
      setError(ERROR);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="doc">Número de documento</label>
        <div className="inp">
          <span className="pre">CC</span>
          <input
            id="doc"
            inputMode="numeric"
            autoComplete="username"
            placeholder="1.020.345.678"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="pw">Clave</label>
        <div className="inp">
          <input
            id="pw"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="Tu clave de 6 dígitos"
            inputMode="numeric"
            maxLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value.replace(/\D/g, ""))}
            aria-invalid={!!error}
            aria-describedby={error ? "login-err" : undefined}
          />
          <button
            type="button"
            className="eye"
            aria-label={showPassword ? "Ocultar clave" : "Mostrar clave"}
            aria-pressed={showPassword}
            onClick={() => setShowPassword((v) => !v)}
          >
            <svg><use href="#i-eye" /></svg>
          </button>
        </div>
        {error && <span className="err" id="login-err" role="alert">{error}</span>}
      </div>
      <div className="row">
        <label className="chk">
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} /> Recordarme
        </label>
        <a href="#">¿Olvidaste tu clave?</a>
      </div>
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Ingresando…" : "Ingresar"} <svg><use href="#i-arrow" /></svg>
      </button>
      <div className="or">o</div>
      {/* TODO: WebAuthn passkey flow (navigator.credentials.get) once the backend supports it. */}
      <button className="btn btn-ghost" type="button">
        <svg><use href="#i-key" /></svg> Ingresar con llave de acceso
      </button>
    </form>
  );
}
