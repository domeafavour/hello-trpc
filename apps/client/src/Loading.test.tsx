import renderer from 'react-test-renderer';
import { Loading } from './Loading';

it('renders loading text', () => {
  const loadingElement = renderer.create(<Loading />);
  const tree = loadingElement.toJSON();
  expect(tree).toMatchSnapshot();
});
