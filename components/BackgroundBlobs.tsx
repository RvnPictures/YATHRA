interface BackgroundBlobsProps {
  variant?: "home" | "works" | "contact" | "about";
}

export default function BackgroundBlobs({ variant = "home" }: BackgroundBlobsProps) {
  if (variant === "about") {
    return (
      <div className="absolute top-0 left-0 right-0 h-full z-0 pointer-events-none">
        <div className="absolute top-[0px] left-[20%] w-[600px] h-[600px] bg-indigo-600/40 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[100px] right-[10%] w-[500px] h-[500px] bg-purple-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[500px] left-[5%] w-[450px] h-[450px] bg-blue-500/25 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-[900px] right-[15%] w-[550px] h-[550px] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob"></div>
        <div className="absolute top-[1400px] left-[10%] w-[500px] h-[500px] bg-pink-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[1800px] right-[20%] w-[600px] h-[600px] bg-indigo-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-[2200px] left-[15%] w-[500px] h-[500px] bg-purple-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[2600px] right-[5%] w-[550px] h-[550px] bg-blue-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[3000px] left-[10%] w-[600px] h-[600px] bg-pink-500/25 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className="absolute top-0 left-0 right-0 h-full z-0 pointer-events-none">
        <div className="absolute top-[0px] left-[10%] w-[600px] h-[600px] bg-purple-600/40 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[100px] right-[15%] w-[500px] h-[500px] bg-blue-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[500px] left-[20%] w-[450px] h-[450px] bg-pink-500/25 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-[900px] right-[10%] w-[550px] h-[550px] bg-indigo-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob"></div>
        <div className="absolute top-[1300px] left-[5%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[1700px] right-[20%] w-[600px] h-[600px] bg-purple-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-[2100px] left-[15%] w-[500px] h-[500px] bg-blue-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[2500px] right-[5%] w-[550px] h-[550px] bg-pink-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-2000"></div>
      </div>
    );
  }

  if (variant === "works") {
    return (
      <div className="absolute top-0 left-0 right-0 h-full z-0 pointer-events-none">
        <div className="absolute top-[0px] left-[15%] w-[600px] h-[600px] bg-purple-600/40 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[100px] right-[10%] w-[500px] h-[500px] bg-blue-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[400px] left-[5%] w-[450px] h-[450px] bg-cyan-500/25 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

        <div className="absolute top-[800px] right-[15%] w-[550px] h-[550px] bg-pink-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob"></div>
        <div className="absolute top-[1200px] left-[10%] w-[500px] h-[500px] bg-indigo-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[1600px] right-[5%] w-[600px] h-[600px] bg-purple-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>

        <div className="absolute top-[2000px] left-[20%] w-[500px] h-[500px] bg-blue-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[2400px] right-[15%] w-[550px] h-[550px] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[2800px] left-[5%] w-[500px] h-[500px] bg-pink-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

        <div className="absolute top-[3200px] right-[10%] w-[600px] h-[600px] bg-indigo-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[3600px] left-[15%] w-[500px] h-[500px] bg-purple-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[4000px] right-[5%] w-[550px] h-[550px] bg-blue-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-4000"></div>
      </div>
    );
  }

  return (
    <div className="absolute top-0 left-0 right-0 h-full z-0 pointer-events-none">
      {/* Section 1 - Top */}
      <div className="absolute top-[0px] left-[15%] w-[600px] h-[600px] bg-purple-600/40 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-[100px] right-[10%] w-[500px] h-[500px] bg-blue-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[400px] left-[5%] w-[450px] h-[450px] bg-cyan-500/25 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      {/* Section 2 - Middle */}
      <div className="absolute top-[800px] right-[15%] w-[550px] h-[550px] bg-pink-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob"></div>
      <div className="absolute top-[1200px] left-[10%] w-[500px] h-[500px] bg-indigo-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[1600px] right-[5%] w-[600px] h-[600px] bg-purple-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>

      {/* Section 3 - Lower */}
      <div className="absolute top-[2000px] left-[20%] w-[500px] h-[500px] bg-blue-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-[2400px] right-[15%] w-[550px] h-[550px] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[2800px] left-[5%] w-[500px] h-[500px] bg-pink-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      {/* Section 4 - Bottom */}
      <div className="absolute top-[3200px] right-[10%] w-[600px] h-[600px] bg-indigo-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-[3600px] left-[15%] w-[500px] h-[500px] bg-purple-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[4000px] right-[5%] w-[550px] h-[550px] bg-blue-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-4000"></div>

      {/* Section 5 - Lower Bottom */}
      <div className="absolute top-[4400px] left-[10%] w-[550px] h-[550px] bg-purple-600/35 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-[4800px] right-[15%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[5200px] left-[20%] w-[600px] h-[600px] bg-pink-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-4000"></div>

      {/* Section 6 - CTA & Footer */}
      <div className="absolute top-[5600px] right-[10%] w-[600px] h-[600px] bg-indigo-500/35 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-[6000px] left-[5%] w-[550px] h-[550px] bg-purple-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[6400px] right-[20%] w-[500px] h-[500px] bg-blue-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      <div className="absolute top-[6800px] left-[15%] w-[600px] h-[600px] bg-cyan-500/25 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>

      {/* Section 7 - Extended Bottom */}
      <div className="absolute top-[7200px] right-[5%] w-[600px] h-[600px] bg-purple-600/35 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-[7600px] left-[10%] w-[550px] h-[550px] bg-pink-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[8000px] right-[15%] w-[500px] h-[500px] bg-indigo-500/35 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      <div className="absolute top-[8400px] left-[20%] w-[600px] h-[600px] bg-blue-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-[8800px] right-[10%] w-[550px] h-[550px] bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-2000"></div>
      <div className="absolute top-[9200px] left-[5%] w-[600px] h-[600px] bg-purple-500/35 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      <div className="absolute top-[9600px] right-[20%] w-[500px] h-[500px] bg-pink-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-[10000px] left-[15%] w-[600px] h-[600px] bg-indigo-500/30 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
    </div>
  );
}
