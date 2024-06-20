import { TFeedbackItem } from '../../lib/types';
import { useFeedbackItemsStore } from '../../store/feedbackItemsStore';
import HashtagItem from './HashtagItem';

const companyNames = new Set<string>();

export default function HashtagList() {
  const feedbackItems = useFeedbackItemsStore(state => state.feedbackItems)
  const selectCompany = useFeedbackItemsStore(state => state.selectCompany)
  
  feedbackItems.forEach((item: TFeedbackItem) => companyNames.add(item.company));

  return (
    <ul className='hashtags'>
      {[...companyNames].map((companyName) => (
        <HashtagItem
          key={companyName}
          companyName={companyName}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
}
