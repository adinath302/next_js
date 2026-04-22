import '../globals.css';

export default function adminlayout({ children }) {
  return (
    <>
      <div> <span className="text-red-600">admin</span> layout</div>
      {children}
    </>
  );
}
