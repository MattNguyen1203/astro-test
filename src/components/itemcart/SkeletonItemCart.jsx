import {Skeleton} from '@/components/ui/skeleton'

export default function SkeletonItemCart() {
  return (
    <article className={`h-[7.9rem] w-full flex`}>
      <Skeleton className='w-[30%] h-full rounded-[1.1713rem] overflow-hidden block mr-[0.88rem] flex-shrink-0' />
      <div className='w-full'>
        <Skeleton className={`h-[2.78184rem] xmd:order-2 w-full`} />
        <Skeleton className={`w-full h-[4.6rem] my-[0.88rem]`} />
      </div>
    </article>
  )
}
