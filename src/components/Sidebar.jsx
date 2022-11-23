import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

import coverImage from '../assets/coverImage.jpeg';
import avatar from '../assets/avatar.jpeg';
import { Avatar } from './Avatar';

export function Sidebar(props) {

  return (
    <aside className={styles.sidebar}>
      <img src={coverImage} className={styles.cover}/>
      
      <div className={styles.profile}>
        <Avatar src={avatar} />
        <strong>Nome Usuário</strong>
        <spam>Cargo Usuário</spam>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar Perfil 
        </a>
      </footer>
    </aside>
  );
  
}