/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FormControl } from './FormControl';

test('renders label and children correctly', () => {
  render(
    <FormControl label={<span>Test Label</span>}>
      <input placeholder="input placeholder" />
    </FormControl>
  );

  expect(screen.getByText('Test Label')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('input placeholder')).toBeInTheDocument();
  // expect(screen.getByPlaceholderText('INPUT PLACEHOLDER')).toBeInTheDocument();
});
