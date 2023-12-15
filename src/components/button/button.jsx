import React from "react";

function Button({ showMore, setShowMore }) {
  return (
    <div className="view-more">
      <button className="view-more_button" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "View More"}
      </button>
    </div>
  );
}

export default Button;
