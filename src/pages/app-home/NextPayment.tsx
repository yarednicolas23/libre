import { cop, dayMonth, type HomeData } from "../../lib/home";

export default function NextPayment({ next }: { next: HomeData["nextDeduction"] }) {
  const { day, month } = dayMonth(next.date);
  return (
    <div className="next r" style={{ animationDelay: ".06s" }}>
      <div className="cal"><b>{day}</b><span>{month}</span></div>
      <div className="t">
        <div className="h">Próximo descuento</div>
        <div className="s">Automático de tu nómina</div>
      </div>
      <div className="amt tnum">{cop(next.amount)}</div>
    </div>
  );
}
