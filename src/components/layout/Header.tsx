import FeedbackForm from '../feedback/FeedbackForm';
import Logo from '../misc/Logo';
import PageHeading from '../misc/PageHeading';
import Pattern from '../misc/Pattern';

export default function Header() {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </header>
  );
}
