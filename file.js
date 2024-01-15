
let form = document.getElementById('myform');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let basic_salary = Number(document.getElementById('basic_salary').value)
    let benefits = Number(document.getElementById('benefits').value)

    if (basic_salary.length == 0 || benefits.length == 0) {
        alert("Enter All Values")

    } else {
        let gross_salary = calc_gross(basic_salary, benefits)
        document.getElementById('gross_salary').innerHTML = gross_salary
        console.log(gross_salary)

        let nssf = calc_nssf(gross_salary)
        document.getElementById('nssf').innerHTML = nssf
        console.log(nssf)

        let nhif = calc_nhif(gross_salary)
        document.getElementById('nhif').innerHTML = nhif
        console.log(nhif)

        let nhdf = calc_nhdf(gross_salary)
        document.getElementById('nhdf').innerHTML = nhdf
        console.log(nhdf)

        let taxable_income = gross_salary - (nssf + nhdf);

        let payee = calc_payee(taxable_income)
        document.getElementById('final_payee').innerHTML = payee
        console.log(payee)

        let net_pay = gross_salary - (nhif + nhdf + nssf + payee)
        document.getElementById('net_pay').innerHTML = net_pay
        console.log(net_pay);

    }
})


function calc_gross(basic_salary, benefits) {
    let gross = (basic_salary + benefits);
    return gross;
}

function calc_nssf(gross, rate = 0.06) {

    if (gross > 18000) {
        nssf = 18000 * rate
    } else {
        nssf = gross * rate
    }
    return nssf
}


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

    return nhif
}

function calc_nhdf(gross_salary, rate = 0.015) {
    let nhdf = (gross_salary * 0.015);
    return nhdf
}

function calc_payee(taxable_income) {

    

    if (taxable_income >= 0 && taxable_income <= 24000) {
        payee = (taxable_income * 0.01);

    } else if (taxable_income > 24000 && taxable_income <= 32333) {
        payee = (taxable_income * 0.25);

    } else if (taxable_income > 32333 && taxable_income <= 500000) {
        payee = (taxable_income * 0.3);

    } else if (taxable_income > 500000 && taxable_income <= 800000) {
        payee = (taxable_income * 0.325);

    } else {
        payee = taxable_income * 0.35

    }
    return payee

}



// Monthly Bands of Taxable Income(KES)	Tax Rate
// 0 – 24,000	10 %
//     On the next 8, 333	25 %
//         On the next 467, 667	30 %
//             On the next 300,000	32.5 %
//                 On amounts over 800,000	35 %
//                     Personal Relief: KES 2, 400.00 per month
// Minimum Taxable Income: KES 24,001.00 per month

