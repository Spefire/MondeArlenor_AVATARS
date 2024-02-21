var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

// Définit le dossier public pour les fichiers statiques
app.use(express.static('generation_items'));

// Route principale
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Route pour lister les fichiers PNG
app.get('/get-items', function (req, res) {
    var directoryPath = path.join(__dirname, 'generation_items'); // Chemin vers le dossier generation_items
    fs.readdir(directoryPath, function(err, files) {
      if (err) {
        return res.status(500).send('Unable to scan directory: ' + err);
      }
      
      // Filtrer pour ne garder que les fichiers PNG
      var pngFiles = files.filter(function (file) {
          return path.extname(file).toLowerCase() === '.png';
        }).map(function (file) {
          return path.basename(file, '.png');
        });
      res.json(pngFiles); // Envoie la liste des fichiers PNG en réponse
    });
  });

// Démarre le serveur
var PORT = 3000;
app.listen(PORT, function() {
  console.log('http://localhost:' + PORT);
});