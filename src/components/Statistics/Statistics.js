import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
        <ul className={s.list}>
          <li className={s.listItem}><span>Good: {good}</span></li>
          <li className={s.listItem}><span>Neutral: {neutral}</span></li>
          <li className={s.listItem}><span>Bad: {bad}</span></li>
          <li className={s.listItem}><span>Total: {total}</span></li>
          <li className={s.listItem}><span>Positive feedback: {positivePercentage}%</span></li>
        </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;