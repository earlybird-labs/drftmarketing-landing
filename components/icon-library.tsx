// Consistent icon library with unified style
export const CreatorIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="32"
      cy="32"
      r="30"
      stroke="url(#creator-bg)"
      strokeWidth="2"
      fill="url(#creator-bg)"
      fillOpacity="0.05"
    />
    <circle cx="32" cy="24" r="8" stroke="url(#creator-main)" strokeWidth="2.5" fill="none" />
    <path
      d="M16 48c0-8.837 7.163-16 16-16s16 7.163 16 16"
      stroke="url(#creator-main)"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="48" cy="16" r="6" fill="url(#creator-accent)" fillOpacity="0.3" />
    <circle cx="16" cy="16" r="6" fill="url(#creator-accent)" fillOpacity="0.3" />
    <circle cx="48" cy="48" r="4" fill="url(#creator-accent)" fillOpacity="0.2" />
    <defs>
      <linearGradient id="creator-bg" x1="2" y1="2" x2="62" y2="62">
        <stop stopColor="#1e293b" />
        <stop offset="1" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="creator-main" x1="16" y1="16" x2="48" y2="48">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="creator-accent" x1="16" y1="16" x2="48" y2="48">
        <stop stopColor="#93c5fd" />
        <stop offset="1" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
  </svg>
)

export const StrategyIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="32"
      cy="32"
      r="30"
      stroke="url(#strategy-bg)"
      strokeWidth="2"
      fill="url(#strategy-bg)"
      fillOpacity="0.05"
    />
    <path
      d="M32 8l6 18h18l-14.5 10.5L47 54l-15-11-15 11 5.5-17.5L8 26h18l6-18z"
      stroke="url(#strategy-main)"
      strokeWidth="2.5"
      fill="url(#strategy-main)"
      fillOpacity="0.1"
    />
    <circle cx="32" cy="32" r="10" stroke="url(#strategy-main)" strokeWidth="2" fill="none" />
    <circle cx="32" cy="32" r="4" fill="url(#strategy-accent)" />
    <defs>
      <linearGradient id="strategy-bg" x1="2" y1="2" x2="62" y2="62">
        <stop stopColor="#1e293b" />
        <stop offset="1" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="strategy-main" x1="8" y1="8" x2="56" y2="56">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="strategy-accent" x1="28" y1="28" x2="36" y2="36">
        <stop stopColor="#93c5fd" />
        <stop offset="1" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
  </svg>
)

export const AnalyticsIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="32"
      cy="32"
      r="30"
      stroke="url(#analytics-bg)"
      strokeWidth="2"
      fill="url(#analytics-bg)"
      fillOpacity="0.05"
    />
    <rect
      x="8"
      y="16"
      width="48"
      height="32"
      rx="4"
      stroke="url(#analytics-main)"
      strokeWidth="2.5"
      fill="url(#analytics-main)"
      fillOpacity="0.05"
    />
    <path
      d="M16 40l8-8 8 6 16-16"
      stroke="url(#analytics-main)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="40" r="3" fill="url(#analytics-accent)" />
    <circle cx="24" cy="32" r="3" fill="url(#analytics-accent)" />
    <circle cx="32" cy="38" r="3" fill="url(#analytics-accent)" />
    <circle cx="48" cy="22" r="3" fill="url(#analytics-accent)" />
    <defs>
      <linearGradient id="analytics-bg" x1="2" y1="2" x2="62" y2="62">
        <stop stopColor="#1e293b" />
        <stop offset="1" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="analytics-main" x1="8" y1="16" x2="56" y2="48">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="analytics-accent" x1="16" y1="22" x2="48" y2="40">
        <stop stopColor="#93c5fd" />
        <stop offset="1" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
  </svg>
)

export const ContentIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="32"
      cy="32"
      r="30"
      stroke="url(#content-bg)"
      strokeWidth="2"
      fill="url(#content-bg)"
      fillOpacity="0.05"
    />
    <rect
      x="12"
      y="16"
      width="40"
      height="28"
      rx="4"
      stroke="url(#content-main)"
      strokeWidth="2.5"
      fill="url(#content-main)"
      fillOpacity="0.05"
    />
    <path d="M12 24h40" stroke="url(#content-main)" strokeWidth="2" />
    <circle cx="18" cy="20" r="2" fill="url(#content-accent)" />
    <circle cx="24" cy="20" r="2" fill="url(#content-accent)" />
    <circle cx="30" cy="20" r="2" fill="url(#content-accent)" />
    <rect x="18" y="30" width="12" height="2" rx="1" fill="url(#content-main)" />
    <rect x="18" y="34" width="20" height="2" rx="1" fill="url(#content-main)" />
    <rect x="18" y="38" width="16" height="2" rx="1" fill="url(#content-main)" />
    <rect x="42" y="30" width="8" height="8" rx="2" fill="url(#content-accent)" fillOpacity="0.3" />
    <defs>
      <linearGradient id="content-bg" x1="2" y1="2" x2="62" y2="62">
        <stop stopColor="#1e293b" />
        <stop offset="1" stopColor="#0f172a" />
      </linearGradient>
      <linearGradient id="content-main" x1="12" y1="16" x2="52" y2="44">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
      <linearGradient id="content-accent" x1="18" y1="20" x2="50" y2="38">
        <stop stopColor="#93c5fd" />
        <stop offset="1" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
  </svg>
)

export const ProcessIcon1 = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="16"
      cy="16"
      r="14"
      stroke="url(#process1-main)"
      strokeWidth="2"
      fill="url(#process1-main)"
      fillOpacity="0.1"
    />
    <path
      d="M10 16l4 4 8-8"
      stroke="url(#process1-main)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient id="process1-main" x1="2" y1="2" x2="30" y2="30">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
  </svg>
)

export const ProcessIcon2 = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="16"
      cy="16"
      r="14"
      stroke="url(#process2-main)"
      strokeWidth="2"
      fill="url(#process2-main)"
      fillOpacity="0.1"
    />
    <circle cx="16" cy="12" r="4" stroke="url(#process2-main)" strokeWidth="2" />
    <path d="M8 26c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="url(#process2-main)" strokeWidth="2" />
    <circle cx="24" cy="8" r="2" fill="url(#process2-main)" />
    <circle cx="8" cy="8" r="2" fill="url(#process2-main)" />
    <defs>
      <linearGradient id="process2-main" x1="2" y1="2" x2="30" y2="30">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
  </svg>
)

export const ProcessIcon3 = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="16"
      cy="16"
      r="14"
      stroke="url(#process3-main)"
      strokeWidth="2"
      fill="url(#process3-main)"
      fillOpacity="0.1"
    />
    <path
      d="M16 4l4 8h8l-6.5 5L24 26l-8-6-8 6 2.5-9L4 12h8l4-8z"
      stroke="url(#process3-main)"
      strokeWidth="2"
      fill="url(#process3-main)"
      fillOpacity="0.2"
    />
    <defs>
      <linearGradient id="process3-main" x1="2" y1="2" x2="30" y2="30">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
  </svg>
)

export const StatsIcon1 = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="url(#stats1-main)" strokeWidth="2" />
    <path d="M4 20c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="url(#stats1-main)" strokeWidth="2" />
    <defs>
      <linearGradient id="stats1-main" x1="4" y1="4" x2="20" y2="20">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
  </svg>
)

export const StatsIcon2 = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="url(#stats2-main)" strokeWidth="2" />
    <path d="M3 10h18" stroke="url(#stats2-main)" strokeWidth="2" />
    <path d="M7 14h4" stroke="url(#stats2-main)" strokeWidth="2" />
    <path d="M7 16h6" stroke="url(#stats2-main)" strokeWidth="2" />
    <defs>
      <linearGradient id="stats2-main" x1="3" y1="6" x2="21" y2="18">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
  </svg>
)

export const StatsIcon3 = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 20l6-6 4 4 8-8" stroke="url(#stats3-main)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="3" cy="20" r="2" fill="url(#stats3-main)" />
    <circle cx="9" cy="14" r="2" fill="url(#stats3-main)" />
    <circle cx="13" cy="18" r="2" fill="url(#stats3-main)" />
    <circle cx="21" cy="12" r="2" fill="url(#stats3-main)" />
    <defs>
      <linearGradient id="stats3-main" x1="3" y1="12" x2="21" y2="20">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
  </svg>
)

export const StatsIcon4 = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      stroke="url(#stats4-main)"
      strokeWidth="2"
      fill="url(#stats4-main)"
      fillOpacity="0.1"
    />
    <defs>
      <linearGradient id="stats4-main" x1="3" y1="2" x2="21" y2="22">
        <stop stopColor="#60a5fa" />
        <stop offset="1" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
  </svg>
)
