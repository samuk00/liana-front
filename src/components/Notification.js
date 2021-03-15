import React from 'react'

const Notification = ({ notification }) => {
    const notifStyle = notification === 'Invalid email address' ? {color: 'red'} : {color: 'green'}
    return (
        <div className="notification" style={notifStyle}>
            {notification}
        </div>
    )
}

export default Notification
