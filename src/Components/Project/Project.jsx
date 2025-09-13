import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserManual from "/src/assets/eXBatch_Enrolment_System-UserManual.pdf";
import "./Project.css";
import projectContent from "./projectContent.json";

const ScrollToTop = () => {
  const { pathname } = window.location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Project = () => {
  const navigate = useNavigate();
  const [showManual, setShowManual] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isManualAnimating, setIsManualAnimating] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const toggleManual = () => {
    if (!showManual) {
      setShowManual(true);
      setIsManualAnimating(true);
    } else {
      setIsManualAnimating(false);
      setTimeout(() => {
        setShowManual(false);
      }, 300);
    }
  };

  const { title, status, technologies, description, features, buttons } =
    projectContent.project;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const manualContainer = document.querySelector(".manual-container");
      if (
        showManual &&
        manualContainer &&
        !manualContainer.contains(event.target)
      ) {
        const toggleButton = document.querySelector(".toggle-manual-btn");
        if (toggleButton && !toggleButton.contains(event.target)) {
          toggleManual();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showManual]);

  return (
    <>
      <div className={`overlay ${showManual ? "show" : ""}`}></div>

      <section
        className={`project-details min-h-screen flex flex-col items-center bg-[#222D23] p-10 relative ${
          showManual ? "overflow-hidden" : ""
        }`}
      >
        <div className="max-w-4xl w-full">
          <button
            onClick={handleBack}
            className="flex items-center pt-10 mb-8 transition-all duration-300 hover:opacity-80 hover:scale-105"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 512 512"
              fill="none"
              style={{ marginRight: "4px" }}
            >
              <path
                d="M327.4 103.7c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3L214.6 256 355.7 397.1c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0l-152-152c-7.8-7.8-7.8-20.5 0-28.3l152-152z"
                fill="#EFEFEF"
              />
            </svg>
            <span
              style={{
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "300",
                fontSize: "16px",
                color: "#EFEFEF",
              }}
            >
              {buttons.back}
            </span>
          </button>

          <div className="project-content p-8 -mt-10">
            <div className="flex justify-between items-center mb-6">
              <h1
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "600",
                  fontSize: "28px",
                  color: "#EFEFEF",
                }}
              >
                {title}
              </h1>

              <div className="flex items-center gap-2">
                {!isMobile && (
                  <button
                    onClick={toggleManual}
                    className="toggle-manual-btn flex items-center px-4 py-2 rounded transition-all duration-300"
                    style={{
                      background: "#2A352B",
                      border: "1px solid #EFEFEF",
                      color: "#EFEFEF",
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "300",
                      fontSize: "16px",
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                        fill="#EFEFEF"
                      />
                    </svg>
                    {buttons.viewManual}
                  </button>
                )}

                {isMobile && (
                  <a
                    href={UserManual}
                    download
                    className="mobile-download-btn flex items-center px-4 py-2 rounded transition-all duration-300 hover:bg-[#2e3b2f]"
                    style={{
                      background: "#2A352B",
                      border: "1px solid #24FF45",
                      color: "#EFEFEF",
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "300",
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                        fill="#24FF45"
                      />
                    </svg>
                    {buttons.downloadManual}
                  </a>
                )}
              </div>
            </div>

            {showManual && !isMobile && (
              <div
                className={`manual-container ${
                  isManualAnimating ? "show" : ""
                }`}
              >
                <div className="manual-header">
                  <h2
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#EFEFEF",
                    }}
                  >
                    {buttons.userManual}
                  </h2>
                  <button
                    onClick={toggleManual}
                    className="close-manual"
                    aria-label="Close manual"
                  >
                    &times;
                  </button>
                </div>
                <div className="manual-content">
                  <iframe
                    src={UserManual + "#view=FitH"}
                    className="w-full h-full"
                    title="eXBatch Enrolment System User Manual"
                  />
                </div>
              </div>
            )}

            <div className="project-meta mb-6">
              <div className="flex items-center mb-3">
                <span
                  style={{
                    fontFamily: "Readex Pro, sans-serif",
                    fontWeight: "500",
                    fontSize: "16px",
                    color: "#EFEFEF",
                    marginRight: "10px",
                  }}
                >
                  Status:
                </span>
                <span
                  style={{
                    fontFamily: "Readex Pro, sans-serif",
                    fontWeight: "300",
                    fontSize: "16px",
                    color: "#24FF45",
                  }}
                >
                  {status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag"
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "300",
                      fontSize: "13px",
                      color: "#EFEFEF",
                      border: "1px solid #EFEFEF",
                      borderRadius: "3px",
                      padding: "2px 8px",
                      display: "inline-block",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-description mb-8">
              <h2
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "600",
                  fontSize: "20px",
                  color: "#EFEFEF",
                  marginBottom: "10px",
                }}
              >
                Description
              </h2>
              <p
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "300",
                  fontSize: "16px",
                  color: "#EFEFEF",
                  lineHeight: "1.6",
                  textAlign: "justify",
                }}
              >
                {description}
              </p>
            </div>

            <div className="project-features mb-8">
              <h2
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "600",
                  fontSize: "25px",
                  color: "#EFEFEF",
                  marginBottom: "10px",
                }}
              >
                Key Features
              </h2>
              <ul
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "300",
                  fontSize: "16px",
                  color: "#EFEFEF",
                  lineHeight: "1.6",
                  paddingLeft: "20px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Readex Pro, sans-serif",
                    fontWeight: "400",
                    fontSize: "19px",
                    color: "#EFEFEF",
                    marginBottom: "10px",
                  }}
                >
                  {features.userManagement.title}
                </h2>
                <ul
                  className="list-disc ml-10"
                  style={{
                    marginBottom: "15px",
                    fontWeight: "200",
                  }}
                >
                  <li>{features.userManagement.items[0]}</li>
                  <li>{features.userManagement.items[1]}</li>
                  <li>{features.userManagement.items[2]}</li>
                </ul>
                <h2
                  style={{
                    fontFamily: "Readex Pro, sans-serif",
                    fontWeight: "400",
                    fontSize: "19px",
                    color: "#EFEFEF",
                    marginBottom: "10px",
                  }}
                >
                  {features.coreFunctionality.title}
                </h2>
                <ul
                  className="list-disc ml-10"
                  style={{
                    marginBottom: "15px",
                    fontWeight: "200",
                  }}
                >
                  <li>{features.coreFunctionality.items[0]}</li>
                  <li>{features.coreFunctionality.items[1]}</li>
                  <li>{features.coreFunctionality.items[2]}</li>
                </ul>

                <h2
                  style={{
                    fontFamily: "Readex Pro, sans-serif",
                    fontWeight: "400",
                    fontSize: "19px",
                    color: "#EFEFEF",
                    marginBottom: "10px",
                  }}
                >
                  {features.reportingAnalytics.title}
                </h2>
                <ul
                  className="list-disc ml-10"
                  style={{
                    marginBottom: "15px",
                    fontWeight: "200",
                  }}
                >
                  <li>{features.reportingAnalytics.items[0]}</li>
                  <li>{features.reportingAnalytics.items[1]}</li>
                  <li>{features.reportingAnalytics.items[2]}</li>
                  <li>{features.reportingAnalytics.items[3]}</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
