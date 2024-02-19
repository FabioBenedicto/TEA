export const errorsMiddleware = (err, req, res, next) => {
  console.log('passou aqui')

  if (err instanceof Error) {
    return res.status(400).json({
      erro: err.message,
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  })
}
