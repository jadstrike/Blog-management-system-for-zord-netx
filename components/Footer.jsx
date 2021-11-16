import React from 'react'

const Footer = () => {
    return (
        <div class="max-w-3xl mx-auto py-6">
            <h1 class="text-center text-white text-lg lg:text-2xl">
                Join our telegram
            </h1>
    
            <div class="flex justify-center mt-6">
                <div class=" rounded-md">
                        <button class="w-full m-1 p-2 text-sm bg-blue-400 rounded font-semibold uppercase text-black-600 lg:w-auto hover:bg-blue-300"><a href="https://t.me/zordnetx" className="text-yellow-50">Telegram group</a></button>
                    </div>
                
            </div>
    
        
    
            <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
                <div>
                    <a href="#" class="text-xl font-bold text-gray-100 hover:text-blue-400">@ZordNetx2021</a>
                </div>
    
                <div class="flex mt-4 md:m-0">
                    <div class="-mx-4">
                        <a href="#" class="px-4 text-sm text-gray-100 font-medium hover:text-blue-400">About</a>
                        <a href="#" class="px-4 text-sm text-gray-100 font-medium hover:text-blue-400">Blog</a>
                        <a href="https://www.facebook.com/zordnetx" class="px-4 text-sm text-gray-100 font-medium hover:text-blue-400">Facebook</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
