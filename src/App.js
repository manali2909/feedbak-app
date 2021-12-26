import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import {useState} from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid';
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
    <>
      <Header/>
      <div className="container">
        <FeedbackForm addFeedback={handleAdd}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
      </div>  
    </>
    
  );
}

export default App;
