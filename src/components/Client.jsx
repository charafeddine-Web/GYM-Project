export default function Header() {
    const images = [
        { src: "/src/assets/1.jpeg", title: "Oussama benali Joueur U23 Renaissance sportive berkane" },
        { src: "/src/assets/2.jpeg", title: "Imad benadi (football player) Suivi en préparation physique" },
        { src: "/src/assets/3.jpeg", title: "Amoussa faissou (pro judo fighter 🇧🇯) Suivi en préparation physique + nutrition!" },
        { src: "/src/assets/4.40.jpeg", title: "Ayoub noceir (Pro MMA fighter) Suivi nutritionnel" },
        { src: "/src/assets/5.jpeg", title: "Zakaria bichi (Pro MMA fighter) Suivi nutritionnel" },
        { src: "/src/assets/6.jpeg", title: "Yasmine ghrouny (Pro football athlete) Suivi préparation physique" },
    ];

    return (
        <div className="relative overflow-hidden">
            <h1 className="mt-20 mb-12 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center underline decoration-clone decoration-indigo-500">
                <span className="text-indigo-600">Our</span> clients
            </h1>

            <div className="relative w-full overflow-hidden">
                <div className="flex animate-scroll">
                    {images.concat(images).map((img, index) => (
                        <div
                            key={index}
                            className="flex-none w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/5 h-60 mx-2 relative"
                        >
                            <img
                                src={img.src}
                                alt={`image ${index + 1}`}
                                className="h-full w-full object-cover rounded-xl"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs sm:text-sm md:text-base lg:text-lg text-center">
                                {img.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
