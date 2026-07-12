import "./styles/Certifications.css";

const Certifications = () => {
  const certs = [
    {
      title: "JAVA Certificate",
      status: "Verified",
      description: "Demonstrates strong understanding and proficiency in core Java programming, object-oriented principles, and data structures.",
    },
    {
      title: "SQL Certificate",
      status: "Verified",
      description: "Validates expertise in database management, complex queries, and relational database schema design using SQL.",
    },
    {
      title: "Introduction to generative AI",
      status: "Verified",
      description: " Gain an understanding of AI basics, how LLMs work, and the fundamentals of building with AI.",
    },
    {
      title: "AWS Cloud Practitioner",
      status: "Verified",
      description: "Gain an understanding of cloud concepts, AWS services, security, and support.",
    }
  ];

  return (
    <div className="cert-section section-container" id="certifications">
      <div className="career-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <div className="cert-box" key={index}>
              <h3>{cert.title}</h3>
              <p>Status: {cert.status}</p>
              <br />
              <p>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
