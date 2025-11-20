import {useForm} from "react-hook-form";
import react from 'react';

const ContactForm = () =>{

    const {register , handleSubmit} = useForm();

    function onSubmit(data){
        console.log(data);
    }
    return(
     <>
        <form onSubmit={handleSubmit(onSubmit)}> 

      


    <div className="mb-3"> 

        <label htmlFor="name" className="form-label">nazwa</label> 

        <input type="text" id="name" className="form-control" {...register("name")} /> 

      </div>


      <div className="mb-3"> 

        <label htmlFor="mail" className="form-label">adres e-mail </label> 

        <input type="email" id="mail" className="form-control" {...register("mail")}/> 

      </div>
      <div className="mb-3"> 

        <label htmlFor="feed" className="form-label">Wiadomość </label> 

        <input type="text" id="feed" className="form-control" {...register("message")}/> 

      </div>

      


        <button type="submit" className="btn btn-success">Wyślij</button> 

        </form>
        </>
    );

}
export default ContactForm;