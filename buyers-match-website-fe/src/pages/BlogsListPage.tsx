import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteData } from '../config/siteData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BlogsListPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id: string) => {
        navigate(`/#${id}`);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar scrollToSection={scrollToSection} />

            <main className="pt-32 pb-24 px-4 bg-gradient-to-b from-[#e8f7f7] to-white">
                <div className="container mx-auto max-w-7xl">
                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
                                Our <span className="text-[#29b8bd]">Blog</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                                Stay informed with the latest insights, strategies, and success stories from the Australian property market.
                            </p>
                        </motion.div>
                    </div>

                    {/* Blogs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteData.blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(41,184,189,0.15)] transition-all duration-500 flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-black text-[#29b8bd] shadow-lg uppercase tracking-wider">
                                            {blog.date}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h2 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-[#29b8bd] transition-colors line-clamp-2">
                                        {blog.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-8 flex-grow line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    <button
                                        onClick={() => navigate(`/blog/${blog.id}`)}
                                        className="w-full py-5 rounded-[1.5rem] bg-gray-50 border-2 border-transparent font-black text-[#29b8bd] hover:bg-[#29b8bd] hover:text-white transition-all duration-300 flex items-center justify-center group/btn shadow-sm"
                                    >
                                        Read Full Story
                                        <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
};

export default BlogsListPage;
