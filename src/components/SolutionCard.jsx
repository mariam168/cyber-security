export default function SolutionCard({ title, image, icon }) {
  return (
    <div className="relative group">
      <img src={image} alt={title} className="w-full h-60 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
      <div className="absolute bottom-4 px-4 py-2 bg-white/30 shadow backdrop-blur-lg rounded flex items-center gap-2 text-white text-lg font-semibold min-w-max z-10">
        <span className="text-3xl">{icon}</span>
        <span>{title}</span>
      </div>
    </div>
  );
}
