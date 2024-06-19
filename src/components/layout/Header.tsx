import FeedbackForm from '../feedback/FeedbackForm';
import Logo from '../misc/Logo';
import PageHeading from '../misc/PageHeading';
import Pattern from '../misc/Pattern';

type HeaderProps = {
  handleAddToList: (text: string) => void;
};

export default function Header({ handleAddToList }: HeaderProps) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm addToList={handleAddToList} />
    </header>
  );
}
