import React from 'react';
import PropTypes from 'prop-types';

export default class Stories extends React.Component {
  render() {
    const { srcImage, name } = this.props;
    return (
      <div className="text-center text-xs overflow-hidden">
        <div className="border-2 rounded-full border-pink-600 w-20 h-20 flex items-center overflow-hidden overscroll-x-contain">
        <img src={srcImage} className="w-full" alt="Stories" />
        </div>
        <span>{ name }</span>
      </div>
    )
  }
}

Stories.propTypes = {
  srcImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};