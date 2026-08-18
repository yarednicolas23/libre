export default function CtaSection() {
  return (
    <section className="wrap" style={{ paddingTop: 0 }}>
      <div className="cta">
        <svg className="pbg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#pat-tonal)" /></svg>
        <div className="cta-in">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <svg style={{ width: 32, height: 32, color: "var(--mint)" }}><use href="#libre-mark" /></svg>
            <span style={{ fontFamily: "var(--sans)", fontWeight: 800, fontSize: 24, letterSpacing: "-.05em", color: "var(--paper)" }}>Libre</span>
          </div>
          <h2>La libertad no se hereda.<br />Se <em className="s">libera</em>.</h2>
          <p>Simula tu crédito en dos minutos. Sin compromiso y sin consultar tu historial hasta que tú decidas seguir.</p>
          <div className="actions">
            <a className="btn btn-lime btn-lg" href="#simulador">Simular mi crédito <svg><use href="#i-arrow" /></svg></a>
            <a className="btn btn-lg" href="#empresas" style={{ background: "transparent", color: "var(--paper)", border: "1px solid rgba(244,241,233,.35)" }}>Hablar con ventas</a>
          </div>
        </div>
      </div>
    </section>
  );
}
