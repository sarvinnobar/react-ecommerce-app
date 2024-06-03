import Facebook from "../../assets/icons/socials/Facebook";
import Instagram from "../../assets/icons/socials/Instagram";
import Whatsapp from "../../assets/icons/socials/Whatsapp";
import X from "../../assets/icons/socials/X";
import Center from "../Center/Center";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="fo__div">
      <Center>
        <div className="fo__container">
          <div className="col__div">
            <div>
              <h2> Customer service</h2>
            </div>
            <div>Join our Newsletter</div>
            <div>FAQ</div>

            <div>Product Care</div>

            <div>Cancelations & Returnings</div>
          </div>

          <div className="col__div">
            <div>
              <h2>HELP</h2>
            </div>
            <div>Contact Us</div>
            <div>Shipping Info</div>
            <div>Terms of Service</div>
            <div>Warranty</div>
            <div>Order Status</div>

            <div>Sell on Arax</div>
          </div>
          <div className="col__div">
            <div>
              <h2>Socials</h2>{" "}
            </div>
            <div className="col__socials">
              <div>
                <Instagram />
              </div>
              <div>
                <Facebook />
              </div>
              <div>
                <X />
              </div>
              <div>
                <Whatsapp />
              </div>
            </div>
          </div>
        </div>
      </Center>
    </div>
  );
}
