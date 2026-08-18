const ACTIONS = [
  { icon: "i-down", label: "Abonar" },
  { icon: "i-doc", label: "Certificado" },
  { icon: "i-plus", label: "Nuevo crédito" },
  { icon: "i-chat", label: "Ayuda" },
];

export default function QuickActions() {
  return (
    <div className="qa r" style={{ animationDelay: ".1s" }}>
      {ACTIONS.map((a) => (
        <button key={a.label} type="button">
          <svg><use href={`#${a.icon}`} /></svg>
          <span>{a.label}</span>
        </button>
      ))}
    </div>
  );
}
