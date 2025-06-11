// TASK - React 1 week 2

import styles from '@/components/destination/destination.module.css';

export const PlanetWishlistItem = (props) => {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={props.thumbnail} alt={`${props.name} thumbnail`} />
      <b>{props.name.toUpperCase()}</b>
      <button onClick={props.onRemove}>remove</button>
    </div>
  );
};