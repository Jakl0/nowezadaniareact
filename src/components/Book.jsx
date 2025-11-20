import react ,{useState} from 'react';

const Book = () =>{

    const [book,setBook] = useState({title:'tytuł książki',author:'Juliusz Słowacki'});

    return(
        <>
            <p>
                {book.author} {book.title}
            </p>
            <button onClick={()=> setBook(prev => ({...prev , author:'Adam Mickiewicz'}))}>Zmień autora</button>
        </>
    );
}
export default Book;