import { memo } from 'react';
import type { FC } from 'react';

/* Import custom components */
import ExamplePagePart from '@/pageParts/example-pagePart.tsx';

/* Import styles */
import '@/assets/styles/devtz007_css_sass_library/css/reset_lb.css';

interface Props {
  className?: string;
}
const App: FC<Props> = memo((props) => {
  return (
    <>
      <ExamplePagePart />
    </>
  );
});

// Setting displayName for better debugging and searching
App.displayName = 'App';

export default App;
