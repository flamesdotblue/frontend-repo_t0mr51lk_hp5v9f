import Spline from '@splinetool/react-spline';

export default function SplineScene({ scene, className, style }) {
  return (
    <Spline
      scene={scene}
      className={className}
      style={style ?? { width: '100%', height: '100%' }}
    />
  );
}
