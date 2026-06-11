import "./ContactHero.css"
function ContactHero(){
    return(
        <>
         <section className="contact-section">

      <div className="contact-heading">
        <h1>Contact Us</h1>

        <p>
          We consider all the drivers of change gives you the components
          <br />
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="contact-box">

        <form>

          <div className="input-row">

            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter email address" />
            </div>

          </div>

          <div className="input-group">
            <label>Subject</label>
            <input type="text" placeholder="Write a subject" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Write your message"></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send
          </button>

        </form>

      </div>

      <div className="contact-details">

        <div className="detail-box">
          <h3>Call Us:</h3>
          <p>+1-234-567-8900</p>
        </div>

        <div className="detail-box">
          <h3>Hours:</h3>
          <span>Mon-Fri: 11 am - 8pm</span>
          <span>Sat, Sun: 9am - 10am</span>
        </div>

        <div className="detail-box">
          <h3>Our Location:</h3>
          <span>Royal Logoon Apartment</span>
          <span>Bhubaneswar, Odisha</span>
          <span>India</span>
        </div>

      </div>

    </section>
        </>
    )
    
}
export default ContactHero