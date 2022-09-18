import { Challenge } from '../../components/Challenge';
import { BlogCard } from '../../components/BlogCard';
import { NewsCard } from '../../components/NewsCard';
import { JobsCard } from '../../components/JobsCard';
import { TopViewsCard } from '../../components/TopViewsCard';

import styles from './home.module.scss';

export function Home() {
  const cardsBlog = [
    {
      imgUrl: '/assets/img/cardPython.png',
      title: 'Você conhece o Python?',
      short: 'Python é uma linguagem Open-Source de propósito geral usado bastante em data science, machine learning...'
    },
    {
      imgUrl: '/assets/img/cardCss.png',
      title: 'O que é CSS?',
      short: 'função do CSS é justamente otimizar o aspecto visual das páginas, de uma maneira mais organizada.'
    },
    {
      imgUrl: '/assets/img/cardFront.png',
      title: 'O que faz um Front-end?',
      short: ' É o desenvolvimento da interface gráfica do usuário de um site, por meio do uso de HTML, CSS e JavaScript,'
    }
  ];

  const cardsNews = [
    {
      imgUrl: '/assets/img/cardIphone.png',
      text: 'iPhone 14: 3 inovações que a Apple trouxe em sua nova linha de smartphones'
    },
    {
      imgUrl: '/assets/img/cardSecurity.png',
      text: '5 dicas de segurança para sua vida digital'
    },
    {
      imgUrl: '/assets/img/cardWaze.png',
      text: 'Usuários do Waze relatam instabilidade no aplicativo nesta terça-feira'
    }
  ];

  const cardsJobs = [
    {
      role: 'UX DEsign (Discovery) na Vivo',
      time: 'Tempo integral · Pleno-sênior'
    },
    {
      role: 'DEV java (pl/sr) Solutis Tecnologias',
      time: 'Tempo integral · Assistente'
    }
  ];

  const cardsViews = [
    {
      text: '1 - Você conhece o Python?'
    },
    {
      text: '2 - O que faz um Front-end?'
    },
    {
      text: '3 - O que é CSS?'
    }
  ];

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
