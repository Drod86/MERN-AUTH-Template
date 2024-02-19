import Hero from "../components/Hero";
const HomeScreen = () => {
  const heading = "MERN Authentication";
  const blurb =
    "This is a boilerplate for MERN authentication that stores a JWT in an HTTP-Only cookie. It also uses Redux Toolkit and the React Bootstrap Library";
  return <Hero heading={heading} blurb={blurb} />;
};

export default HomeScreen;
