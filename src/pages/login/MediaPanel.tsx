import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const DUR = 7000;

const SLIDES = [
  {
    video: "/media/onboarding-1.mp4",
    label: "01 · Tu crédito",
    title: <>Tu salario<br />trabaja <em className="s">para ti</em>.</>,
    body: "Crédito descontado de tu nómina, con cuota fija y respuesta el mismo día.",
  },
  {
    // TODO: re-encode to 1080p H.264 (<5MB) and add a poster JPG before production.
    video: "/media/onboarding-2.mp4",
    label: "02 · Todo en un lugar",
    title: <>Sin filas.<br />Sin <em className="s">papeleo</em>.</>,
    body: "Consulta tu saldo, abona a capital y descarga certificados desde donde estés.",
  },
];

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function MediaPanel() {
  const [active, setActive] = useState(0);
  // Bumped on every manual or timed change so the progress bar animation restarts.
  const [cycle, setCycle] = useState(0);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const reduced = useRef(prefersReducedMotion());

  const show = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  useEffect(() => {
    videos.current.forEach((v, k) => {
      if (!v) return;
      if (k === active && !reduced.current) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
    if (reduced.current) return;
    const t = setTimeout(() => show((active + 1) % SLIDES.length), DUR);
    return () => clearTimeout(t);
  }, [active, cycle]);

  return (
    <section className="media" aria-label="Libre">
      {SLIDES.map((s, k) => (
        <video
          key={s.video}
          ref={(el) => { videos.current[k] = el; }}
          className={k === active ? "on" : undefined}
          src={s.video}
          muted
          loop
          playsInline
          preload={k === 0 ? "auto" : "metadata"}
          aria-hidden="true"
        />
      ))}
      <div className="shade" />
      <div className="mtop">
        <Link className="brand" to="/"><svg><use href="#libre-mark" /></svg><b>Libre</b></Link>
        <span className="label">Crédito de libranza</span>
      </div>
      {SLIDES.map((s, k) => (
        <div className={`msg${k === active ? " on" : ""}`} key={s.label} aria-hidden={k !== active}>
          <span className="label">{s.label}</span>
          <h1>{s.title}</h1>
          <p>{s.body}</p>
        </div>
      ))}
      <div className="msgs">
        <div className="ctrl">
          {SLIDES.map((s, k) => (
            <button
              key={k === active ? `${s.label}-${cycle}` : s.label}
              type="button"
              className={k === active ? "on" : k < active ? "done" : undefined}
              aria-label={`Mensaje ${k + 1}`}
              aria-current={k === active || undefined}
              onClick={() => show(k)}
            >
              <i><b /></i>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
