import Simulator from "./Simulator";

export default function Hero() {
  return (
    <div className="hero">
      <svg className="pbg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#pat-mint)" /></svg>
      <div className="wrap hero-grid">
        <div className="reveal">
          <span className="eyebrow">Crédito de libranza</span>
          <h1 className="big">Tu salario<br />trabaja <em className="s">para ti</em>.</h1>
          <p className="lead">Crédito descontado directamente de tu nómina. Tasa clara, cuota fija y una respuesta el mismo día.</p>
          <div className="actions">
            <a className="btn btn-primary btn-lg" href="#simulador">Simular mi crédito <svg><use href="#i-arrow" /></svg></a>
            <a className="btn btn-ghost btn-lg" href="#empresas">Soy una empresa</a>
          </div>
          <div className="trust">
            <span><svg><use href="#i-shield" /></svg> Vigilado por la Superintendencia Financiera</span>
            <span><svg><use href="#i-check" /></svg> Sin codeudor</span>
            <span><svg><use href="#i-check" /></svg> Sin papeleo</span>
          </div>
        </div>

        <Simulator />
      </div>
    </div>
  );
}
