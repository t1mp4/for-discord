'use client';
import { useContext } from 'react';
import { filterAndSortCountriesBySearchAccuracy } from '@/lib';
import { SearchContext } from '@/app/providers/SearchProvider';
import ListItemClientWrapper from './ListItemClientWrapper';
import ListItem from './ListItem';
import type { Country } from '@/types/country';

const CountryListItems = ({ countries }: { countries: Country[] }) => {
  const [search] = useContext(SearchContext);

  const filteredCountries =
    search.length === 0
      ? countries
      : filterAndSortCountriesBySearchAccuracy(countries, search.toLowerCase());

  return (
    <>
      {filteredCountries.map(country => (
        <ListItemClientWrapper key={country.name.common}>
          <ListItem country={country} />
        </ListItemClientWrapper>
      ))}
    </>
  );
};

export default CountryListItems;
