import Data from "./Data1";
import Info from "../data/data.json"
import DrinkList from "./DrinkList";
import Drinks from "../data/dataDrink.json"


const HOME = () => {
    return ( 
       <article>
           
          <section id="classic">
              
            <div id="head">
            <h2>A CLASSIC</h2>
            <h1> GIN JOINT </h1>
            <h2>NEW YORK</h2>
            </div>

        </section>
        <section id="About">
           
           <div id="about_text">
               <p>ABOUT</p>
               <h1>THE STORY OF</h1>
               <h1>BATHTUB GIN</h1>
               <p>Gin was the predominant drink in the United States during the Prohibition-Era 1920's and many variations were created. "Bathtub gin" was developed in response to the poor-quality of alcohol that was available at the time.
</p>
               <button>Read More</button>
           </div>
           <div id="about_bilder">
           <img src="./assets/img/bar2.png" alt=""/>
           </div>

       </section>
       <section id="covid">
            <p className="text">Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!
</p>

<div id="Datatype">
        {Info.map(index =>  <Data 
            dataType = {index.type}
            dataDay = {index.day}
            dataClock = {index.clock}
            dataFeature = {index.feature}
            dataImg = {index.img}
            key = {index.id}
            
        />)}
        </div>


        </section>
        <section id="hand">
          <div id="hand_text">
                <p>Cocktail & Food Menus</p>
                <h1>Hand Crafted Cocktails & Damn Good Eats</h1>
                
                <p>We mix our gin and other spirits with the finest and freshest fruits, juices, syrups and infusions in cocktails inspired by original recipes.
                </p>
                <button>Read More</button>
            </div>
            <div id="hand_bilder">
            
            </div>
        </section>
        <div id="Datatype">
        {Drinks.map(index2 =>  <DrinkList 
            infoDrink = {index2.infoDrinks}
            author = {index2.author}
            drinksImg = {index2.Drinks}
            key = {index2.id}
            />)}
        </div>
        

       </article>
     );
}
 
export default HOME;