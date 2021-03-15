import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Company from './components/Company'
import News from './components/News'
import References from './components/References'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const App = () => {

  const [news, setNews] = useState()
  const [notification, setNotification] = useState()

  useEffect(() => {
    axios.get('/api/news')
      .then(response => setNews(response.data.items))
      .catch(() => console.log('failure'))
  }, [])

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar-container").style.top = "0";
    } else {
      document.getElementById("navbar-container").style.top = "-225px";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Company />
      <News news={news}/>
      <References/>
      <Newsletter notification={notification} setNotification={setNotification}/>
      <Footer/>
    </div>
  );
}

export default App;
