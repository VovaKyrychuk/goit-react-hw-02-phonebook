import PropTypes from 'prop-types';
import { LabelFilter, LabelWrapper, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <LabelFilter>
    <LabelWrapper>Find contacts by name</LabelWrapper>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="search contact"
    />
  </LabelFilter>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
