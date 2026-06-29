const { copyText } = require("../../utils/util");

Component({
  properties: {
    contact: { type: Object, value: {} },
    title: { type: String, value: "" },
  },

  methods: {
    onCopyWechat() {
      if (this.data.contact.wechat) {
        copyText(this.data.contact.wechat);
      }
    },

    onCopyPhone() {
      if (this.data.contact.phone) {
        copyText(this.data.contact.phone);
      }
    },
  },
});
