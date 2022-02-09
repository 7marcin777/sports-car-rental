import React, { useCallback, useState } from 'react';
import './Query.css';

interface FAQ {
    title: string;
    answer: string;
    active: boolean;
}

const Query = () => {
    const [faqs, setFaqs] = useState<Array<FAQ>>([
        {
            title: 'Czy jest wymagana kaucja?',
            answer: 'Nie, nie wymagamy kaucji w przypadku naszej oferty.',
            active: false,
        }, {
            title: 'Czy są limity kilometrów?',
            answer: 'Tak, są one uzależnione od okresu najmu.',
            active: false,
        }, {
            title: 'Co się stanie jezeli przekroczę limit kilometrów?',
            answer: 'Każdy dodatkowy kilometr ponad limit to koszt 2 PLN brutto.',
            active: false,
        }, {
            title: 'Czy samochód moze prowadzić ktoś inny?',
            answer: 'Nie, samochodem może kierować tylko osoba podpisująca umowę.',
            active: false,
        }, {
            title: 'Jaki jest udział własny w szkodzie?',
            answer: 'Do 10000zł brutto za wyłączenie samochodu z działalności zarobkowej.',
            active: false,
        }, {
            title: 'Ile lat muszę mieć, aby wypozyczyć u was samochód',
            answer: 'Ukończone 21 lat.',
            active: false,
        }, {
            title: 'Czy moge wyjechać samochoem poza granice RP?',
            answer: 'Nie jest to możliwe bez naszej pisemnej zgody.',
            active: false,
        }, {
            title: 'Czy są limity prędkości?',
            answer: 'Nie, jednak należy pamiętać o przestrzeganiu zasad w ruchu drogowym.',
            active: false,
        }
    ]);

    const handleToggle = useCallback((index: number) => {
        const newFaqs = [...faqs];
        newFaqs.forEach((element, index1) => { if (index === index1) { return; } element.active = false; });
        newFaqs[index].active = !newFaqs[index].active;

        setFaqs(newFaqs);
    }, [faqs]);

    return (
        <div className="background">
            <div className="ques-container">
                {faqs.map((element, index) => (
                    <div className="ans">
                        <h1 onClick={() => handleToggle(index)}>{element.title}</h1>
                        <button className="btn-qs" onClick={() => handleToggle(index)}>{element.active ? '-' : "+"}</button>
                        {element.active && (<h2>{element.answer}</h2>)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Query;