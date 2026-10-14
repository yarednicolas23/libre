import { cop, type HomeData } from "../../lib/home";

export default function CreditSummary({ credit }: { credit: HomeData["credit"] }) {
  const rows = [
    { h: "Tasa E.A.", v: `${credit.rateEA.toLocaleString("es-CO")}%`, tnum: true },
    { h: "Cuota fija", v: cop(credit.installment), tnum: true },
    { h: "Capital abonado", v: cop(credit.principalPaid), tnum: true },
    { h: "Pagaduría", v: credit.payrollShort, tnum: false },
  ];

  return (
    <div className="list r" style={{ animationDelay: ".24s" }}>
      <div className="mv" style={{ padding: 18 }}>
        <div className="t"><span className="label">Resumen del crédito</span></div>
      </div>
      {rows.map((row) => (
        <div className="mv" key={row.h}>
          <div className="t"><div className="h" style={{ fontWeight: 500, color: "var(--ink-soft)" }}>{row.h}</div></div>
          <div className={row.tnum ? "v tnum" : "v"} style={row.tnum ? undefined : { fontWeight: 500, fontSize: 13.5 }}>{row.v}</div>
        </div>
      ))}
    </div>
  );
}
