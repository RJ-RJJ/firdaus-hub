const express = require('express');


const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;



// Create uploads directory if it doesn't exist
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) // Append extension
    }
});

const upload = multer({ storage: storage });

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, '/'))); // Serve static files

// Routes



// Upload route (protection temporarily removed)
app.post('/upload', upload.single('infoFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log('File uploaded:', req.file);
    res.redirect('/admin.html?upload=success');
});



// Middleware to protect routes (will be re-implemented for token auth)
function requireAuth(req, res, next) {
    // Placeholder for token validation logic
    next();
}

// Admin page route (protection temporarily removed)
app.get('/admin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Server startup
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
