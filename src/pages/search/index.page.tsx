import Page from '~pages/components/Page/Page';

import Autocomplete from '~components/Form/Autocomplete/Autocomplete';
import { ISelectProps } from '~components/Form/Autocomplete/types';

const suggestions = [
  { label: 'Sim', id: '1' },
  { label: 'Nao', id: '2' },
  { label: 'Pq', id: '13' },
  { label: 'ALI', id: '14' },
  { label: 'aqui', id: '15' },
  { label: 'Caqui', id: '16' },
  { label: 'Role', id: '17' },
  { label: 'Lance', id: '18' },
  { label: 'Batata', id: '19' },
  { label: 'Frita', id: '1a' },
  { label: 'Rolenad', id: '1s' },
  { label: 'Minha', id: '1d' },
  { label: 'Esposa', id: '1f' },
  { label: 'Sente-se', id: '1g' },
  { label: 'Brava', id: '1h' },
  { label: 'Agora', id: '1j' },
];

function SearchPage() {
  return (
    <Page>
      <main>
        <Autocomplete
          suggestions={suggestions}
          label="O select"
          onChange={() => console.log('mudo')}
        />
      </main>
    </Page>
  );
}

export default SearchPage;
