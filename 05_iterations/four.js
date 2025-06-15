const myObject = {
    js: 'JavaScript',
    cpp: "CplusPlus",
    rb : 'RUBY',
    swift : 'SWIFT BY APPLE'
}

for (const key in myObject) {
    console.log(key);
    
}

// object k uppar loop lagana ho to forin loop use krenge
// arrays k uppar loop lagana ho to forof loop use krenge
// map is not iterable ,,, u can not use loop in maps
