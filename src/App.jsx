import react,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CounterButtons from './components/CounterButtons';
import CounterDisplay from './components/CounterDisplay';
import NavBar from './components/NavBar';
import Cart from './components/Cart'
import CollapsibleSection from './components/Expandabletext';
import ReviewBox from './components/ReviewBox';
import FormComponent from './components/Form';
import FeedBackForm from './components/FeedbackForm';
import TaskForm from './components/TaskForm';
import UserForm from './components/TaskForm';
import ProductForm from './components/ProductForm';
function App() {
  
  return (
   <div> 

      <ProductForm/>

    </div> 
  );
}

export default App;
