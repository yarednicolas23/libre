import { cop, longMonthYear, monthYear, type HomeData } from "../../lib/home";

export default function CreditCard({ credit }: { credit: HomeData["credit"] }) {
  const pct = (credit.paidInstallments / credit.totalInstallments) * 100;

  return (
    <div className="creditcard r">
      <svg className="pbg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#pat-deep)" /></svg>
      <div className="cc-in">
        <div className="cc-top">
          <div>
            <span className="label">Saldo por pagar</span>
            <div className="who">Libranza · {credit.payroll}</div>
          </div>
          <svg className="mk"><use href="#libre-mark" /></svg>
        </div>
        <div className="cc-amt tnum">{cop(credit.balance)}</div>
        <div className="cc-sub">de {cop(credit.originalAmount)} desembolsados en {longMonthYear(credit.disbursedAt)}</div>
        <div className="prog">
          <div
            className="bar"
            role="progressbar"
            aria-valuenow={credit.paidInstallments}
            aria-valuemin={0}
            aria-valuemax={credit.totalInstallments}
            aria-label="Cuotas pagadas"
          >
            <i style={{ width: `${pct}%` }} />
          </div>
          <div className="meta">
            <span>{credit.paidInstallments} de {credit.totalInstallments} cuotas</span>
            <span>Fin: {monthYear(credit.endsAt)}</span>
          </div>
        </div>
        <div className="cc-foot">
          <button className="a" type="button">Abonar a capital</button>
          <button className="b" type="button">Ver detalle</button>
        </div>
      </div>
    </div>
  );
}
