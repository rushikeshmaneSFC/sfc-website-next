interface CircularProgressProps {
  percentage: number;
}

export default function CircularProgress({
  percentage,
}: CircularProgressProps) {
  const radius = 40;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex items-center justify-center ">
      <svg
        className="transform -rotate-90"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500 ease-in-out"
        />

        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#223780" />
            <stop offset="100%" stopColor="#070B1A" />
          </linearGradient>
        </defs>
      </svg>

      <span className="absolute text-2xl font-bold text-black ">
        {percentage}%
      </span>
    </div>
  );
}
