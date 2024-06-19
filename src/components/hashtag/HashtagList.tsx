import HashtagItem from './HashtagItem';

type HashtagListProps = {
  setSelectedCompany: (companyName: string) => void;
  companyNames: Set<string>;
};

export default function HashtagList({
  setSelectedCompany,
  companyNames,
}: HashtagListProps) {
  return (
    <ul className='hashtags'>
      {[...companyNames].map((companyName) => (
        <HashtagItem
          key={companyName}
          companyName={companyName}
          onSelectCompany={setSelectedCompany}
        />
      ))}
    </ul>
  );
}
