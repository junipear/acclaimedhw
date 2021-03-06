import { React } from "react";
import latticebackground from "./../assets/images/lattice-background.png";
const Advantagesform = () =>{
    // this.state = {value: 'Alabama'};
return(
    <>
       <div className="form-cont" style={{ backgroundImage: `url(${latticebackground})`}}>
            <div className="white-back">
            <h4 className="blueText">email us</h4>
            <p>Fill out this short form and an Acclaimed Home Warranty representative will follow up on your request.</p>
            <div className="everest-forms">
                <div className="form">
                    <form>
                    <label><input type="text" placeholder="FirstName*" name="FirstName"/></label>
                    <label><input type="text" placeholder="LastName*" name="LastName"/></label>
                    <label>
                    <select name="Alabama" id="Alabama">
                        <option value="saab">State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                        <option value="Armed Forces Americas">Armed Forces Americas</option>
                        <option value="Armed Forces Europe">Armed Forces Europe</option>
                        <option value="Armed Forces Pacific">Armed Forces Pacific</option>
                    </select>
                    </label>
                    <label><input type="email" placeholder="Email*" name="email"/></label>
                    <label><input type="number" placeholder="PhoneNumber*" name="phonenumber"/></label>
                    <label><textarea placeholder="Information Requested" className="field-msg"></textarea></label>
                    <input type="submit" value="Submit"/>
                    </form>
                </div>        
            </div>   
            </div>
        </div>
    </>
)
}
export default Advantagesform;