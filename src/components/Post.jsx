import React from 'react';
import PropTypes from 'prop-types';
import UserPhoto from './UserPhoto';

export default class Post extends React.Component {
  render() {
    const { name, year, country, destination, image } = this.props;
    return (
      <div className="flex-col">
        <div className=""> {<UserPhoto srcImage={image} name={ name } country={ country } />}</div>
        <div className="foto">
          <img src={ image } alt="igmpost" />
        </div>
        <div>
          <span className="text">
            { destination }
          </span>
          <span> { year } </span>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}