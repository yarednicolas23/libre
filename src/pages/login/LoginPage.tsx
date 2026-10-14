import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
import { getSession } from "../../lib/auth";
import MediaPanel from "./MediaPanel";
import LoginForm from "./LoginForm";

function LoginIcons() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <g id="Lcorner-cc">
          <rect x="22" y="22" width="34" height="72" rx="17" fill="currentColor" />
          <rect x="22" y="22" width="72" height="34" rx="17" fill="currentColor" />
        </g>
        <symbol id="libre-mark" viewBox="0 0 200 200">
          <use href="#Lcorner-cc" />
          <use href="#Lcorner-cc" transform="translate(200,0) scale(-1,1)" />
          <use href="#Lcorner-cc" transform="translate(0,200) scale(1,-1)" />
          <use href="#Lcorner-cc" transform="translate(200,200) scale(-1,-1)" />
        </symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h13M12.5 6l6 6-6 6" />
        </symbol>
        <symbol id="i-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
          <circle cx="12" cy="12" r="3" />
        </symbol>
        <symbol id="i-key" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="15" r="4" />
          <path d="M11 12l9-9M17 6l3 3M14 9l2 2" />
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M12 3l7 3v5.5c0 4.5-3 7.8-7 9.5-4-1.7-7-5-7-9.5V6l7-3z" />
        </symbol>
      </defs>
    </svg>
  );
}

export default function LoginPage() {
  useEffect(() => {
    document.title = "Libre — Ingresar";
  }, []);

  if (getSession()) return <Navigate to="/app" replace />;

  return (
    <div className="login-page">
      <LoginIcons />
      <MediaPanel />
      <section className="side">
        <div className="stop">¿Primera vez en Libre? <a href="#">Crea tu cuenta</a></div>
        <div className="formwrap">
          <svg className="mk"><use href="#libre-mark" /></svg>
          <h2>Hola de <em className="s">nuevo</em>.</h2>
          <p className="sub">Ingresa para ver tu crédito.</p>
          <LoginForm />
        </div>
        <div className="sfoot">
          <span><svg><use href="#i-shield" /></svg> Conexión cifrada · Vigilado Superfinanciera</span>
          <nav><a href="#">Ayuda</a><a href="#">Privacidad</a><a href="#">Términos</a></nav>
        </div>
      </section>
    </div>
  );
}
