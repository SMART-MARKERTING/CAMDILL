import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Calendar, TrendingUp, RefreshCw } from "lucide-react";
import { useCalModal } from "@/hooks/use-cal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Learn", href: "/learn" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const openCal = useCalModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-sm tracking-wide shrink-0">
          CAMDILL.COM
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                location === link.href
                  ? "text-white border-b border-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={openCal}
            className="flex items-center gap-1.5 bg-white hover:bg-neutral-200 text-black text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
          >
            <Calendar className="h-3.5 w-3.5" />
            Book a Call
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-white/80 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                location === link.href
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={openCal}
            className="w-full mt-2 flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors"
          >
            <Calendar className="h-4 w-4" />
            Book a Call
          </button>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <a
              href="https://teamdill.com/heloc-main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-200 text-black text-xs font-semibold px-3 py-2.5 rounded-lg transition-colors"
            >
              <TrendingUp className="h-3.5 w-3.5" />
              Apply for HELOC
            </a>
            <a
              href="https://teamdill.com/cash-out"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-200 text-black text-xs font-semibold px-3 py-2.5 rounded-lg transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Apply for Refi
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
