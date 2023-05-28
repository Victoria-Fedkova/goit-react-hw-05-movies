import { Header, NavLinks } from './Header.styled';
const PageHeader = () => {
  return (
    <Header>
      <nav>
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/movies">Movies</NavLinks>
      </nav>
    </Header>
  );
};

export default PageHeader;
