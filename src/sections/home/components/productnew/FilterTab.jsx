'use client'
const listTab = [
  {
    title: 'Phụ kiện iPad',
  },
  {
    title: 'Phụ kiện iPad',
  },
  {
    title: 'Phụ kiện iPad',
  },
]
export default function FilterTab() {
  return (
    <ul>
      {listTab.map((_, index) => (
        <div></div>
      ))}
    </ul>
  )
}
