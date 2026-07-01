import { Link } from "wouter";
import ecoaLogo from "@assets/image_1772497699846.png";

export default function SiteFooter() {
  return (
    <footer className="bg-white/5 border-t border-white/10 mt-12">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Two-column nav links */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Site</p>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Learn", href: "/learn" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Get Instant Options →", href: "https://teamdill.com", external: true },
              ].map((l) => (
                <li key={l.href}>
                  {(l as any).external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white text-sm transition-colors">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="text-white/55 hover:text-white text-sm transition-colors">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-wider mb-3">Compliance</p>
            <ul className="space-y-2">
              {[
                { label: "NMLS Consumer Access", href: "https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/763991", external: true },
                { label: "Licensing", href: "https://adaxahome.com/licensing", external: true },
                { label: "SMS Opt-In", href: "/opt-in", static: true },
                { label: "Privacy Policy", href: "/privacy", external: false },
                { label: "Terms of Use", href: "/terms-of-use", external: false },
              ].map((l) => {
                const item = l as { label: string; href: string; external?: boolean; static?: boolean };
                return (
                  <li key={item.href}>
                    {item.external ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-white/55 hover:text-white text-sm transition-colors">
                        {item.label}
                      </a>
                    ) : item.static ? (
                      // Static HTML page (not an SPA route) — use a real navigation, not wouter <Link>.
                      <a href={item.href} className="text-white/55 hover:text-white text-sm transition-colors">
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.href} className="text-white/55 hover:text-white text-sm transition-colors">
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* EHO logo */}
        <div className="flex justify-center mb-5">
          <img src={ecoaLogo} alt="Equal Housing Opportunity" className="h-11 w-auto" />
        </div>

        {/* Compliance text */}
        <div className="text-center space-y-1 mb-4">
          <p className="text-white text-sm font-semibold">Cameron Dill</p>
          <p className="text-white/70 text-xs">Senior Vice President - Retail · NMLS #763991</p>
          <p className="text-white/70 text-xs">Adaxa Home LLC · NMLS #2380533</p>
          <p className="text-white/45 text-xs">Equal Housing Opportunity · Licensed in AZ, CA, CO, CT, FL, ID, PA, TX, VA, WA</p>
        </div>

        <p className="text-white/45 text-xs text-center leading-relaxed mb-4 px-2">
          Adaxa Home LLC is an Equal Housing Lender. We do not discriminate on the basis of race, color, religion, national origin, sex, marital status, age, or any other characteristic protected by federal law.
        </p>

        <p className="text-white/35 text-xs text-center italic">
          "Trust in the Lord with all your heart" — Proverbs 3:5
        </p>
      </div>
    </footer>
  );
}
