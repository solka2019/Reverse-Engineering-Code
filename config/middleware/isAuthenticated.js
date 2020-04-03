// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};


// www.amazon.com/cart
// se o usuario nao estiver logado, o request nao tem o nome do user, por isso ta testando a linha 4.
// se tem o nome do user,  na 4, retorna a proxima pagina (que eh o cart)
// se nao, o programa executa a linha 9 que manda o user pro root to website (amazon.com)
