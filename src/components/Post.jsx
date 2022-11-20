import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/hulgo.png" />
          <div className={styles.authorInfo}>
            <strong>Hulgo Leonardo</strong>
            <span>Desenvolvedor Full-Stack</span>
          </div>
        </div>

        <time title="19 de Novembro às 17:35h" dateTime="2022-11-19 17:35">Publicado há 1h</time>

      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifólio. Siga o link abaixo pra acompanhar</p>
        <p><a href="">hltech.dev</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>

      </div>

    </article>
  );
}