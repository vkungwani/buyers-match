import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { siteData } from '../config/siteData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogsData } from '../config/blogs';
import { marked } from 'marked';

const BlogPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Find basic info from siteConfig
    const blogInfo = siteData.blogs.find(b => b.id === id);
    // Find detailed content from blogsData
    const detailedBlog = id ? blogsData[id] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToSection = (id: string) => {
        navigate(`/#${id}`);
    };

    if (!blogInfo) {
        return <div className="p-20 text-center">Blog post not found.</div>;
    }

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
                        <div className="text-[#29b8bd] font-black mb-4 uppercase tracking-[0.2em] text-sm">{blogInfo.date}</div>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
                            {blogInfo.title}
                        </h1>
                        <div className="w-full aspect-video bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl mb-12">
                            <img
                                src={blogInfo.image}
                                alt={blogInfo.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="prose prose-xl prose-gray max-w-none">
                        <p className="text-2xl text-gray-600 font-medium leading-relaxed mb-12 italic">
                            "{blogInfo.excerpt}"
                        </p>

                        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                            {detailedBlog?.body ? (
                                <div
                                    className="blog-body"
                                    dangerouslySetInnerHTML={{ __html: marked.parse(detailedBlog.body, { async: false }) as string }}
                                />
                            ) : (
                                <div className="space-y-8">
                                    <p>Content is being updated. Please check back soon.</p>
                                    <p>Our team is working on bringing the full version of this property guide to you.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer scrollToSection={scrollToSection} />
        </div>
    );
};

export default BlogPage;
