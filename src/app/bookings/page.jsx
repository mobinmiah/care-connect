import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function BookingsPage() {
  const bookings = [
    {
      id: 1,
      caregiverName: "Sarah Jenkins",
      date: "Feb 20, 2024",
      time: "10:00 AM - 2:00 PM",
      status: "Upcoming",
      service: "Senior Care"
    },
    {
      id: 2,
      caregiverName: "Michael Chen",
      date: "Feb 15, 2024",
      time: "9:00 AM - 5:00 PM",
      status: "Completed",
      service: "Companionship"
    }
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-background-light pb-24">
        <div className="max-w-5xl mx-auto p-4">
          <h1 className="text-2xl font-bold text-[#111818] mb-6">My Bookings</h1>

          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-sm p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-[#111818]">{booking.caregiverName}</h3>
                    <p className="text-slate-500 text-sm">{booking.service}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      booking.status === "Upcoming"
                        ? "bg-primary/10 text-primary"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined !text-sm">calendar_today</span>
                    {booking.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined !text-sm">schedule</span>
                    {booking.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <MobileNav />
    </>
  );
}
