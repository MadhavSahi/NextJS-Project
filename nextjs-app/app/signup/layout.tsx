export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <p>Heyyy Signup.</p>
      {children}
    </>
  );
}
