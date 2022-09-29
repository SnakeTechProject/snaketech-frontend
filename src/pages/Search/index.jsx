import { SearchCard } from '../../components/SearchCard';
import styles from './search.module.scss';

import { cardsSearch } from '../../assets/mocks';

export function SearchPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchFounded}><span>4 Resultados encontrados!</span></div>
      <div className={styles.searchCard}>
        {cardsSearch.map((card, index) => (
          <SearchCard
            title={card.title}
            short={card.short}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
