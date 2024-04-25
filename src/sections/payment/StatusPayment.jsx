import Image from 'next/image'
import Link from 'next/link'

export default function StatusPayment({isSuccess, idOrder}) {
  return (
    <>
      <div
        className={`${
          isSuccess
            ? 'bg-[#D5F7E0]'
            : 'bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)]'
        } w-full p-[1.46rem] rounded-[0.58565rem] flex justify-center items-center`}
      >
        <Image
          className='size-[1.46rem] object-contain'
          src={
            isSuccess
              ? '/components/check-circle.svg'
              : '/components/face-failed.svg'
          }
          alt='icon check'
          width={24}
          height={24}
        />
        <span
          className={`${
            isSuccess ? 'text-[#00983D]' : 'text-greyscale-80'
          } sub2 font-semibold block ml-[0.59rem]`}
        >
          {isSuccess ? 'ĐẶT HÀNG THÀNH CÔNG' : 'ĐƠN HÀNG CHƯA THANH TOÁN'}
        </span>
      </div>
      <div className='w-full px-[1.17rem] py-[0.88rem] rounded-[0.58565rem] bg-white'>
        {isSuccess ? (
          <p className='font-normal text-center body2 text-greyscale-40'>
            Cảm ơn quý khách đã cho AstroMazing cơ hội được phục vụ.
            <br /> Nhân viên AstroMazing sẽ liên hệ với quý khách trong thời
            gian sớm nhất
          </p>
        ) : (
          <p className='font-normal text-center body2 text-greyscale-40'>
            Chúng tôi rất lấy làm tiếc thông báo rằng thanh toán của bạn đối với
            đơn hàng số <strong className='text-blue-500'>{idOrder}</strong> đã
            không thành công. Vui lòng kiểm tra lại thông tin thẻ thanh toán của
            mình và thực hiện thanh toán lại để hoàn tất giao dịch.Nếu có bất kỳ
            thắc mắc hay cần hỗ trợ, hãy gọi điện đến{' '}
            <Link
              className='font-bold text-blue-500'
              href='tel: 0946492020'
            >
              094 649 2020
            </Link>{' '}
            để được hỗ trợ.
          </p>
        )}
      </div>
    </>
  )
}
