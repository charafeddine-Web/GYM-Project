import { CheckIcon } from '@heroicons/react/20/solid'

export default function About() {
    const includedFeatures = [
        ' age: 23',
        'gender: Male',
        'language: Franch, english',
        'work: Coach',
    ]
    return (
        <div className="bg-gray-900 py-0 sm:py-0">
             <h1 className="text-3xl sm:text-4xl lg:text-3xl font-extrabold text-white text-center mt-2 mb-10 underline decoration-clone decoration-indigo-500 ">
                About <span className="text-indigo-600">us</span>
            </h1>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl   sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-white">AYOUB JAA</h3>
                        <p className="mt-6 text-base leading-7 text-gray-200">
                            I am Ayoub Jaa, a professional sports training license holder and certified by renowned organizations such as the Royal Moroccan Football Federation. With over five years of experience, I have worked with various athletes in several disciplines including football, basketball, volleyball and tennis, as well as in combat sports such as MMA, judo, boxing and karate. My expertise focuses on physical preparation and nutrition, where I have helped many athletes achieve their performance goals. In combat sports, I have specifically worked with competitors to optimize their preparation, including weight management before competitions, through personalized diets adapted to their sporting requirements and lifestyle. In parallel, I have also guided individuals in their personal transformation through private coaching, aimed at improving their health and overall fitness.                                </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                                What’s included
                            </h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">

                                <img src="/src/assets/coach2.jpeg" alt="Coach Image"
                                    className="mb-6 bg-black rounded-2xl shadow-xl saturate-100 "
                                    width="600"
                                    height="500" />
                                <div className="flex justify-center gap-4 mt-4 rounded-xl  border-r-8 border-l-8">
                                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="h-6 w-6" />
                                    </a>
                                    <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-6 w-6" />
                                    </a>
                                    <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-6 w-6" />
                                    </a>
                                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
