import {useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import {motion , AnimatePresence} from 'framer-motion'
// import PropTypes from 'prop-types'

function FeedbackList() {
    const {feedback }= useContext(FeedbackContext);
    if(!feedback || feedback.length===0){
        return (<h3>No feedback yet</h3>)
    }
    
    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item)=>(
                <motion.div
                    key={item.id}
                    initital={{opacity : 0}}
                    animate ={{opacity :1}}
                    exit={{opacity : 0}}
                >
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}

// FeedbackList.propTypes={
//     feedback:PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.number.isRequired,
//             text:PropTypes.string.isRequired,
//             rating:PropTypes.number.isRequired
//         })
//     )
// }
export default FeedbackList
