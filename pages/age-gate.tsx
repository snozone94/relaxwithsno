import { useState } from 'react';
import { useRouter } from 'next/router';

/**
 * Age gate page.  As required by many jurisdictions, adult content
 * platforms must verify that visitors are at least 18 years old.  This
 * simple implementation asks for a date of birth and a confirmation
 * checkbox.  When the form is submitted we set a cookie and redirect
 * to the feed.  For production you should integrate an age‑verification
 * service.
 */
export default function AgeGate() {
  const router = useRouter();
  const [dob, setDob] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    if (!dob) {
      setError('Please enter your date of birth.');
      return;
    }
    const birthDate = new Date(dob);
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear() - (now < new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);
    if (age < 18) {
      setError('You must be at least 18 years old to access this site.');
      return;
    }
    if (!confirm) {
      setError('Please confirm that you are at least 18 years old.');
      return;
    }
    // Set a cookie that expires in 30 days.
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 30);
    document.cookie = `age_gate_ok=1; expires=${expiry.toUTCString()}; path=/`;
    router.replace('/feed');
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Age Verification</h1>
      <p>You must be at least 18 years old to use RelaxWithSno.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={e => setDob(e.target.value)} required style={{ marginLeft: '0.5rem' }} />
        </label>
        <label style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" checked={confirm} onChange={e => setConfirm(e.target.checked)} />
          <span style={{ marginLeft: '0.5rem' }}>I confirm that I am 18 years of age or older.</span>
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}>Continue</button>
      </form>
    </main>
  );
}
