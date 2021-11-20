<template>
  <div class="content-home">
    <div v-if="!client" class="block">
      <h1>You have accept mister fox !</h1>
    </div>
    <div v-if="client != null" class="block">
      <h1>Welcome my fox !</h1>
      <p>Your adress : {{ adress }}</p>
    </div>
  </div>
</template>

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
  head() {
      return {
          title: "Home page",
      };
  },
  computed: {
    async getAccess() {
      if (window && window.ethereum) {
        try {
          await window.ethereum.enable();
          this.client = new Web3(web3.currentProvider);
          this.adress = this.client.currentProvider.selectedAddress;
          this.network = this.currentProvider.network;
        } catch (error) {}
      }
    },
  },
  methods: {
    async getBlockNumber() {
      const latestBlockNumber = await this.web3.eth.getBlockNumber();
      console.log(latestBlockNumber);
    },
  },
  async mounted() {
    this.getAccess;
  },
};
</script>
