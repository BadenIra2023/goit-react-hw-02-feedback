import PropTypes from 'prop-types';
import css from './FeedBackOptions.module.css';
export const FeedBackOptions = ({ title, btns, clickFeedback }) => {
  return (
    <>
      <h1 className={css.title}>{title}</h1> 
      <div className={css.buttons}>
        {btns.map(btn => (
          <button type="button" className={css.button} onClick={clickFeedback} name={btn} key={btn}>
            {btn} </button> 
       
		))}
		</div>
    </>
  );
};

FeedBackOptions.propTypes = {
	title: PropTypes.string.isRequired,
	btns: PropTypes.arrayOf(PropTypes.string.isRequired),
	clickFeedback: PropTypes.func.isRequired
};