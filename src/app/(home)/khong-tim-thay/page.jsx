export default function NotFoundPage({searchParams}) {
  return (
    <main className='relative pt-[10.04rem] xmd:pt-[4.04rem] xmd:pb-0 bg-elevation-20 flex justify-center items-center pb-[3.44rem]'>
      <div className='w-[51.53734rem] rounded-[0.58565rem] bg-white p-[1.17rem]'>
        <h1 className='font-medium text-center text-blue-800 sub1 px-[1.46rem] py-[1.02rem] rounded-[0.58565rem] bg-elevation-20'>
          Không tìm kiếm được kết quả nào phù hợp “
          <span>{searchParams?.query}</span>”
        </h1>
        <div className='mt-[1.76rem] w-fit mx-auto'>
          <span className='font-normal body2 text-greyscale-40'>
            Để tìm được kết quả chính xác hơn, bạn vui lòng:
          </span>
          <ul className='list-disc flex flex-col *:body2 *:text-greyscale-40 *:font-normal translate-x-[2rem] mb-[16.11rem]'>
            <li>Kiểm tra lỗi chính tả của từ khóa đã nhập</li>
            <li>Thử lại bằng từ khóa khác</li>
            <li>Thử lại bằng những từ khóa tổng quát hơn</li>
            <li>Thử lại bằng những từ khóa ngắn gọn hơn</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
