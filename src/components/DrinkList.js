const DrinkList = (props) => {
    console.log(props.drinksImg);
    return ( 
        <section id="drink">
            <div id="fronts">
                <img src="./assets/img/Frame.png" alt="" srcset=""/>
                <div id="fronts_img" style={{background:`url(${props.drinksImg})`,backgroundPosition:'center',backgroundSize:"60%",backgroundRepeat:"no-repeat",width:"100%"}}>

                </div>
                <h4>{props.infoDrink}</h4>
                <p>{props.author}</p>
            </div>

        </section> 
     );
}
 
export default DrinkList;