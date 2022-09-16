import { Challenge } from '../../components/Challenge';
import { BlogCard } from '../../components/BlogCard';
import styles from './home.module.scss';

export function Home() {
  const cards = [
    {
      img: {
        imgUrl: '/assets/img/cardPython.png',
        title: 'Você conhece o Python?'
      },
      title: 'Você conhece o Python?',
      short: 'Python é uma linguagem Open-Source de propósito geral usado bastante em data science, machine learning...'
    },
    {
      img: {
        imgUrl: '/assets/img/cardCss.png',
        title: 'O que é CSS?'
      },
      title: 'O que é CSS?',
      short: 'função do CSS é justamente otimizar o aspecto visual das páginas, de uma maneira mais organizada.'
    },
    {
      img: {
        imgUrl: '/assets/img/cardFront.png',
        title: 'O que faz um Front-end?'
      },
      title: 'O que faz um Front-end?',
      short: ' É o desenvolvimento da interface gráfica do usuário de um site, por meio do uso de HTML, CSS e JavaScript,'
    }
  ]
  return (
    <div className={styles.wrapper}>
      <h1>Home SnakeTech</h1>
      <Challenge/>
      <div className={styles.cardsBlogContainer}>
        {cards.map((card, index) => <BlogCard card={card} key={index} />) }
      </div>
    </div>
  );
}
