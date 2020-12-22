export default function Heading({ children, num }: any) {
  return (
    <div className="flex flex-row gap-2 items-baseline">
      <span className="block w-6 h-6 text-center rounded-full shadow-md border border-black">{num}</span>
      <h2>{children}</h2>
    </div>
  );
}
