import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserManual from "/src/assets/eXBatch_Enrolment_System-UserManual.pdf";

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

  const handleBack = () => {
    navigate(-1);
  };

  const toggleManual = () => {
    setShowManual(!showManual);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const manualContainer = document.querySelector(".manual-container");
      if (
        showManual &&
        manualContainer &&
        !manualContainer.contains(event.target)
      ) {
        // Check if the click was not on the toggle button
        const toggleButton = document.querySelector(".toggle-manual-btn");
        if (toggleButton && !toggleButton.contains(event.target)) {
          setShowManual(false);
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
      {/* Background overlay with blur effect */}
      {showManual && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-all duration-300"></div>
      )}

      <section
        className={`project-details min-h-screen flex flex-col items-center bg-[#222D23] p-10 relative ${
          showManual ? "overflow-hidden" : ""
        }`}
      >
        <div className="max-w-4xl w-full">
          {/* Back Button */}
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
              Back
            </span>
          </button>

          <div className="project-content p-8 -mt-10">
            {/* Title and Manual Button */}
            <div className="flex justify-between items-center mb-6">
              <h1
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "600",
                  fontSize: "28px",
                  color: "#EFEFEF",
                }}
              >
                eXBatch Enrolment System
              </h1>

              <button
                onClick={toggleManual}
                className="toggle-manual-btn flex items-center px-4 py-2 rounded transition-all duration-300 hover:bg-[#2e3b2f]"
                style={{
                  background: "#2A352B",
                  border: "1px solid #EFEFEF",
                  color: "#EFEFEF",
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "300",
                  fontSize: "16px",
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
                View User Manual
              </button>
            </div>

            {/* PDF Manual Container */}
            {showManual && (
              <div className="manual-container fixed top-0 right-0 h-full w-1/2 bg-[#2A352B] shadow-2xl z-50 transition-all duration-500 ease-in-out">
                <div className="flex justify-between items-center p-4 border-b border-[#EFEFEF]">
                  <h2
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#EFEFEF",
                    }}
                  >
                    User Manual
                  </h2>
                  <button
                    onClick={toggleManual}
                    className="text-[#EFEFEF] hover:text-[#24FF45] text-2xl"
                    aria-label="Close manual"
                  >
                    &times;
                  </button>
                </div>
                <div className="h-full p-4">
                  <iframe
                    src={UserManual}
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
                  Completed
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"].map(
                  (tech) => (
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
                  )
                )}
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
                The eXBatch Enrolment System is a comprehensive web application
                designed to modernize and automate the batch number enrolment
                process for materials supplied by Toll into the EXACT system.
                The system eliminates manual processes, reduces errors, and
                provides a structured workflow for submitting, reviewing, and
                approving batch enrolment requests across different
                organizational departments.
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
                  User Management
                </h2>
                <ul
                  className="list-disc ml-10"
                  style={{
                    marginBottom: "15px",
                    fontWeight: "200",
                  }}
                >
                  <li>
                    Multi-role Support: Admin, Approver, and Requestor roles
                    with distinct privileges
                  </li>
                  <li>
                    User Account Management: Complete user lifecycle including
                    activation/deactivation
                  </li>
                  <li>
                    Department Association: Users linked to specific departments
                    for workflow control
                  </li>
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
                  Core Functionality
                </h2>
                <ul
                  className="list-disc ml-10"
                  style={{
                    marginBottom: "15px",
                    fontWeight: "200",
                  }}
                >
                  <li>
                    Batch Number Management: Complete lifecycle management of
                    batch enrolments from submission to approval
                  </li>
                  <li>
                    Real-time Integration: Direct synchronization with EXACT
                    system for data validation and record creation
                  </li>
                  <li>
                    Duplicate Prevention: Automated validation to prevent
                    duplicate entries in the EXACT system
                  </li>
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
                  Reporting & Analytics
                </h2>
                <ul
                  className="list-disc ml-10"
                  style={{
                    marginBottom: "15px",
                    fontWeight: "200",
                  }}
                >
                  <li>
                    Dashboard Analytics: Real-time statistics and activity
                    monitoring
                  </li>
                  <li>
                    Request Tracking: Comprehensive tracking of request status
                    and history
                  </li>
                  <li>
                    Export Capabilities: PDF export functionality with filtering
                    options
                  </li>
                  <li>
                    Activity Logging: Detailed audit trail of all system
                    activities
                  </li>
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
