<template>
  <div class="content-home">
    <div v-if="!client" class="block">
      <h1>You have accept mister fox !</h1>
    </div>
    <div v-if="client != null" class="block">
      <h1>Welcome my fox !</h1>
      <p>Your adress : {{ adress }}</p>
      <p>Network : {{ network }}</p>
    </div>
  </div>
</template>

<script>
const Web3 = require("web3");

export default {
  data() {
    return {
      web3: new Web3("https://bsc-dataseed1.binance.org"),
      client: null,
      adress: null,
      network: null,
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
          if (window.ethereum.networkVersion != 56)
            this.changeNetwork();
        } catch (error) {}
      }
    },
  },
  methods: {
    async getBlockNumber() {
      const latestBlockNumber = await this.web3.eth.getBlockNumber();
      console.log(latestBlockNumber);
    },
    async changeNetwork() {
      if (window.ethereum) {
        try {
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x38" }],
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{ chainId: "0x38", name: "Binance Smart chain", rpcUrl: "https://bsc-dataseed.binance.org/" /* ... */ }],
              });
            } catch (addError) {
              // handle "add" error
            }
          }
          // handle other "switch" errors
        }
      }
    },
  },
  async mounted() {
    this.getAccess;
    window.ethereum.on("networkChanged", (networkId) => {
      console.log("networkChanged", networkId);
      this.changeNetwork();
    });
  },
};
</script>
