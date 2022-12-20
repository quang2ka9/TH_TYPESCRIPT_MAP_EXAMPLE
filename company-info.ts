let employeeMap = new Map();
employeeMap.set("Saideep", 20);
employeeMap.set("Karthik", 25);
employeeMap.set("Sumit", 21);
employeeMap.set("Sameer", 22);
employeeMap.set("Raje", 24);

for (let name of employeeMap.keys()) {
    console.log("Employee Names= " +name);
}

for (let age of employeeMap.values()) {
    console.log("Employee Age= " +age);
}
console.log("The employeeMap Entries are: ");

for (let entry of employeeMap.entries()) {
    console.log(entry[0], entry[1]);
}