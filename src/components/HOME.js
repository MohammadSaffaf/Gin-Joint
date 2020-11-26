


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
<article id="flex">
    <figure id="jazz">
       <div id="jive">
       <h3>Jazz n'</h3>
       <h3>Jive</h3>
       </div>
        <figcaption>
            
            <h4>EVERY MONDAY</h4>
            <h4>9-11PM</h4>
            <p>Jazz up your Monday nights with intimate and lively performances by a rotating selection of renowned bands.</p>
            <p>Nate Jones Band</p>
            <p>Fleur Seule</p>
            <p>Dandy Wellington</p>
            <p>The Ladybugs</p>
            
        </figcaption>
    </figure>
    <figure>
    <div id="afte">
    <h3>Burlesque</h3>
    <h3>After Dark</h3>
    </div>
        <figcaption>
        
            <h4>EVERY TUESDAY & SUNDAY</h4>
            <h4>9:30PM</h4>
            <p>Enter the world of burlesque and lose yourself in enticing witty performances, exceptional cocktails, and lively music.</p>
        </figcaption>
    </figure>
    <figure>
    <div id="dance">
    <h3>DJs &</h3>
    <h3>Dance Tracks</h3>
    </div>
        <figcaption>
        
            <h4>EVERY THURSDAY, FRIDAY & SATURDAY NIGHT</h4>
            <h4>FROM 9PM & 10PM</h4>
            <p>If you're looking for a packed crowd, come when the party is bigger, the pace is faster, and the morals are looser.</p>
        </figcaption>
    </figure>
</article>


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
            {/* <img src="./assets/img/hand.png" alt=""/> */}
            </div>
        </section>
        <section id="drink">
            <div id="fronts">
                <img src="./assets/img/Frame.png" alt="" srcset=""/>
                <div id="fronts_img">

                </div>
                <h4>“A trick door opening to Bathtub Gin, a hopping Chelsea gin joint harkening back to the days of false store fronts”</h4>
                <p>The Guardian</p>
            </div>
            <div id="jack">
            <img src="./assets/img/Frame.png" alt="" srcset=""/>
            <div id="jack_img">

             </div>
            <h4>“Life on the inside: exactly how you imagined it’d be... nailhead-tucked bar stools and—smack-dab in the center of the room—a glass-covered,claw-foot bathtub.”</h4>
            <p>URBAN DADDY</p>
            </div>

        </section>
        

       </article>
     );
}
 
export default HOME;