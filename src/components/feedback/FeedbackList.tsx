import { TFeedbackItem } from '../../lib/types';
import FeedbackItem from './FeedbackItem';
import Spinner from '../misc/Spinner';

type FeedbackItemProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMsg: string;
};

export default function FeedbackList({
  feedbackItems,
  isLoading,
  errorMsg,
}: FeedbackItemProps) {
  return (
    <ol className='feedback-list'>
      {isLoading && !errorMsg ? <Spinner /> : null}
      {errorMsg && <p style={{ color: 'red' }}>Error: {errorMsg}</p>}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
