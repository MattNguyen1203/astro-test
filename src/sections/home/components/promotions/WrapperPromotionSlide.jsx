import {IDHOMEPAGE} from '@/lib/IdPageAPI'
import getData from '@/lib/getData'
import PromotionSlide from '.'

export default async function WrapperPromotionSlide() {
  const data = await getData(`/wp/v2/pages/${IDHOMEPAGE}`, 3600)
  return <PromotionSlide data={data} />
}
