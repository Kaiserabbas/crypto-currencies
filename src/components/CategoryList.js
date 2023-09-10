// CategoryList.js
import React, { useState } from 'react';

const CategoryList = ({ data }) => {
  const [filter, setFilter] = useState('');

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>City List</h2>
      <input
        type="text"
        placeholder="Filter by city name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
