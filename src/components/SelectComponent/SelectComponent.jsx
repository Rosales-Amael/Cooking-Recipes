/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { Select } from '@chakra-ui/react';
import './SelectComponent.scss';
import { useDispatch } from 'react-redux';

function SelectComponent({ options, changeValue, changeText, placeholder }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Select
        onChange={(e) => {
          if (changeText !== undefined) {
            dispatch(
              changeText(e.target.selectedOptions[0].text),
              changeValue(e.target.value)
            );
          }
          dispatch(changeValue(e.target.value));
        }}
      >
        <option selected hidden>
          Selectionner une {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value} isRequired>
            {option.text}
          </option>
        ))}
      </Select>
    </div>
  );
}

SelectComponent.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  changeValue: PropTypes.func.isRequired,
  changeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SelectComponent;
