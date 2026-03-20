import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../config/siteData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faCar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CaseStudiesPage: React.FC = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPages = Math.ceil(siteData.successStories.length / itemsPerPage);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id: string) => {
        navigate(`/#${id}`);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Find the grid element and scroll to it
        const gridElement = document.getElementById('case-studies-grid');
        if (gridElement) {
            const offset = 120; // Nav height offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = gridElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = siteData.successStories.slice(indexOfFirstItem, indexOfLastItem);

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
                                Case <span className="text-[#29b8bd]">Studies</span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                                Dive deep into our successful property acquisitions and see the real-world results we deliver for our clients.
                            </p>
                        </motion.div>
                    </div>

                    {/* Case Studies Grid */}
                    <div id="case-studies-grid" className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        <AnimatePresence mode="wait">
                            {currentItems.map((story, index) => (
                                <motion.div
                                    key={`${currentPage}-${index}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-[0_20px_50px_rgba(41,184,189,0.15)] transition-all duration-500 flex flex-col h-full"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={story.image}
                                            alt={`${story.state} Property`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                        <div className="absolute bottom-6 left-8">
                                            <p className="font-black text-2xl uppercase tracking-widest text-white drop-shadow-md">{story.state}</p>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 flex flex-col flex-grow bg-white">
                                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8 pb-6 border-b border-gray-100">
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon icon={faBed} className="text-[#29b8bd] w-4 h-4" />
                                                <span className="text-gray-900 font-bold text-sm tracking-tight">{story.beds} Bedrooms</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon icon={faBath} className="text-[#29b8bd] w-4 h-4" />
                                                <span className="text-gray-900 font-bold text-sm tracking-tight">{story.baths} Bathrooms</span>
                                            </div>
                                            {story.cars > 0 && (
                                                <div className="flex items-center gap-2">
                                                    <FontAwesomeIcon icon={faCar} className="text-[#29b8bd] w-4 h-4" />
                                                    <span className="text-gray-900 font-bold text-sm tracking-tight">{story.cars} Parking</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-left">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Purchase Price</span>
                                                <span className="text-2xl font-black text-gray-900 leading-none">{story.price}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Weekly Rent</span>
                                                <span className="text-2xl font-black text-gray-900 leading-none">{story.rent}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Rental Yield</span>
                                                <span className="text-2xl font-black text-[#29b8bd] leading-none">{story.yield}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Purchase</span>
                                                <span className="text-xl font-black text-gray-900 leading-none">{story.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    <div className="mt-20 flex justify-center items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            disabled={currentPage === 1}
                            className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${currentPage === 1
                                ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                                : 'border-[#29b8bd] text-[#29b8bd] hover:bg-[#29b8bd] hover:text-white'
                                }`}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </motion.button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <motion.button
                                    key={page}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handlePageChange(page)}
                                    className={`w-12 h-12 rounded-full font-bold transition-all ${currentPage === page
                                        ? 'bg-[#29b8bd] text-white shadow-lg shadow-[#29b8bd]/30'
                                        : 'bg-white text-gray-600 border border-gray-100 hover:border-[#29b8bd] hover:text-[#29b8bd]'
                                        }`}
                                >
                                    {page}
                                </motion.button>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}
                            className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${currentPage === totalPages
                                ? 'border-gray-100 text-gray-300 cursor-not-allowed'
                                : 'border-[#29b8bd] text-[#29b8bd] hover:bg-[#29b8bd] hover:text-white'
                                }`}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </motion.button>
                    </div>
                </div>
            </main>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
};

export default CaseStudiesPage;
