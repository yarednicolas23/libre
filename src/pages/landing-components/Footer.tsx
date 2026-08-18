export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <a className="logo" href="#top" style={{ marginBottom: 16 }}>
              <svg><use href="#libre-mark" /></svg>
              <span>Libre</span>
            </a>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", maxWidth: "32ch" }}>Crédito de libranza para empleados y pensionados. Tecnología, no trámites.</p>
          </div>
          <div className="fcol">
            <h4>Producto</h4>
            <a href="#personas">Personas</a>
            <a href="#empresas">Empresas</a>
            <a href="#simulador">Simulador</a>
            <a href="#como">Cómo funciona</a>
          </div>
          <div className="fcol">
            <h4>Compañía</h4>
            <a href="#">Sobre Libre</a>
            <a href="#">Trabaja con nosotros</a>
            <a href="#">Prensa</a>
            <a href="#">Blog</a>
          </div>
          <div className="fcol">
            <h4>Ayuda</h4>
            <a href="#faq">Preguntas frecuentes</a>
            <a href="#">Centro de ayuda</a>
            <a href="#">Contacto</a>
            <a href="#">Radicar una PQRS</a>
          </div>
        </div>
        <p className="legal">Libre S.A.S. Las cifras del simulador son ilustrativas y no constituyen una oferta de crédito. Las condiciones finales se informan en el documento precontractual antes de la firma. Tasas expresadas en efectivo anual.</p>
        <div className="fbot">
          <span>© 2026 Libre S.A.S. Todos los derechos reservados.</span>
          <span style={{ display: "flex", gap: 22 }}>
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
            <a href="#">Tratamiento de datos</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
