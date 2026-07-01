import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Calendar, TrendingUp, RefreshCw } from "lucide-react";
import headshotImage from "@assets/cameron-dill-headshot.png";
import { useCalModal } from "@/hooks/use-cal";

const LENDING_PAD_URL =
  "https://prod.lendingpad.com/adaxa-home/pos#/?loid=6544142c-ce2a-4b1b-a621-c1d33fa3eb67";

const specializations = [
  {
    category: "Refinance",
    items: ["Cash-out refinance", "Rate & term refinance", "Home equity solutions"],
  },
  {
    category: "Purchase Loans",
    items: ["Conventional & Jumbo", "FHA loans", "VA loans"],
  },
  {
    category: "HELOC & Home Equity",
    items: ["Home equity lines of credit", "Home equity loans", "Second mortgages"],
  },
  {
    category: "Investor Financing",
    items: ["DSCR loans", "Non-QM programs", "Bank statement loans", "Hard money"],
  },
];

const credentials = [
  "20+ years in lending",
  "Senior Vice President - Retail at Adaxa Home LLC",
  "Personal NMLS #763991",
  "Adaxa Home LLC NMLS #2380533",
  "Licensed in Arizona, California, Colorado, Connecticut, Florida, Idaho, Pennsylvania, Texas, Virginia, and Washington.",
  "Closed more than 1,000 mortgage loans",
  "Top loan officer in Arizona for three consecutive years and top five nationwide",
];

export default function About() {
  const openCal = useCalModal();

  return (
    <div className="min-h-screen bg-black">
      <SiteNav />
      <div className="container max-w-md mx-auto px-4 pt-24 pb-6">

        {/* Hero */}
        <div className="text-center mb-10">
          <img
            src={headshotImage}
            alt="Cameron Dill"
            className="w-36 h-36 rounded-full object-cover shadow-2xl border-4 border-white/20 mx-auto mb-5"
          />
          <h1 className="text-3xl font-bold text-white mb-1">Cameron Dill</h1>
          <p className="text-white font-semibold text-base uppercase tracking-wide mb-1">
            Senior Vice President - Retail
          </p>
          <p className="text-white/55 text-sm">Adaxa Home LLC · NMLS #763991</p>
        </div>

        {/* My Story */}
        <section className="mb-10">
          <h2 className="text-white text-xl font-bold mb-5">My Story</h2>
          <div className="space-y-4 text-white/70 text-sm leading-relaxed">
            <p>
              With more than 20 years of experience in lending, I've had the privilege of helping thousands of families pursue their financial goals by matching them with the best products available.
            </p>
            <p>
              In 2007, I began focusing on mortgage lending, and by 2008 I started working at a credit union. That environment let me connect with clients on a personal level while building leadership experience as I worked my way up to Branch Manager.
            </p>
            <p>
              After several years in management, I realized my greatest satisfaction came from working directly with families and guiding them through meaningful financial decisions. That brought me to Arizona, where I joined loanDepot and went on to close more than 1,000 mortgage loans.
            </p>
            <p>
              Today, I'm excited to bring that experience, passion, and personalized approach to Adaxa Home. My goal is simple: help more families make confident lending decisions with clear options and direct guidance.
            </p>
          </div>
        </section>

        {/* Credentials */}
        <section className="mb-10">
          <h2 className="text-white text-xl font-bold mb-5">Credentials & Experience</h2>
          <div className="bg-white/10 border border-white/20 rounded-xl p-5 space-y-3">
            {credentials.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-white mt-0.5 flex-shrink-0" />
                <p className="text-white/75 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-10">
          <h2 className="text-white text-xl font-bold mb-5">What I Specialize In</h2>
          <div className="space-y-4">
            {specializations.map((s, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-4">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">
                  {s.category}
                </h3>
                <ul className="space-y-1">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="space-y-3 mb-6">
          {/* HELOC + Refinance 2-col grid */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://teamdill.com/heloc-main"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button className="w-full bg-white hover:bg-neutral-200 text-black font-semibold py-3 flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Apply for HELOC
              </Button>
            </a>
            <div>
              <a
                href="https://teamdill.com/cash-out"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-white hover:bg-neutral-200 text-black font-semibold py-3 flex items-center justify-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Apply for Refi
                </Button>
              </a>
              <a
                href="https://teamdill.com/rate-reduction"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-white/45 hover:text-white text-xs mt-1.5 transition-colors"
              >
                Rate reduction instead →
              </a>
            </div>
          </div>
          <Button
            onClick={openCal}
            className="w-full bg-white hover:bg-neutral-200 text-black font-semibold py-3 flex items-center justify-center gap-2"
          >
            <Calendar className="h-5 w-5" />
            Schedule a Call
          </Button>
          <a
            href="https://teamdill.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold py-3 flex items-center justify-center gap-2">
              <Star className="h-5 w-5" />
              Client Reviews
            </Button>
          </a>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
