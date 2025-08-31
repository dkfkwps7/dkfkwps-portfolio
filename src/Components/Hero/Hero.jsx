import React, { useState } from "react";
import Profile from "/src/assets/Profile.svg";
import TempProfile from "/src/assets/TempProfile.svg";
import Education from "/src/assets/Icons/Education.svg";
import Location from "/src/assets/Icons/Location.svg";
import Instagram from "/src/assets/Icons/Instagram.svg";
import Github from "/src/assets/Icons/Github.svg";
import Discord from "/src/assets/Icons/Discord.svg";
import CV from "/src/assets/Arragen_Basilio_CV.pdf";

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const discordUsername = "tomataur.";

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
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
    window.open("discord:///users/@me", "_blank");

    setTimeout(() => {
      window.open("https://discord.com/channels/@me", "_blank");
    }, 500);
  };

  return (
    <section className="about min-h-screen flex flex-col items-center bg-[#222D23]">
      <div
        className="header-container flex items-left justify-left mt-30"
        style={{
          width: "800px",
          height: "180px",
        }}
      >
        <div className="profile-image mr-9">
          <img
            src={TempProfile}
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
          <div className="education flex items-center mb-2.5">
            <img
              src={Education}
              alt="Education"
              style={{ width: "25px", marginRight: "8px" }}
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
              style={{ width: "25px", marginRight: "8px" }}
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
                href="https://github.com/dkfkwps"
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
                {copied && (
                  <div className="absolute -top-8 -left-5 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Copied! Username: {discordUsername}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="about-container flex flex-col bg-[#2A3A2B] mt-10"
        style={{
          width: "800px",
          height: "380px",
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
            marginBottom: "5px",
          }}
        >
          ABOUT
        </h2>

        <p
          style={{
            fontFamily: "Readex Pro, sans-serif",
            fontWeight: "300",
            fontSize: "15px",
            color: "#EFEFEF",
            lineHeight: "1.6",
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

      {/* New EXPERIENCE and PROJECT containers */}
      <div className="flex mt-5 gap-5" style={{ width: "800px" }}>
        {/* EXPERIENCE Container */}
        <div
          className="experience-container flex flex-col bg-[#2A3A2B]"
          style={{
            width: "350px",
            height: "164px",
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
            }}
          >
            EXPERIENCE
          </h2>
          <p
            style={{
              fontFamily: "Readex Pro, sans-serif",
              fontWeight: "300",
              fontSize: "15px",
              color: "#EFEFEF",
              lineHeight: "1.6",
            }}
          >
            {/* Add your experience content here */}
            Currently seeking opportunities to apply my skills and gain
            real-world experience in web development and software engineering.
          </p>
        </div>

        {/* PROJECT Container */}
        <div
          className="project-container flex flex-col bg-[#2A3A2B]"
          style={{
            width: "435px",
            height: "164px",
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
            }}
          >
            PROJECT
          </h2>
          <p
            style={{
              fontFamily: "Readex Pro, sans-serif",
              fontWeight: "300",
              fontSize: "15px",
              color: "#EFEFEF",
              lineHeight: "1.6",
            }}
          >
            {/* Add your project content here */}
            Working on personal projects to enhance my skills in React, Node.js,
            and other modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
