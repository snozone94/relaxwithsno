import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/**
 * Simple feed page.  This page represents the restricted area of
 * RelaxWithSno where users can view posts.  It verifies that the
 * visitor has passed the age gate by checking for a cookie; if
 * absent we redirect to the age gate page.  In a production
 * application you would fetch posts from your database and handle
 * pagination, paywalls, etc.
 */
export default function Feed() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasGate = typeof document !== 'undefined' && document.cookie?.includes('age_gate_ok=1');
    if (!hasGate) {
      router.replace('/age-gate');
    } else {
      setAuthorized(true);
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>Loading…</p>;
  }
  if (!authorized) {
    return null;
  }
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Your Feed</h1>
      <p>This is where your subscribed content would appear.  Implement subscriptions and purchases according to your business logic.</p>
      {/* Example posts */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
          <h2>Sample Post 1</h2>
          <p>A preview of the content goes here.  Paying users will see the full post.</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
          <h2>Sample Post 2</h2>
          <p>Another preview of the content goes here.</p>
        </div>
      </div>
    </main>
  );
}
