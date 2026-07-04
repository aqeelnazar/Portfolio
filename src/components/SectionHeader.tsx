type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300">{label}</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
      {description ? <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{description}</p> : null}
    </div>
  );
}
