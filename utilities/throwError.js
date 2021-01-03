const throwError = (error) => {
  error({
    statusCode: 404,
    message: 'Sorry, but the page you were trying to view does not exist.',
  })
}

export default throwError
