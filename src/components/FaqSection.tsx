const FAQS = [
  {
    q: "¿Qué es exactamente un crédito de libranza?",
    a: "Es un crédito cuya cuota se descuenta directamente de tu salario o pensión, con tu autorización. Como el pago está asegurado en la fuente, la tasa es más baja que la de un crédito de libre inversión.",
    open: true,
  },
  {
    q: "¿Quién puede solicitarlo?",
    a: "Empleados y pensionados vinculados a una pagaduría con la que Libre tenga convenio. En la simulación te confirmamos si tu entidad ya está conectada.",
  },
  {
    q: "¿Necesito codeudor o garantía?",
    a: "No. La autorización de descuento de nómina reemplaza al codeudor.",
  },
  {
    q: "¿Qué pasa si cambio de trabajo?",
    a: "El crédito sigue vigente y te ofrecemos alternativas de pago directo mientras se define tu nueva vinculación. Te avisamos antes de que cambie algo en tu cuota.",
  },
  {
    q: "¿Puedo pagar antes de tiempo?",
    a: "Sí, cuando quieras y sin penalidad. Pagar anticipadamente reduce los intereses que te quedan por pagar.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="wrap" style={{ paddingTop: 0 }}>
      <div className="sechead">
        <span className="eyebrow">Preguntas frecuentes</span>
        <h2>Lo que solemos responder.</h2>
      </div>
      {FAQS.map((item) => (
        <details key={item.q} open={item.open}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </section>
  );
}
