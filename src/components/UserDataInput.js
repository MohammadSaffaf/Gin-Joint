const UserDataInput = () => {
    return ( 
        <section id="userInfo">
            <article id="userData">
            <div id="address">
                    <p >Get in Touch</p>
                        <h1>132 9th Avenue</h1>
                        <h1>New York, NY 10011</h1>
                        <h1>646-559-1671</h1>
                        <h1>Info@btgnyc.com</h1>
            </div>
            <div id="usertable">
            <p>Hours of Operation</p> 
                <table>
                
                  <tr id="user-tr1">
                  
                  </tr>
                  <tr id="user-tr2">
                  <td>Monday</td>
                  <td>8am — 4pm</td>
                  </tr>
                  <tr>
                  <td>Tuesday - Friday</td>
                  <td>8am — 10pm</td>
                  </tr>
                  <tr>
                  <td>Saturday</td>
                 <td>9am — 10pm</td>
                 </tr>
                 <tr id="user-tr3"> 
                 <td>Sunday</td>
                 <td>9am — 4pm</td>
                 </tr>
                 </table>
            </div>
                
            </article>
            <article id="userForm">
                <form action="">
                    <input type="text" name="" id="" placeholder="Name" />
                    <input type="email" name="" id="" placeholder="Email Address" />
                    <input type="number" name="" id="" placeholder="Mobile" />
                    <textarea rows="10" cols="50" name="comment" form="usrform" placeholder="Message"></textarea>
                    <button>Submit</button>
                </form>
            </article>
        </section>
     );
}
 
export default UserDataInput;