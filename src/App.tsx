import { useEffect, useState } from 'react';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import HashtagList from './components/hashtag/HashtagList';
import { TFeedbackItem } from './lib/types';

const companyNames = new Set<string>();

export default function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const isLoading = feedbackItems.length === 0;

  feedbackItems.forEach((item) => companyNames.add(item.company));

  // const companyNames = feedbackItems
  //   .map((item) => item.company)
  // .filter((value, index, self) => self.indexOf(value) === index); // filter out duplicate company names

  const filteredFeedbackItems = selectedCompany ? feedbackItems.filter(
    (item) => item.company === selectedCompany 
  ) : feedbackItems

  const handleAddToList = (text: string) => {
    console.log(text);
    const companyName = text
      .split(' ')
      .find((word) => word.includes('#'))!
      .slice(1);

    const newItem: TFeedbackItem = {
      id: crypto.randomUUID(),
      text: text,
      upvoteCount: 600,
      company: companyName,
      daysAgo: 0,
      badgeLetter:
        companyName[0].toUpperCase() /* Taking the first letter of the company name */,
    };

    setFeedbackItems([...feedbackItems, newItem]);

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
  };

  useEffect(() => {
    fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
    )
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedbacks))
      .catch((error) => setErrorMsg(error.message));
  }, []);

  return (
    <div className='app'>
      <Footer />
      <Container
        handleAddToList={handleAddToList}
        feedbackItems={filteredFeedbackItems}
        isLoading={isLoading}
        errorMsg={errorMsg}
      />
      <HashtagList setSelectedCompany={setSelectedCompany} companyNames={companyNames} />
    </div>
  );
}
