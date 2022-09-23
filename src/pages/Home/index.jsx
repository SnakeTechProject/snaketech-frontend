import { Challenge } from '../../components/Challenge';
import { BlogCard } from '../../components/BlogCard';
import { NewsCard } from '../../components/NewsCard';
import { JobsCard } from '../../components/JobsCard';
import { TopViewsCard } from '../../components/TopViewsCard';

import styles from './home.module.scss';
import { cardsBlog, cardsJobs, cardsNews, cardsViews } from '../../assets/img/mocks';

export function Home() {
  

  return (
    <div className={styles.wrapper}>
      <h1>Home SnakeTech</h1>
      <Challenge/>

      <div className={styles.cardsBlogContainer}>
        {cardsBlog.map((card, index) => <BlogCard imgUrl={card.imgUrl} title={card.title} short={card.short} key={index} />)}
      </div>

      <div className={styles.apiContainer}>
        <div className={styles.newsContainer}>
          <h1>Se liga na news!</h1>
          <div className={styles.cardsNewsContainer}>
            {cardsNews.map((card, index) => <NewsCard imgUrl={card.imgUrl} text={card.text} key={index} />) }
          </div>
        </div>

        <div className={styles.jobsContainer}>
          <h1>Olha a vaga!</h1>
          <div className={styles.cardsJobsContainer}>
            {cardsJobs.map((card, index) => <JobsCard role={card.role} time={card.time} key={index} />) }
          </div>
        </div>

        <div className={styles.topViewContainer}>
          <h1>Os mais vistos</h1>
          <div className={styles.cardsTopViews}>
            {cardsViews.map((card, index) => <TopViewsCard text={card.text} key={index} />) }
          </div>
        </div>
      </div>
    </div>
  );
}
