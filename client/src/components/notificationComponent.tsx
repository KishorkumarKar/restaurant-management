const alertClass = {
  SUCCESS:
    "bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg flex items-center space-x-3",
  ERROR:
    "bg-red-400 text-white px-5 py-3 rounded-lg shadow-lg flex items-center space-x-3",
};
export default function NotificationComponentPage({
  message,
  className,
}: {
  message: string;
  className: keyof typeof alertClass;
}) {
  return (
    <div className="fixed top-5 right-5 z-50">
      <div className={alertClass[className]}>
        {className == "ERROR" && <span className="text-xl">X</span>}
        {className == "SUCCESS" && <span className="text-xl">✔</span>}
        <p className="font-medium">{message}</p>
      </div>
    </div>
  );
}
