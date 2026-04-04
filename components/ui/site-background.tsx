export const SiteBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-white">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.12) 1.5px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* Radial fade — white ellipse over center, dots visible only at edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)",
        }}
      />
    </div>
  );
};
