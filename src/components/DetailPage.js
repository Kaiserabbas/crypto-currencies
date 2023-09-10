// DetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = ({ data }) => {
  const { cityId } = useParams();
  const cityData = data.find((item) => item.id === cityId);

  return (
    <div>
      {cityData && (
        <div>
          <h2>{cityData.name}</h2>
          <p>
            Air Quality Index (AQI):
            {cityData.main.aqi}
          </p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default DetailPage;
