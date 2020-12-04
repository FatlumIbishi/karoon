import stektris from "../assets/recept/stektris.jpg";

let recept = [
    {
        sn: "stekt-ris-gronsaker-agg-kinesisk",
        namn: "Stekt ris med grönsaker och ägg är en klassisk kinesisk maträtt",
        desc: "Lorem ipsus lorem ipsus lorem ipsus",
        tid: "30 min",
        bild: stektris,
        ingredienser: [
            {
                matt: "7 msk",
                ingrediens: "Soja"
            },
            {
                matt: "250g",
                ingrediens: "Karoon Ris"
            },
            {
                matt: "1",
                ingrediens: "Morot"
            },
            {
                matt: "2 st",
                ingrediens: "Ägg"
            }
        ],
        metod: {
            1: "Koka basmatiriset (antingen efter instruktioner på påsen eller efter eget tycke)",
            2: "Värm upp oljan i kastrullen och stek vitlök och lök i 2 minuter. Koka äggen, skiva och lägg i kastrullen.",
            3: "Lägg i grönsaker och stek i 2 minuterna, rör om då och då. Tillsätt ris, soja och låt koka i 5-7 minuter i kastrullen.",
            4: "Slutligen blanda i peppar,  koriander och gräslök efter egen smak"
        },
        anteckningar: "Om du vill kan du lägga till kyckling, det smakar också toppen"
    },
];

export default recept;
  