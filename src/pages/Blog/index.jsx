import styles from './blog.module.scss';
import { BlogCard } from '../../components/BlogCard';

export function Blog() {

  const cardsBlog = [
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

  return (
    <div className={styles.wrapper}>
      <h1>Blog SnakeTech</h1>

      <div className={styles.news}>
        <h1>Você conhece Python?</h1>

        <div className={styles.container}>
          <div className={styles.imgShape}>
            <img src="public/assets/img/cardPython.png" alt="" />
          </div>

          <div className={styles.textBox}>
            <p>Python é uma linguagem Open-Source de propósito geral usado bastante em data science, machine learning, desenvolvimento de web, desenvolvimento de aplicativos, automação de scripts, fintechs e mais.</p><br/>

           <p>StackOverflow considerou Python a linguagem de renome que mais cresce, e a linguagem que os programadores mais desejam aprender.</p><br/>

           <p> Como por exemplo em 2014 nos Estados Unidos, 80% das 10 melhores universidades de ciência da computação (e 69% dos top 39) ensinam o python em cursos introdutórios.</p><br/>
          </div>
        </div>
      </div>

      <h2 className={styles.cardsDescription}>Você pode gostar de ler também</h2>
      <div className={styles.cardsBlogContainer}>
        {cardsBlog.map((card, index) => <BlogCard imgUrl={card.imgUrl} title={card.title} short={card.short} key={index}/>)}
      </div>
    </div>
  );
}

