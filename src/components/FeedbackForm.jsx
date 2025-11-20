

const FeedBackForm = () =>{

    function handleSubmit(e){
        e.preventDefault();
        const a = document.getElementById('name').value
        const b = document.getElementById('mail').value
        const c = document.getElementById('feed').value
        alert(`${a} ${b} ${c}`)

    }
    return(
        <>
        <form onSubmit={(e) => handleSubmit(e)}> 

      


    <div className="mb-3"> 

        <label htmlFor="name" className="form-label">nazwa użytkownika </label> 

        <input type="text" id="name" className="form-control" /> 

      </div>


      <div className="mb-3"> 

        <label htmlFor="mail" className="form-label">adres e-mail </label> 

        <input type="email" id="mail" className="form-control" /> 

      </div>
      <div className="mb-3"> 

        <label htmlFor="feed" className="form-label">feedback </label> 

        <input type="text" id="feed" className="form-control" /> 

      </div>

      


        <button type="submit" className="btn btn-primary">Zaloguj</button> 

        </form>
        </>
    );
}
export default FeedBackForm;