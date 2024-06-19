type HashtagItemProps = {
  onSelectCompany: (companyName: string) => void;
  companyName: string;
}

export default function HashtagItem({ onSelectCompany, companyName }: HashtagItemProps) {
  const handleClick = () => {
    onSelectCompany(companyName);
  }

  return (
    <li>
      <button onClick={handleClick}>#{companyName}</button>
    </li>
  );
}
