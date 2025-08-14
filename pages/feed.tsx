import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FeedPost from '../components/FeedPost';

/**
 * The feed page represents the restricted area of RelaxWithSno where
 * verified users can view creator content.  This implementation
 * checks for the age gate cookie and redirects to the age‑gate
 * component if it isn't present.  Once authorized, it renders a
 * collection of post cards using the FeedPost component.  Replace
 * the sample posts array with posts from your database in
 * production.
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

  // Replace this array with real data fetched from your backend
  const posts = [
    {
      title: 'Sample Post 1',
      description: 'A preview of the content goes here. Paying users will see the full post.',
    },
    {
      title: 'Sample Post 2',
      description: 'Another preview of the content goes here.',
    },
  ];

  return (
    <main>
      <h1>Your Feed</h1>
      <p>
        This is where your subscribed content would appear. Implement subscriptions and purchases
        according to your business logic.
      </p>
      <div className="feed-posts">
        {posts.map((post) => (
          <FeedPost key={post.title} title={post.title} description={post.description} />
        ))}
      </div>
    </main>
  );
}