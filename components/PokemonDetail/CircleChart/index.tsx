import styles from './CircleChart.module.css';

interface CircleChartProps {
  stat: string;
  percentage: number;
}

export const CircleChart = ({ stat, percentage }: CircleChartProps) => {
  const circleWith = 100;
  const radius = 42.5;
  const dashArray = radius * Math.PI * 2;
  const dashOffset =
    dashArray - (dashArray * (percentage > 100 ? 100 : percentage)) / 100;

  return (
    <>
      <svg
        width={circleWith}
        height={circleWith}
        viewBox={`0 0 ${circleWith} ${circleWith}`}
      >
        <circle
          cx={circleWith / 2}
          cy={circleWith / 2}
          strokeWidth="7.5px"
          r={radius}
          className="fill-none stroke-slate-200"
        />
        <circle
          cx={circleWith / 2}
          cy={circleWith / 2}
          strokeWidth="7.5px"
          r={radius}
          className={`fill-none ${
            percentage < 50 ? 'stroke-fire' : 'stroke-grass'
          } ${styles['circle-progress']}`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          className="text-lg font-semibold text-gray-400 italic"
        >
          {percentage}
        </text>
      </svg>
      <p
        className={`w-fit text-white font-semibold italic mt-2 px-2 rounded-lg ${
          percentage < 50 ? 'bg-fire' : 'bg-grass'
        }`}
      >
        {stat}
      </p>
    </>
  );
};
