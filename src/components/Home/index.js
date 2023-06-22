// Write your JS code here

import Header from '../Header'

import './index.css'

const Home = props => {
  console.log(props)

  return (
    <>
      <Header />
      <div className="home-section-container">
        <div className="home-page-details">
          <h1 className="main-heading">
            Clothes That Get
            <br />
            YOU Noticed
          </h1>
          <p className="description">
            Fashion is part of the daily air and it does not
            <br />
            quite help that it changes all time.Clothes
            <br />
            have always been a marker of the era and we
            <br />
            we are in a revolution.Your fashion makes you
            <br />
            seen and heard that way you are.So,
            <br />
            celebrate the seasons new and exciting <br />
            fashion in your own way.
          </p>
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </div>
        <div className="home-page-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-img"
          />
        </div>
      </div>
    </>
  )
}

export default Home
