import { useState } from 'react';
import renderer, { act } from 'react-test-renderer';
import { Input } from './Input';

it('renders Input correctly', () => {
  const tree = renderer
    .create(<Input name="test-input" value="" onChange={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('updates on change', () => {
  function InputWrapper() {
    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    return <Input name="test-input" value={value} onChange={handleChange} />;
  }

  const instance = renderer.create(<InputWrapper />).root;

  act(() => {
    instance
      .findByType(Input)
      .props.onChange({ target: { value: 'Hello World' } });
  });

  expect(instance.findByType('input').props.value).toBe('Hello World');
});
