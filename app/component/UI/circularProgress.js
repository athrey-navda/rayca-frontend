import { useState, useEffect } from "react";

export default function CircularProgressBar({ percentage }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="w-16 h-16 flex items-center justify-center">
      <svg className="">
        <circle
          className="text-gray-200 dark:text-gray-700"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
        <circle
          className="text-blue-500 dark:text-blue-500"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transform: "rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </svg>
    </div>
  );
}
