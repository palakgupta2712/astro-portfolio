const Screenshot_20240126_at_00_02_05 = new Proxy({"src":"/_astro/Screenshot 2024-01-26 at 00.02.05.UXm_9lNy.png","width":1480,"height":1476,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

export { Screenshot_20240126_at_00_02_05 as default };
