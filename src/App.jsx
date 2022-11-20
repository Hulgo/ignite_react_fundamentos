import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Hulgo Leonardo" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempus ac leo sed tempus. Ut condimentum libero vel velit tempus, non pretium massa malesuada. " 
          />
          <Post
            author="Fulano de Tal"
            content="Coisas diversas!"
          />
        </main>
      </div>
      
      
    </div>
  )
}
