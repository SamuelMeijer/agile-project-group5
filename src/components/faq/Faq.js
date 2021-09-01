// Importing CSS
import Styles from './faq.module.css';

// Importing useState from react
import { useState } from 'react';

export default function Faq () {
    // Defining state for 'clickedQuestion'
    const [clickedQuestion, setClickedQuestion] = useState(undefined);

    // TODO: Replace with import when translate is done
    const faqQuestions = [
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
    ];

    return (
        <section id={ Styles.faqWrapper }>
            <h1 className={ Styles.title }>FAQ</h1>
            <p className={ Styles.description }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius consequatur, odio quia laboriosam obcaecati ut architecto alias, ullam quibusdam eveniet illo et quo rerum.</p>

            <ul className={ Styles.menu }>
                { faqQuestions.map( (question) => {
                    return (
                        <li key={ question.id } onClick={() => { setClickedQuestion(question.id) }} className={ Styles.menuItem }>

                            <div className={ Styles.menuItemQuestionWrapper }>
                                <h2 className={ Styles.menuItemQuestion }>{ question.question }</h2>
                                <p className={ (question.id === clickedQuestion ? Styles.menuItemSelected : Styles.menuItemChevron) }>{'>'}</p>
                            </div>
                            
                            {   question.id === clickedQuestion ?
                                    <p className={ Styles.menuItemAnswer }>{ question.answer }</p>
                                :
                                    null
                            }
                            
                        </li>
                    )
                })}
            </ul>
        </section>
    );
};