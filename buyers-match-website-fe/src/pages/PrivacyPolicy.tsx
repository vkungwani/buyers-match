import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { siteData } from '../config/siteData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
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
                            Privacy Policy
                        </h1>
                        <p className="text-gray-500 font-medium">Last Updated: February 9, 2026</p>
                    </div>

                    <div className="prose prose-gray max-w-none space-y-12">
                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">Introduction</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At {siteData.name}, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our buyer's advocacy services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">Information We Collect</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                We may collect personal information that you voluntarily provide to us, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                                <li>Contact information (name, email address, phone number)</li>
                                <li>Property requirements and preferences</li>
                                <li>Financial information related to your property search</li>
                                <li>Communication history with our team</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">How We Use Your Information</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Your information is used to provide and improve our services, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                                <li>Finding and matching properties to your requirements</li>
                                <li>Communicating with you about potential opportunities</li>
                                <li>Providing expert advice and negotiation support</li>
                                <li>Complying with legal and regulatory obligations</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">Data Security</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We implement industry-standard security measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-6">Your Rights</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                You have the right to access, correct, or delete your personal information. If you have any questions or requests regarding your data, please contact us at {siteData.contact.email}.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
};

export default PrivacyPolicy;
