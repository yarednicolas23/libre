export default function OfferCard() {
  return (
    <div className="offer r" style={{ animationDelay: ".2s" }}>
      <svg className="pbg" aria-hidden="true"><rect width="100%" height="100%" fill="url(#pat-soft)" /></svg>
      <div className="offer-in">
        <span className="label">Preaprobado para ti</span>
        <h3>Hasta $6.500.000 más</h3>
        <p>Con 21 cuotas al día tienes cupo disponible. Misma tasa, misma cuota o plazo extendido.</p>
        <button className="offer-cta" type="button">Ver mi oferta <svg><use href="#i-arrow" /></svg></button>
      </div>
    </div>
  );
}
