import React from "react";

const Beasiswa = (props) => {
    return (
        <div className="bg-white rounded-xl shadow-lg flex flex-col p-6 my-8 min-w-max w-full lg:max-w-md">
            <div className="flex flex-wrap w-1/2 gap-2 pb-6 mr-24">
                <div className="text-sm font-medium flex items-center justify-center bg-white w-fit rounded-lg border-2 border-blue px-2 min-w-16">
                    {props.data.degree}
                </div>
                <div className="text-sm font-medium flex items-center justify-center bg-white w-fit rounded-lg border-2 border-blue px-2 min-w-1">
                    {props.data.place}
                </div>
                <div className="text-sm font-medium flex items-center justify-center bg-white w-fit rounded-lg border-2 border-blue px-2 min-w-1">
                    {props.data.component}
                </div>
            </div>
            <h2 className="font-bold text-3xl py-1">{props.data.name}</h2>
            <p><span className="font-medium">Deadline:  </span>{new Date(props.data.date).toDateString()}</p>

            <div className="flex items-center justify-center mt-6 ">
                <a className="transition ease-in-out bg-orange tracking-wide shadow-[0_7px_2px_-2px_rgba(0,0,0,0.3)] rounded-xl w-fit py-2 px-4 text-white font-semibold
                hover:bg-orange-80 hover:-translate-y-1 hover:scale-110"
                    href={props.data.link}
                    target='_blank'
                >
                    Selengkapnya
                </a>
            </div>
        </div>
    )
}

export default Beasiswa