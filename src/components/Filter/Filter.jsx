import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="search contact"
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
