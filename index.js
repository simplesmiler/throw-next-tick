module.exports = function(err) {
  process.nextTick(function() {
    throw err;
  });
};
