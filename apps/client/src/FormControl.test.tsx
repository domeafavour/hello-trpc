import renderer from 'react-test-renderer';
import { FormControl } from './FormControl';

it('renders <FormControl label="Test Label">Test Child</FormControl> correctly', () => {
  const formControlElement = renderer.create(
    <FormControl label="Test Label">Test Child</FormControl>
  );
  const tree = formControlElement.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <FormControl label="Label" /> correctly', () => {
  const formControlElement = renderer.create(
    <FormControl label="Label">hello</FormControl>
  );
  const tree = formControlElement.toJSON();
  expect(tree).toMatchSnapshot();
});
