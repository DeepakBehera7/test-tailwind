import React from 'react'
import fffff from "./Image/fffff.png"
import eeee from "./Image/eeee.png"
// import uiui from "./Image/uiui.jpg"

function Cards() {
    return (
        <div class="flex flex-wrap  flex-col justify-center items-center w-full mt-[3rem] px-8 md:px-16">
            <div>
                <button class="border borde-1 rounded-full px-3 py-1 font-blue bg-slate-300 text-blue-600 font-medium space-y-3">feature</button>
            </div>
            <div class="space-y-2 flex flex-col items-center text-center">
                <p class="font-medium text-4xl mb-3">Reaonse why you should choose a <span class="blue font-bold text-blue-600 ">chatbox</span></p>
                <p class="text-base text-slate-600 ">chatbox has several featurethat makes the reason</p>
                <p class="text-base text-slate-600">why you choose  chatbox</p>
            </div>

            <div class="flex flex-wrap justify-between w-[90%] mt-[3rem] space-y-4 md:space-y-0">
                <div class="flex flex-wrap flex-col justify-center border-2 bg-blue-600 items-center space-y-2 rounded-lg p-10 w-[300px]">
                    <img src='https://www.svgrepo.com/show/348367/happy-face.svg' alt='' class='w-20 h-auto bg bg-blue-600' />
                    <p>East to use</p>
                    <p>Easy to use for everyone</p>
                    <p>and simple</p>
                </div>
                <div class="flex flex-wrap flex-col justify-center border-2 bg-slate-200 items-center space-y-2 rounded-lg  p-10 w-[300px]">
                    <img src='https://www.svgrepo.com/show/348367/happy-face.svg' alt='' class='w-20 h-auto' />
                    <p>Real time</p>
                    <p>Connect with costmer </p>
                    <p>in real time</p>
                </div>
                <div class="flex flex-wrap flex-col justify-center border-2 bg-slate-200 items-center space-y-2 rounded-lg p-10 w-[300px]">
                    <img src='https://www.svgrepo.com/show/348367/happy-face.svg' alt='' class='w-20 h-auto' />
                    <p>Safty & Private</p>
                    <p>Enjoy  your comfort and Safty</p>
                    <p>When communicate</p>
                </div>
            </div>
            <div class="flex flex-wrap w-full md:w-[90%]  md:space-x-10 justify-center my-[4rem] ">
                <div class="flex flex-wrap flex-col items-start  space-y-2 w-full md:w-[50%]">
                    <p class="text-2xl">communicate more</p>
                    <p class="text-2xl">efficiently by using</p>
                    <p class="text-blue-600 font-bold text-2xl">chatbox</p>
                    <p class='flex flex-wrap text-slate-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div class="flex flex-wrap justify-around w-full">
                        <div>
                            <p class="text-2xl font-bold">1M+</p>
                            <p class="text-slate-200">User</p>

                        </div>
                        <div>
                            <p class="text-2xl font-bold">2M+</p>
                            <p class="text-slate-200">Download</p>
                        </div>
                        <div>

                            <p class="text-2xl font-bold">2</p>
                            <p class="text-slate-200">Years</p>
                        </div>
                    </div>
                </div>
                <div class="object-contain flex mt-10 md:mt-0 ">
                    <img src={fffff} alt='' class="shadow-2xl rounded-md" style={{ boxShadow: "-10px -10px 5px 0px rgba(0,0,0,0.5)" }} />
                </div>
            </div>
            <div class="flex flex-col-reverse md:flex-row-reverse w-[90%] justify-center mb-[4rem]">
                <div class="flex flex-wrap flex-col justify-center  items-start space-y-2 pl-0 mt-10 md:mt-0 md:pl-16  md:w-1/2">
                    <p class="text-2xl ">communicate more</p>
                    <p class="text-2xl"><span class="to-blue-600 font-bold">efficiently</span> by using</p>
                    <p  class="text-2xl">chatbox</p>
                    <p class='flex flex-wrap  text-slate-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div>
                        <div class="border-2 rounded-xl px-3 py-2 bg-blue-600 text-white">Learn More</div>
                    </div>
                </div>
                <div class="">
                    <img src={fffff} alt='' class="shadow-2xl rounded-" style={{ boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.5)" }} />
                </div>
            </div>
            <div class="bg-[rgb(1,76,254)] w-full">
                <div class="flex justify-center   z-10">
                    <img class="w-[90%]  z-0 h-auto" src={eeee} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Cards