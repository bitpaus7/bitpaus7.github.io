async function fetchExchangeData() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/exchanges?order=volume_desc&per_page=100"
    );
    const exchanges = await response.json();

    // Sort exchanges by volume in descending order
    exchanges.sort((a, b) => b.trade_volume_24h_btc - a.trade_volume_24h_btc);

    const tableBody = document.getElementById("exchangeData");
    const ctx = document.getElementById("volumeChart").getContext("2d");

    exchanges.forEach((exchange, index) => {
      const row = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${exchange.name}</td>
                        <td>$${exchange.trade_volume_24h_btc.toLocaleString()}</td>
                    </tr>
                `;
      tableBody.innerHTML += row;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchExchangeData();
