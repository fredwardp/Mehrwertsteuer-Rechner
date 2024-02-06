const mwsRechner = () => {
  const nettoBrutto = document.querySelector(".buttons input:checked").value;
  console.log(nettoBrutto);
  const steuersatz = Number(
    document.querySelector(".calculation input:checked").value
  );
  console.log(steuersatz);
  const betrag = Number(document.querySelector("#number").value);
  console.log(betrag);

  const mwsBetrag = document.querySelector("#mehrwertsteuerbetrag").innerText;
  console.log(mwsBetrag);
  const bruttoBetrag = document.querySelector("#bruttobetrag").innerText;
  console.log(bruttoBetrag);

  //   console.log(mwsErgebnis);

  if (nettoBrutto == "netto") {
    const mwsErgebnis = betrag * (1 + steuersatz);
    const nurSteuern = mwsErgebnis - betrag;
    document.querySelector(
      "#mehrwertsteuerbetrag"
    ).innerHTML = `Mehrwertsteuerbetrag:  ${nurSteuern}€`;
    document.querySelector(
      "#bruttobetrag"
    ).innerHTML = `Bruttobetrag <span>(Endpreis)</span>:  ${mwsErgebnis}€`;
  } else {
    const mwsErgebnis = betrag / (1 + steuersatz);
    const nurSteuern = betrag - mwsErgebnis;
    document.querySelector(
      "#mehrwertsteuerbetrag"
    ).innerHTML = `Mehrwertsteuerbetrag:  ${nurSteuern.toFixed()}€`;
    document.querySelector(
      "#bruttobetrag"
    ).innerHTML = `Bruttobetrag <span>(Endpreis)</span>:  ${mwsErgebnis.toFixed()}€`;
  }
};

const radioChange = () => {
  document.querySelector(
    ".netto_brutto"
  ).innerHTML = `<h2 class="netto_brutto">Nettobetrag <span>(Preis mit Mehrwertsteuer in €)</span></h2>`;
  document.querySelector("#bruttobetrag").innerHTML =
    "Bruttobetrag <span>(Endpreis)</span>:";
};

const radioChange2 = () => {
  document.querySelector(
    ".netto_brutto"
  ).innerHTML = `<h2 class="netto_brutto">Bruttobetrag <span>(Preis mit Mehrwertsteuer in €)</span></h2>`;
  document.querySelector("#bruttobetrag").innerHTML = "Nettobetrag:";
};
