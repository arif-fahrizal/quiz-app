export const Loading = () => {
  return (
    // <div className='grid place-items-center w-full h-96'><span className='loading loading-infinity loading-lg'></span></div>
    <div className="container-layout">
      <section id="quiz" className='grid gap-5 w-full sm:mt-10'>
        <div id="question" className='w-full h-28 mx-auto text-center rounded-lg lg:w-9/12 bg-slate-200 animate-pulse'>
          <span className='px-16 py-1 rounded-full bg-slate-300 animate-pulse'></span>
        </div>
        <ul id="answer" className='grid gap-4 w-full mx-auto text-center rounded-2xl sm:grid-cols-2 lg:w-9/12'>
          <li className='w-full p-5 rounded-lg bg-slate-200 animate-pulse'></li>
          <li className='w-full p-5 rounded-lg bg-slate-200 animate-pulse'></li>
          <li className='w-full p-5 rounded-lg bg-slate-200 animate-pulse'></li>
          <li className='w-full p-5 rounded-lg bg-slate-200 animate-pulse'></li>
        </ul>
        <section className='absolute left-1/2 bottom-3 transform -translate-x-1/2 w-52 py-5 rounded-full bg-slate-200 animate-pulse'></section>
      </section>
    </div>
  )
}
