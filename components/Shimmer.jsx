const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10).fill("").map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="shimmer-line short"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
