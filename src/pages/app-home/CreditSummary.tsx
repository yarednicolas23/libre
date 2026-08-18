const ROWS = [
  { h: "Tasa E.A.", v: "21,9%", tnum: true },
  { h: "Cuota fija", v: "$389.400", tnum: true },
  { h: "Capital abonado", v: "$6.587.500", tnum: true },
  { h: "Pagaduría", v: "Sec. Educación", tnum: false },
];

export default function CreditSummary() {
  return (
    <div className="list r" style={{ animationDelay: ".24s" }}>
      <div className="mv" style={{ padding: 18 }}>
        <div className="t"><span className="label">Resumen del crédito</span></div>
      </div>
      {ROWS.map((row) => (
        <div className="mv" key={row.h}>
          <div className="t"><div className="h" style={{ fontWeight: 500, color: "var(--ink-soft)" }}>{row.h}</div></div>
          <div className={row.tnum ? "v tnum" : "v"} style={row.tnum ? undefined : { fontWeight: 500, fontSize: 13.5 }}>{row.v}</div>
        </div>
      ))}
    </div>
  );
}
