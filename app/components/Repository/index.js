/**
 *
 * Repository
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Repository({ repo }) {
  return <div>{repo.name}</div>;
}

Repository.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
    license: PropTypes.object,
  }).isRequired,
};

export default Repository;
