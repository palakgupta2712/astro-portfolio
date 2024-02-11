const Screenshot_20240126_at_00_10_15 = new Proxy({"src":"/_astro/Screenshot 2024-01-26 at 00.10.15.JWF1WIF0.png","width":1478,"height":1476,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

export { Screenshot_20240126_at_00_10_15 as default };
