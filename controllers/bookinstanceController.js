const BookInstance = require('../models/bookinstance')

// Display list of all BookInstances.
exports.bookinstance_list = (req, res) => {
  res.send('not implimented')
}

exports.bookinstance_detail = (req, res) => {
  res.send('not implimented'  + req.params.id)
}

exports.bookinstance_create_get = (req, res) => {
  res.send('not implimented')
}


exports.bookinstance_create_post = (req, res) => {
  res.send('Not implemented')
}

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

exports.bookinstance_delete_post = (req, res) => {
  res.send('not implimented')
}

exports.bookinstance_update_get = (req, res) => {
  res.send('not implimented: bookinstance')
}

exports.bookinstance_update_post = (req, res) => {
  res.send('not implimented')
}

