const interestRate = document.getElementById('interest_rate');
const loanAmount = document.getElementById('loan_amount');
const homeValue = document.getElementById('home_value');
const downPayment = document.getElementById('down_payment');
const duration  = document.getElementById('duration_years');
const monthlyHoa = document.getElementById('monthly_hoa');
const propertyTax = document.getElementById('annual_property_tax');
const homeInsurance = document.getElementById('annual_home_insurance');
const button = document.getElementById('btn');
const results = document.querySelector('.result');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '238795571cmshd0b89581c6f3b5ap1e6bc6jsn1d71c893b31d',
		'X-RapidAPI-Host': 'mortgage-calculator-by-api-ninjas.p.rapidapi.com'
	}
};




button.addEventListener('click', ()=>{
	fetch(('https://mortgage-calculator-by-api-ninjas.p.rapidapi.com/v1/mortgagecalculator?interest_rate='+interestRate.value+'&loan_amount='+loanAmount.value+'&home_value='+homeValue.value+'&downpayment='+downPayment.value+'&duration_years='+duration.value+ '&monthly_hoa='+monthlyHoa.value+'&annual_property_tax='+propertyTax.value), options)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		result.innerHTML ='';
		const interest = data.total_interest_paid;
		const monthlyPayment = data.monthly_payment.mortgage;
		const annualPayment = data.annual_payment.mortgage;
		const result = `<ul>
							<li>Monthly Payment : ${monthlyPayment}</li>
							<li>Annual Payment : ${annualPayment}</li>
							<li>Total Interest : ${interest}</li>
						<ul>`
		results.innerHTML += result;
	
	})
	
	

	
})