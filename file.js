
let form = document.getElementById('myform');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    function calc_gross(basic_salary, benefits) {
        let gross = (basic_salary + benefits);
        document.getElementById("gross_salary").innerText = gross;
        return gross
    }
    let basic_salary = Number(document.getElementById("basic_salary").value);
    let benefits = Number(document.getElementById("benefits").value);
    let gross_salary = calc_gross(basic_salary, benefits);
    console.log(gross_salary)


    function calc_nhdf(gross_salary, rate = 0.015) {
        let nhdf = (gross_salary * 0.015);
        document.getElementById("nhdf").innerText = nhdf;
        return nhdf
    }
    let nhdf = 0;
    let NHDF = calc_nhdf(gross_salary);
    console.log(NHDF)


    function calc_nssf(gross, rate = 0.06) {

        if (gross > 18000) {
            nssf = 18000 * rate
        } else {
            nssf = gross * rate
        }
        document.getElementById("nssf").innerText = nssf;
        return nssf
    }

    let nssf = 0;
    let NSSF = calc_nssf(gross_salary);
    console.log(NSSF);



    // Calculate nhif
    function calc_nhif(gross_salary) {

        if (gross_salary >= 0 && gross_salary <= 5999) {
            nhif = 150
        } else if (gross_salary >= 6000 && gross_salary <= 7999) {
            nhif = 300
        } else if (gross_salary >= 8000 && gross_salary <= 11999) {
            nhif = 400
        } else if (gross_salary >= 12000 && gross_salary <= 14999) {
            nhif = 550
        } else if (gross_salary >= 15000 && gross_salary <= 19999) {
            nhif = 750
        } else if (gross_salary >= 20000 && gross_salary <= 29999) {
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
            nhif = 1250
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
        return nhif
    }
    let nhif = 0;
    let NHIF = calc_nhif(gross_salary)
    console.log(gross_salary)

    // Calculate taxable income 

    let taxable_income = gross_salary - (nhif + nhdf + nssf);

    // Calculate final payee

    function calc_payee(taxable_income) {

        if (taxable_income <= 24000) {
            payee = taxable_income * 0.1;

        } else if (taxable_income <= 32333) {
            payee = taxable_income * 0.25;

        } else if (taxable_income <= 500000) {
            payee = taxable_income * 0.3;

        } else if (taxable_income <= 800000) {
            payee = taxable_income * 0.325;

        } else {
            payee = taxable_income * 0.35;
        }
        document.getElementById("final_payee").innerText = payee;
        return payee
    }
    let payee = 0;
    let final_payee = calc_payee(taxable_income)
    console.log(final_payee)

    // Calculate net pay


    let net_pay = gross_salary - (nhif + nhdf + nssf + final_payee);
    document.getElementById("net_pay").innerText = net_pay;
    console.log(net_pay)
}


)







