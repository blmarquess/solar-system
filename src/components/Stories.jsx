import React from 'react';
import PropTypes from 'prop-types';

export default class Stories extends React.PureComponent {
  render() {
    const { srcImage, name } = this.props;
    return (  
      <div className="text-center text-xs  overflow-hidden">
        <div className="border-2 rounded-full border-pink-600">
        <img src={srcImage} className="w-20 h-20 rounded-full border-2" alt="Stories" />
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