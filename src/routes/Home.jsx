import Header from '../components/Header';
import TodosLogic from '../components/TodosLogic';

const Home = () => (
  // <div className="wrapper"> remove the div
  <div className="todos">
    <Header />
    <TodosLogic />
  </div>
  // </div>
);
export default Home;
