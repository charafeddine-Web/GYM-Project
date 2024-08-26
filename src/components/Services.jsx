function Services() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 p-4">
            <h1 className="text-3xl sm:text-4xl lg:text-3xl font-extrabold text-white text-center mt-20 mb-20 underline decoration-clone decoration-indigo-500 shadow-lg">
                <span className="text-indigo-600">Our</span> Services
            </h1>

            <div className="flex flex-wrap justify-center gap-6">
                <div
                    className="h-[16em] w-[25em] border-2 hover:bg-indigo-500 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
                >
                    <div>
                        <h1 className="text-[2em] font-medium">Distance Physical Preparation</h1>
                        <p className="text-[0.85em]">
                            Distance Physical Preparation focuses on enhancing endurance and strength for
                            long-distance activities through specialized training, including aerobic, interval,
                            and strength exercises.
                        </p>
                    </div>
                </div>

                <div
                    className="h-[16em] w-[25em] border-2 hover:bg-indigo-500 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
                >
                    <div>
                        <h1 className="text-[2em] font-medium">Nutrition sportive</h1>
                        <p className="text-[0.85em]">
                            Nutrition sportive focuses on optimizing dietary habits to enhance athletic performance, recovery, and overall well-being.
                        </p>
                    </div>
                </div>

                <div
                    className="h-[16em] w-[25em] border-2 hover:bg-indigo-500 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
                >
                    <div>
                        <h1 className="text-[2em] font-medium">Coaching à domicile</h1>
                        <p className="text-[0.85em]">
                            Coaching à domicile provides personalized fitness training and guidance in the comfort of your home, offering tailored workouts and ongoing support.
                        </p>
                    </div>
                </div>

                <div
                    className="h-[16em] w-[25em] border-2 hover:bg-indigo-500 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]"
                >
                    <div>
                        <h1 className="text-[2em] font-medium">Formation science- sport</h1>
                        <p className="text-[0.85em] text-red-600 font-extrabold" >
                            Coming soon
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
