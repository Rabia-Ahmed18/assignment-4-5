import Header from "./component/header";
import Footer from "./component/footer";
import Image from "next/image";
import travel1  from "./public/images//travel1.webp";
import travel2 from "./public/images/travel2.webp";
import eat1  from "./public/images/eat1.webp";
import eat2  from "./public/images//eat2.webp";
import relax from "./public/images/relax.webp"
import relax2 from "./public/images/relax2.webp"
export default function Home() {
  return (
    <div className="mainContainer">
      <Header/>
      <div className="parentContainer">
        <div className="childContainer">
          <div className="imageContainer">
         
          <Image src={travel1}
            
            alt="travel image"
            />
            
          </div>
          <div className="title">
            Travel-1
            <div className="description">
             <p> Pack your bags and lets embark on an epic voyage together.
               Get ready!
              
             </p>
            </div>
          </div>
        </div>
        <div className="childContainer">
          <div className="imageContainer">
          <Image src={travel2}
            
            alt="travel image"
            />
          </div>
          <div className="title">
            Travel-2
            <div className="description">
              <p>If you consider yourself a sane,
                 a part of you may yearn to experience life </p>
            </div>
          </div>
        </div>
        <div className="childContainer">
          <div className="imageContainer">
            <Image src={eat1}          
            alt="eat image"
            />
          </div>
          <div className="title">
            Eat-1
            <div className="description">
            I have always loved food. Outside, I do the things that every foodie does.
              
            </div>
          </div>
        </div>
        <div className="childContainer">
          <div className="imageContainer">
            <Image src={eat2}
            alt="eat-img"
            />         
          </div>
          <div className="title">
            Eat-2
            <div className="description">
             <p> Bite the world , One city at a time.</p>
            </div>
          </div>
        </div>
        <div className="childContainer">
          <div className="imageContainer">
            <Image src={relax}
            alt="relax-img"/>
          </div>
          <div className="title">
            Relax-1
            <div className="description">
             <p>Truly,it is worst than returning from a trip 
              feeling tired than before you left</p>
            </div>
          </div>
        </div>
        <div className="childContainer">
          <div className="imageContainer">
          <Image src={relax2}
            alt="relax-img"/>
         
          </div>
          <div className="title">
            Relax-2
            <div className="description">
            <p>Spending time in nature helps travelers relax by reducing their mental fatigue.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
}
