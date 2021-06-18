let initialState = {
  heading: "У Вас есть вопросы? Тогда напишите нам",
  contacts: {
    info: [
      {
        id: 1,
        companyName: "Associatia Obsceasca a Personelor Stomizati.",
        country: "Respublica Moldova ",
        city: "Chisinau MD-2009 ",
        street: "str., Alexei Mateevici, 46",
        name: "Phone: ",
        tel: "+ 373(22) 92 53 15",
        name2: "E-Mail:",
        email: "stomaassociation2011@gmail.com"
      }
    ]
  },
  donate: {
      donateTitle: "вы можете задонатить",
      moneyTitle: "деньги важны, но это не самое главное",
    tabTitles: {
      f:"реквизиты",
      s:"терминал",
      t:"онлайн"
    },
    requisites: [
      {
        id: 1,
        bank: "BC Victoriabank SA",
        swiftName:"SWIFT-ul Bancii:",
        swift:"VICBMD2X",
        contName:"Nr.contului/IBAN:",
        cont:"MD53VI000002224329243 MDL",
        beneficiarName:"NPP beneficiar:",
        beneficiar:" ASOCIATIA OBSTEASCA A PERSOANELOR STOMIZATE DIN MOLDOVA",
        codName:"Cod Personal:",
        cod:"1011620001910",
        adresaName:"Adresa beneficiar:",
        adresa:"MD, CHISINAU, str. Lev Tolstoi 20"
      }
    ],
    disabled: true
  }
};

const contactsPageReducer = (state = initialState, action) => {
  return state;
};

export default contactsPageReducer;