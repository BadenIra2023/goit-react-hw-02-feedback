import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
return (<>
    <h2 style={{
        color: '#394550',
        padding: '20px',}}>{message}</h2>
    </>)
}
Notification.prototype = { message: PropTypes.string.isRequired}