import Footer from "./components/Footer";
import Header from "./components/Header";

import styles from "./App.module.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <Form btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
