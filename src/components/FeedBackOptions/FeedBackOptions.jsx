import PropTypes from 'prop-types';
import css from './FeedBackOptions.module.css';
export const FeedBackOptions = ({btns, clickFeedback }) => {
  return (
    <> 
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
	btns: PropTypes.arrayOf(PropTypes.string.isRequired),
	clickFeedback: PropTypes.func.isRequired
};