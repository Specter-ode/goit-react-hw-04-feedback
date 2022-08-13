import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({
  goodValue,
  neutralValue,
  badValue,
  totalValue,
  positiveFeedbackValue,
}) {
  return (
    <ul className={s.statistics__list}>
      <li>
        <p className={s.statistics__text}>Good: {goodValue}</p>
      </li>
      <li>
        <p className={s.statistics__text}>Neutral: {neutralValue}</p>
      </li>
      <li>
        <p className={s.statistics__text}>Bad: {badValue}</p>
      </li>
      <li>
        <p className={s.statistics__text}>total: {totalValue}</p>
      </li>
      <li>
        <p className={s.statistics__text}>
          Positive feedback: {positiveFeedbackValue}%
        </p>
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  goodValue: PropTypes.number.isRequired,
  neutralValue: PropTypes.number.isRequired,
  badValue: PropTypes.number.isRequired,
  totalValue: PropTypes.number.isRequired,
  positiveFeedbackValue: PropTypes.number.isRequired,
};
export default Statistics;
