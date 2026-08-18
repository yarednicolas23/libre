export default function StatsBand() {
  return (
    <section className="wrap" style={{ paddingTop: 0 }}>
      <div className="band">
        <svg className="pbg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#pat-ink)" /></svg>
        <div className="band-in">
          <div className="stat"><div className="k">Aprobación</div><div className="v">El mismo <em className="s">día</em></div></div>
          <div className="stat"><div className="k">Desembolso</div><div className="v">24–72 h</div></div>
          <div className="stat"><div className="k">Plazos</div><div className="v">Hasta 72 meses</div></div>
          <div className="stat"><div className="k">Codeudor</div><div className="v">Ninguno</div></div>
        </div>
      </div>
    </section>
  );
}
