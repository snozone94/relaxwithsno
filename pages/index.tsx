import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/**
 * Landing page for relaxwithsno.  This page checks whether the
 * visitor has already passed the age gate by inspecting a cookie.
 * If the cookie is present, we immediately redirect to the feed.
 * Otherwise we present a short introduction with a link to the
 * age‑verification page.
 */
export default function Home() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const hasGate = typeof document !== 'undefined' && document.cookie?.includes('age_gate_ok=1');
    if (hasGate) {
      router.replace('/feed');
    } else {
      setChecking(false);
    }
  }, [router]);

  if (checking) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>Loading…</p>;
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Welcome to RelaxWithSno</h1>
      <p>
        RelaxWithSno is a platform where creators can share premium content with
        their fans.  Before accessing the platform you must confirm you are
        over 18.
      </p>
      <button
        onClick={() => router.push('/age-gate')}
        style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}
      >
        Proceed to Age Verification
      </button>
    </main>
  );
}
