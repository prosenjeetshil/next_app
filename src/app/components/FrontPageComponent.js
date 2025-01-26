import { useState } from "react";
import styles from "../page.module.css";

const FrontPageComponent = () => {
  const [showDetails, setShowDetails] = useState(false); // State to toggle details
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for carousel
  const carouselData = [
    {
      image: "/d1.jpg",
      text: "Start your journey to a healthier lifestyle with a balanced diet!",
    },
    {
      image: "/d2.jpg",
      text: "Fuel your body with the nutrients it needs for peak performance!",
    },
    {
      image: "/d3.jpg",
      text: "Discover recipes and tips for a sustainable healthy living!",
    },
  ];

  // Function to handle carousel navigation
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.frontPage}>
      <button
        style={{
          position: "absolute",
          top: "65%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "10px 20px",
          backgroundColor: "#FFA500",
          color: "#fff",
          fontWeight: "600",
          fontSize: "1rem",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onClick={() => setShowDetails(true)}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#FF8C00")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#FFA500")}
      >
        Learn More
      </button>

      {/* Blurred Tile with Carousel */}
      {showDetails && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#fff",
              borderRadius: "10px",
              padding: "20px",
              maxWidth: "600px",
              width: "90%",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
            }}
          >
            {/* Close Button */}
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#333",
              }}
              onClick={() => setShowDetails(false)}
            >
              &times;
            </button>

            {/* Carousel */}
            <img
              src={carouselData[currentImageIndex].image}
              alt={`Diet Detail ${currentImageIndex + 1}`}
              style={{
                width: "100%",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />

            {/* Carousel Dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {carouselData.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor:
                      currentImageIndex === index ? "#0070f3" : "#ccc",
                    cursor: "pointer",
                  }}
                ></div>
              ))}
            </div>

            {/* Text Below Carousel */}
            <p
              style={{
                marginTop: "20px",
                fontSize: "1rem",
                fontWeight: "400",
                color: "#555",
              }}
            >
              {carouselData[currentImageIndex].text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontPageComponent;
