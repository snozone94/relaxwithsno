import React from 'react';

/**
 * A simple component for displaying a feed post card.  It accepts a
 * title and description and renders them inside a card with basic
 * styling.  You can extend this component later to include images,
 * pricing information or call‑to‑action buttons as your platform
 * evolves.
 */
interface FeedPostProps {
  title: string;
  description: string;
}

export default function FeedPost({ title, description }: FeedPostProps) {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}