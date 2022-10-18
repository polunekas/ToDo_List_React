import React from "react";
import styles from "./index.module.scss";
import { useToDoStore } from "../../data/stores/useToDoStore";
import { InputPlus } from "../components/InputPlus";
import { InputTask } from "../components/InputTask";

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removedTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removedTask,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSction}></section>
      <InputPlus
        onAdd={(title) => {
          if (title) {
            createTask(title);
          }
        }}
      />
      <section className={styles.articleSction}>
        {!tasks.length && (
          <p className={styles.articleText}>There is no one task.</p>
        )}
        {tasks.map((task) => (
          <InputTask
            key={task.id}
            id={task.id}
            title={task.title}
            onDone={removedTask}
            onEdited={updateTask}
            onRemoved={removedTask}
          />
        ))}
      </section>
    </article>
  );
};
