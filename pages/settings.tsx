import React from 'react';
import Layout from '../components/Layout';

/*
 * Settings page for RelaxWithSno
 *
 * This page provides a simple skeleton for user settings inspired by
 * platforms like OnlyFans and Fanbase. It includes sections for
 * editing a user profile, configuring subscription pricing, and
 * adjusting notification preferences. These controls are purely
 * presentational and do not perform any real actions; they serve
 * as placeholders for future integration with backend services.
 */

export default function Settings() {
  return (
    <Layout>
      <div className="settings">
        <h1>Settings</h1>
        {/* Profile section */}
        <section className="settings-section">
          <h2>Profile</h2>
          <label htmlFor="displayName">Display Name</label>
          <input
            id="displayName"
            type="text"
            placeholder="Your display name"
          />
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" placeholder="Tell us about yourself" />
          <button>Save Profile</button>
        </section>

        {/* Subscription and pricing section */}
        <section className="settings-section">
          <h2>Subscription & Pricing</h2>
          <label htmlFor="price">Subscription Price ($)</label>
          <input id="price" type="number" min="0" step="0.01" />
          <button>Save Pricing</button>
        </section>

        {/* Notification preferences section */}
        <section className="settings-section">
          <h2>Notifications</h2>
          <label>
            <input type="checkbox" /> Email notifications
          </label>
          <label>
            <input type="checkbox" /> Push notifications
          </label>
          <button>Save Preferences</button>
        </section>
      </div>
    </Layout>
  );
}