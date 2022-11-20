import { Header } from "./components/Header/Header";
import { Post, PropsPost } from "./components/Post/Post";
import { SideBar } from "./components/SideBar/SideBar";

import styles from "./App.module.css";

import "./global.css";

const posts: PropsPost[] = [
  {
    id: 1,
    author: {
      name: "Denis Gomes",
      role: "Web Developer",
      avatarUrl: "https://github.com/denis-araujo.png",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-11-17 20:00:00"),
  },
  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
      avatarUrl: "https://github.com/diego3g.png",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-11-19 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
