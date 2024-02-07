const mwsRechner = () => {
  const nettoBrutto = document.querySelector(".buttons input:checked").value;
  const steuersatz = Number(
    document.querySelector(".calculation input:checked").value
  );
  const betrag = Number(document.querySelector("#number").value);

  if (nettoBrutto == "netto") {
    const mwsErgebnis = betrag * steuersatz;
    const nurSteuern = mwsErgebnis - betrag;
    document.querySelector(
      "#mehrwertsteuerbetrag"
    ).innerHTML = `Mehrwertsteuerbetrag:  ${nurSteuern.toFixed()}€`;
    document.querySelector(
      "#bruttobetrag"
    ).innerHTML = `Bruttobetrag <span>(Endpreis)</span>:  ${mwsErgebnis.toFixed()}€`;
  } else {
    const mwsErgebnis = betrag / steuersatz;
    const nurSteuern = betrag - mwsErgebnis;
    document.querySelector(
      "#mehrwertsteuerbetrag"
    ).innerHTML = `Mehrwertsteuerbetrag:  ${nurSteuern.toFixed()}€`;
    document.querySelector(
      "#bruttobetrag"
    ).innerHTML = `Nettobetrag:  ${mwsErgebnis.toFixed()}€`;
  }
};

const radioChange = () => {
  document.querySelector(
    ".netto_brutto"
  ).innerHTML = `<h2 class="netto_brutto">Nettobetrag <span>(Preis ohne Mehrwertsteuer in €)</span></h2>`;
  document.querySelector("#bruttobetrag").innerHTML =
    "Bruttobetrag <span>(Endpreis)</span>:";
};

const radioChange2 = () => {
  document.querySelector(
    ".netto_brutto"
  ).innerHTML = `<h2 class="netto_brutto">Bruttobetrag <span>(Preis mit Mehrwertsteuer in €)</span></h2>`;
  document.querySelector("#bruttobetrag").innerHTML = "Nettobetrag:";
};
