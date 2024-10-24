const sortAlphabetically = (totalResult) => {
  totalResult.sort((a, b) => {
    const nameA = (a[0].startsWith('+') || a[0].startsWith('-')) ? a[0].slice(2) : a[0];
    const nameB = (b[0].startsWith('+') || b[0].startsWith('-')) ? b[0].slice(2) : b[0];

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return totalResult;
};

export default sortAlphabetically;
