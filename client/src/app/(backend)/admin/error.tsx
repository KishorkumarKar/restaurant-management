"use client";

export default function AdminError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>⚠️ Something went wrong in Admin Panel</h2>

      <p style={{ marginTop: "10px", color: "gray" }}>
        {error.message || "Unexpected error occurred."}
      </p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </div>
  );
}