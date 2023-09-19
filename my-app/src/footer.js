import React from 'react'

const Footer = () => {
    return (
        <div class="bg-black h-auto md:h-[30rem] mt-[-5rem] md:mt-[-20rem] w-full z-10 text-center md:text-left relative px-8 md:px-32  text-white">
            <div class="md:flex   md:justify-between pt-8 items-center">
                <div class="text-[3rem]  font-bold  md:space-y-[-10px]">
                    <p>want to stay</p>
                    <p class="mt-[-2rem]">connected?</p>
                </div>
                <div class="flex flex-wrap justify-center item-center  md:items-start">
                    {/* <button class='flex items-center m-2 bg-white  border white rounded-xl px-4  py-2 my-5 md:my-2 w-fit text-blue-600'><span><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" class="w-5 h-5 mx-3 color-red" /></span> Download Now </button>
                    <button class='flex items-center m-2 border-2  white rounded-xl px-4 py-2 my-5 md:my-2 w-fit'><span><img src="https://cdn-icons-png.flaticon.com/512/61/61120.png" alt="" class="w-5 h-5 mx-3" /></span> Download Now </button> */}
                    <button class='flex items-center bg-white text-blue-600  border white rounded-xl px:3 md:px-4 py-1 md:py-2 my-5 md:my-2 w-fit mr-2'><span><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" class="w-5 h-5 mx-1 md:mx-3 color-red" /></span> Download Now </button>
                    <button class='flex items-center border-2  white rounded-xl px:3 md:px-4 py-1 md:py-2 my-5 md:my-2 w-fit'><span><img src="https://cdn-icons-png.flaticon.com/512/61/61120.png" alt="" class="w-5 h-5 mx-1 md:mx-3" /></span> Download Now </button>
                </div>
            </div>

            <div class="border-2 border-white rounded-lg w-full my-8">
            </div>

            <div class="w-full md:flex flex-wrap mt-4 ">
                <div class="w-full md:w-1/2">
                    <div class="mb-5 flex justify-center md:justify-start ">
                        <a
                            href="/"
                            class="text-white font-bold text-lg flex items-center gap-3"
                        ><img src="https://w7.pngwing.com/pngs/261/561/png-transparent-computer-icons-online-chat-computer-software-sales-chatbox-ribbon-rectangle-online-chat.png" alt="" class="w-8 h-8 rounded-xl" />Chatbox</a>
                    </div>
                    <div class="mt-2 mb-[2rem] space-y-2">
                        <p>Lorem Ipsum is simply dummy</p>
                        <p>text of the printing and typesetting</p>
                        <p class="mt-120">text of the printing and typesetting</p>
                    </div>

                    <p>er.dkbehera@gmail,com</p>
                </div>
                <div class="w-full md:w-1/2 flex flex-wrap justify-between mt-5 md:mt-0  ">
                    <div class="md:space-y-3">
                        <p class=" mb-2 md:mb-4 font-bold">Home</p>
                        <p>about us</p>
                        <p>Dowmnload</p>
                        <p>communicate</p>
                    </div>
                    <div class=" md:mt-0 md:space-y-2">
                        <p class="mb-4 font-bold">Home</p>
                        <p>about us</p>
                        <p>Dowmnload</p>
                    </div>
                    <div class=" md:mt-0 md:space-y-2">
                        <p class="mb-4 font-bold">Home</p>
                        <p>about us</p>
                        <p>Dowmnload</p>
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-wrap  justify-center font-bold py-4">
                <p>all copy reserved by chatbox</p>
            </div>
        </div>
    )
}

export default Footer;
