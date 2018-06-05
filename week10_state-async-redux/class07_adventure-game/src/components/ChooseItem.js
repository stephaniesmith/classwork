import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChooseItem.css';

export default function ChooseItem({ items, onChoose }) {
  return (
    <ul className={styles.items}>
      {items.map(item => (
        <li key={item.key}>
          <button onClick={() => onChoose(item)}>{item.description}</button>
        </li>
      ))}
    </ul>  
  );
}

ChooseItem.propTypes = {
  items: PropTypes.array,
  onChoose: PropTypes.func.isRequired
};