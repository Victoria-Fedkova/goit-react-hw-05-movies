import { Header, NavLinks } from './Header.styled';
const PageHeader = () => {
  return (
    <Header>
      <h2>Navigation</h2>
      <nav>
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/movies">Movies</NavLinks>
      </nav>
    </Header>
  );
};

export default PageHeader;
