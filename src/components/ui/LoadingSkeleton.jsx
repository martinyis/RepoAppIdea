const LoadingSkeleton = () => {
    return (
        [...Array(4)].map((_, index) => (
            <div key={index} class="flex animate-pulse flex-row h-full bg-slate-500 rounded-[28px] p-6">
                <div class="flex flex-col space-y-4 w-full">
                <div class="w-2/5 bg-slate-400 h-6 rounded-md"></div>
                <div class="w-1/5 bg-slate-400 h-4 rounded-md"></div>
                <div class="w-full bg-slate-400 h-6 rounded-md"></div>
                <div class="w-4/5 bg-slate-400 h-6 rounded-md"></div>
                <div class="w-4/5 bg-slate-400 h-6 rounded-md"></div>
                </div>
            </div>
        ))
    )
}

export default LoadingSkeleton