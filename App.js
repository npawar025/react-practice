import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
          alt="app logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {name,rating} = props;
  return (
    <div className="rest-card">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0984acc0ed7b914206dbbcb90297becc"
        alt="rest logo"
        className="rest-logo"
      />
      <h3>{name}</h3>
      <h4>{rating}</h4>
      <h4>4.3</h4>
      <h4>38 Minutes</h4>
    </div>
  );
}

const Body =  () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="rest-container">
        <RestaurantCard name="Meghna food" rating="4.3" />
        <RestaurantCard name="Sheeta food" rating="4.5" />
      </div>
    </div>
  );
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
