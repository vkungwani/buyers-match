import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { siteData } from '../config/siteData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService: React.FC<{ openLeadModal?: any; openCalendly?: any }> = ({ openLeadModal, openCalendly }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id: string) => {
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
                            Terms of Service
                        </h1>
                        <p className="text-gray-500 font-medium">Last Updated: February 9, 2026</p>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-12">
                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">1. Acceptance of Terms</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                By accessing or using the services provided by {siteData.name}, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">2. Description of Services</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {siteData.name} provides buyer's advocacy services, including property search, inspection, due diligence, and negotiation support. Our goal is to assist clients in finding and acquiring property in Australia.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">3. User Obligations</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                As a user of our services, you agree to:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                                <li>Provide accurate and complete information</li>
                                <li>Use our services only for lawful purposes</li>
                                <li>Respect the intellectual property of {siteData.name}</li>
                                <li>Maintain the confidentiality of any account information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">4. Intellectual Property</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                All content on this website, including text, graphics, logos, and images, is the property of {siteData.name} and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">5. Limitation of Liability</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {siteData.name} is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services or any property acquisition decisions made based on our advice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">6. Governing Law</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                These Terms of Service are governed by and construed in accordance with the laws of Australia. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the Australian courts.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer scrollToSection={scrollToSection} openCalendly={openCalendly} openLeadModal={openLeadModal} />
        </div>
    );
};

export default TermsOfService;
