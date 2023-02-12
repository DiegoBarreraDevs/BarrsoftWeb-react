import Contact from './Contact';
import { db } from '../../firebase'
import { collection, addDoc } from "firebase/firestore";

export default function ContactComplete() {

  const addUser = async (userObject) => {
    await addDoc(collection(db, "users"), { userObject });
    console.log("new user added");
  };

  const onClickFB = async (e) => {
    window.open("https://www.facebook.com/Barrsoft-103170232289752");
  };

  const onClickIG = async (e) => {
    window.open("https://www.instagram.com/barr.soft/");
  };

  const onClickWPP = async (e) => {
    window.open("https://twitter.com/BarrSoft");
  };

  const onClickLK = async (e) => {
    window.open("https://www.linkedin.com/company/barrsoft");
  };

  const onClickT = async (e) => {
    window.open("");
  };

  return (
    <section className="formCompleteSection">

      <div className="leftContact">
        <h2 className="leftContactTitle">Contact</h2>

        <div className="leftContactDesc">
          <i className="fas fa-mobile-alt infoL"></i>
          <h3 className="leftContactInfoT">Phone:</h3>
          <p className="leftContactInfoD" >+ 54 9 11 5014 3632</p>
        </div>
        <div className="leftContactDesc">
          <i className="far fa-envelope infoL"></i>
          <h4 className="leftContactInfoT" >Email:</h4>
          <p className="leftContactInfoD" >info@barrsoft.com</p>
        </div>

        <div className="socialMedia">
          <h2 className="leftSocialMeidaTitle">Social Media</h2>

          <div className="socialMediaIcons">

            <div className="socialMediaIcon">
              <i className="fab fa-facebook-f" onClick={onClickFB}></i>
            </div>
            <div className="socialMediaIcon">
              <i className="fab fa-instagram" onClick={onClickIG}></i>
            </div>
            <div className="socialMediaIcon">
              <i className="fab fa-twitter" onClick={onClickWPP}></i>
            </div>
            <div className="socialMediaIcon">
              <i className="fab fa-telegram-plane" onClick={onClickT}></i>
            </div>
            <div className="socialMediaIcon">
              <i className="fab fa-linkedin-in" onClick={onClickLK}></i>
            </div>
          </div>

        </div>

      </div>

      <Contact addUser={addUser} />

    </section>
  );
}
