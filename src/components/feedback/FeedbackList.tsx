import FeedbackItem from './FeedbackItem';
import Spinner from '../misc/Spinner';
import { useFeedbackItemsStore } from '../../store/feedbackItemsStore';
import { TFeedbackItem } from '../../lib/types';

export default function FeedbackList() {
  const filteredFeedbackItems = useFeedbackItemsStore(state => state.getFilteredFeedbackItems())
  const errorMsg = useFeedbackItemsStore(state => state.errorMsg)
  const isLoading = filteredFeedbackItems.length === 0;

  return (
    <ol className='feedback-list'>
      {isLoading && !errorMsg ? <Spinner /> : null}
      {errorMsg && <p style={{ color: 'red' }}>Error: {errorMsg}</p>}
      {filteredFeedbackItems.map((feedbackItem: TFeedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
