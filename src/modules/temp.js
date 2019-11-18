const Temp = () => {
  function render() {
    return 'Log from temp file';
  }

  return { render };
};

export default Temp;

// Run webpack build to ensure that it's working
// If it's working I can be removed
