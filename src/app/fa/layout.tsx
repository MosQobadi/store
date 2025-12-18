export default function FaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className="rtl">
      <body>{children}</body>
    </html>
  );
}
