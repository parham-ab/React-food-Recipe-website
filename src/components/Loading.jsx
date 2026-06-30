const Loading = () => {
  return (
    <div className="loading-spinner" role="status" aria-live="polite">
      <span className="spinner" />
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
