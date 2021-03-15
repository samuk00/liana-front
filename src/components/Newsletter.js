import React, {useState} from 'react'
import Notification from './Notification'

const Newsletter = ({ notification, setNotification }) => {

    const [email, setEmail] = useState('')

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!validateEmail(email)) {
            setNotification('Invalid email address')
            setTimeout(() => {
                setNotification('')
            }, 5000)
            
        } else {
            setNotification(`Thanks for subscription, newsletter has been sent to ${email}`)
            setEmail('')
            setTimeout(() => {
                setNotification('')
            }, 5000)
        }

    }

    return (
        <div className="row">
            <div className="newsletter-content">
                <h1>Subscribe to our newsletter</h1>
                <p>
                    Follow our story and get the lates promotional
                    news about our products and events
                </p>
                <div className="newsletter-input">
                    <form onSubmit={handleSubmit}>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Your email address"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <Notification notification={notification} />
            </div>
        </div>
    )
}

export default Newsletter
