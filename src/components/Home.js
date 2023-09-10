// Home.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAirPollution } from '../redux/actions/airPollutionActions';

const Home = () => {
  const dispatch = useDispatch();
  const airPollutionData = useSelector((state) => state.airPollution.data);
  const loading = useSelector((state) => state.airPollution.loading);
  const error = useSelector((state) => state.airPollution.error);

  useEffect(() => {
    // Replace these coordinates with your desired location
    const latitude = 'YOUR_LATITUDE';
    const longitude = 'YOUR_LONGITUDE';

    dispatch(fetchAirPollution(latitude, longitude));
  }, [dispatch]);

  return (
    <div>
      <h1>Air Pollution Data</h1>
      {loading && <p>Loading...</p>}
      {error && (
      <p>
        Error:
        {error.message}
      </p>
      )}
      {airPollutionData && (
        <div>
          <h2>Current Air Pollution Data</h2>
          <p>
            City:
            {airPollutionData.city.name}
          </p>
          <p>
            Air Quality Index (AQI):
            {airPollutionData.list[0].main.aqi}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
