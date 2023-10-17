export default async function Layout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
