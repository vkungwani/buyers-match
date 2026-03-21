import React from "react";
import { motion } from "framer-motion";
import { siteData as siteConfig } from "../config/siteData";
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
  TikTokIcon,
  MapsIcon,
} from "./SocialIcons";

const TopBar = ({ className = "" }) => {
  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case "facebook":
        return FacebookIcon;
      case "instagram":
        return InstagramIcon;
      case "youtube":
        return YouTubeIcon;
      case "linkedin":
        return LinkedInIcon;
      case "tiktok":
        return TikTokIcon;
      case "maps":
        return MapsIcon;
      default:
        return FacebookIcon;
    }
  };

  const getSocialColor = (name) => {
    switch (name.toLowerCase()) {
      case "facebook":
        return "#1877F2";
      case "instagram":
        return "#E4405F";
      case "youtube":
        return "#FF0000";
      case "linkedin":
        return "#0A66C2";
      case "tiktok":
        return "#ffffff";
      case "maps":
        return "#4285F4";
      default:
        return "#29b8bd";
    }
  };

  return (
    <div
      id="super-nav"
      className={`bg-[#29B8BD] py-1.5 px-4 md:px-6 ${className}`}
    >
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3.5 md:gap-0">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 md:space-x-6 text-[11px] md:text-[12px] font-black tracking-widest uppercase">
          {/* Email */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center text-white hover:text-navy transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white mr-3 animate-pulse shadow-[0_0_8px_white]"></span>
            {siteConfig.contact.email}
          </a>
          {/* Phone numbers */}
          <div className="flex items-center gap-x-5 md:gap-x-6">
            {siteConfig.contact.phones.map((phone, index) => (
              <a
                key={index}
                href={`tel:+61${phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center text-white hover:text-navy transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 mr-3"></span>
                {phone}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center space-x-4">
          <span className="text-[10px] font-bold text-black tracking-[0.2em] uppercase mr-2 hidden lg:block">
            Follow Us
          </span>
          <div className="flex items-center space-x-2">
            {siteConfig.socials.map((social) => {
              const Icon = getSocialIcon(social.name);
              const brandColor = getSocialColor(social.name);
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  <Icon
                    className="w-4 h-4 md:w-[20px] md:h-[20px] transition-all duration-300"
                    style={{ color: "white" }}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
