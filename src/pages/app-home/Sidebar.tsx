const NAV = [
  { label: "Inicio", icon: "i-home", current: true },
  { label: "Mi crédito", icon: "i-card" },
  { label: "Movimientos", icon: "i-list" },
  { label: "Documentos", icon: "i-doc" },
  { label: "Ayuda", icon: "i-chat" },
  { label: "Mi perfil", icon: "i-user" },
];

export default function Sidebar() {
  return (
    <aside className="side">
      <div className="logo">
        <svg><use href="#libre-mark" /></svg>
        <b>Libre</b>
      </div>
      <nav className="nav">
        {NAV.map((item) => (
          <a href="#" key={item.label} aria-current={item.current ? "page" : undefined}>
            <svg><use href={`#${item.icon}`} /></svg> {item.label}
          </a>
        ))}
      </nav>
      <div className="foot">LIBRE S.A.S.<br />Vigilado Superfinanciera<br />v2.4.0</div>
    </aside>
  );
}
