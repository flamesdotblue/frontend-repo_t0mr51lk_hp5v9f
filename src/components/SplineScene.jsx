import React from 'react';
import Spline from '@splinetool/react-spline';

// A full-bleed Spline canvas with blending to visually remove light backgrounds.
export default function SplineScene({ scene }) {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute inset-0"
        style={{
          // Blend the Spline canvas with the dark site background to suppress light/beige bg
          mixBlendMode: 'multiply',
          filter: 'contrast(1.1) saturate(1.1)',
        }}
      >
        <Spline scene={scene} style={{ width: '100%', height: '100%' }} aria-label="Interactive 3D robot scene" />
      </div>

      {/* Soft vignette to further hide any remaining light edges; doesn't block interactions */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 60% 50%, rgba(2,6,23,0) 0%, rgba(2,6,23,0.2) 60%, rgba(2,6,23,0.6) 100%)',
        }}
      />
    </div>
  );
}
