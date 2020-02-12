import React, { Component } from 'react';


// CSS
import classes from './App.module.css';

// Elements
import Card from '../../elements/Card/Card';

// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';
import WeatherDetails from '../../components/WeatherDetails/WeatherDetails';
import Preview from '../../components/Preview/Preview';

class App extends Component {

  state = {
    searchBarInput: '',
    weatherDetails: {
      name: '',
      temperature: null,
      description: 'Preview'
    },
    loading: false,
    error: false
  }

  // Update state with current search bar input
  searchBarHandler = (e) => {
    this.setState({
      searchBarInput: e.target.value
    })
  }


  setWeather = () => {
    console.log(this.state.searchBarInput);
    const city = this.state.searchBarInput;
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
    this.setState({
      weatherDetails: {
        description: 'Loading'
      },
      loading: true,
      error: false
    }, () => {
      // Executed as callback function
      fetch(URL)
        .then(res => res.json())
        .then(data => {
          // If city exists, update weather details
          if(data.cod === 200) {
            this.setState({
              weatherDetails: {
                name: data.name,
                temperature: data.main.temp,
                description: data.weather[0].main
              },
              loading: false,
              searchBarInput: ''
            });
          } else {
            // If city doesn't exist, throw error
            throw data.cod
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            loading: false,
            error: true
          });
        });
    });
  }

  render () {
    return (
      <div className={classes.AppWrapper}>
        <header />
        <main className={classes.AppMain}>
          <SearchBar            
            value={this.state.searchBarInput}
            onChangeHandler={this.searchBarHandler}
            onClickHandler={this.setWeather}
            error={this.state.error} />
            <Card
              weatherDetails={this.state.weatherDetails}
            />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
