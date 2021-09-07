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
                    thirdLink: 'FAQ',
                    fourthLink: 'Contact',
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
                faq: [
                    {
                        id: 0,
                        question: 'Måste jag ha motorcykelkörkort för att köpa? - ENGLISH',
                        answer: 'Answer 1: Japp!'
                    },
                    {
                        id: 1,
                        question: 'Vad säljer ni för motorcyklar?',
                        answer: 'Answer 2: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta reprehenderit sunt eum quidem deserunt porro. '
                    },
                    {
                        id: 2,
                        question: 'Hur lång tid tar det att få en motorcykel?',
                        answer: 'Answer 3: Lorem ipsum dolor sit amet.  '
                    },
                    {
                        id: 3,
                        question: 'Vad kostar en motorcykel?',
                        answer: 'Answer 4: Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
                    },
                    {
                        id: 4,
                        question: 'Hur kan man kontakta er?',
                        answer: 'Answer 5: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt rerum consequuntur ratione eaque minus accusantium nisi velit. '
                    },
                    {
                        id: 5,
                        question: 'Vart kan man hitta er?',
                        answer: 'Answer 6 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quasi repudiandae veniam sed tempore. '
                    },
            ],
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
                    secondLink: 'Om oss',
                    thirdLink: 'Vanliga frågor',
                    fourthLink: 'Kontakt',
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
                faq: [
                    {
                        id: 0,
                        question: 'Måste jag ha motorcykelkörkort för att köpa?',
                        answer: 'Answer 1: Japp!'
                    },
                    {
                        id: 1,
                        question: 'Vad säljer ni för motorcyklar?',
                        answer: 'Answer 2: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta reprehenderit sunt eum quidem deserunt porro. '
                    },
                    {
                        id: 2,
                        question: 'Hur lång tid tar det att få en motorcykel?',
                        answer: 'Answer 3: Lorem ipsum dolor sit amet.  '
                    },
                    {
                        id: 3,
                        question: 'Vad kostar en motorcykel?',
                        answer: 'Answer 4: Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
                    },
                    {
                        id: 4,
                        question: 'Hur kan man kontakta er?',
                        answer: 'Answer 5: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt rerum consequuntur ratione eaque minus accusantium nisi velit. '
                    },
                    {
                        id: 5,
                        question: 'Vart kan man hitta er?',
                        answer: 'Answer 6 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt quasi repudiandae veniam sed tempore. '
                    },
            ],
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