import Link from "next/link";

export default function CaregiverCard({ caregiver }) {
  return (
    <div className="flex gap-3 sm:gap-4 p-3 sm:p-4 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-center bg-cover shrink-0"
        style={{ backgroundImage: `url("${caregiver.image}")` }}
      />
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <div className="flex flex-wrap justify-between items-start gap-1">
            <h3 className="font-bold text-base sm:text-lg text-[#111818] break-words">{caregiver.name}</h3>
            <div className="flex items-center gap-1 text-xs sm:text-sm font-bold bg-primary/10 px-2 py-0.5 rounded text-primary shrink-0">
              <span className="material-symbols-outlined !text-xs sm:!text-sm">star</span> {caregiver.rating}
            </div>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm line-clamp-1">{caregiver.role} • {caregiver.experience}</p>
          <div className="flex items-center gap-1 text-slate-400 text-xs mt-1 min-w-0">
            <span className="material-symbols-outlined !text-xs shrink-0">location_on</span>
            <span className="truncate">{caregiver.location}</span>
          </div>
        </div>
        <Link
          href={`/caregivers/${caregiver.id}`}
          className="mt-2 w-full bg-background-light py-2 rounded-lg text-xs sm:text-sm font-bold text-[#111818] border border-slate-200 text-center hover:bg-primary/10 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
