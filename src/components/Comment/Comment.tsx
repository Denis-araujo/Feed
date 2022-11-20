import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

interface PropsComent {
  content: string;
  onDeleteComment: (id: string) => void;
}

export function Comment({ content, onDeleteComment }: PropsComent) {
  const [likeCount, setlikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setlikeCount((prevState) => prevState + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/denis-araujo.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Denis Araujo</strong>

              <time title="11 de maio às 8:13" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
