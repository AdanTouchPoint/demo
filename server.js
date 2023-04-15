const express = require("express");
const payload = require("payload");
const cors = require("cors");
const ExcelJS = require("exceljs");
const sendEmail = require("./controllers/emailController");
require("dotenv").config();
const app = express();

app.use(cors({ origin: "*" }));
const PORT = process.env.PORT || 8080
// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("https://app.overton.services/admin");
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.get("/xls-process", async (req, res) => {
  try {
    const { clientId } = req.query;
    console.log(clientId)
    const leadsReq = await payload.find({
      collection: "conversiones",
      sort: "-updatedAt",
      limit: 5000,
      depth: 0,
      where: {
        clientId: {
          equals: clientId,
        },
      },
    });
    console.log('process');
    const leads = leadsReq.docs;
    // Crear un archivo de Excel a partir de los datos de leads
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Leads");
    worksheet.columns = [
      { header: "Names", key: "names" },
      { header: "Email", key: "contact" },
      { header: "Postal Code ", key: "postalcode" },
      { header: "Representative ", key: "representative" },
      { header: "Subject ", key: "subject" },
      { header: "Message ", key: "emailMessage" },
      { header: "City ", key: "city" },
      { header: "Party", key: "party" },
      { header: "Email success", key: "sended" },
      {header: "CreatedAt", key: "createdAt"}
    ];
    leads.forEach((lead) => {
      worksheet.addRow({
        names: lead.names,
        contact: lead.contact,
        postalcode: lead.postalcode,
        representative: lead.representative,
        subject: lead.subject,
        emailMessage: lead.emailMessage,
        city: lead.city,
        party: lead.party,
        sended: lead.sended,
        createdAt: lead.createdAt
      });
    });

    // Guardar el archivo de Excel en una variable
    const buffer = await workbook.xlsx.writeBuffer();
    //

    // Verificar que el tamaño del archivo no exceda el límite permitido (en este ejemplo, 5 MB)
    const maxSize = 5 * 1024 * 1024; // 5 MB en bytes
    if (buffer.byteLength > maxSize) {
      throw new Error("El archivo generado es demasiado grande");
    }
      res.contentType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.status(200)
      res.attachment('leads.xlsx')
      res.send(Buffer.from(buffer));
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/leads", async (req, res) => {
  try {
    const query = req.query;
    const {
      firstName,
      postalcode,
      emailData,
      representative,
      emailMessage,
      city,
      party,
      sended,
      clientId,
    } = query;
    const post = await payload.create({
      collection: "conversiones", // required
      data: {
        // required
        names: firstName,
        postalcode: postalcode,
        contact: emailData,
        representative: representative,
        emailMessage: emailMessage,
        city: city,
        party: party,
        clientId: clientId,
        sended: sended,
      },
      overrideAccess: true,
    });
    res.json({
      success: true,
      message: "leads created",
      data: post,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/leads", async (req, res) => {
  try {
    const query = req.query;
    const leads = await payload.find({
      collection: "conversiones",
      sort: "-updatedAt",
      limit: 0,
      depth: 0,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "leads found",
      data: leads,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/send-email", async (req, res) => {
  try {
    const query = req.query;
    console.log(query);
    const email = await sendEmail.contact_email(query);
    res.json({
      success: true,
      message: "Email Sent",
      data: email,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/email-builder", async (req, res) => {
  const query = req.query;
  try {
    let keywords = [
      "a55",
      "a55hole",
      "aeolus",
      "ahole",
      "anal",
      "analprobe",
      "anilingus",
      "anus",
      "areola",
      "areole",
      "arian",
      "aryan",
      "ass hole",
      "ass",
      "assbang",
      "assbanged",
      "assbangs",
      "asses",
      "assfuck",
      "assfucker",
      "assh0le",
      "asshat",
      "assho1e",
      "assholes",
      "assmaster",
      "assmunch",
      "asswipe",
      "asswipes",
      "azazel",
      "azz",
      "b1tch",
      "babe",
      "babes",
      "ballsack",
      "bang",
      "banger",
      "barf",
      "bastard",
      "bastards",
      "bawdy",
      "beaner",
      "beardedclam",
      "beastiality",
      "beatch",
      "beater",
      "beaver",
      "beer",
      "beeyotch",
      "beotch",
      "biatch",
      "big tits",
      "bigtits",
      "bimbo",
      "Bitch",
      "bitch",
      "bitched",
      "Bitches",
      "bitches",
      "bitchy",
      "blow job",
      "blow",
      "blowjob",
      "blowjobs",
      "bod",
      "bodily",
      "boink",
      "bollock",
      "bollocks",
      "bollok",
      "bone",
      "boned",
      "boner",
      "boners",
      "bong",
      "boob",
      "boobies",
      "boobs",
      "booby",
      "booger",
      "bookie",
      "bootee",
      "bootie",
      "booty",
      "booze",
      "boozer",
      "boozy",
      "bosom",
      "bosomy",
      "bowel",
      "bowels",
      "bra",
      "brassiere",
      "breast",
      "breasts",
      "bugger",
      "bukkake",
      "bull shit",
      "bullshit",
      "bullshits",
      "bullshitted",
      "bullturds",
      "bung",
      "busty",
      "butt fuck",
      "butt",
      "buttfuck",
      "buttfucker",
      "buttfucker",
      "buttplug",
      "c-0-c-k",
      "c-o-c-k",
      "c-u-n-t",
      "c.0.c.k",
      "c.o.c.k.",
      "c.u.n.t",
      "c0ck",
      "caca",
      "cahone",
      "cameltoe",
      "carpetmuncher",
      "cawk",
      "cervix",
      "chinc",
      "chincs",
      "chink",
      "chink",
      "chode",
      "chodes",
      "cl1t",
      "climax",
      "clit",
      "clitoris",
      "clitorus",
      "clits",
      "clitty",
      "cocain",
      "cocaine",
      "Cock",
      "cock sucker",
      "cock",
      "cockblock",
      "cockholster",
      "cockknocker",
      "Cocks",
      "cocks",
      "cocksmoker",
      "cocksucker",
      "coital",
      "commie",
      "condom",
      "coon",
      "coons",
      "corksucker",
      "crabs",
      "crack",
      "cracker",
      "crackwhore",
      "crap",
      "crappy",
      "cum",
      "cummin",
      "cumming",
      "cumshot",
      "cumshots",
      "cumslut",
      "cumstain",
      "cunilingus",
      "cunnilingus",
      "cunny",
      "Cunt",
      "cunt",
      "cunt",
      "cuntface",
      "cunthunter",
      "cuntlick",
      "cuntlicker",
      "Cunts",
      "cunts",
      "d0ng",
      "d0uch3",
      "d0uche",
      "d1ck",
      "d1ld0",
      "d1ldo",
      "dago",
      "dagos",
      "dammit",
      "damn",
      "damned",
      "damnit",
      "dawgie-style",
      "Dick head",
      "Dick heads",
      "dick-ish",
      "dick",
      "dickbag",
      "dickdipper",
      "dickface",
      "dickflipper",
      "Dickhead",
      "dickhead",
      "Dickheads",
      "dickheads",
      "dickish",
      "dickripper",
      "dicksipper",
      "dickweed",
      "dickwhipper",
      "dickzipper",
      "diddle",
      "dike",
      "dildo",
      "dildos",
      "diligaf",
      "dillweed",
      "dimwit",
      "dingle",
      "dipship",
      "doggie-style",
      "doggy-style",
      "dong",
      "doofus",
      "doosh",
      "dopey",
      "douch3",
      "douche",
      "douchebag",
      "douchebags",
      "douchey",
      "drunk",
      "dumass",
      "dumbass",
      "dumbasses",
      "dummy",
      "dyke",
      "dykes",
      "ejaculate",
      "enlargement",
      "erect",
      "erection",
      "erotic",
      "essohbee",
      "extacy",
      "extasy",
      "f-u-c-k",
      "f.u.c.k",
      "fack",
      "Fag",
      "fag",
      "fagg",
      "fagged",
      "faggit",
      "Faggot",
      "faggot",
      "Faggots",
      "fagot",
      "Fags",
      "fags",
      "faig",
      "faigt",
      "fannybandit",
      "fart",
      "fartknocker",
      "fat",
      "felch",
      "felcher",
      "felching",
      "fellate",
      "fellatio",
      "feltch",
      "feltcher",
      "fisted",
      "fisting",
      "fisty",
      "floozy",
      "foad",
      "fondle",
      "foobar",
      "foreskin",
      "freex",
      "frigg",
      "frigga",
      "fubar",
      "fuck-tard",
      "fuck",
      "fuckass",
      "fucked",
      "fucked",
      "fucker",
      "fuckface",
      "fuckin",
      "fucking",
      "fucknugget",
      "fucknut",
      "fuckoff",
      "fucks",
      "fucktard",
      "fuckup",
      "fuckwad",
      "fuckwit",
      "fudgepacker",
      "fuk",
      "fvck",
      "fxck",
      "g-spot",
      "gae",
      "ganja",
      "gay",
      "gays",
      "gey",
      "gfy",
      "ghay",
      "ghey",
      "gigolo",
      "glans",
      "goatse",
      "goldenshower",
      "gonad",
      "gonads",
      "gook",
      "gooks",
      "gringo",
      "gspot",
      "gtfo",
      "guido",
      "h0m0",
      "h0mo",
      "Hail",
      "handjob",
      "hard on",
      "he11",
      "hebe",
      "heeb",
      "hell",
      "hemp",
      "heroin",
      "herp",
      "herpes",
      "herpy",
      "Hitler",
      "hitler",
      "hiv",
      "hobag",
      "hom0",
      "homey",
      "homo",
      "homoey",
      "honky",
      "hooch",
      "hookah",
      "hooker",
      "hoor",
      "hootch",
      "hooter",
      "hooters",
      "horny",
      "hump",
      "humped",
      "humping",
      "hussy",
      "hymen",
      "inbred",
      "incest",
      "injun",
      "j3rk0ff",
      "jackass",
      "jackhole",
      "jackoff",
      "jap",
      "japs",
      "jerk",
      "jerk0ff",
      "jerked",
      "jerkoff",
      "jism",
      "jiz",
      "jizm",
      "jizz",
      "jizzed",
      "junkie",
      "junky",
      "Kike",
      "kike",
      "Kikes",
      "kikes",
      "kill",
      "kinky",
      "kkk",
      "klan",
      "knobend",
      "kooch",
      "kooches",
      "kootch",
      "kraut",
      "kyke",
      "labia",
      "lech",
      "leper",
      "lesbians",
      "lesbo",
      "lesbos",
      "lez",
      "lezbian",
      "lezbians",
      "lezbo",
      "lezbos",
      "lezzie",
      "lezzies",
      "lezzy",
      "lmao",
      "lmfao",
      "loin",
      "loins",
      "lube",
      "lusty",
      "m-fucking",
      "mams",
      "massa",
      "masterbate",
      "masterbating",
      "masterbation",
      "masturbate",
      "masturbating",
      "masturbation",
      "maxi",
      "menses",
      "menstruate",
      "menstruation",
      "meth",
      "mofo",
      "molest",
      "moolie",
      "moron",
      "motherfucka",
      "motherfucker",
      "motherfucking",
      "mtherfucker",
      "mthrfucker",
      "mthrfucking",
      "muff",
      "muffdiver",
      "murder",
      "muthafuckaz",
      "muthafucker",
      "mutherfucker",
      "mutherfucking",
      "muthrfucking",
      "nad",
      "nads",
      "napalm",
      "nappy",
      "nazi",
      "nazism",
      "negro",
      "nigga",
      "niggah",
      "niggas",
      "niggaz",
      "Nigger",
      "nigger",
      "nigger",
      "Niggers",
      "niggers",
      "niggle",
      "niglet",
      "nimrod",
      "ninny",
      "nipple",
      "nooky",
      "nympho",
      "opiate",
      "oral",
      "orally",
      "organ",
      "orgasm",
      "orgasmic",
      "orgies",
      "orgy",
      "ovary",
      "ovum",
      "ovums",
      "p.u.s.s.y.",
      "paddy",
      "paki",
      "pantie",
      "panties",
      "panty",
      "pastie",
      "pasty",
      "pcp",
      "pecker",
      "pedo",
      "pedophile",
      "pedophilia",
      "pedophiliac",
      "pee",
      "peepee",
      "penetrate",
      "penetration",
      "penial",
      "penile",
      "penis",
      "perversion",
      "peyote",
      "phalli",
      "phallic",
      "phuck",
      "pillowbiter",
      "pimp",
      "pinko",
      "piss-off",
      "piss",
      "pissed",
      "pissoff",
      "pms",
      "polack",
      "pollock",
      "poon",
      "poontang",
      "porn",
      "porno",
      "pornography",
      "pot",
      "potty",
      "prick",
      "prig",
      "prostitute",
      "prude",
      "pube",
      "pubic",
      "pubis",
      "punkass",
      "punky",
      "puss",
      "Pussies",
      "pussies",
      "Pussy",
      "pussy",
      "pussypounder",
      "puto",
      "queaf",
      "queef",
      "queef",
      "queer",
      "queero",
      "queers",
      "quicky",
      "quim",
      "r-tard",
      "rape",
      "raped",
      "raper",
      "rapist",
      "raunch",
      "rectal",
      "rectum",
      "rectus",
      "reefer",
      "reetard",
      "reich",
      "retard",
      "retarded",
      "revue",
      "rimjob",
      "ritard",
      "rtard",
      "rum",
      "rump",
      "rumprammer",
      "ruski",
      "s-h-1-t",
      "s-h-i-t",
      "s-o-b",
      "s.h.i.t.",
      "s.o.b.",
      "s0b",
      "sadism",
      "sadist",
      "scag",
      "scantily",
      "schizo",
      "schlong",
      "screw",
      "screwed",
      "scrog",
      "scrot",
      "scrote",
      "scrotum",
      "scrud",
      "scum",
      "seaman",
      "seamen",
      "seduce",
      "semen",
      "sex",
      "sexual",
      "sh1t",
      "shamedame",
      "shit",
      "shite",
      "shiteater",
      "shitface",
      "shithead",
      "shithole",
      "shithouse",
      "shitter",
      "shiz",
      "sissy",
      "skag",
      "skank",
      "slave",
      "sleaze",
      "sleazy",
      "slut",
      "slutdumper",
      "slutkiss",
      "sluts",
      "smegma",
      "smut",
      "smutty",
      "snatch",
      "sniper",
      "snuff",
      "sodom",
      "souse",
      "soused",
      "sperm",
      "spic",
      "spick",
      "spik",
      "spiks",
      "spooge",
      "spunk",
      "steamy",
      "stiffy",
      "stoned",
      "strip",
      "stroke",
      "sucking",
      "sumofabiatch",
      "t1t",
      "tampon",
      "tard",
      "tawdry",
      "teabagging",
      "teat",
      "terd",
      "teste",
      "testee",
      "testes",
      "testicle",
      "testis",
      "thrust",
      "thug",
      "tinkle",
      "tit",
      "titfuck",
      "titi",
      "tits",
      "tittiefucker",
      "titties",
      "titty",
      "tittyfuck",
      "tittyfucker",
      "toke",
      "toots",
      "tramp",
      "transsexual",
      "tubgirl",
      "turd",
      "twat",
      "twats",
      "ugly",
      "undies",
      "unwed",
      "urinal",
      "urine",
      "uterus",
      "uzi",
      "vag",
      "vagina",
      "valium",
      "viagra",
      "virgin",
      "vixen",
      "voyeur",
      "vulgar",
      "vulva",
      "wad",
      "wang",
      "wank",
      "Wanker",
      "wanker",
      "Wankers",
      "wazoo",
      "wedgie",
      "weenie",
      "weewee",
      "weiner",
      "weirdo",
      "wench",
      "wetback",
      "wh0re",
      "wh0reface",
      "whitey",
      "whiz",
      "whoralicious",
      "Whore",
      "whore",
      "whorealicious",
      "whored",
      "whoreface",
      "whorehopper",
      "whorehouse",
      "Whores",
      "whores",
      "whoring",
      "wigger",
      "wop",
      "x-rated",
      "xxx",
      "yeasty",
      "yobbo",
      "zoophile",
    ];
    let questions = JSON.parse(query.questions);
    for (let key in questions) {
      if (questions.hasOwnProperty(key)) {
        let value = questions[key];
        for (let i = 0; i < keywords.length; i++) {
          if (value.includes(keywords[i])) {
            value = value.replace(new RegExp(keywords[i], "gi"), "abcd");
          }
        }
        questions[key] = value;
      }
    }
    let input = [];
    input.push({
      user: JSON.parse(query.user),
      questions: questions,
    });
    console.log(input[0]);
    let email = await sendEmail.emailBuilder(input[0]);
    res.json({
      success: true,
      data: email,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/batch-email", async (req, res) => {
  try {
    const query = req.query;
    console.log(query);
    const email = await sendEmail.batch_email(query);
    res.json({
      success: true,
      message: "Email Sent",
      data: email,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/state-email", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "diputados-y-senadores",
      sort: "-updatedAt",
      where: {
        clientId: {
          equals: query.clientId,
        },
        and: [
          {
            state: {
              equals: query.state,
            },
          },
        ],
      },
    });
    let data = content.docs;
    let states = await data.map((el) => {
      return el.contact;
    });
    let contact = [...new Set(states)];
    let strings = contact.toString();
    query.to = strings;
    console.log(query);
    const email = await sendEmail.batch_email(query);
    //console.log(query)
    res.json({
      success: true,
      message: "Email Sent",
      data: email,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});

app.post("/tweets", async (req, res) => {
  try {
    const query = req.query;
    const tweets = await payload.find({
      collection: "tweets",
      sort: "-updatedAt",
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "tweets found",
      data: tweets,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/main-content", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "paginas-principales",
      sort: "-updatedAt",
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "pagecontent found",
      data: content,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/emails-content", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "emails",
      sort: "-updatedAt",
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "emails content found",
      data: content,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
}); 
app.post("/typ-content", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "mensaje-de-agradecimientos",
      sort: "-updatedAt",
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "typ content found",
      data: content,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.post("/representatives", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "diputados-y-senadores",
      sort: "-updatedAt",
      where: {
        clientId: {
          equals: query.clientId,
        },
        and: [
          {
            postalcode: {
              equals: query.postalcode,
            },
          },
        ],
      },
    });
    let data = content.docs;
    res.json({
      success: true,
      message: "representatives found",
      data: data,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/representatives-state", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "diputados-y-senadores",
      sort: "-updatedAt",
      where: {
        clientId: {
          equals: query.clientId,
        },
        and: [
          {
            state: {
              equals: query.state,
            },
          },
        ],
      },
    });
    let data = content.docs;
    res.json({
      success: true,
      message: "representatives found",
      data: data,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/all-representatives", async (req, res) => {
  try {
    console.log("here");
    const query = req.query;
    const content = await payload.find({
      collection: "diputados-y-senadores",
      sort: "-updatedAt",
      limit: 0,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    let data = content.docs;
    res.json({
      success: true,
      message: "all representatives found",
      data: data,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/all-senators", async (req, res) => {
  try {
    console.log("here");
    const query = req.query;
    const content = await payload.find({
      collection: "senators-and-mps",
      sort: "-updatedAt",
      limit: 0,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    let data = content.docs;
    res.json({
      success: true,
      message: "all representatives found",
      data: data,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
const getDivision = async (clientId, division) => {
  let mps = await payload.find({
    collection: "senators-and-mps",
    sort: "-updatedAt",
    depth: 0,
    limit: 0,
    where: {
      clientId: {
        equals: clientId,
      },
      and: [
        {
          electorates: {
            equals: division,
          },
        },
      ],
    },
  });
  return mps;
};
const getElectorate = async (clientId, postcode) => {
  const content = await payload.find({
    collection: "electorates",
    sort: "-updatedAt",
    depth: 0,
    where: {
      clientId: {
        equals: clientId,
      },
      and: [
        {
          postcode: {
            equals: postcode,
          },
        },
      ],
    },
  });
  let data = content.docs;
  return data;
};
app.get("/find-mp", async (req, res) => {
  try {
    const query = req.query;
    let resp = [];
    let statesFilter = [];
    console.log(query);
    const data = await getElectorate(query.clientId, query.postcode);
    console.log(data.length);
    if (data.length === 0) {
      console.log("hola");
      return res.json({
        message: "Postal Code has not Found",
        data: data,
        statesFilter,
        success: true,
      });
    }
    await Promise.all(
      data.map((el) => {
        let request = getDivision(el.clientId, el.division);
        return request;
      })
    )
      .then((request) => {
        resp = request.map((el) => {
          return el.docs;
        });
      })
      .then(async () => {
        const states = await payload.find({
          collection: "senators-and-mps",
          sort: "-updatedAt",
          depth: 0,
          limit: 0,
          where: {
            clientId: {
              equals: resp[0][0].clientId,
            },
            and: [
              {
                state: {
                  equals: resp[0][0].state,
                },
              },
            ],
          },
        });
        let response = states.docs;
        statesFilter = response.filter(
          (senator) => senator.govt_type === "Federal Senators"
        );
      });
    res.json({
      success: true,
      message: "all representatives found",
      data: resp,
      statesFilter,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.get("/questions", async (req, res) => {
  try {
    const query = req.query;
    const content = await payload.find({
      collection: "questions",
      sort: "-updatedAt",
      limit: 1,
      where: {
        clientId: {
          equals: query.clientId,
        },
      },
    });
    res.json({
      success: true,
      message: "questions content found",
      data: content,
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      message: error.message,
    });
  }
});
app.listen(PORT);