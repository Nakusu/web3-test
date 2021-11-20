const express = require('express');
const Web3 = require("web3");
const app = express();
const port = 80;

app.get('/', (req, res) => {
    const web3 = new Web3("https://cloudflare-eth.com");
    if (window.ethereum != null) {
        state.web3 = new Web3(window.ethereum);
        try {
        window.ethereum.enable()
          alert("Welcome !");
        } catch (error) {
            alert("Arggg !");
        }
    }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
