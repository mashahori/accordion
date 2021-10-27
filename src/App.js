import './App.css';
import { Accordion } from './components/Accordion';
import { mock } from './utils/mock';

const App = () => <Accordion header={mock.header} text={mock.text} />

export default App;
