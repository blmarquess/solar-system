import React from 'react';
import PropTypes from 'prop-types';
import UserPhoto from './UserPhoto';

export default class Post extends React.Component {
  render() {
    const { name, year, country, destination, image } = this.props;
    return (
      <div className="flex-col">
        <div className=""> {<UserPhoto srcImage={image} name={ name } country={ country } />}</div>
        <div className="object-cover object-center w-200">
          <img src={ image } clasName="flex items-center object-fill w-full" alt="igmpost" />
        </div>
        <div className="text-3xl flex p-4 mb-6">
          <span className="text-3xl">
            { destination } { year } </span>
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