export default function FeatureCard({ title, description, color = '#4A7B8C' }) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-[#e8e2d5] bg-white/80 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <span
        className="mb-5 h-[3px] w-10 rounded-full"
        style={{ backgroundColor: color }}
      />
      <h3 className="mb-3 font-serif text-xl font-medium tracking-wide text-[#2f332f]">
        {title}
      </h3>
      <p className="text-sm leading-7 text-[#6f6b63]">{description}</p>
    </div>
  )
}
