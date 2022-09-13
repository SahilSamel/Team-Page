import "../css/team.css";

import vishal from "../images/vishal_banik.jpg";
import roshni from "../images/roshni_sarda.jpg";
import vatsal from "../images/vatsal_mehta.jpg";
import ishita from "../images/ishita_ahuja.jpg";
import aishwarya from "../images/aishwarya_joshi.JPG";

import sahil from "../images/sahil_samel.jpg";
import soham from "../images/soham_chavan.png";
import aapurva from "../images/apurva_solanki.jpg";
import gaurav from "../images/gaurav_bhatia.jpg";
import gaurish from "../images/gaurish_bhosale.jpg";
import jainam from "../images/jainam_nisar.jpg";

import akshita from "../images/akshita_sakaria.jpeg";
import mangalam from "../images/mangalam_mall.jpg";
import adil from "../images/adil_sheikh.JPG";
import sarven from "../images/sarven_lad.jpg";
import uma from "../images/uma_joshi .jpg";
import roshan from "../images/roshan_yadav.jpg";
import ved from "../images/ved_jaiswal.jpg";

import tejeshwani from "../images/tejeshwani_rathore.jpg";
import atharva from "../images/atharva_gadgil.jpg";
import dev from "../images/dev_hasrajani.jpg";
import nayan from "../images/nayan.jpg";
import vijay from "../images/vijay_harchandani .jpg";
import manish from "../images/manish_bhatia.jpg";
import vinit from "../images/vinit_kedia.jpg";

import hiten from "../images/hiten_bharti.jpg";
import akhilesh from "../images/akhilesh_sonarikar.jpg";
import devesh from "../images/devesh_gandhi.jpeg";
import rishika from "../images/rishika_methi.jpeg";
import huzaifah from "../images/huzaifah_bhati .PNG";

import rohit from "../images/rohit_sonejee.jpg";
import isha from "../images/isha_kolvekar.png";
import spruha from "../images/spruha_nimkar.jpg";
import rukshar from "../images/rukshar_khan.jpeg";
import nidhi from "../images/nidhi_sankhe.PNG";

const Team = () => {
  return (
    <div class="wrap" id="full-team">
      <div id="team-wrap">
        <div class="team-card" id="core-team">
          Core Team
          <div class="member core-member" id="chairperson">
            <h6>Vishal Banik</h6>
            <img src={vishal} alt="vishal"></img>
          </div>
          <div class="member core-member" id="vice-chairperson">
            <h6>Roshni Sarda</h6>
            <img src={roshni} alt="roshni"></img>
          </div>
          <div class="member core-member" id="secretary">
            <h6>Ishita Ahuja</h6>
            <img src={ishita} alt="ishita"></img>
          </div>
          <div class="member core-member" id="joint-secretary">
            <h6>Aishwarya Joshi</h6>
            <img src={aishwarya} alt="aishwarya"></img>
          </div>
          <div class="member core-member" id="treasurer">
            <h6>Vatsal Mehta</h6>
            <img src={vatsal} alt="vatsal"></img>
          </div>
        </div>

        <div class="team-card" id="technical">
          Technical<wbr></wbr> Team
          <div class="head-member member technical-member" id="sahil">
            <h6>Sahil Samel</h6>
            <img src={sahil} alt="sahil"></img>
          </div>
          <div class="head-member member technical-member" id="soham">
            <h6>Soham Chavan</h6>
            <img src={soham} alt="soham"></img>
          </div>
          <div class="member technical-member" id="gaurav">
            <h6>Gaurav Bhatia</h6>
            <img src={gaurav} alt="gaurav"></img>
          </div>
          <div class="member technical-member" id="gaurish">
            <h6>Gaurish Bhosale</h6>
            <img src={gaurish} alt="gaurish"></img>
          </div>
          <div class="member technical-member" id="jainam">
            <h6>Jainam Nisar</h6>
            <img src={jainam} alt="jainam"></img>
          </div>
          <div class="member technical-member" id="aapurva">
            <h6>Aapurva Solanki</h6>
            <img src={aapurva} alt="aapurva"></img>
          </div>
        </div>

        <div class=" team-card" id="event">
          Event Team
          <div class="head-member member event-member" id="akshita">
            <h6>Akshita Sakaria</h6>
            <img src={akshita} alt="akshita"></img>
          </div>
          <div class="head-member member event-member" id="mangalam">
            <h6>Mangalam Mall</h6>
            <img src={mangalam} alt="mangalam"></img>
          </div>
          <div class="member event-member" id="adil">
            <h6>Adil Sheikh</h6>
            <img src={adil} alt="adil"></img>
          </div>
          <div class="member event-member" id="roshan">
            <h6>Roshan Yadav</h6>
            <img src={roshan} alt="roshan"></img>
          </div>
          <div class="member event-member" id="uma">
            <h6>Uma Joshi</h6>
            <img src={uma} alt="uma"></img>
          </div>
          <div class="member event-member" id="sarven">
            <h6>Sarven Lad</h6>
            <img src={sarven} alt="sarven"></img>
          </div>
          <div class="member event-member" id="ved">
            <h6>Ved Jaiswal</h6>
            <img src={ved} alt="ved"></img>
          </div>
        </div>

        <div class="team-card" id="marketing">
          Marketing Team
          <div class="head-member member marketing-member" id="hiten">
            <h6>Hiten Bharti</h6>
            <img src={hiten} alt="hiten"></img>
          </div>
          <div class="member marketing-member" id="akhilesh">
            <h6>Akhilesh Sonarikar</h6>
            <img src={akhilesh} alt="akhilesh"></img>
          </div>
          <div class="member marketing-member" id="huzaifah">
            <h6>Huzaifah Bhati</h6>
            <img src={huzaifah} alt="huzaifah"></img>
          </div>
          <div class="member marketing-member" id="devesh">
            <h6>Devesh Gandhi</h6>
            <img src={devesh} alt="devesh"></img>
          </div>
          <div class="member marketing-member" id="rishika">
            <h6>Rishika Methi</h6>
            <img src={rishika} alt="rishika"></img>
          </div>
        </div>

        <div class=" team-card" id="publicity">
          Publicity Team
          <div class="head-member member publicity-member" id="tejeshwani">
            <h6>tejashwani Rathore</h6>
            <img src={tejeshwani} alt="tejeshwani"></img>
          </div>
          <div class="head-member member publicity-member" id="atharva">
            <h6>Atharva Gadgil</h6>
            <img src={atharva} alt="atharva"></img>
          </div>
          <div class="member publicity-member" id="vijay">
            <h6>Vijay Harchandani</h6>
            <img src={vijay} alt="vijay"></img>
          </div>
          <div class="member publicity-member" id="dev">
            <h6>Dev Hasrajani</h6>
            <img src={dev} alt="dev"></img>
          </div>
          <div class="member publicity-member" id="manish">
            <h6>Manish Bhatia</h6>
            <img src={manish} alt="manish"></img>
          </div>
          <div class="member publicity-member" id="vinit">
            <h6>Vinit</h6>
            <img src={vinit} alt="vinit"></img>
          </div>
          <div class="member publicity-member" id="nayan">
            <h6>Nayan Agraval</h6>
            <img src={nayan} alt="nayan"></img>
          </div>
        </div>

        <div class=" team-card" id="design">
          Design Team
          <div class="head-member member design-member" id="rohit">
            <h6>Rohit Sonejee</h6>
            <img src={rohit} alt="rohit"></img>
          </div>
          <div class="member design-member" id="spruha">
            <h6>Spruha Nimkar</h6>
            <img src={spruha} alt="spruha"></img>
          </div>
          <div class="member design-member" id="dhaiwat">
            <h6>Dhaiwat Jaisanghani</h6>
            <img src={dhaiwat} alt="dhaiwat"></img>
          </div>
          <div class="member design-member" id="nidhi">
            <h6>Nidhi Sankhe</h6>
            <img src={nidhi} alt="nidhi"></img>
          </div>
          <div class="member design-member" id="isha">
            <h6>Isha Kolvekar</h6>
            <img src={isha} alt="isha"></img>
          </div>
          <div class="member design-member" id="rukhsar">
            <h6>Rukshar Khan</h6>
            <img src={rukshar} alt="rukshar"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
