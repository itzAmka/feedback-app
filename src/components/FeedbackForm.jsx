import { useState } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';

const FeedbackForm = () => {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const handleTextChange = e => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Text must be at least 10 characters');
		} else {
			setBtnDisabled(false);
			setMessage(null);
		}

		setText(e.target.value);
	};

	return (
		<Card>
			<form>
				<h2>How would you rate your services with us</h2>
				{/* @TODO - rating select component */}

				<div className='input-group'>
					<input
						type='text'
						placeholder='Write a review'
						value={text}
						onChange={handleTextChange}
					/>
					<Button type='submit' version='secondary' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>

				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
