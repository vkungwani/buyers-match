import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAward, 
  faIdCard, 
  faScaleBalanced, 
  faShieldHalved, 
  faStar 
} from '@fortawesome/free-solid-svg-icons';
import { siteData } from '../config/siteData';
import { GoogleLogo } from './SocialIcons';

const getCredIcon = (id) => {
  switch(id) {
    case 'bai': return { icon: faAward, color: '#D4A843' };
    case 'licensed': return { icon: faIdCard, color: '#4285F4' };
    case 'conflicts': return { icon: faScaleBalanced, color: '#2ABFBF' };
    case 'insurance': return { icon: faShieldHalved, color: '#16A34A' };
    case 'google': return { customIcon: <GoogleLogo /> };
    default: return { icon: faStar, color: '#2ABFBF' };
  }
};

const Credentials = () => {
  return (
    <div id="creds" className="py-[30px] bg-[#f7f5f0] border-t border-[rgba(0,0,0,.07)]">
      <div className="max-w-[1200px] mx-auto px-[5%]">
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {siteData.credentials.map((c, i) => {
            const { icon, color, customIcon } = getCredIcon(c.id);
            return (
              <div key={i} className="text-center group">
                <div 
                  className="w-14 h-14 rounded-[13px] bg-white shadow-sm flex items-center justify-center text-[22px] mx-auto mb-[9px] transition-all duration-300 group-hover:shadow-md group-hover:scale-105"
                  style={{ color }}
                >
                  {customIcon ? customIcon : <FontAwesomeIcon icon={icon} />}
                </div>
                <div className="text-[11px] font-bold text-[#1B2A4A] uppercase tracking-[.07em]">{c.title}</div>
                <div className="text-[10.5px] text-[#7a8595] mt-[3px] leading-[1.4] whitespace-pre-line">{c.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Credentials;
