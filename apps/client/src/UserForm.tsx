export type UserValues = {
  firstName: string;
  lastName: string;
};

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
      onSubmit={async (e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div>
        firstName:
        <input
          name="firstName"
          disabled={disabled}
          value={values.firstName}
          onChange={(e) => {
            onValuesChange({ ...values, firstName: e.target.value });
          }}
        />
      </div>
      <div>
        lastName:
        <input
          name="lastName"
          value={values.lastName}
          disabled={disabled}
          onChange={(e) => {
            onValuesChange({ ...values, lastName: e.target.value });
          }}
        />
      </div>
      <div>
        <button type="submit" disabled={disabled}>
          New User
        </button>
      </div>
    </form>
  );
}
