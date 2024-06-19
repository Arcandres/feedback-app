import { TFeedbackItem } from '../../lib/types';
import FeedbackList from '../feedback/FeedbackList';
import Header from './Header';

type ContainerProps = {
  handleAddToList: (text: string) => void;
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMsg: string;
};

export default function Container({
  handleAddToList,
  feedbackItems,
  isLoading,
  errorMsg,
}: ContainerProps) {
  return (
    <main className='container'>
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMsg={errorMsg}
      />
    </main>
  );
}
