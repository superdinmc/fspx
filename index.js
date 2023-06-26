var fs;
try {
    fs = require("node:fs");
} catch {
    let l = (...e) =>console.log(...e);
    fs = {
        readdirSync: l,
        readFileSync: l,
        statSync: l,
        writeFileSync: l,
        existsSync: l,
    }
}
let self = (e = []) =>
    new Proxy(e, {
        get(t, p) {
			switch (p) {
				case "_entries":
					return fs.readdirSync("./" + t.join("/"), { withFileTypes: true }
						)
				case "_content":
					return fs.readFileSync("./" + t.join("/"))
				case "_stat":
					return fs.statSync("./" + t.join("/"))
				default:
					return self([...t, ...p.split('\\').join('/').split('/')]);
			}
		},
		set(t, p, v) {
			return fs.writeFileSync("./" + [...t, p].join("/"), v)
		},
		has(t, p) {
			return fs.existsSync("./" + [...t, p].join("/"));
		},
        apply(t, ta, a) {
            return self([...t,...a.map(e=>e.split('\\').join('/').split('/')).flat(Infinity)]);
        }
	});
module.exports = self();
