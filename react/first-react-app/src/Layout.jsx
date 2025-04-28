const Layout = (props) => {
  return (
    <>
      <header>
        header
        <h1>{props.title}</h1>
      </header>
      <main>{props.children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
