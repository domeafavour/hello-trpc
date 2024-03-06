import { act, renderHook } from '@testing-library/react-hooks';
import { useUserForm } from './useUserForm';

test('should update user values', () => {
  const { result } = renderHook(() => useUserForm());

  // Initial state
  expect(result.current[0]).toEqual({
    firstName: '',
    lastName: '',
  });

  // Update state
  act(() => {
    result.current[1]({
      firstName: 'John',
      lastName: 'Doe',
    });
  });

  // Updated state
  expect(result.current[0]).toEqual({
    firstName: 'John',
    lastName: 'Doe',
  });
});
