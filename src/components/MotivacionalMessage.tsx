interface MotivationalMessageProps{
            message: String;
            author: String;
        }

        export function MotivationalMessage (props: MotivationalMessageProps){
    
        return(

    <section> 

        <div
        
            style={{
                border: "1px solid #ff0000",
            }}

        >

        <h5 style= {{ fontFamily: "Apple Chancery", fontSize: "20px"}}>{props.message}</h5>
        <p  style= {{ fontFamily: "Apple Chancery", fontSize: "10px", color: "grey"}}>{props.author}</p>
    
    </div>
    
       <footer>

            <p></p>

       </footer>

    </section>
    );
}