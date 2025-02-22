import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>YUMMY</h1>
      </div>
      <div style={styles.searchBar}>
        <input type="text" placeholder="Search for restaurants, dishes..." style={styles.searchInput} />
      </div>
    </header>
  );
};

const FeaturedFoods = () => {
  return (
    <section style={styles.featuredFoods}>
      <h2>Featured Dishes</h2>
      <div style={styles.foodList}>
        <div style={styles.bonda}>bonda</div>
        <div style={styles.idli}>idli</div>
        <div style={styles.dosa}>dosa</div>
        <div style={styles.poori}>poori</div>
      </div>
    </section>
  );
};

const RestaurantList = () => {
  return (
    <section style={styles.restaurantList}>
      <h2>Top Restaurants</h2>
      <div style={styles.restaurants}>
        <div style={styles.abhiruche}>abhiruche 1</div>
        <div style={styles.missammafamily}>missammafamily 2</div>
        <div style={styles.grilland}>grilland 3</div>
        <div style={styles.temptations}>temptations 4</div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 YUMMY. All Rights Reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div style={styles.app}>
      <Header />
      <main>
        <FeaturedFoods />
        <RestaurantList />
      </main>
      <Footer />
    </div>
  );
};

// Inline styles (no external CSS file)
const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: "#333",
    color: "white",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  searchBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    padding: "10px",
    width: "200px",
  },
  featuredFoods: {
    padding: "20px",
  },
  foodList: {
    display: "flex",
    gap: "15px",
  },
  foodItem: {
    padding: "15px",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    cursor: "pointer",
  },
  restaurantList: {
    padding: "20px",
  },
  restaurants: {
    display: "flex",
    gap: "15px",
  },
  restaurantItem: {
    padding: "15px",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#333",
    color: "white",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
};

export default App;
