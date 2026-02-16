import Link from "next/link";

export default function ServiceCard({ id, icon, title, description }) {
  return (
    <Link href={`/service/${id}`} className="block">
      <div className="bg-white p-5 rounded-xl border border-primary/5 shadow-sm flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>

        <div>
          <p className="text-[#111818] text-lg font-bold">{title}</p>
          <p className="text-slate-500 text-xs mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}
