const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

let keyValueData = [];

app.get('/readFile', (req, res) => {
  res.json({ data: keyValueData }); 
});

app.get('/writeToFile', (req, res) => {
  const { logs } = req.query;
  let log = logs.split("/");
  const key = log[0];
  const value = log[1];
  keyValueData.push({ key, value });
  console.log('Successfully added.',keyValueData,log);
  res.send("<script>window.close();</script > ")
});

app.post('/updateData', (req, res) => {
  keyValueData = req.body.data;
  console.log('Successfully updated.',keyValueData);
  res.send('Successfully updated.');
});

app.listen(port, () => {
  console.log(`Server working on ${port} port`);
});