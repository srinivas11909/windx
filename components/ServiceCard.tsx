type Props = { title: string; desc: string }
export function ServiceCard({ title, desc }: Props) {
  return (
    <div className="card hover:border-brand/50 transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted mt-2">{desc}</p>
    </div>
  )
}
