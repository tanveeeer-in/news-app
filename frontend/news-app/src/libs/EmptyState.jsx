export default function EmptyState({
  message = "No data available",
  icon = null,
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 text-gray-500">
      {icon && <div className="mb-4">{icon}</div>}
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
}
