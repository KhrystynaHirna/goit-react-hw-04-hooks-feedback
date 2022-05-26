import PropTypes from 'prop-types';
import s from './FeedbackOption.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionNames = Object.keys(options);

  return (
    <ul className={s.list}>
      {optionNames.map((option, index) => (
        <li className={s.item} key={index}>
          <button
            className={s.button}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            value={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
