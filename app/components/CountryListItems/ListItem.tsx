import { memo } from 'react';
import type { Country } from '@/types/country';

// Second argument to 'memo' should return true if it shouldn't re-render. I never want this to re-render so always return true.
const ListItem = memo(
  ({ country }: { country: Country }) => {
    console.log('The actual LIST ITEM rendered!');
    return (
      <li>
        {country.name.common}
        {/* Sidenote: I have a lot more UI than this in my actual project*/}
      </li>
    );
  },
  () => true
);

export default ListItem;
