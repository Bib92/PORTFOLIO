import React from "react";

function myCard() {
    return (
        <div>
            <link href='https://fonts.googleapis.com/css?family=Cabin:400,400italic,500italic,700,700italic' rel='stylesheet' type='text/css'/>
             <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'/>

  <div id="container">
    <div id="card_frame">
      <div id="card_body">
        <div id="card_head">
          <div id="card_main">
            <h5>Web Developer </h5>
            <h1 id="name">Austin</h1>
            <span id="health">100 HP</span>
            <img id="fire_type" src="http://res.cloudinary.com/bpettis/image/upload/v1516916049/normaltype_ztufzq.png" alt="Fire Energy Type Symbol"></img>
          </div>

          <div id="img_frame">
            <div id="poke_img">
            </div>
          </div>

          <div id="poke_facts">
            <span>
							Human Web Developer, Height: 6' 2", Weight: 180
          </span>
          </div>
        </div>

        <div id="poke_attacks">
          <div id="first_attack">
            <img id="single_energy_type" src="http://res.cloudinary.com/bpettis/image/upload/v1516916049/normaltype_ztufzq.png" alt="Normal Energy Type Symbol"></img>
            <h3> Code </h3>
            <h1 id="atk_damage1"> 15 </h1>
            <hr id="hr_1"/>
          </div>
          <div id="multi_energy">
            <img id="multi_energy_type1" src="http://res.cloudinary.com/bpettis/image/upload/v1516916049/normaltype_ztufzq.png" alt="Fire Energy Type Symbol"></img>
            <img id="multi_energy_type2" src="http://res.cloudinary.com/bpettis/image/upload/v1516916049/normaltype_ztufzq.png" alt="Normal Energy Type Symbol"></img>
          </div>
          <div id="second_attack">
            <p> <span id="attack_text">Debug</span> Discard 2 <img id="multi_energy_type3" src="http://res.cloudinary.com/bpettis/image/upload/v1516916049/normaltype_ztufzq.png" alt="Fire Energy Type Symbol"></img> Energy cards <br/> attached to Austin
              in order<br/>
              <span id="text_indent">to use this attack</span> </p>
            <h1 id="atk_damage2"> 30 </h1>
            <hr id="hr_2"/>
          </div>
        </div>

        <div id="weakness">
          <h5>weakness</h5>
          <img id="single_energy_type1" src="http://res.cloudinary.com/bpettis/image/upload/v1516916052/watertype_nkics0.png" alt="Water Energy Type Symbol"></img>
        </div>

        <div id="resistance">
          <h5>resistance </h5>
        </div>

        <div id="retreat_cost">
          <h5>retreat cost </h5>
          <img id="single_energy_type1" src="http://res.cloudinary.com/bpettis/image/upload/v1516916049/normaltype_ztufzq.png" alt="Normal Energy Type Symbol"></img>
        </div>

        <div id="poke_description">
          <div id="poke_description_frame"></div>
          <span id="poke_description_text">
					Obviously prefers hot cups of black liquid. Not necessarily sure which Rabbit Hole he is currently in.
			</span>
        </div>

        <div id="copyinfo">
          <span className="iluss"><strong>illus. Austin Burton</strong></span>
          <span className="illus2">&copy;1993-2019 Nintendo, Creatures, GAMEFREAK &copy;1999 Wizards. </span>
          <span role="img"><strong>46/102 &#9899;</strong></span>


          
        </div>

      </div>
    </div>
  </div>
        </div>
    )
};

export default myCard;