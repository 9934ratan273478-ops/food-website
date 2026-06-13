import "./Secrettip.css"
import img from "../assets/secrettipimg.jpg"
import img2 from "../assets/secrettipimg2.jpeg"

function Secrettip(){
    return(
        <>
        <section className="secret-tips">
      <div className="tips-container">
        
        <h1>
          The secret tips & tricks to prepare a <br />
          perfect burger & pizza for our customers
        </h1>

        {/* First Image */}
        <div className="image-box">
          <img
            src={img} alt="food"
          />
        </div>

        {/* First Content */}
        <div className="content-box">
          <h2>What do you need to prepare a home-made burger?</h2>

          <p>
            Creating the perfect burger and pizza is an art, combining
            ingredients, techniques, and passion to craft dishes that truly
            delight the palate.
          </p>

          <ol>
            <li>
              <strong>Quality Beef:</strong> The heart of a perfect burger is
              top-notch beef.
            </li>

            <li>
              <strong>Seasoning:</strong> Simplicity is key here. A generous
              pinch of salt and black pepper.
            </li>

            <li>
              <strong>Don’t Overwork the Meat:</strong> When forming your
              patties, be gentle.
            </li>

            <li>
              <strong>Cooking:</strong> High heat is crucial whether you’re
              grilling or pan-searing.
            </li>

            <li>
              <strong>Resting:</strong> Allow your cooked burgers to rest for a
              few minutes before serving.
            </li>
          </ol>
        </div>

        {/* Second Content */}
        <div className="content-box">
          <h2>What are the right ingredients to make it delicious?</h2>

          <p>
            Creating the perfect burger and pizza is an art, combining
            ingredients, techniques, and passion to craft dishes that truly
            delight the palate.
          </p>

          <ol>
            <li>
              <strong>Quality Beef:</strong> The heart of a perfect burger is
              top-notch beef.
            </li>

            <li>
              <strong>Seasoning:</strong> Simplicity is key here. A generous
              pinch of salt and black pepper.
            </li>

            <li>
              <strong>Don’t Overwork the Meat:</strong> When forming your
              patties, be gentle.
            </li>

            <li>
              <strong>Cooking:</strong> High heat is crucial whether you’re
              grilling or pan-searing.
            </li>

            <li>
              <strong>Resting:</strong> Allow your cooked burgers to rest for a
              few minutes before serving.
            </li>
          </ol>
        </div>

        {/* Second Image */}
        <div className="image-box">
          <img
            src={img2}
            alt="fries"
          />
        </div>

        {/* Last Content */}
        <div className="content-box">
          <h2>What are the right ingredients to make it delicious?</h2>

          <p>
            Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget 
            viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin,
             le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, 
             consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit 
             semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem 
             aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis 
             blandit turpis..
          </p>
        </div>

      </div>
    </section>
        </>
    )
}
export default Secrettip