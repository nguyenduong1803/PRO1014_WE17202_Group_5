export const tableProduct = [
    {
      name: "STT",
      width: 60,
      dataKey: "id",
      isFixed: true,
      type: "cell"
    },
    {
      name: "Ảnh",
      width: 60,
      dataKey: "path",
      isFixed: true,
      type: "img"
    },
    {
      name: "Mã sản phẩm",
      width: 150,
      dataKey: "id",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Tên sản phẩm",
      width: 200,
      dataKey: "name",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Số lượng",
      width: 130,
      dataKey: "quantity",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Mô tả ngắn",
      width: 350,
      dataKey: "short_description",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Mô tả sản phẩm",
      width: 350,
      dataKey: "full_description",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Mã giảm giá",
      width: 150,
      dataKey: "id_code_sale",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Giá sản phẩm",
      width: 150,
      dataKey: "price",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Thời gian tạo",
      width: 250,
      dataKey: "create_at",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Trạng thái",
      width: 150,
      dataKey: "status",
      isFixed: false,
      type: "status"
    },
    {
      name: "Quản lý",
      width: 150,
      dataKey: "id",
      isFixed: "right",
      type: "edit"
    },

  ]
  export const tablePost = [
    {
      name: "STT",
      width: 60,
      dataKey: "id",
      isFixed: true,
      type: "cell"
    },
    {
      name: "Tiêu đề",
      width: 190,
      dataKey: "title",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Chủ đề",
      width: 190,
      dataKey: "subTitle",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Nội dung",
      width: 450,
      dataKey: "content",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Tác giả",
      width: 190,
      dataKey: "author",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Thể loại",
      width: 190,
      dataKey: "category",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Bình luận",
      width: 150,
      dataKey: "comments",
      isFixed: false,
      type: "comment"
    },
    {
      name: "Quản lý",
      width: 210,
      dataKey: "_id",
      isFixed: "right",
      type: "postAction"
    },

  ]
  export const tableOrder = [
    {
      name: "ID đơn hàng",
      width: 160,
      dataKey: "id_invoice",
      isFixed: true,
      type: "cell"
    },
    {
      name: "ID nhân viên",
      width: 150,
      dataKey: "id_staff",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Vị trí bàn",
      width: 190,
      dataKey: "index_table",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Tổng tiền",
      width: 450,
      dataKey: "total_price",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Số điện thoại",
      width: 190,
      dataKey: "phoneNumber",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Tổng khách hàng",
      width: 190,
      dataKey: "total_user",
      isFixed: false,
      type: "cell"
    },
  
    {
      name: "Trạng thái",
      width: 250,
      dataKey: "status_cart_order",
      isFixed: false,
      type: "isSucces"
    },
  
   
    {
      name: "Quản lý",
      width: 250,
      dataKey: "id",
      isFixed: "right",
      type: "postAction"
    },

  ]
  export const customerTable = [
    {
      name: "ID",
      width: 40,
      dataKey: "id",
      isFixed: true,
      type: "cell"
    },
    {
      name: "Ảnh",
      width: 80,
      dataKey: "avatar",
      isFixed: false,
      type: "img"
    },
    {
      name: "Tên",
      width: 200,
      dataKey: "name",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Email",
      width: 250,
      dataKey: "email",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Số điện thoại",
      width: 190,
      dataKey: "phone",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Địa chỉ",
      width: 190,
      dataKey: "address",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Ngày tháng năm sinh",
      width: 250,
      dataKey: "dob",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Tổng tiền đã mua",
      width: 250,
      dataKey: "totalPaid",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Ngày tạo tài khoản",
      width: 150,
      dataKey: "createdAt",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Quản lý",
      width: 210,
      dataKey: "_id",
      isFixed: "right",
      type: "postAction"
    },

  ]
  export const categoryTable = [
    {
      name: "STT",
      width: 100,
      dataKey: "id",
      isFixed: true,
      type: "cell"
    },
    {
      name: "Ảnh",
      width: 200,
      dataKey: "images",
      isFixed: true,
      type: "img"
    },
    {
      name: "Tên danh mục",
      width: 250,
      dataKey: "name",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Mã danh mục",
      width: 250,
      dataKey: "id",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Ngày tạo",
      width: 250,
      dataKey: "create_at",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Quản lý",
      width: 80,
      dataKey: "id",
      isFixed: "right",
      type: "deleteCate"
    },

  ]