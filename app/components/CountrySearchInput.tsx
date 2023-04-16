'use client';
import { useContext } from 'react';
import { SearchContext } from '../providers/SearchProvider';

const CountrySearchInput = () => {
  const [value, setValue] = useContext(SearchContext);

  return (
    <input
      type="text"
      placeholder="Search for a country…"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};
      
export default CountrySearchInput;
