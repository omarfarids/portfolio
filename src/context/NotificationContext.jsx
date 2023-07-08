import { useState, createContext } from 'react';



const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [ status , setStatus ] = useState(false)
    const [message , setMessage] = useState('')
    
	const notify = (newMessage) => {
		setMessage(newMessage);
		setStatus(true);
		setTimeout(()=>{
			setMessage('');
			setStatus(false);
		},2000)

	}

	return (
		<NotificationContext.Provider
			value={{ status , message , notify }}
		>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationContext;
