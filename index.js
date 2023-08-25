
const employee = {
    name: "Sam",
    streetaddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyEmployee = {...employee}
    copyEmployee[key] = value
    return copyEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const copyEmployee = {...employee}
    delete copyEmployee[key]
    return copyEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}