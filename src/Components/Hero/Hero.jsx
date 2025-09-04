import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Profile from "/src/assets/Profile.svg";
import TempProfile from "/src/assets/TempProfile.svg";
import Education from "/src/assets/Icons/Education.svg";
import Location from "/src/assets/Icons/Location.svg";
import Instagram from "/src/assets/Icons/Instagram.svg";
import Github from "/src/assets/Icons/Github.svg";
import Discord from "/src/assets/Icons/Discord.svg";
import CV from "/src/assets/Arragen_Basilio_CV.pdf";

import vscode from "/src/assets/Icons/vscode.svg";
import xampp from "/src/assets/Icons/xampp.svg";
import windsurf from "/src/assets/Icons/windsurf.svg";
import cursor from "/src/assets/Icons/cursor.svg";
import visualStudio from "/src/assets/Icons/visualStudio.svg";
import pycharm from "/src/assets/Icons/pycharm.svg";
import html from "/src/assets/Icons/html.svg";
import css from "/src/assets/Icons/css.svg";
import php from "/src/assets/Icons/php.svg";
import cplus from "/src/assets/Icons/cplus.svg";
import python from "/src/assets/Icons/python.svg";
import java from "/src/assets/Icons/java.svg";
import bootstrap from "/src/assets/Icons/bootstrap.svg";
import react from "/src/assets/Icons/react.svg";
import tailwindcss from "/src/assets/Icons/tailwindcss.svg";
import mysql from "/src/assets/Icons/mysql.svg";
import github1 from "/src/assets/Icons/github1.svg";
import canva from "/src/assets/Icons/canva.svg";
import figma from "/src/assets/Icons/figma.svg";
import photoshop from "/src/assets/Icons/photoshop.svg";
import animate from "/src/assets/Icons/animate.svg";

import Phone from "/src/assets/Icons/Phone.svg";
import Email from "/src/assets/Icons/Email.svg";

import Copyright from "/src/assets/Elements/Copyright.svg";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLogoLoopHovered, setIsLogoLoopHovered] = useState(false);
  const [logoPosition, setLogoPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  const logoLoopRef = useRef(null);
  const discordUsername = "tomataur.";
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    animating: false,
  });

  useEffect(() => {
    if (!isPaused) {
      let startTime = null;
      const duration = 20000;
      let currentProgress = logoPosition;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp - currentProgress * duration;
        const elapsed = timestamp - startTime;
        const progress = (elapsed % duration) / duration;

        if (logoLoopRef.current) {
          const totalWidth = logoLoopRef.current.scrollWidth / 2;
          const newPosition = -progress * totalWidth;
          setLogoPosition(progress);
          logoLoopRef.current.style.transform = `translateX(${newPosition}px)`;
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    } else {
      if (logoLoopRef.current) {
        const computedStyle = window.getComputedStyle(logoLoopRef.current);
        const matrix = new DOMMatrixReadOnly(computedStyle.transform);
        const currentTranslateX = matrix.m41;
        const totalWidth = logoLoopRef.current.scrollWidth / 2;
        const progress = Math.abs(currentTranslateX) / totalWidth;
        setLogoPosition(progress);
      }
    }
  }, [isPaused]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Arragen_Basilio_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDiscordClick = () => {
    navigator.clipboard
      .writeText(discordUsername)
      .then(() => {
        setCopied(true);
        showSnackbar("Discord username copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy Discord username: ", err);
        showSnackbar("Failed to copy Discord username");
      });
    window.open("discord:///invites", "_blank");
    setTimeout(() => {
      window.open("discord:///users/@me", "_blank");
      setTimeout(() => {
        console.log("Username copied:", discordUsername);
      }, 1000);
    }, 300);
  };

  const TimelineElement = ({ index }) => (
    <div
      className="flex flex-col items-center mr-3 mt-2"
      style={{ width: "11px", height: "80px" }}
    >
      <div
        style={{
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          backgroundColor: hoveredIndex === index ? "#24FF45" : "transparent",
          border: "2px solid #A8A8A8",
          transition: "background-color 0.3s ease",
        }}
      />

      <div
        style={{
          width: "1.4px",
          height: "50px",
          borderRadius: "15px",
          backgroundColor: "#A8A8A8",
          margin: "5px ",
        }}
      />

      <div
        style={{
          width: "11px",
          height: "11px",
          borderRadius: "50%",
          backgroundColor:
            hoveredIndex === index + 1 ? "#24FF45" : "transparent",
          border: "2px solid #A8A8A8",
          transition: "background-color 0.3s ease",
        }}
      />
    </div>
  );

  useEffect(() => {
    if (snackbar.show && !snackbar.animating) {
      const timer = setTimeout(() => {
        setSnackbar({ show: false, message: "", animating: false });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [snackbar.show, snackbar.animating]);

  const showSnackbar = (message) => {
    setSnackbar({ show: true, message, animating: true });
    setTimeout(() => {
      setSnackbar((prev) => ({ ...prev, animating: false }));
    }, 1700);
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+639095358493";
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        setPhoneCopied(true);
        showSnackbar("Phone number copied to clipboard!");
        setTimeout(() => setPhoneCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy phone number: ", err);
        showSnackbar("Failed to copy phone number");
      });
  };

  const handleEmailClick = () => {
    const email = "arragenbasilio07@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setEmailCopied(true);
        showSnackbar("Email address copied to clipboard!");
        setTimeout(() => setEmailCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
        showSnackbar("Failed to copy email address");
      });
  };

  const logos = [
    { src: vscode, alt: "VS Code" },
    { src: xampp, alt: "XAMPP" },
    { src: windsurf, alt: "Windsurf" },
    { src: cursor, alt: "Cursor" },
    { src: visualStudio, alt: "Visual Studio" },
    { src: pycharm, alt: "PyCharm" },
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: php, alt: "PHP" },
    { src: cplus, alt: "C++" },
    { src: python, alt: "Python" },
    { src: java, alt: "Java" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: react, alt: "React" },
    { src: tailwindcss, alt: "Tailwind CSS" },
    { src: mysql, alt: "MySQL" },
    { src: github1, alt: "GitHub" },
    { src: canva, alt: "Canva" },
    { src: figma, alt: "Figma" },
    { src: photoshop, alt: "Photoshop" },
    { src: animate, alt: "Animate" },
  ];

  return (
    <section className="about min-h-screen flex flex-col items-center bg-[#222D23]">
      {/* HEADER SECTION */}
      <div
        className="header-container flex items-left justify-left mt-10 mb-10"
        style={{
          width: "800px",
          height: "180px",
          cursor: "default",
        }}
      >
        <div className="profile-image mr-9">
          <img
            src={Profile}
            alt="Profile"
            style={{ width: "190px", borderRadius: "10px" }}
          />
        </div>
        <div
          className="info-contents"
          style={{ width: "620px", height: "137px" }}
        >
          <h1
            className="name mb-2.5 mt-1.5"
            style={{
              fontFamily: "Readex Pro, sans-serif",
              fontWeight: "bold",
              fontSize: "35px",
              color: "#EFEFEF",
            }}
          >
            Arragen A. Basilio
          </h1>
          <div className="education flex items-center mb-3">
            <img
              src={Education}
              alt="Education"
              style={{ width: "20px", marginRight: "8px" }}
            />
            <p
              style={{
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "light",
                fontSize: "13px",
                color: "#EFEFEF",
              }}
            >
              Bachelor of Science in Information Technology
            </p>
          </div>
          <div className="location flex items-center mb-2">
            <img
              src={Location}
              alt="Location"
              style={{ width: "20px", marginRight: "8px" }}
            />
            <p
              style={{
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "light",
                fontSize: "13px",
                color: "#EFEFEF",
              }}
            >
              Calamba City, Laguna
            </p>
          </div>

          <div
            className="buttons flex items-center"
            style={{ width: "250px", height: "50px" }}
          >
            <button
              className="download-cv flex items-center justify-center mr-5 transition-all duration-300 hover:bg-[#d8d8d8] hover:scale-105"
              style={{
                width: "130px",
                height: "33px",
                backgroundColor: "#EFEFEF",
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "Bold",
                fontSize: "13px",
                color: "#1E1E1E",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleDownloadCV}
            >
              Download CV
            </button>
            <div className="social-icons flex">
              <a
                href="https://www.instagram.com/dkfkwps/"
                className="mr-2.5 transition-all duration-300 hover:opacity-80 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  style={{ width: "40px" }}
                />
              </a>
              <a
                href="https://github.com/dkfkwps7"
                className="mr-2.5 transition-all duration-300 hover:opacity-80 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} alt="Github" style={{ width: "40px" }} />
              </a>
              <button
                className="transition-all duration-300 hover:opacity-80 hover:scale-110 relative"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                }}
                onClick={handleDiscordClick}
              >
                <img src={Discord} alt="Discord" style={{ width: "40px" }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div
        className="about-container flex flex-col bg-[#2A3A2B]"
        style={{
          width: "800px",
          height: "300px",
          border: "#EFEFEF solid 1px",
          borderRadius: "10px",
          padding: "20px",
          cursor: "default",
        }}
      >
        <h2
          className="-mt-2"
          style={{
            fontFamily: "Readex Pro, sans-serif",
            fontWeight: "600",
            fontSize: "20px",
            color: "#EFEFEF",
            marginBottom: "5px",
          }}
        >
          ABOUT
        </h2>

        <p
          style={{
            fontFamily: "Readex Pro, sans-serif",
            fontWeight: "300",
            fontSize: "13.5px",
            color: "#EFEFEF",
            lineHeight: "1.3",
            textAlign: "justify",
          }}
        >
          As a recent Bachelor of Science in Information Technology graduate,
          I'm passionate about transforming ideas into digital solutions through
          code. My journey in tech is just beginning, with a strong focus on web
          development as my foundation. I'm eager to collaborate with and learn
          from seasoned professionals in the tech industry, believing that
          growth comes through mentorship and real-world experience.
          <br />
          <br />
          My curiosity extends beyond web technologies—I'm committed to
          expanding my expertise across multiple programming languages,
          frameworks, and APIs. While web development is my current focus, I'm
          equally excited about exploring software development, mobile
          application creation, and other emerging technologies. I believe in
          continuous learning and see every project as an opportunity to grow,
          adapt, and contribute meaningfully to the ever-evolving tech
          landscape.
          <br />
          <br />
          I'm ready to bring fresh perspectives, dedication, and an insatiable
          appetite for learning to any development team or project.
        </p>
      </div>

      {/* EXPERIENCE AND PROJECT SECTION */}
      {/* EXPERIENCE CONTAINER */}
      <div className="flex mt-3 gap-3" style={{ width: "800px" }}>
        <div
          className="experience-container flex flex-col bg-[#2A3A2B]"
          style={{
            width: "390px",
            height: "180px",
            border: "#EFEFEF solid 1px",
            borderRadius: "10px",
            padding: "20px",
            cursor: "default",
          }}
        >
          <h2
            className="-mt-2"
            style={{
              fontFamily: "Readex Pro, sans-serif",
              fontWeight: "600",
              fontSize: "20px",
              color: "#EFEFEF",
              marginBottom: "10px",
            }}
          >
            EXPERIENCE
          </h2>

          <div className="flex items-start mb-3">
            <TimelineElement index={0} />

            <div className="mt-0.6 flex-1">
              <div className="flex justify-between items-start">
                <div
                  className="experience-item flex-1 mr-3"
                  onMouseEnter={() => setHoveredIndex(0)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ transition: "color 0.3s ease" }}
                >
                  <p
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "500",
                      fontSize: "15px",
                      color: "#EFEFEF",
                      transition: "color 0.3s ease",
                    }}
                  >
                    IT Intern
                  </p>
                  <p
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "300",
                      fontSize: "11px",
                      color: "#EFEFEF",
                      lineHeight: "1.4",
                      transition: "color 0.3s ease",
                    }}
                  >
                    Am-Europharma Corporation
                  </p>
                </div>

                <div
                  className="mt-3"
                  style={{
                    width: "37px",
                    height: "17px",
                    borderRadius: "50px",
                    backgroundColor: "transparent",
                    border: "1px solid #EFEFEF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "300",
                      fontSize: "9px",
                      color: "#EFEFEF",
                    }}
                  >
                    2025
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start mt-8.5">
                <div
                  className="experience-item flex-1 mr-3"
                  onMouseEnter={() => setHoveredIndex(1)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ transition: "color 0.3s ease" }}
                >
                  <p
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "500",
                      fontSize: "15px",
                      color: "#EFEFEF",
                      transition: "color 0.3s ease",
                    }}
                  >
                    BS Information Technology
                  </p>
                  <p
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "300",
                      fontSize: "11px",
                      color: "#EFEFEF",
                      lineHeight: "1.4",
                      transition: "color 0.3s ease",
                    }}
                  >
                    University of Perpetual Help System DALTA
                  </p>
                </div>

                <div
                  className="mt-3"
                  style={{
                    width: "37px",
                    height: "17px",
                    borderRadius: "50px",
                    backgroundColor: "transparent",
                    border: "1px solid #EFEFEF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "300",
                      fontSize: "9px",
                      color: "#EFEFEF",
                    }}
                  >
                    2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT SECTION */}
        <div
          className="project-container flex flex-col bg-[#2A3A2B] mb-3"
          style={{
            width: "410px",
            height: "180px",
            border: "#EFEFEF solid 1px",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h2
            className="-mt-2"
            style={{
              fontFamily: "Readex Pro, sans-serif",
              fontWeight: "600",
              fontSize: "20px",
              color: "#EFEFEF",
              marginBottom: "10px",
              cursor: "default",
            }}
          >
            PROJECT
          </h2>

          <div className="project-item">
            <div className="flex justify-between items-center mb-2">
              <h3
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#EFEFEF",
                  cursor: "default",
                }}
              >
                eXBatch Enrolment System
              </h3>

              <Link
                to="/project"
                className="flex items-center transition-all duration-300 hover:opacity-80 hover:scale-105"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "Readex Pro, sans-serif",
                    fontWeight: "300",
                    fontSize: "12px",
                    color: "#EFEFEF",
                    marginRight: "4px",
                  }}
                >
                  View
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginTop: "0.5px" }}
                >
                  <path
                    d="M184.6 408.3c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3L297.4 256 156.3 114.9c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l152 152c7.8 7.8 7.8 20.5 0 28.3l-152 152z"
                    fill="#EFEFEF"
                  />
                </svg>
              </Link>
            </div>

            <p
              style={{
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "300",
                fontSize: "12px",
                color: "#EFEFEF",
                lineHeight: "1.3",
                textAlign: "justify",
                cursor: "default",
              }}
            >
              A web-based application designed to streamline the enrolment of
              batch numbers for Toll-supplied materials into the EXACT system.
              Offering role-based access for easy submission, approval, and
              tracking.
            </p>
          </div>
        </div>
      </div>

      {/* TECH STACK SECTION */}
      <div
        className="tech-stack-container flex flex-col bg-[#2A3A2B] mb-3"
        style={{
          width: "800px",
          height: "420px",
          border: "#EFEFEF solid 1px",
          borderRadius: "10px",
          padding: "20px",
          paddingBottom: "10px",
        }}
      >
        <h2
          className="-mt-2"
          style={{
            fontFamily: "Readex Pro, sans-serif",
            fontWeight: "600",
            fontSize: "20px",
            color: "#EFEFEF",
            marginBottom: "15px",
          }}
        >
          TECH STACK
        </h2>

        {/* LOGO LOOP SECTION */}
        <div
          className="logo-loop-container mb-6 overflow-hidden relative"
          style={{
            width: "100%",
            height: "65px",
            backgroundColor: "transparent",
            borderRadius: "5px",
          }}
          onMouseEnter={() => {
            setIsLogoLoopHovered(true);
            setIsPaused(true);
          }}
          onMouseLeave={() => {
            setIsLogoLoopHovered(false);
            setHoveredIndex(null);
            setTimeout(() => setIsPaused(false), 50);
          }}
        >
          <div
            ref={logoLoopRef}
            className="logo-loop flex items-center h-full"
            style={{
              width: "max-content",
              transition: isPaused ? "transform 0.5s ease-out" : "none",
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="logo-item flex items-center justify-center mx-4 transition-all duration-300"
                style={{
                  width: "35px",
                  height: "35px",
                  flexShrink: 0,
                  transform:
                    isLogoLoopHovered && hoveredIndex === index
                      ? "scale(1.1)"
                      : "scale(1)",
                  filter:
                    isLogoLoopHovered && hoveredIndex === index
                      ? "brightness(1.2) drop-shadow(0 0 4px #24FF45)"
                      : "brightness(1)",
                  zIndex: isLogoLoopHovered && hoveredIndex === index ? 10 : 1,
                }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  setIsLogoLoopHovered(true);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>
            ))}
          </div>

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "50px",
              height: "100%",
              background: "linear-gradient(to right, #2F4530, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50px",
              height: "100%",
              background: "linear-gradient(to left, #2F4530, transparent)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Tech Stack Containers */}
        <div className="flex flex-wrap justify-between">
          {/* Development Tools Container */}
          <div
            className="tech-category"
            style={{
              width: "175px",
              height: "250px",
              backgroundColor: "#2F4530",
              borderRadius: "10px",
              border: "#EFEFEF solid 1px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3
              style={{
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "500",
                fontSize: "15px",
                color: "#EFEFEF",
                textAlign: "center",
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              Development <br />
              Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "VS Code",
                "XAMPP",
                "Windsurf",
                "Cursor",
                "Visual Studio",
                "Git",
                "Pycharm",
                "Github",
              ].map((dev) => (
                <span
                  key={dev}
                  className="dev-tag"
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
                  {dev}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend Container */}
          <div
            className="tech-category"
            style={{
              width: "210px",
              height: "250px",
              backgroundColor: "#2F4530",
              borderRadius: "10px",
              border: "#EFEFEF solid 1px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3
              style={{
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "500",
                fontSize: "16px",
                color: "#EFEFEF",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Frontend
            </h3>
            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#EFEFEF",
                }}
              >
                HTML
              </span>
              <div
                style={{
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#EFEFEF",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "6px",
                    backgroundColor: "#24FF45",
                    borderRadius: "3px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#EFEFEF",
                }}
              >
                CSS
              </span>
              <div
                style={{
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#EFEFEF",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "6px",
                    backgroundColor: "#24FF45",
                    borderRadius: "3px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#EFEFEF",
                }}
              >
                JavaScript
              </span>
              <div
                style={{
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#EFEFEF",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "6px",
                    backgroundColor: "#24FF45",
                    borderRadius: "3px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#EFEFEF",
                }}
              >
                Tailwind CSS
              </span>
              <div
                style={{
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#EFEFEF",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "55px",
                    height: "6px",
                    backgroundColor: "#24FF45",
                    borderRadius: "3px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#EFEFEF",
                }}
              >
                React.js
              </span>
              <div
                style={{
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#EFEFEF",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "6px",
                    backgroundColor: "#24FF45",
                    borderRadius: "3px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Bootstrap", "Material UI", "Vite", "HeroUI"].map(
                (frontend) => (
                  <span
                    key={frontend}
                    className="frontend-tag"
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "300",
                      fontSize: "12px",
                      color: "#EFEFEF",
                      border: "1px solid #EFEFEF",
                      borderRadius: "3px",
                      padding: "2px 8px",
                      display: "inline-block",
                    }}
                  >
                    {frontend}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Backend Container */}
          <div
            className="tech-category"
            style={{
              width: "190px",
              height: "250px",
              backgroundColor: "#2F4530",
              borderRadius: "10px",
              border: "#EFEFEF solid 1px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3
              style={{
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "500",
                fontSize: "16px",
                color: "#EFEFEF",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Backend
            </h3>

            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#EFEFEF",
                }}
              >
                PHP
              </span>
              <div
                style={{
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#EFEFEF",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "55px",
                    height: "6px",
                    backgroundColor: "#24FF45",
                    borderRadius: "3px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#EFEFEF",
                }}
              >
                Python
              </span>
              <div
                style={{
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#EFEFEF",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "6px",
                    backgroundColor: "#24FF45",
                    borderRadius: "3px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#EFEFEF",
                }}
              >
                Java
              </span>
              <div
                style={{
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#EFEFEF",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "6px",
                    backgroundColor: "#24FF45",
                    borderRadius: "3px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#EFEFEF",
                }}
              >
                C++
              </span>
              <div
                style={{
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#EFEFEF",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "45px",
                    height: "6px",
                    backgroundColor: "#24FF45",
                    borderRadius: "3px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-1">
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "400",
                  fontSize: "13px",
                  color: "#EFEFEF",
                }}
              >
                VB.Net
              </span>
              <div
                style={{
                  width: "80px",
                  height: "6px",
                  backgroundColor: "#EFEFEF",
                  borderRadius: "3px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "6px",
                    backgroundColor: "#24FF45",
                    borderRadius: "3px",
                    position: "absolute",
                  }}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {["MySQL", "C#"].map((frontend) => (
                <span
                  key={frontend}
                  className="backend-tag"
                  style={{
                    fontFamily: "Readex Pro, sans-serif",
                    fontWeight: "300",
                    fontSize: "12px",
                    color: "#EFEFEF",
                    border: "1px solid #EFEFEF",
                    borderRadius: "3px",
                    padding: "2px 8px",
                    display: "inline-block",
                  }}
                >
                  {frontend}
                </span>
              ))}
            </div>
          </div>

          {/* Design Tools Container */}
          <div
            className="tech-category"
            style={{
              width: "160px",
              height: "250px",
              backgroundColor: "#2F4530",
              borderRadius: "10px",
              border: "#EFEFEF solid 1px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3
              style={{
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "500",
                fontSize: "16px",
                color: "#EFEFEF",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Design Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {["Canva", "Figma", "Adobe Photoshop", "Adobe Animate"].map(
                (frontend) => (
                  <span
                    key={frontend}
                    className="design-tag"
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "300",
                      fontSize: "12px",
                      color: "#EFEFEF",
                      border: "1px solid #EFEFEF",
                      borderRadius: "3px",
                      padding: "2px 8px",
                      display: "inline-block",
                    }}
                  >
                    {frontend}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {/* NEW SECTIONS: ACHIEVEMENTS, LEADERSHIP ROLE, CONNECT */}
      <div className="flex gap-3" style={{ width: "800px" }}>
        {/* ACHIEVEMENTS SECTION */}
        <div
          className="achievements-container flex flex-col bg-[#2A3A2B]"
          style={{
            width: "385px",
            height: "310px",
            border: "#EFEFEF solid 1px",
            borderRadius: "10px",
            padding: "20px",
            cursor: "default",
          }}
        >
          <h2
            className="-mt-2"
            style={{
              fontFamily: "Readex Pro, sans-serif",
              fontWeight: "600",
              fontSize: "20px",
              color: "#EFEFEF",
              marginBottom: "10px",
            }}
          >
            ACHIEVEMENTS
          </h2>

          {/* Achievement 1 */}
          <div
            className="achievement-item flex justify-between items-start"
            style={{
              width: "auto",
              height: "80px",
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: "#2F4530",
              borderRadius: "5px",
              border: "#EFEFEF solid 1px",
            }}
          >
            <div className="flex flex-col">
              <h3
                className=""
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#EFEFEF",
                  marginBottom: "5px",
                  textAlign: "left",
                }}
              >
                Outstanding in Practicum
              </h3>
              <p
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "300",
                  fontSize: "9px",
                  color: "#EFEFEF",
                  lineHeight: "1.5",
                  textAlign: "left",
                  marginBottom: "5px",
                }}
              >
                Recognized for outstanding performance and professionalism
                during On-the-Job Training at Am-Europharma Corporation.
              </p>
            </div>
            <div
              style={{
                width: "37px",
                height: "17px",
                borderRadius: "50px",
                backgroundColor: "transparent",
                border: "1px solid #EFEFEF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "3px",
              }}
            >
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "300",
                  fontSize: "9px",
                  color: "#EFEFEF",
                }}
              >
                2025
              </span>
            </div>
          </div>

          {/* Achievement 2 */}
          <div
            className="achievement-item flex justify-between items-start"
            style={{
              width: "auto",
              height: "70px",
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: "#2F4530",
              borderRadius: "5px",
              border: "#EFEFEF solid 1px",
            }}
          >
            <div className="flex flex-col">
              <h3
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#EFEFEF",
                  marginBottom: "5px",
                  textAlign: "left",
                }}
              >
                Dean's Lister
              </h3>
              <p
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "300",
                  fontSize: "12px",
                  color: "#EFEFEF",
                  lineHeight: "1.2",
                  textAlign: "left",
                  marginBottom: "5px",
                }}
              >
                Achieved a General Weighted Average of 1.55
              </p>
            </div>
            <div
              style={{
                width: "37px",
                height: "17px",
                borderRadius: "50px",
                backgroundColor: "transparent",
                border: "1px solid #EFEFEF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "3px",
              }}
            >
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "300",
                  fontSize: "9px",
                  color: "#EFEFEF",
                }}
              >
                2024
              </span>
            </div>
          </div>

          {/* Achievement 3 */}
          <div
            className="achievement-item flex justify-between items-start"
            style={{
              width: "auto",
              height: "80px",
              padding: "10px",
              marginBottom: "5px",
              backgroundColor: "#2F4530",
              borderRadius: "5px",
              border: "#EFEFEF solid 1px",
            }}
          >
            <div className="flex flex-col">
              <h3
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#EFEFEF",
                  marginBottom: "5px",
                  textAlign: "left",
                }}
              >
                Top Performing Student
              </h3>
              <p
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "300",
                  fontSize: "9px",
                  color: "#EFEFEF",
                  lineHeight: "1.2",
                  textAlign: "left",
                  marginBottom: "5px",
                }}
              >
                Recognized for outstanding academic performance in the College
                of Computer Studies
              </p>
            </div>
            <div
              style={{
                width: "37px",
                height: "17px",
                borderRadius: "50px",
                backgroundColor: "transparent",
                border: "1px solid #EFEFEF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "3px",
              }}
            >
              <span
                style={{
                  fontFamily: "Readex Pro, sans-serif",
                  fontWeight: "300",
                  fontSize: "9px",
                  color: "#EFEFEF",
                }}
              >
                2024
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3" style={{ width: "400px" }}>
          {/* LEADERSHIP ROLE SECTION */}
          <div
            className="leadership-container flex flex-col bg-[#2A3A2B]"
            style={{
              width: "405px",
              height: "185px",
              border: "#EFEFEF solid 1px",
              borderRadius: "10px",
              padding: "20px",
              cursor: "default",
            }}
          >
            <h2
              className="-mt-2"
              style={{
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "600",
                fontSize: "20px",
                color: "#EFEFEF",
                marginBottom: "10px",
              }}
            >
              LEADERSHIP ROLE
            </h2>

            <div className="flex items-start mb-3">
              <TimelineElement index={0} />

              <div className="mt-0.6 flex-1">
                <div className="flex justify-between items-start">
                  <div
                    className="experience-item flex-1 mr-3"
                    onMouseEnter={() => setHoveredIndex(0)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ transition: "color 0.3s ease" }}
                  >
                    <p
                      style={{
                        fontFamily: "Readex Pro, sans-serif",
                        fontWeight: "500",
                        fontSize: "15px",
                        color: "#EFEFEF",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Public Relations Officer (P.R.O)
                    </p>
                    <p
                      style={{
                        fontFamily: "Readex Pro, sans-serif",
                        fontWeight: "300",
                        fontSize: "9px",
                        color: "#EFEFEF",
                        lineHeight: "1.4",
                        transition: "color 0.3s ease",
                      }}
                    >
                      UPHSD College of Computer Studies Student Council
                    </p>
                  </div>

                  <div
                    className="mt-3"
                    style={{
                      width: "73px",
                      height: "17px",
                      borderRadius: "50px",
                      backgroundColor: "transparent",
                      border: "1px solid #EFEFEF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Readex Pro, sans-serif",
                        fontWeight: "300",
                        fontSize: "9px",
                        color: "#EFEFEF",
                      }}
                    >
                      2023 - 2025
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start mt-9">
                  <div
                    className="experience-item flex-1 mr-3"
                    onMouseEnter={() => setHoveredIndex(1)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ transition: "color 0.3s ease" }}
                  >
                    <p
                      style={{
                        fontFamily: "Readex Pro, sans-serif",
                        fontWeight: "500",
                        fontSize: "15px",
                        color: "#EFEFEF",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Business Manager
                    </p>
                    <p
                      style={{
                        fontFamily: "Readex Pro, sans-serif",
                        fontWeight: "300",
                        fontSize: "9px",
                        color: "#EFEFEF",
                        lineHeight: "1.4",
                        transition: "color 0.3s ease",
                      }}
                    >
                      UPHSD College of Computer Studies Student Council
                    </p>
                  </div>

                  <div
                    className="mt-3"
                    style={{
                      width: "73px",
                      height: "17px",
                      borderRadius: "50px",
                      backgroundColor: "transparent",
                      border: "1px solid #EFEFEF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Readex Pro, sans-serif",
                        fontWeight: "300",
                        fontSize: "9px",
                        color: "#EFEFEF",
                      }}
                    >
                      2022 - 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONNECT SECTION */}
          <div
            className="connect-container flex flex-col bg-[#2A3A2B] relative"
            style={{
              width: "405px",
              height: "115px",
              border: "#EFEFEF solid 1px",
              borderRadius: "10px",
              padding: "20px",
              cursor: "default",
            }}
          >
            <h2
              className="-mt-2"
              style={{
                fontFamily: "Readex Pro, sans-serif",
                fontWeight: "600",
                fontSize: "20px",
                color: "#EFEFEF",
                marginBottom: "10px",
              }}
            >
              CONNECT
            </h2>

            <div className="flex items-center justify-between">
              <div className="flex items-center relative">
                <button
                  onClick={handlePhoneClick}
                  className="transition-all duration-300 hover:opacity-80 hover:scale-110"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={Phone}
                    alt="Phone"
                    style={{
                      width: "35px",
                      height: "35px",
                    }}
                  />
                </button>
              </div>
              <div className="flex items-center relative">
                <button
                  onClick={handleEmailClick}
                  className="flex items-center transition-all duration-300 hover:opacity-80"
                  style={{
                    width: "307px",
                    height: "40px",
                    backgroundColor: "#2F4530",
                    border: "#EFEFEF solid 1px",
                    borderRadius: "5px",
                    padding: "5px",
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={Email}
                    alt="Email"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Readex Pro, sans-serif",
                      fontWeight: "400",
                      fontSize: "15px",
                      color: "#EFEFEF",
                    }}
                  >
                    arragenbasilio07@gmail.com
                  </span>
                </button>
              </div>
            </div>

            {snackbar.show && (
              <div
                className={`fixed top-6 right-6 bg-[#4A5B4C] text-white px-6 py-3 rounded-lg shadow-lg flex items-center z-50 ${
                  snackbar.animating ? "animate-fade-in" : "animate-fade-out"
                }`}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>{snackbar.message}</span>
              </div>
            )}

            <style jsx>{`
              @keyframes fade-in {
                from {
                  opacity: 0;
                  transform: translateY(-20px) scale(0.9);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }

              @keyframes fade-out {
                from {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
                to {
                  opacity: 0;
                  transform: translateY(-20px) scale(0.9);
                }
              }

              .animate-fade-in {
                animation: fade-in 0.3s ease-out forwards;
              }

              .animate-fade-out {
                animation: fade-out 0.3s ease-in forwards;
              }
            `}</style>
          </div>
        </div>
      </div>
      {/* FOOTER SECTION */}
      <div
        className="footer-container flex flex-col items-center mt-17 mb-10"
        style={{ width: "800px" }}
      >
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#EFEFEF",
            marginBottom: "20px",
            opacity: "0.3",
          }}
        ></div>

        <div className="flex items-center">
          <img
            src={Copyright}
            alt="Copyright"
            style={{ width: "10px", marginRight: "8px" }}
          />
          <p
            style={{
              fontFamily: "Readex Pro, sans-serif",
              fontWeight: "300",
              fontSize: "13px",
              color: "#EFEFEF",
            }}
          >
            2025 Arragen Basilio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

const style = document.createElement("style");
style.textContent = `
  @keyframes logoLoop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-50% - 20px));
    }
  }
`;
document.head.appendChild(style);

export default Hero;
