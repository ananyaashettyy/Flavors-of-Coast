import { useNavigate } from 'react-router-dom';
import './Home.css';
import heroFood from '../assets/hero-food.png';
import everydaymeals from '../assets/everyday-meals.png';
import quickbites from '../assets/quick-bites.png';
import sweettreat from '../assets/sweet-treat.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero">
        <div className="hero-text">
          <h1>Karavali Kitchen</h1>
          <p>Your go-to hub for authentic Udupi–Mangalore recipes, curated with tradition and love.</p>
          <button className="hero-btn" onClick={() => navigate('/recipes')}>Explore Recipes</button>
        </div>
        <div className="hero-image">
          <img src={heroFood} alt="Delicious Food" />
        </div>
      </div>

      <section className="featured-section">
  <h2 className="section-title">Featured Categories</h2>
  <div className="card-grid">
    <div className="card">
      <img src={everydaymeals} alt="Everyday Meals" />
      <div className="card-body">
        <h3>Everyday Meals</h3>
        <p>Wholesome coastal staples—rice, curries, sambar, and temple-style vegetarian delights for breakfast, lunch, and dinner.</p>
      </div>
    </div>

    <div className="card">
      <img src={sweettreat} alt="Sweet Treats" />
      <div className="card-body">
        <h3>Sweet Treats</h3>
        <p>Authentic Udupi & Mangalore desserts like Kesari Bath, Payasa, Halwa, and Coastal Holige to sweeten every occasion.</p>
      </div>
    </div>

    <div className="card">
      <img src={quickbites} alt="Quick Bites" />
      <div className="card-body">
        <h3>Quick Bites</h3>
        <p>Crunchy snacks, street-style treats, and refreshing coastal drinks—from Goli Baje to Neer Dosa and more.</p>
      </div>
    </div>
  </div>
</section>

      <section className="cta-section">
        <h2>Ready to cook something amazing?</h2>
        <p>Discover the rich flavors of Udupi and Mangalore cuisine—from coconut-rich curries to spicy seafood specialties.</p>
        <button className="hero-btn" onClick={() => navigate('/recipes')}>Browse All Recipes</button>
      </section>
    </div>
  );
};

export default Home;
