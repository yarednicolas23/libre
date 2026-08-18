const MOVEMENTS = [
  { icon: "i-check", ok: true, h: "Cuota 21 de 48", s: "30 jul 2026 · Descuento de nómina", v: "−$389.400" },
  { icon: "i-check", ok: true, h: "Abono extraordinario", s: "12 jul 2026 · PSE", v: "−$1.200.000", up: true },
  { icon: "i-check", ok: true, h: "Cuota 20 de 48", s: "30 jun 2026 · Descuento de nómina", v: "−$389.400" },
  { icon: "i-doc", ok: false, h: "Certificado de deuda", s: "18 jun 2026 · Generado", v: "PDF", pdf: true },
];

export default function MovementsSection() {
  return (
    <>
      <div className="sh r" style={{ animationDelay: ".14s" }}>
        <h2>Movimientos</h2>
        <a href="#">Ver todos</a>
      </div>
      <div className="list r" style={{ animationDelay: ".16s" }}>
        {MOVEMENTS.map((m) => (
          <div className="mv" key={m.h}>
            <div className={`ic${m.ok ? " ok" : ""}`}><svg><use href={`#${m.icon}`} /></svg></div>
            <div className="t">
              <div className="h">{m.h}</div>
              <div className="s">{m.s}</div>
            </div>
            {m.pdf ? (
              <div className="v" style={{ color: "var(--muted)", fontWeight: 500, fontSize: 13.5 }}>{m.v}</div>
            ) : (
              <div className={`v tnum${m.up ? " up" : ""}`}>{m.v}</div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
