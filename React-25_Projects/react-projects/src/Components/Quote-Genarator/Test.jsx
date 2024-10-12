import { useEffect, useState } from "react";
import './quote.css'
function QuoteGeneratorTest() {

    const [loading,setLoading] = useState(false);
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    async function fetchQuote(){
        try {
            
            setLoading(true);
            const apiresponse = await fetch('https://dummyjson.com/quotes',{
                method: 'GET',
            });
            const data = await apiresponse.json();
            
            if(data && data.quotes.length > 0){
                setLoading(false);  
                const randomQuote = data.quotes[Math.floor(Math.random()*data.quotes.length)];
                setQuote(randomQuote.quote);
                setAuthor(randomQuote.author);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchQuote();
    },[])

    return ( 
        <>
        <div className="random-generator">
            <h1>Quote Generator</h1>
            <div className="quote-wrapper">
               {loading ? <p>Loading...</p>: <span>" {quote} " <br /> - {author} </span>}
            </div>
            <div className="button">
                <button onClick={fetchQuote}>Refresh</button>
            </div>
        </div>
        </>
     );
}

export default QuoteGeneratorTest;