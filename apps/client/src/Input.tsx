export type InputProps = {
  name: string;
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ name, value, disabled, onChange }: InputProps) {
  return (
    <input
      name={name}
      className="border-2 border-gray-300 rounded-md p-2 w-1/2"
      disabled={disabled}
      value={value}
      onChange={onChange}
    />
  );
}
