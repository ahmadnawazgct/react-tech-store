import React from 'react'
import Title from '../Title';

export default function Contact() {
    return (
      <section className="py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="contact us" />
            <form
              className="mt-5"
              action="https://formspree.io/ahmadnawazgct@gmail.com"
              method="POST"
            >
              {/* name */}
              <div className="form-group">
                <input
                  type="text"
                  name="first name"
                  className="form-control"
                  placeholder="first name"
                />
              </div>
              {/* email */}
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email@email.com"
                />
              </div>
              {/* subject */}
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="important"
                />
              </div>
              {/* name */}
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="10"
                  placeholder="hi there buddy"
                />
              </div>
              <div className="form-group my-3">
                <input 
                    type="submit" 
                    text="submit" 
                    className="form-control bg-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
}
