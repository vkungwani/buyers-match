import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_removebg.png";

const Footer = ({ scrollToSection, openCalendly }) => {
  const handleNavClick = (e, hash) => {
    if (scrollToSection) {
      e.preventDefault();
      scrollToSection(hash);
    }
  };

  return (
    <>
      <footer className="bg-[#0A1224] text-white pt-20 pb-10 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand */}
            <div className="space-y-6">
              <div className="mb-4">
                <Link to="/" className="inline-block">
                  <img src={logo} alt="BuyersMatch" className="h-14 w-auto brightness-0 invert" />
                </Link>
                <div className="text-[#2ABFBF] text-[10px] uppercase tracking-[0.3em] font-black mt-2">Buyers Advocacy</div>
              </div>
              <p className="text-white/50 text-[13px] leading-relaxed">
                Australia's personal buyers advocacy. We find the right properties in the right markets — for every type of buyer, state-wide.
              </p>
              <div className="space-y-3 pt-2">
                <a href="mailto:info@buyersmatch.com.au" className="flex items-center gap-3 text-[13px] text-white/70 hover:text-[#2ABFBF] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  info@buyersmatch.com.au
                </a>
                <div className="flex items-center gap-3 text-[13px] text-white/70">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                   0488 847 018 · 019
                </div>
              </div>
            </div>

            {/* Column 2: Our Core */}
            <div>
              <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#2ABFBF]"></span>
                The Platform
              </h4>
              <ul className="space-y-4">
                <li><a href="/#method" onClick={(e) => handleNavClick(e, "method")} className="text-white/50 hover:text-white transition-colors text-[13px]">The 4M Method</a></li>
                <li><a href="/#services" onClick={(e) => handleNavClick(e, "services")} className="text-white/50 hover:text-white transition-colors text-[13px]">How We Help</a></li>
                <li><a href="/#purchases" onClick={(e) => handleNavClick(e, "purchases")} className="text-white/50 hover:text-white transition-colors text-[13px]">Purchasing Results</a></li>
                <li><a href="/#who" onClick={(e) => handleNavClick(e, "who")} className="text-white/50 hover:text-white transition-colors text-[13px]">Who We Help</a></li>
                <li><a href="/#leadmagnet" onClick={(e) => handleNavClick(e, "leadmagnet")} className="text-white/50 hover:text-white transition-colors text-[13px]">Free 4M Guide</a></li>
              </ul>
            </div>

            {/* Column 3: Trust & Reviews */}
            <div>
              <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#2ABFBF]"></span>
                Social Proof
              </h4>
              <ul className="space-y-4">
                <li><a href="/#testimonials" onClick={(e) => handleNavClick(e, "testimonials")} className="text-white/50 hover:text-white transition-colors text-[13px]">Client Success Stories</a></li>
                <li><a href="/#video-testimonials" onClick={(e) => handleNavClick(e, "video-testimonials")} className="text-white/50 hover:text-white transition-colors text-[13px]">Video Interviews</a></li>
                <li><a href="/#awards" onClick={(e) => handleNavClick(e, "awards")} className="text-white/50 hover:text-white transition-colors text-[13px]">Industry Awards</a></li>
                <li><a href="/#reviews" onClick={(e) => handleNavClick(e, "reviews")} className="text-white/50 hover:text-white transition-colors text-[13px]">Google Reviews</a></li>
                <li><a href="/#faq" onClick={(e) => handleNavClick(e, "faq")} className="text-white/50 hover:text-white transition-colors text-[13px]">Common Questions</a></li>
              </ul>
            </div>

            {/* Column 4: Quick Actions */}
            <div>
              <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-[#2ABFBF]"></span>
                Quick Actions
              </h4>
              <div className="space-y-4">
                <button 
                  onClick={openCalendly}
                  className="w-full bg-[#2ABFBF] text-[#1B2A4A] py-3 rounded-xl font-bold text-[13px] hover:bg-white transition-all transform hover:-translate-y-1"
                >
                  Free Strategy Call →
                </button>
                <button 
                  className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-xl font-bold text-[13px] hover:bg-white/10 transition-all"
                >
                  CFA Calculator
                </button>
                <div className="pt-4 grid grid-cols-5 gap-3">
                  {/* Social Circles */}
                  {['Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok'].map(soc => (
                    <div key={soc} className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:border-[#2ABFBF] hover:text-[#2ABFBF] transition-all cursor-pointer">
                      <span className="text-[10px] font-black">{soc[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] text-white/30">
            <p>© 2025 BuyersMatch Buyers Advocacy Pty Ltd. BAI Member · Licensed Agents.</p>
            <div className="flex gap-8">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
