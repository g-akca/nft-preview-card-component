import equilibriumImg from "/assets/image-equilibrium.jpg";
import ethereumIcon from "/assets/icon-ethereum.svg";
import clockIcon from "/assets/icon-clock.svg";
import avatarImg from "/assets/image-avatar.png";
import viewIcon from "/assets/icon-view.svg";

function Card() {
  return (
    <div className="max-w-87.5 bg-blue-900 p-6 rounded-[15px]">
      <img src={equilibriumImg} alt="A colorful cube illustration" className="rounded-lg mb-6" />

      <div>
        <h2 className="mb-4 text-white text-[22px] font-semibold">Equilibrium #3429</h2>
        <p className="font-light leading-6.5">Our Equilibrium collection promotes balance and calm.</p>

        <div className="py-6 flex justify-between items-center border-b border-blue-800">
          <div className="flex items-center gap-2">
            <img src={ethereumIcon} alt="Blue crystal icon" className="h-4.5" />
            <p className="text-cyan-400 font-semibold text-[16px]">0.041 ETH</p>
          </div>

          <div className="flex items-center gap-2">
            <img src={clockIcon} alt="Clock icon" className="h-4" />
            <p className="text-[16px]">3 days left</p>
          </div>
        </div>

        <div className="mt-6 flex items-center text-[16px]">
          <img src={avatarImg} alt="Avatar photo of a woman" className="h-8 border border-white rounded-full mr-4" />
          <p className="mr-2 text-blue-500">Creation of</p>
          <p className="text-white">Jules Wyvern</p>
        </div>
      </div>
    </div>
  )
}

export default Card;