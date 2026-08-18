export default function EmpresasSection() {
  return (
    <section id="empresas" className="wrap" style={{ paddingTop: 0 }}>
      <div className="sechead">
        <span className="eyebrow">Para empresas y pagadurías</span>
        <h2>Bienestar financiero,<br />sin carga operativa.</h2>
        <p>Ofrece a tu equipo un crédito responsable y déjanos la operación. Integramos el descuento a tu nómina y conciliamos por ti.</p>
      </div>
      <div className="two">
        <div className="card">
          <span className="label">Para Talento Humano</span>
          <h3>Un beneficio real, cero papeleo</h3>
          <p>Tu gente accede a crédito a tasa preferencial sin que tú tengas que gestionar solicitudes ni firmar cartas una por una.</p>
          <ul>
            <li><svg><use href="#i-check" /></svg> Portal para autorizar descuentos en lote</li>
            <li><svg><use href="#i-check" /></svg> Conciliación mensual automática</li>
            <li><svg><use href="#i-check" /></svg> Reportes de uso y cartera al día</li>
          </ul>
        </div>
        <div className="card dark">
          <svg className="pbg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#pat-deep)" /></svg>
          <div className="inner">
            <span className="label">Integración</span>
            <h3>Conecta tu nómina en días, no en meses</h3>
            <p>API y archivo plano. Trabajamos con los sistemas de nómina más usados del país y nos adaptamos al tuyo.</p>
            <ul>
              <li><svg><use href="#i-check" /></svg> API REST documentada</li>
              <li><svg><use href="#i-check" /></svg> Cargue por archivo si prefieres</li>
              <li><svg><use href="#i-check" /></svg> Acompañamiento dedicado</li>
            </ul>
            <a className="btn btn-lime btn-lg" href="#" style={{ marginTop: 28 }}>Agendar una demo <svg><use href="#i-arrow" /></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
}
