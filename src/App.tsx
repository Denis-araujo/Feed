import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { SideBar } from "./components/SideBar/SideBar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />

          <Post />
        </main>
      </div>
    </div>
  );
}
