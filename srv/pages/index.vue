<template>
  <div class="content-home">
    <div v-if="!client" class="block">
      <h1>You have accept my lord !</h1>
    </div>
    <div v-if="client != null" class="block">
        <h1>Welcome my lord !</h1>
        <p>Your adress : {{ adress }}</p>
    </div>
  </div>
</template>

<style>
    html {
        background-color: black;
        color: white;
    }
</style>

<script>
const Web3 = require("web3");

export default {
  data() {
    return {
      web3: new Web3("https://cloudflare-eth.com"),
      client: null,
      adress: null,
    };
  },
  methods: {
    async getBlockNumber() {
      const latestBlockNumber = await this.web3.eth.getBlockNumber();
      console.log(latestBlockNumber);
    },
    async getAccess() {
      if (window.ethereum != null) {
        if (window.web3) {
          this.client = new Web3(web3.currentProvider);
          this.adress = this.client.currentProvider.selectedAddress;
          this.network = this.currentProvider.network;
          return;
        }
        try {
          await window.ethereum.enable();
          this.client = new Web3(window.ethereum);
        } catch (error) {}
      }
    },
  },
  async mounted() {
    this.getAccess();
  },
};
</script>
