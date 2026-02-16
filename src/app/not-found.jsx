import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background-light flex items-center justify-center px-6 pb-24">
        <div className="bg-white rounded-2xl shadow-sm p-10 text-center max-w-md w-full">
          <span className="material-symbols-outlined text-primary text-6xl mb-4 block">
            error
          </span>

          <h1 className="text-3xl font-bold mb-2 text-[#111818]">
            404 - Page Not Found
          </h1>

          <p className="text-slate-600 mb-6">
            Sorry, the page you're looking for doesn’t exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-block bg-primary text-background-dark font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-primary/90 transition"
          >
            Return to Home
          </Link>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </>
  );
}
