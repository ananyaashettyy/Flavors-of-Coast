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
          <h1>Welcome to <span>Cooking With Ananya</span></h1>
          <p>Your go-to hub for mouthwatering recipes, curated with love.</p>
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
        <p>Wholesome main courses and staples for breakfast, lunch, and dinner.</p>
      </div>
    </div>

    <div className="card">
      <img src={sweettreat} alt="Sweet Treats" />
      <div className="card-body">
        <h3>Sweet Treats</h3>
        <p>Desserts and indulgent delights to sweeten every occasion.</p>
      </div>
    </div>

    <div className="card">
      <img src={quickbites} alt="Quick Bites" />
      <div className="card-body">
        <h3>Quick Bites</h3>
        <p>Snacks, street food, and refreshing drinks for anytime cravings.</p>
      </div>
    </div>
  </div>
</section>

      <section className="cta-section">
        <h2>Ready to cook something amazing?</h2>
        <p>Explore hundreds of recipes across all categories and skill levels.</p>
        <button className="hero-btn" onClick={() => navigate('/recipes')}>Browse All Recipes</button>
      </section>
    </div>
  );
};

export default Home;
