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

        {/* Upload media section */}
        <section className="settings-section">
          <h2>Upload Media</h2>
          <p>Select photos or videos to upload from any device. These files
            could be images or short clips that your fans can purchase or
            subscribe to. On mobile devices, this control will allow you to
            choose files from your camera roll or capture new content on the fly.
          </p>
          <input
            type="file"
            multiple
            accept="image/*,video/*"
          />
          <button>Upload Files</button>
        </section>

        {/* Payout & billing section */}
        <section className="settings-section">
          <h2>Payout & Billing</h2>
          <label htmlFor="payoutMethod">Preferred payout method</label>
          <select id="payoutMethod">
            <option value="bank">Bank Transfer</option>
            <option value="paypal">PayPal</option>
            <option value="crypto">Crypto (e.g. USDT)</option>
          </select>
          <button>Save Payout Info</button>
        </section>

        {/* Security & privacy section */}
        <section className="settings-section">
          <h2>Security & Privacy</h2>
          <label>
            <input type="checkbox" /> Enable two-factor authentication
          </label>
          <label>
            <input type="checkbox" /> Hide my profile from public search
          </label>
          <button>Save Security Settings</button>
        </section>
      </div>
    </Layout>
  );
}