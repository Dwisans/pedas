export function productArt(variant) {
  switch (variant) {
    case "small":
      return <BasrengArt />;
    case "plate":
      return <KeripikKacaArt />;
    case "large":
    default:
      return <MakaroniArt />;
  }
}

const red = "#dc2626";
const redDeep = "#b91c1c";
const redSoft = "#ef4444";
const orange = "#f97316";
const orangeDeep = "#ea580c";
const amber = "#f59e0b";
const cream = "#fffbeb";
const brown = "#7c2d12";
const brownDeep = "#431407";

function Flecks({ seed = 4, className }) {
  const flecks = Array.from({ length: seed }, (_, i) => (
    <g key={i} className={className}>
      <circle cx={30 + i * 46} cy={18} r={4} fill={i % 2 ? orange : red} />
      <circle cx={10 + i * 52} cy={46} r={2.6} fill={amber} />
      <circle cx={48 + i * 44} cy={68} r={3.2} fill={i % 3 ? red : orange} />
    </g>
  ));
  return <>{flecks}</>;
}

function MakaroniArt() {
  return (
    <svg viewBox="0 0 320 320" role="img" aria-label="Ilustrasi makaroni pedas">
      <defs>
        <radialGradient id="halo-makaroni" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#fdba74" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="148" fill="url(#halo-makaroni)" />
      <Flecks seed={5} className="art-float artwork-f" />
      <g className="artwork-fl">
        {/* pouch */}
        <path
          d="M74 118 L246 118 L292 252 Q160 296 28 252 Z"
          fill={red}
        />
        <path
          d="M74 118 L246 118 L242 130 Q160 150 78 130 Z"
          fill={redDeep}
        />
        <path
          d="M74 118 L246 118 L292 252 Q160 296 28 252 Z"
          fill="none"
          stroke={brownDeep}
          strokeWidth="10"
          strokeLinejoin="round"
        />
        <path
          d="M74 118 L246 118 L248 134 Q160 156 72 134 Z"
          fill="none"
          stroke="#fecaca"
          strokeWidth="6"
          opacity="0.7"
        />
      </g>
      {/* macaroni tubes */}
      {[
        [104, 170, 34, 1],
        [150, 188, 38, 2],
        [198, 168, 32, 1],
        [126, 222, 34, 2],
        [176, 238, 36, 1],
        [224, 214, 30, 2],
        [84, 206, 26, 1],
        [158, 150, 30, 2],
        [236, 168, 28, 1],
      ].map(([cx, cy, s, rot], i) => (
        <g key={i} transform={`rotate(${rot === 1 ? -28 : 24} ${cx} ${cy})`}>
          <ellipse cx={cx} cy={cy} rx={s} ry={s * 0.52} fill={amber} transform={`rotate(-20 ${cx} ${cy})`} />
          <ellipse cx={cx} cy={cy} rx={s * 0.76} ry={s * 0.34} fill="#fde68a" transform={`rotate(-20 ${cx} ${cy})`} />
          <path
            d={`M${cx - s * 0.9} ${cy} q${s * 0.9} ${-s * 0.4} ${s * 1.8} 0 M${cx - s * 0.9} ${cy + s * 0.28} q${s * 0.9} ${s * 0.42} ${s * 1.8} 0`}
            stroke={redSoft}
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            opacity="0.85"
          />
        </g>
      ))}
      {/* chili + serundeng */}
      <g className="art-float2">
        <path d="M58 96 q-18 -26 2 -44 q14 8 8 24 q10 -6 14 -20 q4 14 -8 30 q-2 12 -16 10 Z" fill={red} stroke={brownDeep} strokeWidth="5" />
        <path d="M56 94 q-14 -20 -6 -32 q8 4 6 16 q6 -4 8 -12 q0 8 -8 26" fill={redDeep} />
        <path d="M76 34 c-2 -4 -2 -10 0 -14 c6 2 4 10 0 14 Z" fill="#65a30d" stroke={brownDeep} strokeWidth="3" />
      </g>
      <g className="art-float3">
        <path d="M258 86 q16 -24 -2 -42 q-13 8 -8 22 q-9 -4 -11 -18 q-2 14 8 28 q0 12 13 10 Z" fill={red} stroke={brownDeep} strokeWidth="5" />
        <path d="M256 84 q14 -18 6 -28 q-8 3 -6 15 q-5 -2 -7 -10 q1 8 7 23" fill={redDeep} />
        <path d="M238 30 c0 -6 2 -12 4 -16 c-8 0 -10 10 -4 16 Z" fill="#65a30d" stroke={brownDeep} strokeWidth="3" />
      </g>
      <path d="M40 250 q10 -8 22 -4 M266 232 q10 -8 22 -4" stroke="#fff7ed" strokeWidth="6" strokeLinecap="round" className="art-float" />
    </svg>
  );
}

function BasrengArt() {
  return (
    <svg viewBox="0 0 320 320" role="img" aria-label="Ilustrasi basreng">
      <defs>
        <radialGradient id="halo-basreng" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#fb923c" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="148" fill="url(#halo-basreng)" />
      <Flecks seed={5} className="art-float artwork-f" />
      <g className="artwork-fl">
        {/* basket */}
        <path
          d="M72 150 Q160 120 248 150 L268 252 Q160 288 52 252 Z"
          fill="#fef3c7"
        />
        <path
          d="M72 150 Q160 120 248 150 L268 252 Q160 288 52 252 Z"
          fill="none"
          stroke={brownDeep}
          strokeWidth="9"
          strokeLinejoin="round"
        />
        {Array.from({ length: 7 }, (_, i) => (
          <path
            key={i}
            d={`M${86 + i * 25} 150 q${i % 2 ? 4 : -4} 62 0 118`}
            stroke="#d9a76b"
            strokeWidth="5"
            fill="none"
            opacity="0.6"
          />
        ))}
        <path d="M72 150 L90 158" stroke={brownDeep} strokeWidth="8" />
        <path d="M248 150 L230 158" stroke={brownDeep} strokeWidth="8" />
      </g>
      {/* basreng balls */}
      {[
        [128, 188, 17],
        [172, 182, 19],
        [148, 216, 18],
        [198, 206, 16],
        [112, 222, 15],
        [214, 176, 15],
        [102, 192, 14],
        [238, 196, 14],
        [162, 252, 17],
        [196, 244, 15],
      ].map(([cx, cy, r], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={r} fill={i % 3 === 0 ? orangeDeep : orange} stroke={brownDeep} strokeWidth="5" />
          <circle cx={cx - r * 0.32} cy={cy - r * 0.36} r={r * 0.4} fill={amber} />
          <path
            d={`M${cx - r * 0.4} ${cy - r * 0.3} h${r * 0.8} M${cx - r * 0.3} ${cy} h${r * 0.6} M${cx - r * 0.35} ${cy + r * 0.24} h${r * 0.7}`}
            stroke={redSoft}
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      ))}
      <circle cx="120" cy="140" r="26" fill={orangeDeep} stroke={brownDeep} strokeWidth="6" className="art-float2" />
      <circle cx="212" cy="126" r="21" fill={red} stroke={brownDeep} strokeWidth="6" className="art-float3" />
      <circle cx="120" cy="140" r="26" fill="none" stroke="#fed7aa" strokeWidth="4" className="art-float2" opacity="0.5" />
      {/* chili */}
      <path d="M52 88 q-18 -24 0 -44 q12 8 8 24 q8 -6 12 -18 q2 12 -8 28 q0 12 -12 10 Z" fill={red} stroke={brownDeep} strokeWidth="5" className="art-float2" />
      <path d="M28 30 c-2 -5 -2 -11 0 -15 c6 3 5 11 0 15 Z" fill="#65a30d" stroke={brownDeep} strokeWidth="3" />
    </svg>
  );
}

function KeripikKacaArt() {
  return (
    <svg viewBox="0 0 320 320" role="img" aria-label="Ilustrasi keripik kaca">
      <defs>
        <radialGradient id="halo-keripik" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#f87171" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffedd5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="148" fill="url(#halo-keripik)" />
      <Flecks seed={5} className="art-float artwork-f" />
      <g className="artwork-fl">
        {/* plate */}
        <ellipse cx="160" cy="228" rx="128" ry="38" fill="#fff" />
        <ellipse cx="160" cy="216" rx="128" ry="38" fill="#fffbeb" stroke={brownDeep} strokeWidth="9" />
        <ellipse cx="160" cy="212" rx="96" ry="26" fill="#fef3c7" stroke="#d9a76b" strokeWidth="4" opacity="0.8" />
      </g>
      {/* chips */}
      {[
        [132, 132, 44, 18, "#fca5a5"],
        [176, 144, 40, -24, "#fca5a5"],
        [150, 172, 46, 40, "#fca5a5"],
        [188, 168, 38, -6, "#fca5a5"],
        [160, 118, 30, -34, "#fbbf24"],
        [206, 120, 26, 20, "#fb923c"],
        [118, 168, 28, 30, "#fb923c"],
        [170, 200, 34, 8, "#f97316"],
        [136, 200, 30, -20, "#f59e0b"],
        [200, 196, 28, 44, "#f87171"],
        [152, 154, 26, -12, "#fde68a"],
      ].map(([cx, cy, r, rot, fill], i) => (
        <g key={i} transform={`rotate(${rot} ${cx} ${cy})`}>
          <path
            d={`M${cx - r} ${cy} q${r * 0.6} ${-r * 0.7} ${r * 1.6} ${-r * 0.1} q${r * 0.3} ${r * 0.5} ${-r * 0.4} ${r * 0.9} q${-r * 0.5} ${r * 0.4} ${-r * 1.2} ${-r * 0.2} Z`}
            fill={fill}
            stroke={brownDeep}
            strokeWidth="5"
            strokeLinejoin="round"
            opacity={i % 3 === 0 ? 0.92 : 1}
          />
          <path
            d={`M${cx - r * 0.4} ${cy - r * 0.2} q${r * 0.5} ${-r * 0.4} ${r} 0`}
            stroke="#fff"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          {i % 2 && (
            <circle cx={cx + r * 0.35} cy={cy + r * 0.3} r="3.4" fill="#dc2626" />
          )}
        </g>
      ))}
      {/* chili */}
      <g className="art-float">
        <path d="M64 82 q-16 -22 -2 -40 q13 7 8 21 q9 -6 12 -18 q1 12 -8 26 q-1 12 -10 11 Z" fill={red} stroke={brownDeep} strokeWidth="5" />
        <path d="M258 84 q16 -22 2 -40 q-12 7 -8 22 q-8 -6 -11 -18 q-2 12 8 26" fill={red} />
      </g>
      <path d="M40 120 q12 -10 26 -6 M282 130 q-10 -12 -26 -8" stroke="#fff7ed" strokeWidth="6" strokeLinecap="round" className="art-float" />
    </svg>
  );
}

export function AboutIcons({ name }) {
  switch (name) {
    case "chili":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" className="about-icon">
          <path d="M14 52 q-8 -16 2 -28 q10 -11 22 -6 q4 5 0 12 q5 -3 7 -11 q4 8 -2 18 q-6 12 -14 18 q-14 4 -15 -3 Z" fill={red} stroke={brownDeep} strokeWidth="4" strokeLinejoin="round" />
          <path d="M38 14 c-2 -5 -1 -10 2 -13 c7 2 6 11 -2 13 Z" fill="#65a30d" stroke={brownDeep} strokeWidth="4" />
          <path d="M24 40 q4 -5 8 -4 M20 46 q4 -5 8 -4" stroke="#fecaca" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "wok":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" className="about-icon">
          <path d="M16 28 q16 -14 32 0 l6 20 q-22 12 -44 0 Z" fill={orangeDeep} stroke={brownDeep} strokeWidth="4" strokeLinejoin="round" />
          <path d="M16 28 q16 -14 32 0 q-16 6 -32 0" fill={redDeep} />
          <path d="M20 52 q8 6 24 0" stroke={brownDeep} strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M34 14 v-7 q6 -5 10 -2" fill="none" stroke={brownDeep} strokeWidth="4" strokeLinecap="round" />
          <circle cx="24" cy="33" r="3" fill={amber} />
          <circle cx="35" cy="37" r="2.4" fill={amber} />
          <circle cx="44" cy="31" r="2.4" fill={amber} />
          <path d="M47 42 q7 -6 13 1" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    case "spice":
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true" className="about-icon">
          <ellipse cx="32" cy="38" rx="12" ry="18" fill="#65a30d" stroke={brownDeep} strokeWidth="4" transform="rotate(18 32 38)" />
          <ellipse cx="32" cy="38" rx="12" ry="18" fill="none" stroke={brownDeep} strokeWidth="4" transform="rotate(-18 32 38)" />
          <path d="M32 20 v-4 q4 -8 10 -8" stroke={brownDeep} strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="46" cy="14" r="3" fill={red} />
          <circle cx="52" cy="26" r="2.6" fill={orange} />
          <circle cx="12" cy="22" r="3" fill={orange} />
          <circle cx="18" cy="42" r="3" fill={red} />
          <circle cx="47" cy="44" r="2.2" fill={red} />
          <circle cx="32" cy="44" r="3" fill="#d9a76b" />
          <circle cx="28" cy="30" r="2.2" fill="#fef3c7" />
          <circle cx="37" cy="34" r="2.2" fill={amber} />
        </svg>
      );
    default:
      return null;
  }
}