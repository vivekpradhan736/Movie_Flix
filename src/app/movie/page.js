import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
    const options = {
        method: 'GET',
        headers: {
            // 'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '70960ec2abmsh157262bbbd8ed04p1ffd88jsn1bf249976111',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;
    console.log(data)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Movies & Series</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;