import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  return (
    <div className="relative w-full h-full">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Blend helpers to suppress light backgrounds without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply filter brightness-110 contrast-110" aria-hidden="true" />

      {/* Soft vignette for cinematic depth */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(1200px 600px at 70% 40%, rgba(255,255,255,0.04), rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />
    </div>
  );
}
