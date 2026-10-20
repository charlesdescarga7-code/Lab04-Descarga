import './ProductComponent.css';

const burgers = [
  {
    id: 1,
    name: 'Ham and Beef Cheesy Burger',
    description: 'Ham and Beef Burger is a delicious burger that combines the savory flavors of ham and beef in a juicy patty.',
    price: 59.5,
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBw2fF7uUhJ2fKqlxX4EIyvAl-jt0aR97E7p0-gLdLxQ&s=10',
  },
  {
    id: 2,
    name: 'Burger Overload',
    description: 'Burger Overload is a mouthwatering burger that will satisfy your cravings for something hearty and delicious. ',
    price: 99.50,
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DKqAOvxp1aJ9jnqfLOo-8uVUNR7ZrTlGSCi9ecq_zQ&s=10',
  },
  {
    id: 3,
    name: 'Ultimate Beef Burger Supreme',
    description: 'Get ready for the ultimate burger experience with our Ultimate Beef Burger Supreme! ',
    price: 89.50,
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS8PJU4iQn_IHJpW4FljPc8YRHnp5Pi84VBvSqUlsPdQ&s',
  },
   {
    id: 4,
    name: 'Fantasy Burger',
    description: 'Bite to your Fantasy with our delicious Fantasy Burger, made with a juicy beef patty, melted cheese, fresh lettuce, and a special sauce that will transport your taste buds to a world of flavor.',
    price: 79.25,
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALPwdzs0evfKpPBc5Yggg0DnLxO0YDyLB3Uc4_6-PsQ&s=10',
  },
];

export default function ProductComponent() {
  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label="Tasty Burger home">
          <span className="brand-mark" aria-hidden="true">🍔</span>
          <span> TASTY BURGER </span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#menu">OUR MENU</a>
          <a href="#shop">SHOP</a>
          <a href="#contact">CONTACT</a>
          <button className="cart-button" type="button" aria-label="Shopping cart, 2 items">
            <span aria-hidden="true">&#128722;</span>
          </button>
        </nav>
      </header>

      <main className="burger-page" id="top">
        <h1>Our Crazy Burgers</h1>
        <p className="main-subtitle">Get ready for a wild ride of flavors! Our crazy burgers are loaded with juicy patties, bold toppings, and irresistible sauces, all stacked on a perfectly toasted bun. Whether you like it cheesy, or extra meaty, we've got a burger that will blow your mind!</p>
        <div className="burger-list" id="menu">
          {burgers.map((burger) => (
            <div key={burger.id} className="burger-card">
              <img src={burger.image} alt={burger.name} className="burger-image" />
              <div className="burger-info">
                <div className="rating-row">
                </div>
                <h2>{burger.name}</h2>
                <p style={{ flexGrow: 1 }}>{burger.description}</p>
                <div className="burger-meta">
                  <span className="burger-price">${burger.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}