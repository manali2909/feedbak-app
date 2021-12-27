import {useState,useContext, useEffect }from 'react'
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext';
function FeedbackForm() {
    const {handleAdd,feedbackEdit, updateFeedback}= useContext(FeedbackContext);

    const [text, setText]= useState('');
    const [btnDisabled, setBtnDisabled]= useState(true);
    const [message, setMessage]= useState('');
    const [rating, setRating]= useState(10);
    useEffect(()=>{
        if(feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);
        }
    },[feedbackEdit])

    const handleChange = (e)=>{
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null)
        }else if(text !== '' && text.trim().length<=10){
            setMessage('Text must be at least 10 chars');
            setBtnDisabled(true);
        }else{
            setMessage(null);
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(text.trim().length>10){
            const newFeedback={
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id , newFeedback);
            }else handleAdd(newFeedback);
            setText('');
        }
        
    }
    return (
        <Card>
           <form onSubmit={handleSubmit}>
               <h2> How would you rate us?</h2>
               <RatingSelect select={(rating)=>{setRating(rating)}}/>
               <div className="input-group">
                   <input onChange={handleChange} type='text' value={text} placeholder='Write a review'/>
                   <Button type="submit" isDisabled={btnDisabled}>Send</Button>
               </div>
               {message && <div className='message'>{message}</div>}
           </form>
        </Card>
    )
}

export default FeedbackForm
