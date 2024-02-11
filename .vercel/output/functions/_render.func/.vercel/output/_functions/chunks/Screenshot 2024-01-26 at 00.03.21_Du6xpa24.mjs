const Screenshot_20240126_at_00_03_21 = new Proxy({"src":"/_astro/Screenshot 2024-01-26 at 00.03.21.1xc1LdXl.png","width":1482,"height":1112,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

export { Screenshot_20240126_at_00_03_21 as default };
