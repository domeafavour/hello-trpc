import { type User } from '@app/server';
import { FormControl } from './FormControl';
import { Input } from './Input';

export type UserValues = Omit<User, 'id'>;

export type UserFormProps = {
  disabled?: boolean;
  values: UserValues;
  onValuesChange: (values: UserValues) => void;
  onSubmit: () => void;
};

export function UserForm({
  disabled,
  values,
  onValuesChange,
  onSubmit,
}: UserFormProps) {
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={async (e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <FormControl label="firstName">
        <Input
          name="firstName"
          disabled={disabled}
          value={values.firstName}
          onChange={(e) => {
            onValuesChange({ ...values, firstName: e.target.value });
          }}
        />
      </FormControl>
      <FormControl label="lastName">
        <Input
          name="lastName"
          value={values.lastName}
          disabled={disabled}
          onChange={(e) => {
            onValuesChange({ ...values, lastName: e.target.value });
          }}
        />
      </FormControl>
      <div>
        <button type="submit" disabled={disabled}>
          New User
        </button>
      </div>
    </form>
  );
}
