export default function AppIcons() {
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
        <g id="Lcell-deep">
          <g mask="url(#mkb)">
            <rect x="20" y="17" width="24" height="66" rx="12" fill="rgba(255,255,255,.09)" />
            <rect x="20" y="59" width="60" height="24" rx="12" fill="rgba(255,255,255,.09)" />
          </g>
        </g>
        <g id="Lcell-mint">
          <g mask="url(#mkb)">
            <rect x="20" y="17" width="24" height="66" rx="12" fill="rgba(10,61,41,.09)" />
            <rect x="20" y="59" width="60" height="24" rx="12" fill="rgba(10,61,41,.09)" />
          </g>
        </g>
        <pattern id="pat-deep" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform="scale(.85)">
          <use href="#Lcell-deep" />
          <use href="#Lcell-deep" transform="translate(200,0) scale(-1,1)" />
          <use href="#Lcell-deep" transform="translate(0,200) scale(1,-1)" />
          <use href="#Lcell-deep" transform="translate(200,200) scale(-1,-1)" />
        </pattern>
        <pattern id="pat-soft" width="200" height="200" patternUnits="userSpaceOnUse" patternTransform="scale(.55)">
          <use href="#Lcell-mint" />
          <use href="#Lcell-mint" transform="translate(200,0) scale(-1,1)" />
          <use href="#Lcell-mint" transform="translate(0,200) scale(1,-1)" />
          <use href="#Lcell-mint" transform="translate(200,200) scale(-1,-1)" />
        </pattern>
        <symbol id="i-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" />
          <path d="M10.3 20a2 2 0 0 0 3.4 0" />
        </symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h13M12.5 6l6 6-6 6" />
        </symbol>
        <symbol id="i-doc" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <path d="M14 3v5h5M9 13h6M9 17h4" />
        </symbol>
        <symbol id="i-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="M3 10h18" />
        </symbol>
        <symbol id="i-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </symbol>
        <symbol id="i-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12a8 8 0 0 1-8 8H8l-4 3v-5.5A8 8 0 0 1 12 4h1a8 8 0 0 1 8 8z" />
        </symbol>
        <symbol id="i-home" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" />
        </symbol>
        <symbol id="i-list" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />
        </symbol>
        <symbol id="i-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
        </symbol>
        <symbol id="i-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12.5l5 5L20 6.5" />
        </symbol>
        <symbol id="i-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </symbol>
      </defs>
    </svg>
  );
}
