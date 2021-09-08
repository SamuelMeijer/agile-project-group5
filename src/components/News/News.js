import Styles from './news.module.css'

import { useState, useEffect } from 'react';

import { useTranslation, Trans } from 'react-i18next';

function News() {
    const { t, i18n } = useTranslation();

    const [content, setContent] = useState([]);
    const [filteredContent, setFilteredContent] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('newest');

    // TODO: Behåll filter vid språkbyte
    if (dateFilter === 'newest') {
        filteredContent.sort(decending)
    } else {
        filteredContent.sort(acending)
    };

    function handleCategoryChange (event) {
        setCategoryFilter(event.target.value)

        if (event.target.value === 'news') {
            let newArr = content.filter(element => element.category === 'News' || element.category === 'Nyhet');
            setFilteredContent(newArr)
        } else if (event.target.value === 'article') {
            let newArr = content.filter(element => element.category === 'Article' || element.category === 'Artikel');
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
    }, [i18n.language]);

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
                    {t('news', { returnObjects: true })['all']}
                </option>
                <option value="news">
                    {t('news', { returnObjects: true })['news']}
                </option>
                <option value="article">
                    {t('news', { returnObjects: true })['article']}
                </option>
            </select>
            
            <select onChange={ handleDateChange }>
                <option defaultValue value="newest">
                    {t('news', { returnObjects: true })['newest']} 
                </option>
                <option value="oldest">
                    {t('news', { returnObjects: true })['oldest']}
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