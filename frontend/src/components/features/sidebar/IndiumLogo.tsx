export function IndiumLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 114 44"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Indium"
      role="img"
    >
      <defs>
        <linearGradient id="indGrad" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#E86D10" />
          <stop offset="100%" stopColor="#F88B22" />
        </linearGradient>
      </defs>

      {/* I — left pillar */}
      <rect x="0" y="3" width="8" height="38" rx="1" fill="url(#indGrad)" />

      {/* N — left pillar */}
      <rect x="14" y="3" width="8" height="38" rx="1" fill="url(#indGrad)" />
      {/* N — broad diagonal wedge */}
      <polygon points="14,3 22,3 40,41 32,41" fill="url(#indGrad)" />
      {/* N — right pillar */}
      <rect x="32" y="3" width="8" height="38" rx="1" fill="url(#indGrad)" />

      {/* DIUM — white, clean weight */}
      <text
        x="48"
        y="33"
        fill="rgba(255,255,255,0.92)"
        fontFamily="'Segoe UI',system-ui,-apple-system,'Helvetica Neue',Arial,sans-serif"
        fontSize="21"
        fontWeight="400"
        letterSpacing="1"
      >
        DIUM
      </text>
    </svg>
  );
}
