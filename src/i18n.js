import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['querystring', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: {
                header: {
                    firstLink: 'Home',
                    secondLink: 'About',
                    thirdLink: 'News',
                    fourthLink: 'FAQ',
                    fifthLink: 'Contact',
                    title: 'We got the best bikes',
                    firstDesc: 'Caferaiders offers the best bikes on the market. We promise you high quality build bikes that you will love!',
                    btn: 'SEE BIKES',
                    popularBike: 'Popular Bikes',
                    bikeDesc: 'A popular bike through the times. A nice and beautiful bike that is fun to drive',
                    maxSpeed: 'Maximum speed:',
                    capacity: 'Capacity:',
                    output: 'Output',
                    torque: 'Max. torque:',
                    buy: 'BUY',
                },
                footer: {
                    pages: 'Pages',
                    about: 'About us',
                    faq: 'FAQ',
                    contact: 'Contact',
                    rights: '© 2021 Caferaider SWE, inc. All Rights Reserved'
                },
                about: {
                    title: 'We Were Born To Race',
                    about: 'About Us',
                    desc: 'Motorcycles are our passion. Together we have more than 30 years experience from selling, servicing and riding motorcyckels. We offer the best motorcycles at the lowest prices and will always ne there for our customers.',
                    employees: 'Employees',
                },
                news: {
                    title: 'Title hejhejejehe',
                    text: 'Textasdasdd  asdasds',
                    content: [
                        {
                            id: 0,
                            title: 'HEJ1', 
                            date: '2000-09-30', 
                            author: 'Kalle Ost', 
                            category: 'News', 
                            content: 'MASSA JÄVA TEXT'
                        },
                        {
                            id: 1,
                            title: 'HEJ2', 
                            date: '2001-09-30', 
                            author: 'Kalle Ost', 
                            category: 'Article', 
                            content: 'MASSA JÄVA TEXT'
                        },
                        {
                            id: 2,
                            title: 'HEJ3', 
                            date: '2002-09-30', 
                            author: 'Kalle Ost', 
                            category: 'News', 
                            content: 'MASSA JÄVA TEXT'
                        },
                        {
                            id: 3,
                            title: 'HEJ4', 
                            date: '2003-09-30', 
                            author: 'Kalle Ost', 
                            category: 'Article', 
                            content: 'MASSA JÄVA TEXT'
                        },
                        {
                            id: 4,
                            title: 'HEJ5', 
                            date: '2004-09-30', 
                            author: 'Kalle Ost', 
                            category: 'News', 
                            content: 'MASSA JÄVA TEXT'
                        },
                        {
                            id: 5,
                            title: 'HEJ6', 
                            date: '2005-09-30', 
                            author: 'Kalle Ost', 
                            category: 'Article', 
                            content: 'MASSA JÄVA TEXT'
                        },
                        {
                            id: 6,
                            title: 'HEJ7', 
                            date: '2006-09-30', 
                            author: 'Kalle Ost', 
                            category: 'News', 
                            content: 'MASSA JÄVA TEXT'
                        },
                        {
                            id: 7,
                            title: 'HEJ8', 
                            date: '2007-09-30', 
                            author: 'Kalle Ost', 
                            category: 'Article', 
                            content: 'MASSA JÄVA TEXT'
                        }
                    ]
                },
                faq: {
                    description: 'Here is a collection of the most frequently asked questions',
                    questions: [
                        {
                            id: 0,
                            question: 'Am I required to have a motorcycle license if I want to buy a motorcycle?',
                            answer: 'No you do not need a motorcycle license to buy a motorcycle, just to ride it'
                        },
                        {
                            id: 1,
                            question: 'What kind of motorcycles are you selling?',
                            answer: 'We sell three different models of motorcycles: BMW F 900R, Triumphth BV T1 and Harley Davidson R5'
                        },
                        {
                            id: 2,
                            question: 'How long does it take to get a motorcycle?',
                            answer: 'Normal delivery time is three to five weeks'
                        },
                        {
                            id: 3,
                            question: 'What does a motorcycle cost?',
                            answer: 'Our motorcycles cost between 69000 - 89000SEK'
                        },
                        {
                            id: 4,
                            question: 'How can I contact you?',
                            answer: 'You can always contact us on telephone 042-2933159 during the day, otherwise you can send an email to contact@caferaiders.com'
                        },
                        {
                            id: 5,
                            question: 'Where can I find you?',
                            answer: 'You can find us at Helsingborgsvägen 1, 25227 Helsingborg'
                        },
                    ]
                },
                contact: {
                    contact: 'Contact',
                    name: 'Name:',
                    subject: 'Subject:',
                    question: 'Question regarding product',
                    complaints: 'Complaints',
                    jobs: 'Search for a job',
                    submit: 'Send'
                }
            }
        },
        sv: {
            translation: {
                header: {
                    firstLink: 'Hem',
                    secondLink: 'Om Oss',
                    thirdLink: 'Nyheter',
                    fourthLink: 'FAQ',
                    fifthLink: 'Kontakt',
                    title: 'Vi har de bästa MC:n',
                    firstDesc: 'Caferaiders erbjuder de bästa cyklarna på marknaden. Vi lovar dig cyklar av hög kvalitet som du kommer att älska!',
                    btn: 'SE MC',
                    popularBike: 'Populära MC',
                    bikeDesc: 'En populär mc genom tiderna. Trevlig och fin mc som är rolig att köra',
                    maxSpeed: 'Max hastighet',
                    capacity: 'Kapacitet:',
                    output: 'Effekt',
                    torque: 'Max vrid',
                    buy: 'KÖP'
                },
                footer: {
                    pages: 'Sidor',
                    about: 'Om oss',
                    faq: 'Vanliga frågor',
                    contact: 'Kontakt',
                    rights: '© 2021 Caferaider SWE, inc. Alla Rättigheter Förbehållna.'
                },
                about: {
                    title: 'Födda till att köra',
                    about: 'Om Oss',
                    desc: 'Motorcyklar är våran passion. Tillsammans har vi mer än 30 års erfarenhet från försäljning, service och körande av motorcyklar. Vi erbjuder de bästa motorcycklarna till de lägsta priserna och kommer alltid att finnas där för våra kunder.',
                    employees: 'Anställda'
                },
                news: {
                    title: 'Title',
                    text: 'Text',
                    content: [
                        {
                            title: 'HEJ', 
                            date: '2020-09-30', 
                            author: 'Kalle Ost', 
                            category: 'Article/News', 
                            content: 'MASSA JÄVA TEXT'
                        }
                    ]
                },
                faq: {
                    description: 'Här har vi samlat några av de vanligaste frågorna',
                    questions: [
                        {
                            id: 0,
                            question: 'Måste jag ha motorcykelkörkort för att köpa?',
                            answer: 'Nej du behöver inte ha motorcykelkörkort för att få köpa en motorcykel, enbart för att få köra den'
                        },
                        {
                            id: 1,
                            question: 'Vad säljer ni för motorcyklar?',
                            answer: 'Vi säljer tre olika modeller av motorcyklar: BMW F 900R, Triumphth BV T1 och Harley Davidson R5'
                        },
                        {
                            id: 2,
                            question: 'Hur lång tid tar det att få en motorcykel?',
                            answer: 'Normal leveranstid är tre till fem veckor'
                        },
                        {
                            id: 3,
                            question: 'Vad kostar en motorcykel?',
                            answer: 'Våra motorcyklar kostar mellan 69000 - 89000SEK'
                        },
                        {
                            id: 4,
                            question: 'Hur kan man kontakta er?',
                            answer: 'Man kan alltid kontaka oss på telefon 042-2933159 under dagtid, annars kan man skicka ett mail till contact@caferaiders.com'
                        },
                        {
                            id: 5,
                            question: 'Vart kan man hitta er?',
                            answer: 'Man hittar oss på Helsingborgsvägen 1, 25227 Helsingborg'
                        },
                    ]
                },
                contact: {
                    contact: 'Kontakt',
                    name: 'Namn:',
                    subject: 'Ämne:',
                    question: 'Frågor om produkt',
                    complaints: 'Klagomål',
                    jobs: 'Sök jobb hos oss',
                    submit: 'Skicka'

                }
            }
        }
    }
})

export default i18n;