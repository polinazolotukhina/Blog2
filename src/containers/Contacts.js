import React from 'react'
import ContactForm from '../components/ContactForm';



export default class NewPost extends React.Component {
    submit(values) {
    }

    render() {

      return (
            <div className="container">
                <ContactForm  />
            </div>
      )
    }
}
