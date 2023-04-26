import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return <div>{children}</div>;
};
Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
