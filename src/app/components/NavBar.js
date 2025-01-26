"use client";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const Navbar = () => {
  return (
      <>
      {/* Navbar */}
      <div
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            margin: "5px 20px 20px 5px",
            alignItems: "center",
            padding: "20px 20px",
            backgroundColor: "rgba(255, 255, 255, 0.04)", // Transparent background
            backdropFilter: "blur(10px)", // Blur effect
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.13)", // Subtle shadow
          }}
        >
          {/* Logo */}
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            <a href="/" style={{ textDecoration: "none", color: "#333" }}>
              Personal Diet Advisor
            </a>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", gap: "20px" }}>
          <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#F4FFC3")}
              onMouseOut={(e) => (e.target.style.color = "#333")}
            >
              Home
            </a>
            <a
              href="/recipes"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#F4FFC3")}
              onMouseOut={(e) => (e.target.style.color = "#333")}
            >
              Recipes
            </a>
            <a
              href="/exercises"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#F4FFC3")}
              onMouseOut={(e) => (e.target.style.color = "#333")}
            >
              Exercises
            </a>
            {/* <a
              href="#contact"
              style={{
                textDecoration: "none",
                color: "#333",
                fontWeight: "500",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.target.style.color = "#F4FFC3")}
              onMouseOut={(e) => (e.target.style.color = "#333")}
            >
              Contact
            </a> */}
          </div>
        </div>
      </>
  );
};

export default Navbar;
