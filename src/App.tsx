import { useState } from "react";

import { ITask } from "./interfaces/Task";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

import styles from "./App.module.css";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskUpdate, setTaskUpdate] = useState<ITask | null>(null);
  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal?.classList.remove("hide");
    } else {
      modal?.classList.add("add");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty };

    const udatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task;
    });

    setTaskList(udatedItems);
    hideOrShowModal(false);
  };

  return (
    <div className="App">
      <Modal
        children={
          <Form
            btnText="Editar tarefa"
            taskList={taskList}
            task={taskUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Form
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
