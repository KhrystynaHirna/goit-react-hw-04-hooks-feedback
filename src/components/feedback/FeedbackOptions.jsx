import PropTypes from 'prop-types';
import s from './FeedbackOption.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map(option => {
        return (
          <li className={s.item} key={option}>
            <button
              className={s.button}
              type="button"
              onClick={onLeaveFeedback}
              value={option}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
