
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// 2

function currencyConverter(hryvnia, dollarRate) {
    const dollars = hryvnia / dollarRate;
    console.log(`У вас ${hryvnia} гривен, если вы хотите купить доллар, то за ${hryvnia} вы получите ${dollars.toFixed(2)} долларов!`);
}


currencyConverter(2500, 42); 
currencyConverter(5700, 42);
currencyConverter(28000, 42); 
