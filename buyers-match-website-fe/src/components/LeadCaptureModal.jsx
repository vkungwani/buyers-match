import React, { useState, useEffect } from "react";

const LeadCaptureModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: "", email: "", mobileNumber: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset on close
      setForm({ name: "", email: "", mobileNumber: "" });
      setErrors({});
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const validate = (fields = form) => {
    const errs = {};
    if (!fields.name.trim()) errs.name = "Name is required.";
    if (!fields.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!fields.mobileNumber.trim()) {
      errs.mobileNumber = "Mobile number is required.";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(fields.mobileNumber)) {
      errs.mobileNumber = "Enter a valid mobile number.";
    }
    return errs;
  };

  const isValid = Object.keys(validate()).length === 0;

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    // Clear error on edit
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleBlur = (e) => {
    const errs = validate();
    setErrors((prev) => ({ ...prev, [e.target.name]: errs[e.target.name] }));
  };

  const handleDownload = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    try {
      // Save lead to backend
      await fetch("http://localhost:8080/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "Website - 4M Guide Download",
          category: "Lead Magnet",
          quality: "New",
          remark: "Downloaded 4M Framework Guide from website.",
        }),
      });
    } catch (err) {
      // Backend might not be running locally — still allow download
      console.warn("Failed to save lead:", err);
    } finally {
      setLoading(false);
    }

    // Trigger PDF download
    const link = document.createElement("a");
    link.href = "/BuyersMatch_4M_Guide.pdf";
    link.download = "BuyersMatch_4M_Guide.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSubmitted(true);
    setTimeout(() => onClose(), 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(10,18,40,0.82)",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: window.innerWidth < 640 ? "28px 20px" : "44px 40px",
          maxWidth: "460px",
          width: "92%",
          boxShadow: "0 24px 80px rgba(27,42,74,0.25)",
          position: "relative",
          animation: "lcmPop 0.3s cubic-bezier(.175,.885,.32,1.275)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "32px",
            height: "32px",
            border: "none",
            background: "rgba(27,42,74,0.07)",
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "16px",
            color: "#6A7A8E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "52px", marginBottom: "16px" }}>🎉</div>
            <h3
              style={{
                fontFamily: "var(--ff-h)",
                fontSize: "24px",
                color: "var(--navy)",
                marginBottom: "8px",
              }}
            >
              Your guide is downloading!
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "14px" }}>
              A copy of the 4M Framework Guide has been sent to your browser.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div style={{ marginBottom: "28px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  background: "var(--teal-l)",
                  color: "var(--teal-d)",
                  borderRadius: "100px",
                  padding: "5px 14px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                📥 Get Free
              </div>
              <h2
                style={{
                  fontFamily: "var(--ff-h)",
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "var(--navy)",
                  lineHeight: 1.25,
                  marginBottom: "6px",
                }}
              >
                Get Your Free 4M Framework Guide
              </h2>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "13.5px",
                  lineHeight: 1.6,
                }}
              >
                The exact system Puja &amp; Vish use to secure high-growth
                properties — yours instantly.
              </p>
            </div>

            {/* Form Fields */}
            {[
              {
                label: "Full Name",
                name: "name",
                type: "text",
                placeholder: "e.g. John Smith",
              },
              {
                label: "Email Address",
                name: "email",
                type: "email",
                placeholder: "e.g. john@example.com",
              },
              {
                label: "Mobile Number",
                name: "mobileNumber",
                type: "tel",
                placeholder: "e.g. 0400 000 000",
              },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} style={{ marginBottom: "16px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "6px",
                  }}
                >
                  {label} <span style={{ color: "#e03" }}>*</span>
                </label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    padding: "11px 14px",
                    border: `1.5px solid ${errors[name] ? "#e03" : "var(--border)"}`,
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontFamily: "var(--ff-b)",
                    outline: "none",
                    color: "var(--ink)",
                    transition: "border-color .2s",
                    boxSizing: "border-box",
                    background: errors[name] ? "#fff8f8" : "#fff",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--teal)";
                  }}
                />
                {errors[name] && (
                  <span
                    style={{
                      display: "block",
                      marginTop: "4px",
                      fontSize: "11.5px",
                      color: "#e03",
                    }}
                  >
                    {errors[name]}
                  </span>
                )}
              </div>
            ))}

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={!isValid || loading}
              style={{
                width: "100%",
                padding: "14px 0",
                background: isValid ? "var(--teal)" : "var(--border)",
                color: isValid ? "var(--navy)" : "#aaa",
                border: "none",
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "15px",
                cursor: isValid ? "pointer" : "not-allowed",
                fontFamily: "var(--ff-b)",
                transition: "background .2s, color .2s, transform .15s",
                transform: isValid && !loading ? "translateY(0)" : "none",
                marginTop: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                if (isValid && !loading)
                  e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "none";
              }}
            >
              {loading
                ? "⏳ Saving…"
                : "📥 Grab a free copy of 4M Framework Guide"}
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "11px",
                color: "var(--muted)",
                marginTop: "12px",
              }}
            >
              No spam. Your info is kept private and secure.
            </p>
          </>
        )}
      </div>

      <style>{`
        @keyframes lcmPop {
          0% { opacity: 0; transform: scale(0.92) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default LeadCaptureModal;
