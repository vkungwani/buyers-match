import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Disclaimer = ({ openLeadModal, openCalendly }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id) => {
        navigate(`/#${id}`);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar scrollToSection={scrollToSection} openCalendly={openCalendly} />

            <main className="py-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <button
                        onClick={() => navigate('/')}
                        className="mb-12 flex items-center text-gray-400 hover:text-[#29b8bd] transition-colors font-bold uppercase tracking-widest text-sm"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </button>

                    <div className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                            Disclaimer
                        </h1>
                        <p className="text-gray-500 font-medium">Last Updated: February 9, 2026</p>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-12">
                        <section>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The information provided on this website is for general informational purposes only and does not constitute financial, legal, or investment advice.
                            </p>
                        </section>

                        <section>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                While we strive to ensure that all information presented is accurate, up-to-date, and based on reliable data, we make no guarantees regarding the completeness, accuracy, or reliability of any information, projections, or outcomes. Property investment involves risks, and past performance is not indicative of future results.
                            </p>
                        </section>

                        <section>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Any decisions made based on the information provided on this website or through our services are made at your own discretion and risk. We strongly recommend that you seek independent financial, legal, and tax advice before making any property or investment decisions.
                            </p>
                        </section>

                        <section>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our services are intended to assist and guide clients through the property acquisition process; however, we do not guarantee specific investment outcomes, capital growth, rental returns, or financial performance.
                            </p>
                        </section>

                        <section>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Testimonials and case studies shared on this website reflect individual client experiences and are not guarantees of similar results for all clients.
                            </p>
                        </section>

                        <section>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We are not responsible for any loss, damage, or liability arising from the use of this website or reliance on its content.
                            </p>
                        </section>

                        <section>
                            <p className="text-lg text-gray-700 leading-relaxed font-bold italic">
                                By using this website, you agree to this disclaimer in full.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer scrollToSection={scrollToSection} openCalendly={openCalendly} openLeadModal={openLeadModal} />
        </div>
    );
};

export default Disclaimer;