import { useEffect, useState } from 'react';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

export default function Layout({ children }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Header hydrated={hydrated} />

      {children}

      <Footer />
    </>
  );
}
