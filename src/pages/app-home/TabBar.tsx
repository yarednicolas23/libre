import { useState } from "react";

const TABS = [
  { icon: "i-home", label: "Inicio" },
  { icon: "i-card", label: "Mi crédito" },
  { icon: "i-list", label: "Movimientos" },
  { icon: "i-user", label: "Perfil" },
];

export default function TabBar() {
  const [active, setActive] = useState(0);

  return (
    <nav className="tabs">
      <div className="tabs-in">
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            className="tab"
            type="button"
            aria-current={active === i ? "page" : undefined}
            onClick={() => setActive(i)}
          >
            <svg><use href={`#${tab.icon}`} /></svg>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
