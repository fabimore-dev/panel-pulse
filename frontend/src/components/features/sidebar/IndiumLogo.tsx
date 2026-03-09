export function IndiumLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 165 48"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Indium"
      role="img"
    >
      <defs>
        <linearGradient id="indOrange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C84B00" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
      </defs>

      {/* I — vertical bar */}
      <rect x="1" y="12" width="8" height="24" rx="1.5" fill="url(#indOrange)" />

      {/* N — left vertical bar */}
      <rect x="15" y="12" width="8" height="24" rx="1.5" fill="url(#indOrange)" />
      {/* N — diagonal (top-left → bottom-right) */}
      <polygon points="15,12 23,12 39,36 31,36" fill="url(#indOrange)" />
      {/* N — right vertical bar */}
      <rect x="31" y="12" width="8" height="24" rx="1.5" fill="url(#indOrange)" />

      {/* DIUM */}
      <text
        x="47"
        y="33"
        fill="rgba(255,255,255,0.50)"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="21"
        fontWeight="700"
        letterSpacing="1.5"
      >
        DIUM
      </text>
    </svg>
  );
}
