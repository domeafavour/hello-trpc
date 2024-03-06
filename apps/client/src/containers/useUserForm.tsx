import { useState } from 'react';
import { type UserValues } from '../UserForm';

export function useUserForm() {
  const [values, setValues] = useState<UserValues>({
    firstName: '',
    lastName: '',
  });
  return [values, setValues] as const;
}
