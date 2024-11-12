console.log("Hello, World!");
console.log("TABLE")
console.table([{name: "surya", age: 23}, {name: "sai", age: 23}]);
console.log("GROUP")
console.group("10k coder","id");
console.log("surya 1");
console.log("sai2");
console.log("naveen 3")
console.log(" mahesh4")
console.log("prasanna 5")
console.log("ganesh 6")
console.groupEnd()

console.group()
console.error("THis is Error Message")
console.warn("This is warn Message")
console.groupEnd()

console.log("surya")
console.groupCollapsed("this is groupcollapsed");
console.groupEnd()
console.info("This is an informational message.in info");
