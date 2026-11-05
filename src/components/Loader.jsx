export default function Loader() {
  return (
    <div className="flex justify-center py-24" role="status" aria-label="Loading">
      <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-orange border-t-transparent" />
    </div>
  );
}
