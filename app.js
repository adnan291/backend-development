const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  fs.readFile('username.txt', (err, data) => {
    if (err) {
      console.log(err);
      data = 'No Chat Exist';
    }
    res.send(`
      ${data}
      <form action="/" method="POST">
        <input type="text" id="message" name="message">
        <input type="hidden" id="username" name="username" value="">
        <br>
        <button type="submit">Send</button>
      </form>
      <script>
        document.getElementById('username').value = localStorage.getItem('username');
      </script>
    `);
  });
});


app.listen(4000, () => {
  console.log('Server started on port 4000');
});