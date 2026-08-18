import { useEffect, useState } from "react";

export default function TopBar() {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`top${stuck ? " stuck" : ""}`}>
      <div className="top-in">
        <div className="av">MR</div>
        <div className="greet">
          <div className="h">Hola, Marcela</div>
          <div className="s">Tu crédito está al día</div>
        </div>
        <button className="iconbtn" aria-label="Notificaciones">
          <svg><use href="#i-bell" /></svg>
          <i className="dot" />
        </button>
      </div>
    </div>
  );
}
