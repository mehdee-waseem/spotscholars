export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/20 blur-3xl" aria-hidden />
      <div className="container-x relative py-14 sm:py-16">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-orange">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
        {children && <div className="mt-4 max-w-2xl text-base leading-relaxed text-navy-100">{children}</div>}
      </div>
    </section>
  );
}
