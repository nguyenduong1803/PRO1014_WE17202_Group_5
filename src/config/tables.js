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
      width: 130,
      dataKey: "images",
      isFixed: true,
      type: "img"
    },
    {
      name: "Mã sản phẩm",
      width: 250,
      dataKey: "_id",
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
      name: "Mô tả",
      width: 150,
      dataKey: "describe",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Mã giảm giá",
      width: 150,
      dataKey: "discount",
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
      dataKey: "timeCreate",
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
      dataKey: "_id",
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
      name: "STT",
      width: 60,
      dataKey: "id",
      isFixed: true,
      type: "cell"
    },
    {
      name: "Mã đơn hàng",
      width: 150,
      dataKey: "id",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Tên",
      width: 190,
      dataKey: "name",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Email",
      width: 450,
      dataKey: "email",
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
      name: "Địa chỉ",
      width: 190,
      dataKey: "address",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Tổng sản phẩm",
      width: 150,
      dataKey: "items",
      isFixed: false,
      type: "comment"
    },
    {
      name: "Trạng thái",
      width: 250,
      dataKey: "status",
      isFixed: false,
      type: "isSucces"
    },
    {
      name: "Ngày đặt hàng",
      width: 150,
      dataKey: "dateTimeStart",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Ngày hết hạn",
      width: 150,
      dataKey: "dateTimeEnd",
      isFixed: false,
      type: "cell"
    },
    {
      name: "Quản lý",
      width: 100,
      dataKey: "_id",
      isFixed: "right",
      type: "orderAction"
    },

  ]