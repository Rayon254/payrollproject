
function calculateSum() {

// Get input values
let basic_salary = parseFloat(document.getElementById("basic_salary").value) || 0;
let benefits = parseFloat(document.getElementById("benefits").value) || 0;


// Calculate the sum
let gross_salary = basic_salary + benefits;
document.getElementById("gross_salary").innerText = gross_salary;

// Calculate nhdf
let nhdf = (gross_salary * 0.015)
document.getElementById("nhdf").innerText = nhdf;

// Calculate nssf tier1 and nssf tier1
let nssf_tier1 = 0;
let nssf_tier2 = 0;
if (gross_salary < 18000) {
    nssf_tier1 = 720
}
else if (gross_salary >= 18000) {
    nssf_tier2 = 1440
}
document.getElementById("nssf_tier1").innerText = nssf_tier1;
document.getElementById("nssf_tier2").innerText = nssf_tier2;


// Calculate nhif
let nhif = 0;
if (gross_salary >= 0 && gross_salary <= 5999) {
    nhif = 150
} else if (gross_salary >= 6000 && gross_salary <= 7999) {
    nhif = 300
} else if (gross_salary >= 8000 && gross_salary <= 11999) {
    nhif = 400
} else if (gross_salary >= 12000 && gross_salary <= 14999) {
    nhif = 500
} else if (gross_salary >= 20000 && gross_salary <= 24999) {
    nhif = 750
} else if (gross_salary >= 25000 && gross_salary <= 29999) {
    nhif = 850
} else if (gross_salary >= 30000 && gross_salary <= 34999) {
    nhif = 900
} else if (gross_salary >= 35000 && gross_salary <= 39999) {
    nhif = 950
} else if (gross_salary >= 40000 && gross_salary <= 44999) {
    nhif = 1000
} else if (gross_salary >= 45000 && gross_salary <= 49999) {
    nhif = 1100
} else if (gross_salary >= 50000 && gross_salary <= 59999) {
    nhif = 100
} else if (gross_salary >= 60000 && gross_salary <= 69999) {
    nhif = 1300
} else if (gross_salary >= 70000 && gross_salary <= 79999) {
    nhif = 1400
} else if (gross_salary >= 80000 && gross_salary <= 89999) {
    nhif = 1500
} else if (gross_salary >= 90000 && gross_salary <= 99999) {
    nhif = 1600
} else if (gross_salary >= 100000) {
    nhif = 1700
}
document.getElementById("nhif").innerText = nhif;

// Calculate taxable income            
let taxable_income = gross_salary - (nhif + nhdf + nssf_tier1 + nssf_tier2);

// Calculate final payee
let final_payee = 0;
if (taxable_income <= 24000) {
    final_payee = taxable_income * 0.1;
} else if (taxable_income <= 32333) {
    final_payee = (taxable_income - 24000) * 0.25;
} else {
    final_payee = (taxable_income - 32333) * 0.3;
}
document.getElementById("final_payee").innerText = final_payee;


// Calculate net pay
let net_pay = gross_salary - (nhif + nhdf + nssf_tier1 + nssf_tier2 + final_payee);

document.getElementById("net_pay").innerText = net_pay;

}

