// CSS injection:
const custom = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
  
// Custom CSS:
custom(`

    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Roboto+Mono:wght@300;700&display=swap');    

    body {
        background-color: b2b2b2;
    }
    
    p, p b, p a, p i, td, td i, a i, tr td, .innrykk40, ul li, ul li code i, .oppgave tbody tr td span.character {
        font-family: 'Playfair Display', serif;
        line-height: 20px;
        font-size: 13px;
    }

    i {
        font-size: 13px;
    }

    p a, td a, .innrykk40  {
        background-color: gainsboro;
    }


    b, td i {
        font-weight: 700;
    }

    pre {
        border_radius: 10 px;

        font-family: 'Roboto Mono', monospace;
        font-weight: 300;
        background-color: black; 
        outline-style: solid;
        outline-color: black;
        outline-width: 0.3vw;
        color: white;
    }

    .oppgave tbody tr td span.character {
        color: black;
    }


    pre span.code {
        color: white; 
    }

    pre span {
        color: white;
    }

    pre a:link {
        color: white;
        text-decoration: underline;
        font-weight: 600;
    }

    pre span.ST1, pre span.ST3, pre.span.literal {
        font-style: normal;
        color: white;
    }

    span.comment, span.comment a, span.error {
        color: 	#a9c696;
    }
    
    span.comment a {
        font-weight: 700;
        text-decoration: underline;
    }

    pre span.keyword {
        color: white;
        font-weight: 600;
    }

    pre b {
        font-weight: 600;
    }

    .definisjon {
        font-family: 'Playfair Display', serif;
        line-height: 20px;
        background-color: gainsboro;
        font-style: normal;
    }

    pre span.ST0, span.ST1, span.ST2, span.ST3, span.ST4, span.variable  {
        font-weight: 600;
        color: white;
    }

    span.literal {
        color: white;
        font-weight: 600;
    }

    span.character, span.string {
        color: white;
    }

`

)