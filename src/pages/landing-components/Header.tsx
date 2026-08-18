export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <a className="logo" href="#top">
          <svg><use href="#libre-mark" /></svg>
          <span>Libre</span>
        </a>
        <div className="navlinks">
          <a href="#personas">Personas</a>
          <a href="#empresas">Empresas</a>
          <a href="#como">Cómo funciona</a>
          <a href="#faq">Preguntas</a>
        </div>
        <a className="btn btn-primary" href="#simulador">Simular mi crédito</a>
      </nav>
    </header>
  );
}
