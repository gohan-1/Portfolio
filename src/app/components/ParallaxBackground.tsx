'use client';

const ParallaxBackground = () => {
  return (
    <section className="absolute inset-0 bg-black/40 overflow-hidden">
      <div className="relative h-screen w-full">

        {/* Sky */}
        <img
          src="/assets/sky.jpg"
          alt="Sky"
          className="absolute inset-0 w-full h-full object-cover -z-50"
        />

        {/* Mountain Layer 3 */}
        <img
          src="/assets/mountain-3.png"
          alt="Mountain 3"
          className="absolute inset-0 w-full h-full object-cover -z-40"
        />

        {/* Planets */}
        <img
          src="/assets/planets.png"
          alt="Planets"
          className="absolute inset-0 w-full h-full object-cover -z-30"
        />

        {/* Mountain Layer 2 */}
        <img
          src="/assets/mountain-2.png"
          alt="Mountain 2"
          className="absolute inset-0 w-full h-full object-cover -z-20"
        />

        {/* Mountain Layer 1 */}
        <img
          src="/assets/mountain-1.png"
          alt="Mountain 1"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

      </div>
    </section>
  );
};

export default ParallaxBackground;
