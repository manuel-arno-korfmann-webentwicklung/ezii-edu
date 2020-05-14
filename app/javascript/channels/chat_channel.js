import consumer from "./consumer"

const chatChannel = consumer.subscriptions.create("ChatChannel", {
  connected() {
	  this.send({body: "test if chat channel (ActionCable) works, try `window.chatChannel.send({body: \"test\"})`"});
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
	  console.log(data);
  }
});

window.chatChannel = chatChannel