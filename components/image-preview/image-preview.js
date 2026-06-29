Component({
  properties: {
    images: { type: Array, value: [] },
    current: { type: Number, value: 0 },
    visible: { type: Boolean, value: false },
  },

  methods: {
    close() {
      this.triggerEvent("close");
    },

    stopTap() {},

    onChange(e) {
      this.triggerEvent("change", { current: e.detail.current || 0 });
    },
  },
});
