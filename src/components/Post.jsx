import React from 'react';
import PropTypes from 'prop-types';
import UserPhoto from './UserPhoto';

export default class Post extends React.Component {
  render() {
    const { name, year, country, destination, image } = this.props;
    return (
      <div className="">
        <div className=""> { <UserPhoto srcImage= {image} name= '{ name }' country="USA" /> }</div>
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