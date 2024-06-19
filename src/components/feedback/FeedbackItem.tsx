import { TriangleUpIcon } from '@radix-ui/react-icons';
import { TFeedbackItem } from '../../lib/types';
import { useState } from 'react';

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
};

export default function FeedbackItem({
  feedbackItem: { upvoteCount, badgeLetter, company, text, daysAgo },
}: FeedbackItemProps) {
  const [open, setOpen] = useState(false);
  const [upvotes, setUpvotes] = useState(upvoteCount);

  const handleUpvote = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setUpvotes(upvotes + 1);
    event.currentTarget.disabled = true;
    event.stopPropagation();
  };

  return (
    <li
      onClick={() => setOpen(!open)}
      className={`feedback ${open ? 'feedback--expand' : ''}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvotes}</span>
      </button>

      <div>
        <p>{badgeLetter}</p>
      </div>

      <div>
        <p>{company}</p>
        <p>{text}</p>
      </div>
      <p>{daysAgo < 1 ? 'New' : `${daysAgo}d`}</p>
    </li>
  );
}
