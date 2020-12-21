interface PopupOngoingProjectsProps {
  setClicked: (e: boolean) => void;
}
export default function PopupOngoingProjects({
  setClicked,
}: PopupOngoingProjectsProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-10">
      <div
        className="bg-white w-full h-full opacity-50 z-0"
        onClick={() => setClicked(false)}
      />
      <div className="bg-white w-1/2 h-1/2 fixed position-center shadow-xl z-10">
        Test
      </div>
    </div>
  );
}
