# Dr. Norman Borlog Project 
- This is a **Free Code Camp** Project .

## HTML and CSS Project Documentation

### Overview

Brief description of your HTML and CSS project and its objectives.

## Code Snippets 

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dr. Norman Boglaue</title>
    
</head>

<body>
<main id="main">
        <h1 id="title" class="text-center">Dr. Norman Borlaug</h1>
        <p class="text-center para">The man who saved a billion lives.</p>
        <figure id="img-div">
            <img src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute-page-main-image.jpg" alt="img"
                id="image">
            <figcaption id="img-caption">Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to
                increase wheat yields - part of his life-long war on hunger. 
            </figcaption>
        </figure>
        <section>
            <h3 id="tribute-info" class="text-center life-heading">Here's a time line of Dr. Borlaug's life:</h3>
            <ul>
                <li><strong>1914</strong> - Born in Cresco, Iowa</li>
                <li><strong>1933</strong> - Leaves his family's farm to attend the University of Minnesota, thanks to a
                    Depression era program known as the "National Youth Administration"</li>
                <li><strong>1935</strong> - Has to stop school and save up more money. Works in the Civilian
                    Conservation Corps, helping starving Americans. "I saw how food changed them", he said. "All of this
                    left scars on me."
                </li>
                <li><strong>1937</strong> - Finishes university and takes a job in the US Forestry Service</li>
                <li><strong>1938 </strong> - Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts.
                    Inspired by Elvin Charles Stakman, he returns to school study under Stakman, who teaches him about
                    breeding pest-resistent plants.</li>
                <li><strong>1941</strong> - Tries to enroll in the military after the Pearl Harbor attack, but is
                    rejected. Instead, the military asked his lab to work on waterproof glue, DDT to control malaria,
                    disinfectants, and other applied science.</li>
                <li><strong>1942 </strong> - Receives a Ph.D. in Genetics and Plant Pathology
                </li>
                <li><strong>1944 </strong> - Rejects a 100% salary increase from Dupont, leaves behind his pregnant
                    wife, and flies to Mexico to head a new plant pathology program. Over the next 16 years, his team
                    breeds 6,000 different strains of disease resistent wheat - including different varieties for each
                    major climate on Earth.</li>
                <li><strong>1945</strong> - Discovers a way to grown wheat twice each season, doubling wheat yields</li>
                <li><strong>1953</strong> - crosses a short, sturdy dwarf breed of wheat with a high-yeidling American
                    breed, creating a strain that responds well to fertilizer. It goes on to provide 95% of Mexico's
                    wheat.</li>
                <li><strong>1962</strong> - Visits Delhi and brings his high-yielding strains of wheat to the Indian
                    subcontinent in time to help mitigate mass starvation due to a rapidly expanding population</li>
                <li><strong>1970</strong> - receives the Nobel Peace Prize</li>
                <li><strong>1983</strong> - helps seven African countries dramatically increase their maize and sorghum
                    yields</li>
                <li><strong>1984 </strong> - becomes a distinguished professor at Texas A&M University
                </li>
                <li><strong>2005</strong> - states "we will have to double the world food supply by 2050." Argues that
                    genetically modified crops are the only way we can meet the demand, as we run out of arable land.
                    Says that GM crops are not inherently dangerous because "we've been genetically modifying plants and
                    animals for a long time. Long before we called it science, people were selecting the best breeds."
                </li>
                <li><strong>2009</strong> - dies at the age of 95.</li>
            </ul>
            <blockquote cite="https://en.wikipedia.org/wiki/Norman_Borlaug">
                <p>
                    " Borlaug's life and achievement are testimony to the far-reaching contribution that one man's
                    towering intellect, persistence and scientific vision can make to human peace and progress. "
                </p>
                <cite>-- Indian Prime Minister Manmohan Singh
                </cite>
            </blockquote>
            <h3 class="more-info">If you have time, you should read more about this incredible human being on his <a href="https://en.wikipedia.org/wiki/Norman_Borlaug"
                    id="tribute-link" target="_blank">Wikipedia entry.</a></h3>
        </section>
    </main>
</body>
</html>
```

```css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Noto Sans", sans-serif;
}

main {
    background-color: #eee;
    margin: 1rem 0.5rem;
    padding: 1rem 0.5rem;
    border-radius: 5px;
}

/* utility classes */
.text-center {
    text-align: center;
}


/*  */
h1 {
    font-size: 3.5rem;
    line-height: 1.5;
}

.para {
    margin: 0.75rem 0;
}

figure {
    background-color: #fff;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 10px;
}

figure img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    object-fit: cover;
}

figure figcaption {
    margin: 10px 0 5px 0;
    padding: 10px;
}

/* section element  */
section>.life-heading {
    margin: 2.5rem 0;
}

ul {
    max-width:600px;
    padding: 0 15px;
    margin: 0 auto;
}
ul li{
    margin: 1rem 0;
}
blockquote{
    max-width: 500px;
    margin: 0 auto;
    font-style: italic;
    text-align: left;
}
blockquote p{
    margin: 2rem 0;
}

.more-info{
    margin: 2.5rem 0;
    text-align: center;
}
.more-info a{
    color: #477ca7
}
```

### Screen Shot

![img](./ScreenShot/Dr.%20Norman%20Boglaue.png)

