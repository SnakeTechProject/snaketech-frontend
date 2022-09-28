/* eslint-disable react/display-name */
import styles from './input.module.scss';
import PropTypes from 'prop-types';
import React from 'react';

export function Input({ label, fieldName, register, required, ...rest }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={label}>{label}</label>

      <input
        id={fieldName}
        placeholder={label}
        required={required}
        {...register(fieldName)}
        {...rest}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};
