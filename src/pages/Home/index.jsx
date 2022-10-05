import { Challenge } from '../../components/Challenge';
import { BlogCard } from '../../components/BlogCard';
import { NewsCard } from '../../components/NewsCard';
import { JobsCard } from '../../components/JobsCard';
import { TopViewsCard } from '../../components/TopViewsCard';

import styles from './home.module.scss';
import {
  cardsBlog,
  cardsJobs,
  cardsNews,
  cardsViews,
  inputsAndLabels,
} from '../../assets/mocks';

export function Home() {
  return (
    <div className={styles.wrapper}>
      <Challenge />

      <section className={styles.cardsBlogContainer}>
        {cardsBlog.map((card, index) => (
          <BlogCard
            imgUrl={card.imgUrl}
            title={card.title}
            short={card.short}
            key={index}
          />
        ))}
      </section>

      <section className={styles.apiContainer}>
        <div className={styles.newsContainer}>
          <h1>Se liga na news!</h1>
          <div className={styles.cardsNewsContainer}>
            {cardsNews.map((card, index) => (
              <NewsCard imgUrl={card.imgUrl} text={card.text} key={index} />
            ))}
          </div>
        </div>

        <div className={styles.jobsContainer}>
          <h1>Olha a vaga!</h1>
          <div className={styles.cardsJobsContainer}>
            {cardsJobs.map((card, index) => (
              <JobsCard role={card.role} time={card.time} key={index} />
            ))}
          </div>
        </div>

        <div className={styles.topViewContainer}>
          <h1>Os mais vistos</h1>
          <div className={styles.cardsTopViews}>
            {cardsViews.map((card, index) => (
              <TopViewsCard text={card.text} key={index} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.formHomePage}>
        <img
          src="https://cdn.discordapp.com/attachments/1021558762487693404/1022945971937738844/Business_man_holding_a_laptop_with_project_tasks_on_screen.jpg"
          alt="character"
        />
        <h2>Dúvidas e sugestões? Entre em contato conosco</h2>
        <form className={styles.form}>
          {inputsAndLabels.map((item, i) => (
            <>
              <fieldset key={i}>
                <label key={i + 1} htmlFor={item[1]}>
                  {item[0]}
                </label>
                <input key={i + 2} id={item[1]} placeholder={item[2]} />
              </fieldset>
            </>
          ))}
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}
