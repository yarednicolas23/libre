import { useMemo, useState } from "react";

const RATES: Record<number, number> = { 24: 0.0159, 48: 0.0166, 72: 0.0172 };
const EA: Record<number, string> = { 24: "20,8%", 48: "21,9%", 72: "22,7%" };
const TERMS = [24, 48, 72];

const fmt = (n: number) => "$" + Math.round(n).toLocaleString("es-CO");

export default function Simulator() {
  const [amount, setAmount] = useState(12000000);
  const [months, setMonths] = useState(48);

  const { cuota, tasa } = useMemo(() => {
    const i = RATES[months];
    const monthly = (amount * i) / (1 - Math.pow(1 + i, -months));
    return { cuota: fmt(monthly), tasa: EA[months] };
  }, [amount, months]);

  return (
    <div className="sim reveal" id="simulador" style={{ animationDelay: ".12s" }}>
      <div className="top">
        <span className="label">Simulador</span>
        <svg style={{ width: 26, height: 26, color: "var(--green-600)" }}>
          <use href="#libre-mark" />
        </svg>
      </div>
      <div className="label">Monto solicitado</div>
      <div className="amount" id="amt">{fmt(amount)}</div>
      <input
        type="range"
        id="range"
        min={2000000}
        max={60000000}
        step={500000}
        value={amount}
        aria-label="Monto solicitado"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <div className="simrow"><span>$2M</span><span>$60M</span></div>
      <div className="terms" id="terms">
        {TERMS.map((m) => (
          <button
            key={m}
            aria-pressed={months === m}
            data-m={m}
            onClick={() => setMonths(m)}
            type="button"
          >
            {m} meses
          </button>
        ))}
      </div>
      <div className="simout">
        <div>
          <div className="label">Cuota mensual</div>
          <div className="v" id="cuota">{cuota}</div>
        </div>
        <div>
          <div className="label">Tasa E.A. desde</div>
          <div className="v" id="tasa">{tasa}</div>
        </div>
      </div>
      <a className="btn btn-primary btn-lg" href="#" style={{ width: "100%", justifyContent: "center" }}>
        Continuar solicitud <svg><use href="#i-arrow" /></svg>
      </a>
      <p className="simnote">Cifras ilustrativas. La tasa final depende de tu pagaduría y perfil. Te mostramos el costo total antes de que firmes nada.</p>
    </div>
  );
}
