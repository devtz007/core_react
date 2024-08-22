

/**
 * This component renders a paragraph (`<p>`) element displaying the sum of two numbers.
 *
 * @returns {JSX.Element} - JSX element representing the sum of the two numbers.
 *
 */
const ExamplePagePart = () => {

  return <p>{1 + 5}</p>;
};

// Setting displayName for better debugging and searching
ExamplePagePart.displayName = 'ExamplePagePart';

export default ExamplePagePart;
