import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eXBatch from "/src/assets/Logo/eXBatch.svg";

const ScrollToTop = () => {
  const { pathname } = window.location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Project = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <section className="project-details min-h-screen flex flex-col items-center bg-[#222D23] p-10">
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
          <h1
            style={{
              fontFamily: "Readex Pro, sans-serif",
              fontWeight: "600",
              fontSize: "28px",
              color: "#EFEFEF",
              marginBottom: "20px",
            }}
          >
            eXBatch Enrolment System
          </h1>

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
              process for materials supplied by Toll into the EXACT system. The
              system eliminates manual processes, reduces errors, and provides a
              structured workflow for submitting, reviewing, and approving batch
              enrolment requests across different organizational departments.
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
                  Multi-role Support: Admin, Approver, and Requestor roles with
                  distinct privileges
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
                  Request Tracking: Comprehensive tracking of request status and
                  history
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
  );
};

export default Project;
