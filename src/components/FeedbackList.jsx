//import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
import Spinner from "./shared/Spinner"
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)    
    
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback yet</p>
    }

// return <div className="feedback-list"> 123
//         <AnimatePresence>
//         {feedback.map((item) => (
//             <motion.div 
//                 key={item.id}
//                 initial={{opacity: 0}}
//                 animate={{opcaity: 1}}
//                 exit={{opacity: 0}}
//             >
//                 <FeedbackItem key={item.id} item={item}
//                 handleDelete={handleDelete}
//                 />            
//             </motion.div>
//         ))}
//         </AnimatePresence>
//         </div>
    
   // Return without the animation from framer-motion

   return isLoading ? <Spinner/> : (<div className="feedback-list">
    {feedback.map((item) => (
       <FeedbackItem 
           key={item.id} 
           item={item}
       />
    ))}
    </div>) 
}


export default FeedbackList