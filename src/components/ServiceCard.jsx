import Link from "next/link";

export default function ServiceCard({ id, icon, title, description }) {
  return (
    <Link href={`/service/${id}`} className="block">
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-primary/5 shadow-sm flex flex-col items-center text-center gap-2 sm:gap-3 hover:shadow-md transition-shadow cursor-pointer min-h-0">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-2xl sm:text-3xl">{icon}</span>
        </div>

        <div className="min-w-0">
          <p className="text-[#111818] text-base sm:text-lg font-bold line-clamp-2">{title}</p>
          <p className="text-slate-500 text-xs mt-1 line-clamp-2 sm:line-clamp-none">{description}</p>
        </div>
      </div>
    </Link>
  );
}
