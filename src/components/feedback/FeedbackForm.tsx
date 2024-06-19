import { useState } from 'react';
import { MAX_CHARACTERS } from '../../lib/constants';

type FeedbackFormProps = {
  addToList: (text: string) => void;
};

export default function FeedbackForm({ addToList }: FeedbackFormProps) {
  const [text, setText] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);

  const chartCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;

    if (newText.length > MAX_CHARACTERS) return;
    setText(newText);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (text.includes('#') && text.length >= 5) {
      setFormValid(true);
      setTimeout(() => setFormValid(false), 2000);
    } else {
      setFormInvalid(true);
      setTimeout(() => setFormInvalid(false), 2000);
      return
    }

    addToList(text);
    setText('');
  };

  return (
    <form className={`form ${formValid && 'form--valid'} ${formInvalid && 'form--invalid'}`}>
      <textarea
        value={text}
        onChange={handleChange}
        id='feedback-textarea'
        placeholder='0'
        maxLength={MAX_CHARACTERS}
      />
      <label htmlFor='feedback-textarea'>
        Enter your feedback here, remember to #hashtag the company
      </label>
      <div>
        <p className='u-italic'> {chartCount} </p>
        <button onClick={handleClick}>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
