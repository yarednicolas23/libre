export default function Icons() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <g id="Lcorner-cc">
          <rect x="22" y="22" width="34" height="72" rx="17" fill="currentColor" />
          <rect x="22" y="22" width="72" height="34" rx="17" fill="currentColor" />
        </g>
        <symbol id="libre-mark" viewBox="0 0 200 200">
          <use href="#Lcorner-cc" />
          <use href="#Lcorner-cc" transform="translate(200,0) scale(-1,1)" />
          <use href="#Lcorner-cc" transform="translate(0,200) scale(1,-1)" />
          <use href="#Lcorner-cc" transform="translate(200,200) scale(-1,-1)" />
        </symbol>
        <mask id="mkb">
          <rect width="100" height="100" fill="#fff" />
          <circle cx="63" cy="39" r="17" fill="#000" />
        </mask>
        <g id="Lcell-mint">
          <g mask="url(#mkb)">
            <rect x="20" y="17" width="24" height="66" rx="12" fill="#B9F0C2" />
            <rect x="20" y="59" width="60" height="24" rx="12" fill="#B9F0C2" />
          </g>
        </g>
        <g id="Lcell-tonal">
          <g mask="url(#mkb)">
            <rect x="20" y="17" width="24" height="66" rx="12" fill="#0F7A4F" />
            <rect x="20" y="59" width="60" height="24" rx="12" fill="#0F7A4F" />
          </g>
        </g>
        <g id="Lcell-ink">
          <g mask="url(#mkb)">
            <rect x="20" y="17" width="24" height="66" rx="12" fill="rgba(255,255,255,.08)" />
            <rect x="20" y="59" width="60" height="24" rx="12" fill="rgba(255,255,255,.08)" />
          </g>
        </g>
        <g id="Lcell-deep">
          <g mask="url(#mkb)">
            <rect x="20" y="17" width="24" height="66" rx="12" fill="rgba(255,255,255,.1)" />
            <rect x="20" y="59" width="60" height="24" rx="12" fill="rgba(255,255,255,.1)" />
          </g>
        </g>
        <pattern id="pat-mint" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform="scale(.78)">
          <use href="#Lcell-mint" />
          <use href="#Lcell-mint" transform="translate(200,0) scale(-1,1)" />
          <use href="#Lcell-mint" transform="translate(0,200) scale(1,-1)" />
          <use href="#Lcell-mint" transform="translate(200,200) scale(-1,-1)" />
        </pattern>
        <pattern id="pat-tonal" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform="scale(.62)">
          <use href="#Lcell-tonal" />
          <use href="#Lcell-tonal" transform="translate(200,0) scale(-1,1)" />
          <use href="#Lcell-tonal" transform="translate(0,200) scale(1,-1)" />
          <use href="#Lcell-tonal" transform="translate(200,200) scale(-1,-1)" />
        </pattern>
        <pattern id="pat-ink" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform="scale(.5)">
          <use href="#Lcell-ink" />
          <use href="#Lcell-ink" transform="translate(200,0) scale(-1,1)" />
          <use href="#Lcell-ink" transform="translate(0,200) scale(1,-1)" />
          <use href="#Lcell-ink" transform="translate(200,200) scale(-1,-1)" />
        </pattern>
        <pattern id="pat-deep" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform="scale(.9)">
          <use href="#Lcell-deep" />
          <use href="#Lcell-deep" transform="translate(200,0) scale(-1,1)" />
          <use href="#Lcell-deep" transform="translate(0,200) scale(1,-1)" />
          <use href="#Lcell-deep" transform="translate(200,200) scale(-1,-1)" />
        </pattern>
        <symbol id="i-check" viewBox="0 0 24 24">
          <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24">
          <path d="M5 12h13M12.5 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24">
          <path d="M12 3l7 3v5.5c0 4.5-3 7.8-7 9.5-4-1.7-7-5-7-9.5V6l7-3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </symbol>
      </defs>
    </svg>
  );
}
