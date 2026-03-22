import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const RatingSummaryCard = () => {
  return (
    <div
      style={{ backgroundColor: "var(--navy)" }}
      className="max-w-[500px] mx-auto p-6 md:p-8 rounded-[2rem] text-white shadow-3xl text-center border border-white/5 relative overflow-hidden group mb-4"
    >
      <div className="relative z-10 flex flex-row items-center justify-center gap-8">
        {/* Compact Logo */}
        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transform transition-transform group-hover:rotate-12">
          <svg viewBox="0 0 24 24" className="w-7 h-7">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </div>

        {/* Rating/Stars Group */}
        <div className="text-left">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-black">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-[#29b8bd]"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mt-1 whitespace-nowrap">
            Trusted by Over 80+ Clients
          </p>
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ review, isDark = true }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;

  // Handle different data structures that might come from the API
  const reviewerName =
    review?.reviewer?.displayName || review?.author_name || "Anonymous";
  const reviewerPhoto =
    review?.reviewer?.profilePhotoUrl || review?.profile_photo_url || null;
  const rating = review?.starRating || review?.rating || 5;
  const comment = review?.comment || review?.text || "";
  const shouldShowReadMore = comment && comment.length > maxLength;

  return (
    <div
      style={{ backgroundColor: "var(--navy)" }}
      className={`group relative p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] transition-all duration-500 border border-white/10 hover:border-[#29b8bd]/30 shadow-2xl shadow-black/40`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative">
          {reviewerPhoto ? (
            <img
              src={reviewerPhoto}
              alt={reviewerName}
              className="w-12 h-12 rounded-full object-cover ring-4 ring-white/5 shadow-sm"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<div class="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg bg-white/10 text-white">${reviewerName.charAt(0)}</div>`;
              }}
            />
          ) : (
            <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg bg-white/10 text-white">
              {reviewerName.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-black text-sm tracking-tight text-white">
            {reviewerName}
          </h4>
          <div className="flex scale-90 -ml-2 text-[#29b8bd]">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3.5 h-3.5 ${i < rating ? "fill-current" : "fill-gray-700"}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p
        className={`text-[15px] leading-relaxed font-medium transition-colors text-gray-300 group-hover:text-white ${!isExpanded && shouldShowReadMore ? "line-clamp-4" : ""}`}
      >
        {comment}
      </p>
      {shouldShowReadMore && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
          className="mt-4 text-[#29b8bd] font-black text-[10px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          {isExpanded ? "Collapse" : "Read More"}
        </button>
      )}
      <div className="absolute top-6 right-8 transition-colors text-white/5 group-hover:text-[#29b8bd]/10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H11.017V4H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V11C3.017 11.5523 2.56928 12 2.017 12H0.017V4H10.017V15C10.017 18.3137 7.33072 21 4.017 21H3.017Z" />
        </svg>
      </div>
    </div>
  );
};

const ScrollingColumn = ({
  items,
  duration,
  reverse = false,
  className = "h-[800px]",
}) => {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="flex flex-col gap-8 py-4"
        animate={{
          y: reverse ? [-(items.length * 400), 0] : [0, -(items.length * 400)],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item?.reviewId || item?.author_name || "item"}-${idx}`}
            className="px-2"
          >
            {item?.type === "summary" ? (
              <RatingSummaryCard />
            ) : (
              <ReviewCard review={item} />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const FullReviewsModal = ({ isOpen, onClose, reviews }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
        >
          <div
            style={{ backgroundColor: "var(--navy)" }}
            className="absolute inset-0 backdrop-blur-2xl"
            onClick={onClose}
          ></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            style={{ backgroundColor: "var(--navy)" }}
            className="relative w-full max-w-5xl h-[90vh] rounded-[1.5rem] md:rounded-[3rem] shadow-[0_0_100px_rgba(41,184,189,0.2)] border border-white/5 flex flex-col overflow-hidden"
          >
            {/* Modal Header */}
            <div className="p-5 md:p-10 border-b border-white/5 flex items-center justify-between bg-white/5 backdrop-blur-md shrink-0">
              <div>
                <h3 className="text-2xl md:text-4xl font-black text-white leading-none tracking-tight">
                  Full <span className="text-[#29b8bd]">Wall of Love</span>
                </h3>
                <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-4">
                  Exploring 80+ Experiences
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#29b8bd] hover:border-[#29b8bd] transition-all active:scale-95 group"
              >
                <svg
                  className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-grow overflow-y-auto p-5 md:p-10 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                {reviews?.map((review, idx) => (
                  <ReviewCard
                    key={`${review?.reviewId || review?.author_name || idx}`}
                    review={review}
                  />
                ))}
              </div>
            </div>

            {/* Modal Footer */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ReviewsContent = ({ reviews, setIsModalOpen, setReviewsData }) => {
  useEffect(() => {
    if (reviews && reviews.length > 0) {
      setReviewsData(reviews);
    }
  }, [reviews, setReviewsData]);

  if (!reviews || reviews.length === 0) {
    return (
      <div className="text-center text-gray-400 py-20">
        No reviews available at the moment.
      </div>
    );
  }

  // Split reviews for left and right columns
  const leftCol = reviews.filter((_, i) => i % 2 === 0);
  const rightCol = reviews.filter((_, i) => i % 2 === 1);

  return (
    <div className="relative overflow-visible">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 h-full md:min-h-[600px]">
        {/* Left Side Reviews (Desktop Only) */}
        <div className="hidden lg:block w-[28%] h-[600px]">
          <ScrollingColumn
            items={leftCol}
            duration={leftCol.length * 15}
            className="h-full"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="w-full lg:w-[44%] text-center px-4 flex flex-col items-center justify-center z-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-6 w-full"
          >
            <h2 className="text-white font-black text-5xl md:text-6xl tracking-tighter mb-4 leading-tight">
              What our <br />
              <span className="text-[#2ABFBF]">clients say</span>
            </h2>
            <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.4em] mb-10">
              Real people. Real results. Verified proof.
            </p>

            <RatingSummaryCard />

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-10 group relative px-10 py-5 bg-[#2ABFBF] text-[#1B2A4A] font-black rounded-2xl shadow-[0_20px_40px_rgba(42,191,191,0.25)] hover:bg-white transition-all active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 text-xs uppercase tracking-[0.2em]">
                Explore 80+ Stories →
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right Side Reviews (Desktop Only) */}
        <div className="hidden lg:block w-[28%] h-[600px]">
          <ScrollingColumn
            items={rightCol}
            duration={rightCol.length * 18}
            reverse={true}
            className="h-full"
          />
        </div>

        {/* Mobile View: Single Column Scroller below center content */}
        <div className="lg:hidden w-full h-[500px]">
          <ScrollingColumn
            items={reviews}
            duration={reviews.length * 15}
            className="h-full"
          />
        </div>
      </div>

      {/* Edge Fades */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1B2A4A] to-transparent pointer-events-none z-20"></div>
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#1B2A4A] to-transparent pointer-events-none z-20"></div>
    </div>
  );
};

const GoogleReviews = ({
  featurableId = "05712950-a499-41db-a75f-ce6b5050f2cc",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);

  return (
    <section
      id="reviews"
      style={{ backgroundColor: "#1B2A4A" }}
      className="relative py-12 lg:py-4 px-4 overflow-hidden scroll-mt-24"
    >
      <div className="max-w-[1500px] mx-auto relative z-10">
        <ReactGoogleReviews
          layout="custom"
          featurableId={featurableId}
          renderer={(reviews) => (
            <ReviewsContent
              reviews={reviews}
              setIsModalOpen={setIsModalOpen}
              setReviewsData={setReviewsData}
            />
          )}
        />

        {isModalOpen && reviewsData.length > 0 && (
          <FullReviewsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            reviews={reviewsData}
          />
        )}
      </div>

      <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(41,184,189,0.2); border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(41,184,189,0.4); }
            `}</style>
    </section>
  );
};

export default GoogleReviews;
