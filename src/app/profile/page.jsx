import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function ProfilePage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-background-light pb-24">
        <div className="max-w-5xl mx-auto p-4">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
            <div className="flex gap-4 items-center mb-6">
              <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-slate-400">person</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#111818]">John Doe</h1>
                <p className="text-slate-500">john.doe@example.com</p>
              </div>
            </div>
            <button className="w-full bg-background-light py-2 rounded-lg text-sm font-bold text-[#111818] border border-slate-200">
              Edit Profile
            </button>
          </div>

          {/* Menu Items */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <Link href="/bookings" className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-600">calendar_today</span>
                <span className="font-medium text-[#111818]">My Bookings</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </Link>
            <a href="#" className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-600">favorite</span>
                <span className="font-medium text-[#111818]">Favorite Caregivers</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </a>
            <a href="#" className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-600">payment</span>
                <span className="font-medium text-[#111818]">Payment Methods</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </a>
            <a href="#" className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-600">settings</span>
                <span className="font-medium text-[#111818]">Settings</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </a>
            <a href="#" className="flex items-center justify-between p-4 hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-600">help</span>
                <span className="font-medium text-[#111818]">Help & Support</span>
              </div>
              <span className="material-symbols-outlined text-slate-400">chevron_right</span>
            </a>
          </div>

          {/* Logout Button */}
          <button className="w-full mt-4 bg-white py-3 rounded-xl text-sm font-bold text-red-600 border border-slate-200 hover:bg-red-50">
            Log Out
          </button>
        </div>
      </div>

      <Footer />
      <MobileNav />
    </>
  );
}
