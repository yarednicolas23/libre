import { useEffect, useState } from "react";
import type { HomeData } from "../../lib/home";

type Props = { user: HomeData["user"]; upToDate: boolean; unread: number };

export default function TopBar({ user, upToDate, unread }: Props) {
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
        <div className="av">{user.initials}</div>
        <div className="greet">
          <div className="h">Hola, {user.firstName}</div>
          <div className="s">{upToDate ? "Tu crédito está al día" : "Tienes pagos pendientes"}</div>
        </div>
        <button className="iconbtn" aria-label={unread ? `Notificaciones (${unread} sin leer)` : "Notificaciones"}>
          <svg><use href="#i-bell" /></svg>
          {unread > 0 && <i className="dot" />}
        </button>
      </div>
    </div>
  );
}
