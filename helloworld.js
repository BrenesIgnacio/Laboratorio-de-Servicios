const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send("Hello, World from Express!");
});
app.listen(PORT, () => {
	console.log(`Servicio ejecutandose en http://localhost:${PORT}`);
})
