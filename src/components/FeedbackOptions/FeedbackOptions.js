import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.feedback__list}>
      {options.map(option => (
        <li key={shortid.generate()}>
          <button
            className={s.feedback__btn}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
