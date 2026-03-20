function status(request, response){
  response.status(200).json({chave: "Ok não"})
}

export default status