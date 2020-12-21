enum Types {
  Submit = "submit",
}
interface ButtonProps {
  text: string;
  submit?: boolean;
  handleClick?: (e: boolean) => void;
}
export default function CustomButton({
  text,
  submit,
  handleClick,
}: ButtonProps) {
  function onClick() {
    if (!handleClick) return;
    handleClick(true);
  }

  return (
    <button
      onClick={onClick}
      type={submit ? Types.Submit : undefined}
      className="mt-7 block py-2 px-4 btn"
    >
      {text}
    </button>
  );
}
