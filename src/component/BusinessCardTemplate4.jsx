const BusinessCardTemplate4 = () => {
  return (
    <div className="business-card-container">
      {/* Background shapes */}
      <div className="background-shape-left"></div>
      <div className="background-shape-top-right"></div>

      {/* Main content */}
      <div className="card-content">
        {/* Left section - Profile picture */}
        <div className="profile-section">
          <div className="hexagon-container">
            <div className="hexagon">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="David John"
                className="profile-image"
              />
            </div>
          </div>
        </div>

        {/* Center section - Main contact info */}
        <div className="main-info-section">
          <div className="name-section">
            <div className="person-icon">👤</div>
            <div>
              <h1 className="name">David John</h1>
              <p className="title">Managing Director</p>
              <p className="company">InReality, Inc.</p>
            </div>
          </div>

          <div className="divider"></div>

          {/* Social media icons */}
          <div className="social-icons">
            <div className="social-icon">f</div>
            <div className="social-icon">📷</div>
            <div className="social-icon">𝕏</div>
            <div className="social-icon">in</div>
          </div>
        </div>

        {/* Right section - Contact details */}
        <div className="contact-details">
          <div className="contact-item">
            <div className="contact-bullet"></div>
            <div className="contact-icon">📞</div>
            <span>012 5487 663</span>
          </div>

          <div className="contact-item">
            <div className="contact-bullet"></div>
            <div className="contact-icon">🌐</div>
            <span>www.yoursiteurl.com</span>
          </div>

          <div className="contact-item">
            <div className="contact-bullet"></div>
            <div className="contact-icon">📍</div>
            <span>123 Road State, Country</span>
          </div>
        </div>
      </div>

      {/* Save contact button */}
      <div className="save-button-container">
        <button className="save-button">SAVE CONTACT</button>
      </div>

      <style jsx>{`
        .business-card-container {
          position: relative;
          width: 800px;
          height: 400px;
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          font-family: 'Arial', sans-serif;
        }

        .background-shape-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 60%;
          height: 100%;
          background: linear-gradient(135deg, #20B2AA 0%, #48CAE4 100%);
          border-radius: 0 0 50% 0;
          z-index: 1;
        }

        .background-shape-top-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 30%;
          height: 40%;
          background: linear-gradient(135deg, #20B2AA 0%, #48CAE4 100%);
          border-radius: 0 0 0 50%;
          z-index: 1;
        }

        .card-content {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          height: 100%;
          padding: 40px;
          gap: 40px;
        }

        .profile-section {
          flex-shrink: 0;
        }

        .hexagon-container {
          position: relative;
        }

        .hexagon {
          width: 120px;
          height: 120px;
          background: white;
          border: 4px solid white;
          border-radius: 20px;
          transform: rotate(45deg);
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: rotate(-45deg);
          border-radius: 15px;
        }

        .main-info-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .name-section {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .person-icon {
          width: 40px;
          height: 40px;
          background: #20B2AA;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          font-weight: bold;
        }

        .name {
          font-size: 32px;
          font-weight: bold;
          color: #333;
          margin: 0;
        }

        .title {
          font-size: 18px;
          color: #333;
          margin: 5px 0;
          font-weight: normal;
        }

        .company {
          font-size: 18px;
          color: #333;
          margin: 0;
          font-weight: normal;
        }

        .divider {
          width: 100%;
          height: 2px;
          background: #333;
          margin: 10px 0;
        }

        .social-icons {
          display: flex;
          gap: 10px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background: #20B2AA;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 16px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 15px;
          min-width: 200px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #333;
          font-size: 16px;
        }

        .contact-bullet {
          width: 8px;
          height: 8px;
          background: #20B2AA;
          border-radius: 50%;
        }

        .contact-icon {
          width: 30px;
          height: 30px;
          background: #20B2AA;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
        }

        .save-button-container {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }

        .save-button {
          background: #20B2AA;
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 25px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 5px 15px rgba(32, 178, 170, 0.3);
          transition: all 0.3s ease;
        }

        .save-button:hover {
          background: #1a9b94;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(32, 178, 170, 0.4);
        }
      `}</style>
    </div>
  )
}

export default BusinessCardTemplate4;
