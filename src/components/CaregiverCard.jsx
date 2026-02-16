import Link from "next/link";

export default function CaregiverCard({ caregiver }) {
  return (
    <div className="flex gap-4 p-4 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div
        className="w-24 h-24 rounded-lg bg-center bg-cover shrink-0"
        style={{ backgroundImage: `url("${caregiver.image}")` }}
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg text-[#111818]">{caregiver.name}</h3>
            <div className="flex items-center gap-1 text-sm font-bold bg-primary/10 px-2 py-0.5 rounded text-primary">
              <span className="material-symbols-outlined !text-sm">star</span> {caregiver.rating}
            </div>
          </div>
          <p className="text-slate-500 text-sm">{caregiver.role} • {caregiver.experience}</p>
          <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
            <span className="material-symbols-outlined !text-xs">location_on</span> {caregiver.location}
          </div>
        </div>
        <Link
          href={`/caregivers/${caregiver.id}`}
          className="mt-2 w-full bg-background-light py-2 rounded-lg text-sm font-bold text-[#111818] border border-slate-200 text-center hover:bg-primary/10 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
