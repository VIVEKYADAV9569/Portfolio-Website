import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education
          <br />
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>G L Bajaj Group of Institutions, Mathura</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              CGPA: 7.6
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (Class XII)</h4>
                <h5>Maharani Laxmi Bai Inter College</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Percentage: 85.4%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School (Class X)</h4>
                <h5>Maharani Laxmi Bai Inter College</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Percentage: 85.6%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
