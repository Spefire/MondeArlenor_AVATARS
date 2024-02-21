const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Définit le dossier public pour les fichiers statiques
app.use(express.static('generation_items'));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Route pour lister les fichiers PNG
app.get('/get-items', (req, res) => {
    const directoryPath = path.join(__dirname, 'generation_items'); // Chemin vers le dossier generation_items
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        return res.status(500).send('Unable to scan directory: ' + err);
      }
      
      // Filtrer pour ne garder que les fichiers PNG
      const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png').map(file => path.basename(file, '.png'));
      res.json(pngFiles); // Envoie la liste des fichiers PNG en réponse
    });
  });

// Démarre le serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});