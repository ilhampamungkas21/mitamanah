export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WOW = module.WOW || module.default?.WOW;

      if (!WOW) {
        console.log("WOWJS not loaded correctly");
        return;
      }

      new WOW({ live: false }).init();
    });
  }
};
