import getData from '@/lib/getData'
import BoxFilter from './BoxFilter'

export default async function WrapperBoxFilter() {
  const categories = await getData('/okhub/v1/category/category')
  return <BoxFilter categories={categories} />
}
