import React from "react";
import PropTypes from "prop-types";
import "./styles/FeatureBlock.css";

const FeatureBlock = ({ title, imageSrc, items, reverse, isList, index }) => {
  const isAnalyticsBlock = index === 1 && isList;
  let mainItems = items;
  let fullWidthItem = null;

  if (isAnalyticsBlock && items.length > 0) {
    mainItems = items.slice(0, -1);
    fullWidthItem = items[items.length - 1];
  }

  return (
    <div className={`feature-block ${reverse ? "feature-block--reverse" : ""}`}>
      <h2 className="feature-title">{title}</h2>
      <div className="feature-content">
        <div className="feature-image-wrapper">
          <img src={imageSrc} alt={title} className="feature-image" />
        </div>
        <div className="feature-text-list">
          {isList ? (
            <ul>
              {isAnalyticsBlock
                ? mainItems.map((item, idx) => <li key={idx}>{item}</li>)
                : items.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          ) : index === 0 ? (
            <>
              <p className="feature-text-paragraph left-align">{items.split("<br><br>")[0]}</p>
              <p className="feature-text-paragraph">{items.split("<br><br>")[1]}</p>
            </>
          ) : (
            <p className="feature-text-paragraph">{items}</p>
          )}
        </div>
      </div>
      {isAnalyticsBlock && fullWidthItem && (
        <div className="feature-full-width-item">
          <div className="feature-full-width-content">{fullWidthItem}</div>
        </div>
      )}
    </div>
  );
};

FeatureBlock.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]).isRequired,
  reverse: PropTypes.bool,
  isList: PropTypes.bool,
  index: PropTypes.number,
};

FeatureBlock.defaultProps = {
  reverse: false,
  isList: false,
  index: 0,
};

export default FeatureBlock;