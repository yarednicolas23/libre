export default function HelpButton() {
  return (
    <button className="help r" style={{ animationDelay: ".28s" }} type="button">
      <svg><use href="#i-chat" /></svg>
      <div className="t">
        <div className="h">¿Algo no cuadra?</div>
        <div className="s">Escríbenos, respondemos en minutos</div>
      </div>
      <svg style={{ width: 16, height: 16, color: "var(--muted)" }}><use href="#i-arrow" /></svg>
    </button>
  );
}
