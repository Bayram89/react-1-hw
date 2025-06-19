"use client";

export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={icon}
          alt={title}
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
        {title}
      </a>
    </li>
  );
};