import React from 'react';
import eeee from "./Image/eeee.png"

function ChartSection() {
    return (
        <div class=" px-8 md:px-16">
            <div class="flex justify-center mt-[-90] z-10">
                <img class="w-[90%] mt-[-100px] md:mt-[-230px] z-0 h-auto rounded-lg" src={eeee} alt="" />
            </div>
            <div class="flex w-full  md:justify-center my-[2rem]">
                <div class="flex flex-wrap h-20 w-[90%] justify-center mx-auto space-x-2 md:justify-between   text-slate-300 items-center">
                    <p class="font-bold">Strope</p>
                    <p class='flex items-center'><span><img src="https://assets2.brandfolder.io/bf-boulder-prod/logo_image_v3/brandfolder/bjkjfx7qc8ptqppvkv36rt78/20220315020646369754/Afterpay_Loop_Black.png" alt='' class="w-5 h-5 mr-1" /></span>afterpay</p>
                    <p class='flex items-center'>hopins<span><img src="https://assets-global.website-files.com/5fb2950be125da5aa25af58e/600b3b018ba02e25706f8f56_01_Logo_Mark_-_Blue2x.png" alt='' class="w-4 h-4 ml-1" /></span></p>
                    <p>splunk</p>
                    <p class="font-bold">attentive</p>
                </div>
            </div>
        </div>
    )
}

export default ChartSection