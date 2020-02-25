import React, { useState } from 'react';

// CSS
import classes from './App.module.css';

// Elements
import Card from '../../elements/Card/Card';

// Components
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/SearchBar/SearchBar';

const App = () => {

  const [searchBarInput, setSearchBarInput] = useState('');
  const [error, setError] = useState(false);
  const [weatherDetails, setWeatherDetails] = useState({
    name:'',
    temperature: null,
    description: 'Preview'
  });
  const [state, setstate] = useState(initialState)

  // state = {
  //   searchBarInput: '',
  //   weatherDetails: {
  //     name: '',
  //     temperature: null,
  //     description: 'Preview'
  //   },
  //   loading: false,
  //   error: false
  // }

  // Update state with current search bar input
  const searchBarHandler = (e) => {
    setSearchBarInput(e.target.value);
  }


  const setWeather = () => {
    const city = searchBarInput;
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;

    setWeatherDetails({description: 'Loading'});
    setError(false);
    // this.setState({
    //   weatherDetails: {
    //     description: 'Loading'
    //   },
    //   loading: true,
    //   error: false
      // Executed as callback function
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        // If city exists, update weather details
        if(data.cod === 200) {
          setSearchBarInput('');
          setWeatherDetails({
            name: data.name,
            temperature: data.main.temp,
            description: data.weather[0].main
          })
          // this.setState({
          //   weatherDetails: {
          //     name: data.name,
          //     temperature: data.main.temp,
          //     description: data.weather[0].main
          //   },
          //   loading: false,
          //   searchBarInput: ''
          // });
        } else {
          // If city doesn't exist, throw error
          throw data.cod
        }
      })
      .catch(err => {
        console.log(err);
        setError(true);
        // this.setState({
        //   loading: false,
        //   error: true
        // });
      });
  }

    return (
      <div className={classes.AppWrapper}>
        <header />
        <main className={classes.AppMain}>
          <SearchBar            
            value={searchBarInput}
            onChangeHandler={searchBarHandler}
            onClickHandler={setWeather}
            error={error} />
            <Card
              weatherDetails={weatherDetails}
            />
        </main>
        <Footer />
      </div>
    );
}

export default App;
