"use client";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Static gradient orbs with CSS animations */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-primary/8 blur-3xl animate-float-slower" />
      <div className="absolute -bottom-40 left-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float-slowest" />

      {/* Simple grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(53, 215, 156, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(53, 215, 156, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
}