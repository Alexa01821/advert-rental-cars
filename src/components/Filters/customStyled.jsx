const getCustomStyles = () => ({
  control: styles => ({
    ...styles,
    height: '48px',
    borderColor: 'rgba(18, 20, 23, 0.2)',
    border: 'none',
    borderRadius: '14px',
    padding: '8px',
    fontFamily: 'Manrope',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '125%',
    color: ' rgba(18, 20, 23, 1)  ',
    backgroundColor: 'rgba(247, 247, 251, 1)',
    appearance: 'none',
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      color:
        isFocused || isSelected
          ? 'rgba(18, 20, 23, 1)'
          : 'rgba(18, 20, 23, 0.2)',
      backgroundColor:
        isFocused || isSelected ? 'rgba(52, 112, 255, 0.3)' : null,
      borderRadius: '14px',
      fontFamily: 'Manrope',
    };
  },

  menu: styles => ({
    ...styles,
    borderRadius: '14px',
    backgroundColor: ' rgba(255, 255, 255, 1)',
    boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02)',
  }),

  singleValue: styles => ({
    ...styles,
    color: 'var(--color-text)',
    backgroundColor: 'rgba(247, 247, 251, 1)',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: '#EFEDE8',
  }),

  container: provided => ({
    ...provided,
    border: '1px solid rgba(239, 237, 232, 0.30)',
    borderRadius: '12px',
    outline: 'none',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0',
  }),

  placeholder: styles => ({
    ...styles,
    color: 'rgba(18, 20, 23, 1)',
  }),
});

export default getCustomStyles;
