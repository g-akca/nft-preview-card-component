import equilibriumImg from "/assets/image-equilibrium.jpg";
import ethereumIcon from "/assets/icon-ethereum.svg";
import clockIcon from "/assets/icon-clock.svg";
import avatarImg from "/assets/image-avatar.png";
import viewIcon from "/assets/icon-view.svg";

function Card() {
  return (
    <div className="max-w-87.5 bg-blue-900 p-6">
      <img src={equilibriumImg} alt="A colorful cube illustration" />
      <div>
        <h2>Equilibrium #3429</h2>
        <p>Our Equilibrium collection promotes balance and calm.</p>

        <div>
          <div>
            <img src={ethereumIcon} alt="Blue crystal icon" />
            <p>0.041 ETH</p>
          </div>

          <div>
            <img src={clockIcon} alt="Clock icon" />
            <p>3 days left</p>
          </div>
        </div>

        <div>
          <img src={avatarImg} alt="Avatar photo of a woman" />
          <p>Creation of</p>
          <p>Jules Wyvern</p>
        </div>
      </div>
    </div>
  )
}

export default Card;