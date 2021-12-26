import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useState} from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid';
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
function App() {
  const [feedback , setFeedback] = useState(FeedbackData);

  const handleDelete= (id)=>{
    if(window.confirm("Are you sure you want to delete this ?")){
      setFeedback(feedback.filter((item)=> item.id !== id));
    }
  }
  const handleAdd = (newFeedback)=>{
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route exact  path='/' element={
            <>
              <FeedbackForm addFeedback={handleAdd}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
            </>
          }/>
            
          <Route exact  path='/about' element={<About/>}/>
        </Routes>
        <AboutIconLink/>
      </div>  
    </Router>
    
  );
}

export default App;
