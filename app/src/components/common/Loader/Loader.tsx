export const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full gap-2">
      <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-r-4 border-blue-500" />
      <span className="text-blue-500">Chargement...</span>
    </div>
  );
};
