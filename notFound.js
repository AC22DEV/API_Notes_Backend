module.exports = app.use((request, response, next) => {
  response.status(404).end();
});
