import React from 'react';
import PropTypes from 'prop-types';
import './pagination.css';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
/**
 * Primary UI component for user interaction
 */

export const PaginationC = ({ lastPageNum, onChange }) => {
  return (
    <Pagination
      count={lastPageNum}
      onChange={onChange}
      defaultPage={1}
      boundaryCount={2}
      renderItem={(item) => (
        <PaginationItem
          slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
          {...item}
        />
      )}
    />
  );
};

PaginationC.propTypes = {
  lastPageNum: PropTypes.number,
};

PaginationC.defaultProps = {
  lastPageNum: 9,
};
