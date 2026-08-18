const STEPS = [
  { n: "PASO 01", title: "Simula y solicita", text: "Eliges monto y plazo, ves la cuota real y firmas electrónicamente. Diez minutos desde el celular." },
  { n: "PASO 02", title: "Validamos con tu pagaduría", text: "Confirmamos tu vinculación y tu capacidad de descuento de forma automática, sin que tengas que pedir cartas." },
  { n: "PASO 03", title: "Recibes el desembolso", text: "El dinero entra a tu cuenta y la cuota empieza a descontarse en tu siguiente pago. Así de simple." },
];

export default function ComoSection() {
  return (
    <section id="como" className="wrap" style={{ paddingTop: 0 }}>
      <div className="sechead">
        <span className="eyebrow">Cómo funciona</span>
        <h2>Tres pasos. Cero trámites.</h2>
      </div>
      <div className="steps">
        {STEPS.map((step) => (
          <div className="step" key={step.n}>
            <div className="n">{step.n}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
