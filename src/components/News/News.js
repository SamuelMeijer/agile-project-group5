import Styles from './news.module.css'

import { useState, useEffect } from 'react';

import { useTranslation, Trans } from 'react-i18next';

function News() {
    const { t, i18n } = useTranslation();

    // Defining state for 'clickedQuestion'
    const [content, setContent] = useState([]);
    const [filteredContent, setFilteredContent] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('newest');

    if (dateFilter === 'newest') {
        filteredContent.sort(decending)
    } else {
        filteredContent.sort(acending)
    };

    function handleCategoryChange (event) {
        setCategoryFilter(event.target.value)

        if (event.target.value === 'news') {
            let newArr = content.filter(element => element.category === 'News');
            setFilteredContent(newArr)
        } else if (event.target.value === 'article') {
            let newArr = content.filter(element => element.category === 'Article');
            setFilteredContent(newArr)
        } else {
            setFilteredContent(content);
        };
    };

    function handleDateChange (event) {
        setDateFilter(event.target.value)
    };

    function acending (a, b) {
        return Date.parse(a.date) - Date.parse(b.date);
    };

    function decending (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    };

    useEffect(() => {
        let arr = t('news', { returnObjects: true })['content'];

        setContent(arr);
        setFilteredContent(arr);
    }, []);

    return (
        <section id={ Styles.newsWrapper }>
            <h1>
                <Trans i18nKey="news.title"></Trans>
            </h1>
            
            <p>
                <Trans i18nKey="news.text"></Trans>
            </p>

            <select onChange={ handleCategoryChange }>
                <option defaultValue value="all">
                        Alla
                </option>
                <option value="news">
                        News
                </option>
                <option value="article">
                        Article
                </option>
            </select>
            
            <select onChange={ handleDateChange }>
                <option defaultValue value="newest">
                        Nyast
                </option>
                <option value="oldest">
                        Äldst
                </option>
            </select>

            <ul className={ Styles.menu }>
                
                {   filteredContent.map( (content) => {
                    return (
                        <li key={ content.id }>
                            <h3>{content.title}</h3>
                            <p>{content.date}</p>
                            <p>{content.category}</p>
                            <p>{content.author}</p>                         
                        </li>
                    )
                    })
                }
            </ul>

        </section>
    )
}

export default News;