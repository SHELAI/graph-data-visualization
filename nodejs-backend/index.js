const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Sample graph data
let graphData = {
    data: [
      { name: 'A', description: 'This is a description of A', parent: '' },
      { name: 'B', description: 'This is a description of B', parent: 'A' },
      { name: 'C', description: 'This is a description of C', parent: 'A' },
      { name: 'D', description: 'This is a description of D', parent: 'A' },
      { name: 'B-1', description: 'This is a description of B-1', parent: 'B' },
      { name: 'B-2', description: 'This is a description of B-2', parent: 'B' },
      { name: 'B-3', description: 'This is a description of B-3', parent: 'B' },
      { name: 'D-1', description: 'This is a description of D-1', parent: 'D' },
      { name: 'B-2-1', description: 'This is a description of B-2-1', parent: 'B-2' },
    ]
  };

app.get('/graph', (req, res) => {
    res.json(graphData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});