import React from'react'
import ReactDOM from 'react-dom/client'

const Navbar = function() {
  return (
    <header className='header'>
      <nav className='nav'>
        <img className='brandLogo' src={require('./images/food-delivery-logo.webp')} alt='logo'/>
        <ul className='nav_items'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
const Card = () => (
    <article className='card'>
        <img src={require('./images/pizza.jpeg')} className="cardImg" alt='food'/>
        <div className='description'>
            <h2>Pizza Hut</h2>
            <p>4.4</p>
            <p>$6.99</p>
        </div>
        
    </article>
)
const Main = () => (
    <section id='foodMenu'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </section>
)

const App = () => (
    <>
        <Navbar />
        <Main />
    </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
