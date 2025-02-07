import { QRCodeSVG } from 'qrcode.react';
import logo from '../assets/logo.png';
import strip from '../assets/strip.png';

export function Welcome() {
  return (
    <main className="p-[4%] box-border">
      <div className="relative w-full bg-red-700 flex flex-col xl:text-2xl lg:text-xl md:text-base text-xs">
        <div className="absolute w-full h-fit">
          <div
            className="bg-gray-950 w-1/5 aspect-1/1 transform translate-y-[-80%] relative rounded-[50%]"
            style={{ left: '40%' }}
          ></div>
        </div>

        <img
          src={logo}
          className="absolute xl:left-4 xl:top-5 lg:left-2.5 lg:top-4 md:top-3.5 left-1.5 top-3 w-[13%]"
        />

        <div className="absolute xl:right-13 xl:top-6 lg:right-10 lg:top-5 md:right-8 md:top-4 right-5 top-1.5 flex flex-col items-end justify-end xl:text-5xl lg:text-3xl md:text-xl text-sm">
          <span>Ticket Number</span>
          <span>XXXXXX</span>
        </div>

        <img src={strip} className="w-[95%] self-center mt-[12%]" />

        <div className="flex flex-col xl:gap-20 lg:gap-15 md:gap-10 gap-5 px-[3%] mt-[1.2%]">
          <div className="grid grid-cols-4 *:flex *:flex-col *:xl:gap-4 *:lg:gap-3 *:md:gap-2 *:gap-1">
            <div>
              <span>Game</span>
              <span>Liverpool v XXX</span>
            </div>
            <div />
            <div />
            <div>
              <span>Date</span>
              <span>5 Jan, 16:30</span>
            </div>
          </div>

          <div className="flex justify-between *:flex *:flex-col *:xl:gap-4 *:lg:gap-3 *:md:gap-2 *:gap-1">
            <div>
              <span>Entrance</span>
              <span>S 1-8</span>
            </div>
            <div>
              <span>Area</span>
              <span>U2</span>
            </div>
            <div>
              <span>Row</span>
              <span>77</span>
            </div>
            <div>
              <span>Seat</span>
              <span>111</span>
            </div>
          </div>

          <div className="flex flex-col xl:gap-4 lg:gap-3 md:gap-2 gap-1">
            <span>Supporter Name</span>
            <span>James Jones</span>
          </div>
        </div>

        <div className="mt-[4%] mb-[6%] p-3 flex justify-center bg-white items-center self-center flex-1">
          <QRCodeSVG value="https://picturesofpeoplescanningqrcodes.tumblr.com/" />
        </div>
      </div>
    </main>
  );
}
