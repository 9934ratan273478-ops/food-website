import "./Menuhero.css"
function Menuhero(){
    return(
        <>
        <section className="menu-section">

      <div className="menu-heading">
        <h1>Our Menu</h1>

        <p>
          We consider all the drivers of change gives you the components
          <br />
          you need to change to create a truly happens.
        </p>
      </div>

      <div className="menu-buttons">
        <button className="active">All</button>
        <button>Breakfast</button>
        <button>Main Dishes</button>
        <button>Drinks</button>
        <button>Desserts</button>
      </div>

      <div className="menu-container">

        {/* Card 1 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
            alt=""
          />

          <div className="card-content">
            <h2>$ 9.99</h2>
            <h3>Fried Eggs</h3>
            <p>
              Made with eggs, lettuce, salt, oil and other ingredients.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
            alt=""
          />

          <div className="card-content">
            <h2>$ 15.99</h2>
            <h3>Hawaiian Pizza</h3>
            <p>
              Made with eggs, lettuce, salt, oil and other ingredients.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
            alt=""
          />

          <div className="card-content">
            <h2>$ 7.25</h2>
            <h3>Martinez Cocktail</h3>
            <p>
              Made with eggs, lettuce, salt, oil and other ingredients.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=800&auto=format&fit=crop"
            alt=""
          />

          <div className="card-content">
            <h2>$ 20.99</h2>
            <h3>Butterscotch Cake</h3>
            <p>
              Made with eggs, lettuce, salt, oil and other ingredients.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=800&auto=format&fit=crop"
            alt=""
          />

          <div className="card-content">
            <h2>$ 5.89</h2>
            <h3>Mint Lemonade</h3>
            <p>
              Made with eggs, lettuce, salt, oil and other ingredients.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop"
            alt=""
          />

          <div className="card-content">
            <h2>$ 18.05</h2>
            <h3>Chocolate Icecream</h3>
            <p>
              Made with eggs, lettuce, salt, oil and other ingredients.
            </p>
          </div>
        </div>

        {/* Card 7 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
            alt=""
          />

          <div className="card-content">
            <h2>$ 12.55</h2>
            <h3>Cheese Burger</h3>
            <p>
              Made with eggs, lettuce, salt, oil and other ingredients.
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop"
            alt=""
          />

          <div className="card-content">
            <h2>$ 12.99</h2>
            <h3>Classic Waffles</h3>
            <p>
              Made with eggs, lettuce, salt, oil and other ingredients.
            </p>
          </div>
        </div>

      </div>
    </section>
        </>
    )
}
export default Menuhero