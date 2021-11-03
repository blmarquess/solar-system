import React from 'react';
import PropTypes from 'prop-types';

export default class Stories extends React.Component {
  render() {
    const { srcImage, name, country } = this.props;
    return (
      <div className="text-center flex justify-items-start items-center space-x-4 p-4">
          <div className="border-2 box-border md:box-content rounded-full border-pink-600 w-12 h-12 flex items-center overflow-hidden overscroll-x-contain">
          <img src={srcImage} className="cover-image h-30" alt="user" />
        </div>
        
          <div className="flex-colom">
          <span className="text-2xl">{name}</span>
          <p className="text-xs">{country}</p>
          </div>
      </div>
    )
  }
}

Stories.propTypes = {
  srcImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};