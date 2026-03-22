import { blogsData } from './blogs';


export const siteConfig = {
    name: "BuyersMatch",
    logoText: "BM",
    contact: {
        address: "Glen Waverley, VIC 3150",
        phones: ["0466 914 929", "0434 118 033"],
        email: "info@buyersmatch.com.au",
        calendly: "https://calendly.com/puja-2fa/initialmeeting",
    },
    socials: [
        { name: "facebook", icon: "Facebook", url: "https://www.facebook.com/buyersmatchaustralia" },
        { name: "instagram", icon: "Instagram", url: "https://www.instagram.com/buyers_match/?hl=en" },
        { name: "youtube", icon: "YouTube", url: "https://www.youtube.com/@BuyersMatch" },
        { name: "linkedin", icon: "LinkedIn", url: "https://www.linkedin.com/in/puja-dhanetwal/?originalSubdomain=au" },
        { name: "tiktok", icon: "TikTok", url: "https://www.tiktok.com/@buyersmatch" },
        { name: "maps", icon: "Maps", url: "https://www.google.com/maps/place/BuyersMatch/@-36.5712557,99.6994519,3z/data=!4m6!3m5!1s0x9a64e54f2968b55:0x765d586cc54a73c!8m2!3d-24.1501978!4d136.0132792!16s%2Fg%2F11v6z05n76?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D" },
    ],
    stats: {
        totalClients: 150,
    },
    navigation: [
        { id: "help", label: "Services" },
        { id: "process", label: "Process" },
        { id: "case-studies", label: "Results" },
        { id: "testimonials", label: "Testimonials" },
        { id: "google-reviews", label: "Google Reviews" },
        { id: "about", label: "About" },
        { id: "faq", label: "FAQ" },
        { id: "blogs", label: "Blog" },
    ],
    videoTestimonials: [
        { id: 1, name: "Client Testimonial - Vinutha", quote: "", youtubeId: "vmZ-wy00s-k", image: "https://img.youtube.com/vi/vmZ-wy00s-k/maxresdefault.jpg" },
        { id: 2, name: "Client Testimonial - Manju", quote: "", youtubeId: "X3TZe_DaO5g", image: "https://img.youtube.com/vi/X3TZe_DaO5g/maxresdefault.jpg" },
        { id: 3, name: "Client Testimonial - Dinah and Arjun", quote: "", youtubeId: "30we2JzIsE8", image: "https://img.youtube.com/vi/30we2JzIsE8/maxresdefault.jpg" },
        { id: 4, name: "BuyersMatch - Client Testimonial", quote: "", youtubeId: "q3IfD-X7Cf0", image: "https://img.youtube.com/vi/q3IfD-X7Cf0/maxresdefault.jpg" },
        { id: 5, name: "When you Work with Experts", quote: "", youtubeId: "vLiopriS5HA", image: "https://img.youtube.com/vi/vLiopriS5HA/maxresdefault.jpg" },
        { id: 6, name: "Thank You for Trusting Us", quote: "", youtubeId: "ISsxVHcajes", image: "https://img.youtube.com/vi/ISsxVHcajes/maxresdefault.jpg" },
    ],
    reviews: [
        { name: "John M.", rating: 5, date: "2 weeks ago", text: "Puja and Vishal are phenomenal! They found us an off-market property that perfectly matched our criteria. Their negotiation skills saved us thousands." },
        { name: "Priya S.", rating: 5, date: "1 month ago", text: "As first home buyers, we were overwhelmed. BuyersMatch guided us through every step and found a property we love within our budget." },
        { name: "Robert K.", rating: 5, date: "2 months ago", text: "Professional, knowledgeable, and genuinely care about their clients. Secured a fantastic investment property with great yield." },
        { name: "Michelle L.", rating: 5, date: "3 months ago", text: "The due diligence process was thorough. They identified issues we would have missed. Worth every penny!" },
    ],
   
    benefits: [
        "Expertise & Experience",
        "Client-Centric Approach",
        "Extensive Network Access",
        "Thorough Due Diligence",
        "Skilled Negotiation",
        "Trust & Transparency",
        "End-to-End Support",
        "Integrity & Honesty",
    ],
    processSteps: [
        { emoji: "📋", title: "Qualification", desc: "We understand your goals, budget, and requirements" },
        { emoji: "📈", title: "Strategy", desc: "Develop a tailored property investment strategy" },
        { emoji: "📍", title: "Suburb Selection", desc: "Identify high-growth suburbs matching your criteria" },
        { emoji: "🏠", title: "Property Selection", desc: "Shortlist and inspect suitable properties" },
        { emoji: "🔑", title: "Bring It Home", desc: "Negotiate, conduct due diligence, and settle" },
    ],
    services: [
        { icon: "🔍", title: "Property Search", desc: "Comprehensive search across on-market and off-market properties using our elite network." },
        { icon: "🏠", title: "Property Inspections", desc: "Thorough professional inspections and assessments of every potential match." },
        { icon: "📋", title: "Due Diligence", desc: "Complete property, legal, and financial due diligence to mitigate any risks." },
        { icon: "🤝", title: "Negotiation Support", desc: "Expert negotiation strategies to secure the best possible purchase terms." },
        { icon: "📊", title: "Transaction Support", desc: "End-to-end management of the entire settlement process and coordination." },
        { icon: "💡", title: "Expert Advice", desc: "Professional guidance and strategic market recommendations tailored to you." },
        { icon: "🎯", title: "Personalised Solutions", desc: "Tailored investment and lifestyle strategies for your unique requirements." },
        { icon: "🏗️", title: "Portfolio Strategy", desc: "Long-term planning for building wealth through strategic property acquisition." },
    ],
    blogs: [
        {
            id: "real-estate-portfolio-examples",
            title: "Real Estate Portfolio Examples: Building Your Strategy",
            image: blogsData["real-estate-portfolio-examples"].image,
            date: "Feb 10, 2024",
            excerpt: "Explore practical examples and strategies for building a diverse and high-performing property investment portfolio."
        },
        {
            id: "build-portfolio-no-money",
            title: "How to Build a Property Portfolio with No Money",
            image: blogsData["build-portfolio-no-money"].image,
            date: "Feb 05, 2024",
            excerpt: "Learn creative financing strategies and leverage techniques to start your property journey without significant capital."
        },
        {
            id: "insurance-embargo-qld",
            title: "Understanding the Insurance Embargo in QLD",
            image: blogsData["insurance-embargo-qld"].image,
            date: "Jan 28, 2024",
            excerpt: "A critical guide for property buyers in Queensland regarding natural disaster insurance restrictions and risks."
        },
        {
            id: "why-use-buyers-agent",
            title: "Why should one use a buyer's agent?",
            image: blogsData["why-use-buyers-agent"].image,
            date: "Jan 15, 2024",
            excerpt: "Discover the professional advantages, from off-market access to skilled negotiation, that a buyer's agent brings."
        },
        {
            id: "tenanted-properties-wealth",
            title: "Unlock Wealth with Tenanted Properties",
            image: blogsData["tenanted-properties-wealth"].image,
            date: "Jan 08, 2024",
            excerpt: "Essential tips for investors looking to acquire properties with existing tenants for immediate cash flow."
        },
        {
            id: "strategic-planning-investment",
            title: "Strategic Planning in Property Investment",
            image: blogsData["strategic-planning-investment"].image,
            date: "Dec 15, 2023",
            excerpt: "Master the long-term planning techniques required to build a sustainable and growing property portfolio."
        },
        {
            id: "thriving-portfolio-scratch",
            title: "Build a Thriving Property Portfolio from Scratch",
            image: blogsData["thriving-portfolio-scratch"].image,
            date: "Dec 05, 2023",
            excerpt: "A step-by-step roadmap for new investors to enter the market and scale their property holdings effectively."
        },
        {
            id: "power-of-buyers-agents",
            title: "Unveiling the Power of Buyers Agents",
            image: blogsData["power-of-buyers-agents"].image,
            date: "Nov 22, 2023",
            excerpt: "How to unlock exclusive off-market opportunities and gain a competitive edge in any market environment."
        },
        {
            id: "investment-sweet-spot",
            title: "Finding Your Investment Sweet Spot",
            image: blogsData["investment-sweet-spot"].image,
            date: "Nov 10, 2023",
            excerpt: "Learn how to balance capital growth and rental yield to find the perfect property for your specific goals."
        },
        {
            id: "elevating-investment-experience",
            title: "Elevating Your Property Investment Experience",
            image: blogsData["elevating-investment-experience"].image,
            date: "Oct 28, 2023",
            excerpt: "The distinct advantages of choosing a specialized buyer's agency for your next property purchase."
        },
        {
            id: "insurance-safeguards-investment",
            title: "Insurance Safeguards for Your Property",
            image: blogsData["insurance-safeguards-investment"].image,
            date: "Oct 12, 2023",
            excerpt: "Protect your assets with 10 essential insurance tips every Melbourne property buyer should know."
        }
    ],
    whoWeHelp: [
        {
            title: "Property Investors",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            content: "Building property portfolios across Australia. We identify high-growth opportunities and optimize your investment strategy for maximum yield."
        },
        {
            title: "SMSF Investors",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            content: "Specialized property acquisition for Super Funds. We ensure full compliance while maximizing long-term returns for your retirement portfolio."
        },
    ]
};
