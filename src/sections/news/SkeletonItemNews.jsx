import {Skeleton} from '@/components/ui/skeleton'

export default function SkeletonItemNews({isOption = false}) {
  return (
    <article className={`h-[11.347rem] w-full flex`}>
      <Skeleton className='w-[16.47145rem] h-full rounded-[1.1713rem] overflow-hidden block mr-[0.88rem] flex-shrink-0' />
      <div className='w-full'>
        <Skeleton className={`h-[2.78184rem] xmd:order-2 w-full`} />
        <Skeleton className={`w-full h-[4.6rem] my-[0.88rem]`} />
        <Skeleton className={`w-[7.2rem] h-[2.19619rem]`} />
      </div>
    </article>
  )
}
