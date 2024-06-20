import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import HashtagList from './components/hashtag/HashtagList';
import { useEffect } from 'react';
import { useFeedbackItemsStore } from './store/feedbackItemsStore';

export default function App() {

  const fetchFeedbackItems = useFeedbackItemsStore(state => state.fetchFeedbackItems);
  useEffect(() => {
    fetchFeedbackItems();
  }, []);

  return (
    <div className='app'>
      <Footer />
      <Container/>
      <HashtagList />
    </div>
  );
}
