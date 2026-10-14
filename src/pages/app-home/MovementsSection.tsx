import { cop, shortDate, type Movement } from "../../lib/home";

export default function MovementsSection({ movements }: { movements: Movement[] }) {
  return (
    <>
      <div className="sh r" style={{ animationDelay: ".14s" }}>
        <h2>Movimientos</h2>
        <a href="#">Ver todos</a>
      </div>
      <div className="list r" style={{ animationDelay: ".16s" }}>
        {movements.map((m) => {
          const isDoc = m.kind === "document";
          return (
            <div className="mv" key={m.id}>
              <div className={`ic${isDoc ? "" : " ok"}`}><svg><use href={isDoc ? "#i-doc" : "#i-check"} /></svg></div>
              <div className="t">
                <div className="h">{m.title}</div>
                <div className="s">{shortDate(m.date)} · {m.detail}</div>
              </div>
              {isDoc ? (
                <div className="v" style={{ color: "var(--muted)", fontWeight: 500, fontSize: 13.5 }}>PDF</div>
              ) : (
                <div className={`v tnum${m.kind === "prepayment" ? " up" : ""}`}>−{cop(m.amount ?? 0)}</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
