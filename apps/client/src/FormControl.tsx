export type FormControlProps = {
  label: string;
  children: React.ReactNode;
};

export function FormControl({ label, children }: FormControlProps) {
  return (
    <div className="flex flex-row gap-2 items-center font-mono">
      {label}:{children}
    </div>
  );
}
