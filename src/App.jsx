// import Button from "./Button";
// import ModeContext from "./context/ModeContext";

import { useState } from "react";

// function App() {
//   return (
//     <>
//       <ModeContext.Provider value={"dark"}>
//         <h1>Hello Context</h1>
//         <Button />
//       </ModeContext.Provider>
//     </>
//   );
// }

// export default App;

function App() {
  const [image, setImage] = useState(
    "https://wallpapers.com/images/hd/ronaldo-2500-x-1667-picture-40cgex1bcp9oohd2.jpg"
  );
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <div className="p-[12px] border shadow-xl">
        <div className="carousel w-[850px] h-[350px]">
            <img src={image} className="w-full rounded-xl" />
          </div>
        <div className="mt-[12px]">
          <div className="carousel carousel-end w-[850px] ">
            <div
              onClick={() =>
                setImage(
                  "https://wallpapers.com/images/hd/ronaldo-2500-x-1667-picture-40cgex1bcp9oohd2.jpg"
                )
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://wallpapers.com/images/hd/ronaldo-2500-x-1667-picture-40cgex1bcp9oohd2.jpg"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage("https://wallpapercave.com/wp/wp3086186.jpg")
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://wallpapercave.com/wp/wp3086186.jpg"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage(
                  "https://i.pinimg.com/originals/b2/bf/b6/b2bfb63a705c360939aad896855a0149.jpg"
                )
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://i.pinimg.com/originals/b2/bf/b6/b2bfb63a705c360939aad896855a0149.jpg"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage(
                  "https://resize.elle.fr/original/var/plain_site/storage/images/people/la-vie-des-people/news/combien-cristiano-ronaldo-a-t-il-paye-la-mere-porteuse-de-ses-jumeaux-3495935/81343118-1-fre-FR/Combien-Cristiano-Ronaldo-a-t-il-paye-la-mere-porteuse-de-ses-jumeaux.jpg"
                )
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://resize.elle.fr/original/var/plain_site/storage/images/people/la-vie-des-people/news/combien-cristiano-ronaldo-a-t-il-paye-la-mere-porteuse-de-ses-jumeaux-3495935/81343118-1-fre-FR/Combien-Cristiano-Ronaldo-a-t-il-paye-la-mere-porteuse-de-ses-jumeaux.jpg"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage(
                  "https://cdn.ghanasoccernet.com/2018/03/593049-3870cad2a79df22594992d06c6375d99.jpg"
                )
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://cdn.ghanasoccernet.com/2018/03/593049-3870cad2a79df22594992d06c6375d99.jpg"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage(
                  "https://wallpapercrafter.com/sizes/2048x1152/31779-Cristiano-Ronaldo-Football-4k.jpg"
                )
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://wallpapercrafter.com/sizes/2048x1152/31779-Cristiano-Ronaldo-Football-4k.jpg"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage(
                  "https://wallpapertag.com/wallpaper/full/1/c/a/850419-cristiano-ronaldo-wallpaper-nike-mercurial-2018-2048x1536-720p.jpg"
                )
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://wallpapertag.com/wallpaper/full/1/c/a/850419-cristiano-ronaldo-wallpaper-nike-mercurial-2018-2048x1536-720p.jpg"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage(
                  "https://icdn.strettynews.com/wp-content/uploads/2019/03/ronaldo1.jpg"
                )
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://icdn.strettynews.com/wp-content/uploads/2019/03/ronaldo1.jpg"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage(
                  "https://wallpapershigh.com/wp-content/uploads/cristiano-ronaldo-manchester-united-2008-10.webp"
                )
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://wallpapershigh.com/wp-content/uploads/cristiano-ronaldo-manchester-united-2008-10.webp"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage(
                  "https://cdn.vox-cdn.com/thumbor/vlmqLsuIII3H42GYXh_8bwGx6a8=/0x0:3500x1969/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55354393/86879280.0.jpg"
                )
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://cdn.vox-cdn.com/thumbor/vlmqLsuIII3H42GYXh_8bwGx6a8=/0x0:3500x1969/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55354393/86879280.0.jpg"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage("https://wallpapercave.com/wp/wp2515920.jpg")
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://wallpapercave.com/wp/wp2515920.jpg"
                alt="Drink"
              />
            </div>
            <div
              onClick={() =>
                setImage(
                  "https://www.thesun.ie/wp-content/uploads/sites/3/2022/05/crop-18498016-1.jpg?strip=all&quality=100&w=1920&h=1080&crop=1"
                )
              }
              className="carousel-item w-[125px] h-[105px]"
            >
              <img
                className="rounded-xl w-28 object-cover"
                src="https://www.thesun.ie/wp-content/uploads/sites/3/2022/05/crop-18498016-1.jpg?strip=all&quality=100&w=1920&h=1080&crop=1"
                alt="Drink"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
