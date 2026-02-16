import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-dark text-white pt-12 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-primary flex size-8 items-center justify-center bg-primary/20 rounded-lg">
                <span className="material-symbols-outlined text-xl">diversity_3</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight">CareConnect</h2>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Redefining care by connecting compassionate professionals with families in need of support and peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 col-span-2 md:col-span-1">
            <div>
              <h4 className="font-bold text-white mb-4">Families</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link className="hover:text-primary transition-colors" href="/caregivers">Find a Caregiver</Link></li>
                <li><a className="hover:text-primary transition-colors" href="#">How it Works</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Trust & Safety</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Caregivers</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link className="hover:text-primary transition-colors" href="/signup">Apply to Join</Link></li>
                <li><a className="hover:text-primary transition-colors" href="#">Resources</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Success Stories</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-white">Contact Info</h4>
            <p className="text-white/60 text-sm flex items-center gap-2">
              <span className="material-symbols-outlined !text-sm text-primary">mail</span> hello@careconnect.com
            </p>
            <p className="text-white/60 text-sm flex items-center gap-2">
              <span className="material-symbols-outlined !text-sm text-primary">call</span> (800) CARE-NOW
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">share</span>
            </div>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">thumb_up</span>
            </div>
          </div>
          <p className="text-white/30 text-xs text-center mt-4">© 2024 CareConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
