import Hero from "../components/Hero";
import TextAreaForm from "../components/TextAreaForm";

const AppScreen = () => {
  const heading = "App Screen";
  const blurb = "This is a boilerplate for inner application landing pages";
  return <Hero heading={heading} blurb={blurb} component={<TextAreaForm />} />;
};

export default AppScreen;
