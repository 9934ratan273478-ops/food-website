import "./BookTable.css"
function BookTable(){
    return(
        <>
        <section className="book-section">

      <div className="book-heading">
        <h1>Book A Table</h1>

        <p>
          We consider all the drivers of change gives you the components
          <br />
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="booking-form">

        <form>

          <div className="form-row">

            <div className="input-group">
              <label>Date</label>
              <input type="date" />
            </div>

            <div className="input-group">
              <label>Time</label>

              <select>
                <option>06:30 PM</option>
                <option>07:00 PM</option>
                <option>08:00 PM</option>
                <option>09:00 PM</option>
              </select>
            </div>

          </div>

          <div className="form-row">

            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="input-group">
              <label>Phone</label>
              <input type="text" placeholder="+1-xxx-xxx-xxxx" />
            </div>

          </div>

          <div className="input-group">
            <label>Total Person</label>

            <select>
              <option>1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
              <option>5 Person</option>
            </select>
          </div>

          <button className="book-btn">
            Book A Table
          </button>

        </form>

      </div>

      <div className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.847980224347!2d-74.005972!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316f2f1df5%3A0x4f7d7c8d4e3c9c0!2sNew%20York!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

    </section>
        </>
    )
}
export default BookTable