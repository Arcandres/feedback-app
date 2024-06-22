import { create } from 'zustand';
import { TFeedbackItem, TStore } from '../lib/types';

export const useFeedbackItemsStore = create<TStore>((set, get) => ({
  feedbackItems: [],
  selectedCompany: '',
  errorMsg: '',

  addItemToList(text: string) {
    console.log(text);
    const companyName = text
      .split(' ')
      .find((word) => word.includes('#'))!
      .slice(1);

    const newItem: TFeedbackItem = {
      id: crypto.randomUUID(),
      text: text,
      upvoteCount: 0,
      company: companyName,
      daysAgo: 0,
      badgeLetter:
        companyName[0].toUpperCase() /* Taking the first letter of the company name */,
    };

    set((state) => ({
      feedbackItems: [...state.feedbackItems, newItem],
    }));

    fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
      {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
  },

  selectCompany(company: string) {
    set(() => ({
      selectedCompany: company,
    }));
  },

  fetchFeedbackItems() {
    fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
    )
      .then((response) => response.json())
      .then((data) => set(() => ({ feedbackItems: data.feedbacks })))
      .catch((error) => set(() => ({ errorMsg: error.message })));
  },

  getFilteredFeedbackItems() {
    const { selectedCompany, feedbackItems } = get();

    return selectedCompany
      ? feedbackItems.filter(
          (item: TFeedbackItem) => item.company === selectedCompany
        )
      : feedbackItems;
  },
}));
