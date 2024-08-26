export const Loading = () => {
  return (
    // <div className='grid place-items-center w-full h-96'><span className='loading loading-infinity loading-lg'></span></div>
    <section id="quiz" className='flex w-full h-full flex-col gap-5'>
      <div id="question" className='w-full lg:w-8/12 h-32 mx-auto text-center rounded-lg bg-slate-200 animate-pulse'>
        <span className='px-16 py-1 rounded-full bg-slate-300 animate-pulse'></span>
        <p className='mt-4'></p>
      </div>
      <ul id="answer" className='flex flex-wrap justify-center gap-4 w-full mx-auto rounded-2xl sm:justify-between lg:w-8/12'>
        <li className='flex justify-center items-center w-full sm:w-60 lg:w-64 xl:w-80 py-5 rounded-lg bg-slate-200 animate-pulse'></li>
        <li className='flex justify-center items-center w-full sm:w-60 lg:w-64 xl:w-80 py-5 rounded-lg bg-slate-200 animate-pulse'></li>
        <li className='flex justify-center items-center w-full sm:w-60 lg:w-64 xl:w-80 py-5 rounded-lg bg-slate-200 animate-pulse'></li>
        <li className='flex justify-center items-center w-full sm:w-60 lg:w-64 xl:w-80 py-5 rounded-lg bg-slate-200 animate-pulse'></li>
      </ul>
      <section className='w-52 h-10 mx-auto mt-32 sm:mt-72 rounded-full bg-slate-200 animate-pulse'></section>
    </section>
  )
}
