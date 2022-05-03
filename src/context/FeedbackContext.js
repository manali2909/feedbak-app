import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid';
import FeedbackData from '../data/FeedbackData'
const FeedbackContext= createContext();

export const FeedbackProvider = ({children})=>{
    const [feedback, setFeedback]= useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit]= useState({
        item:{},
        edit:false
    });
    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    const handleDelete= (id)=>{
        if(window.confirm("Are you sure you want to delete this ?")){
          setFeedback(feedback.filter((item)=> item.id !== id));
        }
    }
    const handleAdd = (newFeedback)=>{
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }
    const updateFeedback = (id, updatedItem)=>{
        setFeedback(feedback.map((item)=>{
            return (item.id=== id)? {...item, ...updatedItem}:item
        }))

    }
    return (<FeedbackContext.Provider value={{
                    feedback,
                    handleDelete,
                    handleAdd,
                    editFeedback,
                    updateFeedback,
                    feedbackEdit
                }}>
                {children}
            </FeedbackContext.Provider>)
}

export default FeedbackContext;