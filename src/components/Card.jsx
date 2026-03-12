import equilibriumImg from "/assets/image-equilibrium.jpg";
import ethereumIcon from "/assets/icon-ethereum.svg";
import clockIcon from "/assets/icon-clock.svg";
import avatarImg from "/assets/image-avatar.png";
import viewIcon from "/assets/icon-view.svg";

function Card() {
  return (
    <div className="max-w-87.5 bg-blue-900 p-6 rounded-[15px]">
      <div className="relative group mb-6">
        <img src={equilibriumImg} alt="A colorful cube illustration" className="rounded-lg" />

        <div className="absolute inset-0 bg-cyan-400/50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg cursor-pointer">
          <img src={viewIcon} alt="Eye icon" />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-white text-[22px] font-semibold hover:text-cyan-400 cursor-pointer">Equilibrium #3429</h2>
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
          <p className="text-white hover:text-cyan-400 cursor-pointer">Jules Wyvern</p>
        </div>
      </div>
    </div>
  )
}

export default Card;