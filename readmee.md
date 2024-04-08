  ## Đặt tên slug cho các page như nào? loading...
  ## Phần tức tin có chia mỗi danh mục là 1 page không? loading ...
  ## Chat message là add plugin facebook? loading ...
  ## Có chức năng giới hạn số lượng voucher cho user không và có ngày hết hạn vouccher không? loading ...
  ## Danh mục sản phẩm khi click flashsale thì có là 1 page khác để SEO không? loading ...
  ## Bấm vào xem thêm ở nav thì hiển thị như thế nào? loading...
  ## Khách có muốn sắp xếp các mục ở navbar không hay sẽ để thứ tự theo thiết kế? loading...
  ## Preoder vẫn được áp voucher?loading...
  ## Cố định ship sẽ từ 1 - 3 ngày và mặc định 30k? loading ...
  ## Nếu Thanh toán lại sẽ giữ lại thông tin cũ và tiếp tục thanh toán, sẽ không có trường hợp options chọn đã hết? loading ...
  ## Những trường sdt và email phần tài khoản không thể thay đổi ?loading ... 
  ## Các voucher sau khi được sử dụng sẽ bị xoá đi? Các voucher ở các trang khác sẽ hiển thị đã sử dụng hay sẽ xoá đi? loading ...
  ## Khi thăng hạng thành viên có thông báo cho người dùng không? khi đơn hàng xác nhận thành công thì mới tăng điểm?loading...


## bắt truyền cả username lên khi đăng ký, username có cần phải là duy nhất?
## SĐT đang có thể đk cho nhiều tài khoản?
## Sản phẩm combo đang là tích từ các các phẩm đơn gộp lại, hiển thị ra sao, sẽ không thể điều chỉnh sale giá riêng cho sản phẩm combo được, mà chỉ điểu chỉnh cho từng sản phẩm con
## Nó sẽ thuộc category gì? Categories thì sẽ hiển thị những gì? api trả về có thể cộng từng sản phẩm trong combo và đưa ra ngoài không?
## Attribute color :Trắng - #fff nên quy chuẩn lại để front-end hiển thị được
## Phần giá của các sản phẩm khác màu mà khác nhau thì hiển thị như thế nào?
## Có bao nhiêu variations thì đều phải điền hết?
## Chưa có chỗ upvideo ở sản phẩm?
## Sản phẩm mua kèm phù hợp ? "Cross-sells?
## Từ giá thấp nhất "hiển thỉ combo"


const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000));

toast.promise(promise, {
  loading: 'Loading...',
  success: (data) => {
    return `${data.name} toast has been added`;
  },
  error: 'Error',
});




## Hiện tại:
## Danh mục	Domain/ten-danh-muc 
## Danh mục con 	Domain/ten-danh-muc-con 
## Sản phẩm 	Domain/ten-san-pham 
## Bài viết 	Domain/ten-bai-viet 


## Về logic
- Nó sẽ là /[slug].html
- Thì sẽ phải check slug xem nó thuộc 1 trong 4 thằng ở trên
- Đồng nghĩa với việc sẽ phải call "4" api trong 1 page để kiểm tra
- Thời gian code sẽ tăng lên "x3" lần, sẽ phải check rất cực và generate Static params "cực khó"
- Code phần này ít nhất sẽ phải check để trả về giao diện tương ứng theo slug (ít nhất 3 giao diện)
- Về "perfomace" chắc chắn sẽ không tốt


## Đề xuất: ( Bên cellphones cũng đang làm như thế này)
## Danh mục:	Domain/danh-muc 
## Danh mục con: 	Domain/danh-muc/ten-danh-muc-con 
## Sản phẩm: 	Domain/ten-san-pham
## Tin tức:	Domain/tin-tuc
## danh mục:	Domain/tin-tuc/thi-truong
## Bài viết: 	Domain/tin-tuc/ten-bai-viet

## Ưu điểm của đề xuất mới:
## Code sẽ đỡ được về logic và thời gian
## Perfomance tăng lên
## Chỉ call 1 api
## Vẫn giữ được SEO
## SEO chi tiết sản phẩm "!IMPORTANT "


const handleRouter = (page) => {
      const paramNew = new URLSearchParams(searchParams)
      if (page <= 1) {
        if (params?.category?.length > 1) {
          const pathNameNew = '/tin-tuc/' + params?.category[0]
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
          })
        } else {
          const pathNameNew = '/tin-tuc'
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
          })
        }
      } else {
        if (params?.category?.length) {
          const pathNameNew = '/tin-tuc/' + params?.category[0] + `/${page}`
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
          })
        } else {
          const pathNameNew = '/tin-tuc/' + `${page}`
          if (ref) {
            ref?.current?.scrollIntoView({behavior: 'smooth'})
          }
          router.push(pathNameNew + '?' + paramNew.toString(), {
            scroll: false,
          })
        }
      }
    }