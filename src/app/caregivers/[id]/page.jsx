import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { caregivers } from "@/data/caregivers";
import { notFound } from "next/navigation";

export default function CaregiverProfile({ params }) {
  const caregiver = caregivers.find((c) => c.id === parseInt(params.id));

  if (!caregiver) {
    notFound();
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-background-light pb-24">
        {/* Back Button */}
        <div className="bg-white border-b border-slate-100 p-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/caregivers" className="flex items-center gap-2 text-slate-600 hover:text-primary">
              <span className="material-symbols-outlined">arrow_back</span>
              <span className="text-sm font-medium">Back to Caregivers</span>
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto p-4">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
            <div className="flex gap-6 flex-col md:flex-row">
              <div
                className="w-32 h-32 rounded-lg bg-center bg-cover shrink-0"
                style={{ backgroundImage: `url("${caregiver.image}")` }}
              />
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h1 className="text-3xl font-bold text-[#111818]">{caregiver.name}</h1>
                    <p className="text-slate-600 text-lg">{caregiver.role}</p>
                  </div>
                  <div className="flex items-center gap-1 text-lg font-bold bg-primary/10 px-3 py-1 rounded text-primary">
                    <span className="material-symbols-outlined">star</span> {caregiver.rating}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined !text-sm">location_on</span>
                    {caregiver.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined !text-sm">work</span>
                    {caregiver.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined !text-sm">schedule</span>
                    {caregiver.availability}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">${caregiver.hourlyRate}</span>
                  <span className="text-slate-500">/hour</span>
                </div>
                <button className="w-full md:w-auto bg-primary text-[#111818] px-8 py-3 rounded-lg font-bold hover:bg-primary/80 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
            <h2 className="text-xl font-bold text-[#111818] mb-3">About</h2>
            <p className="text-slate-600 leading-relaxed">{caregiver.bio}</p>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
            <h2 className="text-xl font-bold text-[#111818] mb-3">Specialized Skills</h2>
            <div className="flex flex-wrap gap-2">
              {caregiver.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#111818] mb-4">Reviews</h2>
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-sm font-bold text-primary">
                    <span className="material-symbols-outlined !text-sm">star</span> 5.0
                  </div>
                  <span className="text-slate-600 text-sm">• Jennifer M.</span>
                </div>
                <p className="text-slate-600 text-sm">
                  Excellent caregiver! Very professional and caring. My mother loves spending time with them.
                </p>
              </div>
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1 text-sm font-bold text-primary">
                    <span className="material-symbols-outlined !text-sm">star</span> 4.8
                  </div>
                  <span className="text-slate-600 text-sm">• Robert K.</span>
                </div>
                <p className="text-slate-600 text-sm">
                  Highly recommend! Punctual, reliable, and genuinely cares about their clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <MobileNav />
    </>
  );
}
