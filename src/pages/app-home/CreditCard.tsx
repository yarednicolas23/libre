export default function CreditCard() {
  return (
    <div className="creditcard r">
      <svg className="pbg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#pat-deep)" /></svg>
      <div className="cc-in">
        <div className="cc-top">
          <div>
            <span className="label">Saldo por pagar</span>
            <div className="who">Libranza · Secretaría de Educación</div>
          </div>
          <svg className="mk"><use href="#libre-mark" /></svg>
        </div>
        <div className="cc-amt tnum">$8.412.500</div>
        <div className="cc-sub">de $15.000.000 desembolsados en marzo de 2025</div>
        <div className="prog">
          <div className="bar"><i /></div>
          <div className="meta"><span>21 de 48 cuotas</span><span>Fin: feb 2029</span></div>
        </div>
        <div className="cc-foot">
          <button className="a">Abonar a capital</button>
          <button className="b">Ver detalle</button>
        </div>
      </div>
    </div>
  );
}
