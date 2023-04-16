import { getCountries } from '@/lib';
import SearchProvider from './providers/SearchProvider';
import CountrySearchInput from './components/CountrySearchInput';
import CountryListItems from './components/CountryListItems';

const HomePage = async () => {
  const countries = await getCountries(); // Over 200 countries

  return (
    <main>
      <SearchProvider>
        <CountrySearchInput />

        <ul>
          <CountryListItems countries={countries} />
        </ul>
      </SearchProvider>
    </main>
  );
};
export default HomePage;
