import {useForm} from "react-hook-form";
import react from 'react';

const BookingForm = () =>{

    const {register , handleSubmit} = useForm();

    function onSubmit(data){
        const a = data.name;
        const b = data.mail;
        const c = data.date;
        const d = data.ticketCount;
        alert(`Imie i Nazwisko: ${a} email: ${b} data: ${c} ilość biletów: ${d}`);
    }
    return(
     <>
        <form onSubmit={handleSubmit(onSubmit)}> 

      


    <div className="mb-3"> 

        <label htmlFor="name" className="form-label">Imie i Nazwisko</label> 

        <input type="text" id="name" className="form-control" {...register("name")} /> 

      </div>


      <div className="mb-3"> 

        <label htmlFor="mail" className="form-label">adres e-mail </label> 

        <input type="email" id="mail" className="form-control" {...register("mail")}/> 

      </div>
      <div className="mb-3"> 

        <label htmlFor="dat" className="form-label">Data </label> 

        <input type="date" id="dat" className="form-control" {...register("date")}/> 

      </div>
      <div className="mb-3"> 

        <label htmlFor="tick" className="form-label">Ilość biletów </label> 

        <input type="number" id="tick" className="form-control" {...register("ticketCount")}/> 

      </div>

      


        <button type="submit" className="btn btn-success">Wyślij</button> 

        </form>
        </>
    );

}
export default BookingForm;