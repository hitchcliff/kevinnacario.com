enum Types {
  Submit = "submit",
}
interface ButtonProps {
  submit?: boolean;
  handleClick?: (e: boolean) => void;
  children: any;
}
export default function CustomButton({
  submit,
  handleClick,
  children,
}: ButtonProps) {
  function onClick() {
    if (!handleClick) return;
    handleClick(true);
  }

  return (
    <button
      onClick={onClick}
      type={submit ? Types.Submit : undefined}
      className="block py-2 px-4 btn"
    >
      {children}
    </button>
  );
}
