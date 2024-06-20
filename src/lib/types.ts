export type TFeedbackItem = {
  id: string | number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

export type TStore = {
  feedbackItems: TFeedbackItem[];
  selectedCompany: string;
  errorMsg: string;

  addItemToList: (text: string) => void;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => void;
  getFilteredFeedbackItems: () => TFeedbackItem[];
};
