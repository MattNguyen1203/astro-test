import {notFound} from 'next/navigation'

export default async function Error500() {
  return notFound()
  //   fetch('https://example.com/api/invalid-url') // Gọi API với một URL không hợp lệ
  //     .then((response) => {
  //       // Kiểm tra nếu phản hồi không thành công (lỗi HTTP)
  //       if (!response.ok) {
  //         throw new Error('Request failed with status ' + response.status)
  //       }
  //       // Xử lý phản hồi thành công
  //       return response.json() // Trả về phần nội dung của phản hồi dưới dạng JSON
  //     })
  //     .then((data) => {
  //       // Xử lý dữ liệu trả về từ API nếu cần
  //       console.log('API Response:', data)
  //     })
  //     .catch((error) => {
  //       // Xử lý lỗi
  //       console.error('API Error:', error)
  //       throw new Error(error)
  //     })
  return <div>hở</div>
}
