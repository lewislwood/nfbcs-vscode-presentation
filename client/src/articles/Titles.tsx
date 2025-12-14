import { useState, useEffect } from 'react';
import { fetchTitles } from "./fetch_titles";

// @ts-ignore
function Titles({onchange}) {
    const [titles, setTitles] = useState([{ id: 0, title: "...Loading..." }]);
    const [articleId, setArticleId] = useState(0);

    useEffect(() => {
        try {
            fetchTitles()
            .then(data=> {
    setTitles(data);
    if (data.length > 0) {
        setArticleId(data[0].id);
        onchange(data[0].id);
    }
        })
        } catch(error: any) {
            console.log("Fetch error: ", error);
            setTitles([{id:0, title: "Error loading titles"}]);
        };
    },[])
    
return (    <div>
      <h1>Articles available</h1>
      <label htmlFor="titles_list">Select an article:</label>
      <select name="title.list"
       id="titles_list" 
       onChange={(e) => onchange(parseInt(e.target.value))} 
       defaultValue={articleId} 
       multiple={false} >
{titles.map((title) => (
    <option key={title.id} 
    value={title.id}
    >{title.title}
   </option>
)
)}
      </select>
    </div>
  );
};

export default Titles;
