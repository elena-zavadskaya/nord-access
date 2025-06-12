import React from "react";
import PropTypes from "prop-types";
import "./styles/FeatureBlock.css";

const FeatureBlock = ({ title, imageSrc, items, reverse, isList }) => {
  return (
    <div className={`feature-block ${reverse ? "feature-block--reverse" : ""}`}>
      <h2 className="feature-title">{title}</h2>
      <div className="feature-content">
        {/* Если reverse=false → картинка слева, текст справа.
            Если reverse=true  → картинка справа, текст слева. */}
        <div className="feature-image-wrapper">
          <img src={imageSrc} alt={title} className="feature-image" />
        </div>

        <div className="feature-text-list">
          {isList ? (
            <ul>
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <div className="feature-text-paragraphs" dangerouslySetInnerHTML={{ __html: items }} />
          )}
        </div>
      </div>
    </div>
  );
};

FeatureBlock.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  reverse: PropTypes.bool,
  isList: PropTypes.bool,
};

FeatureBlock.defaultProps = {
  reverse: false,
  isList: true,
};

export default FeatureBlock;
