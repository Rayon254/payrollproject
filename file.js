let form = document.getElementById('myform');

form.addEventListener('submit', function (e) {
    e.preventDefault()


    let basic_salary = parseFloat(document.getElementById("basic_salary").value);
    let benefits = parseFloat(document.getElementById("benefits").value);


    if (basic_salary.length == 0 || benefits.length == 0) {
        document.getElementById("myform").innerText = "insert values";
    } else {

        let gross_salary = basic_salary + benefits;
        document.getElementById("gross_salary").innerText = gross_salary;


        let nhdf = (gross_salary * 0.015)
        document.getElementById("nhdf").innerText = nhdf;

        let nssf = 0;
        if (gross_salary < 18000) {
            nssf = 720
        }
        else if (gross_salary >= 18000) {
            nssf = 1440
        }
        document.getElementById("nssf").innerText = nssf;


        // Calculate nhif
        let nhif = 0;
        if (gross_salary >= 0 && gross_salary <= 5999) {
            nhif = 150
        } else if (gross_salary >= 6000 && gross_salary <= 7999) {
            nhif = 300
        } else if (gross_salary >= 8000 && gross_salary <= 11999) {
            nhif = 400
        } else if (gross_salary >= 12000 && gross_salary <= 14999) {

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
        let taxable_income = gross_salary - (nhif + nhdf + nssf);

        // Calculate final payee
        let final_payee = 0;
        if (taxable_income <= 24000) {
            final_payee = taxable_income * 0.1;

        } else if (taxable_income <= 32333) {
            final_payee = taxable_income * 0.25;

        } else if (taxable_income <= 500000) {
            final_payee = taxable_income * 0.3;

        } else if (taxable_income <= 800000) {
            final_payee = taxable_income * 0.325;

        } else {
            final_payee = taxable_income * 0.35;
        }
        document.getElementById("final_payee").innerText = final_payee;


        // Calculate net pay
        let net_pay = gross_salary - (nhif + nhdf + nssf + final_payee);
        document.getElementById("net_pay").innerText = net_pay;
    }

})









