import ItemStep from './ItemStep'

export default function StepPayment() {
  return (
    <div className='container rounded-[0.58565rem] bg-[#F9F4F0] mt-[1.17rem] flex justify-between items-center h-[4.09956rem] px-[1.46rem] mb-[1.46rem]'>
      <ItemStep />
      <div className='border-t border-dashed border-[#45617D] mx-[1.46rem] w-full'></div>
      <ItemStep />
      <div className='border-t border-dashed border-[#45617D] mx-[1.46rem] w-full'></div>
      <ItemStep />
    </div>
  )
}
