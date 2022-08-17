<?php

namespace App\Http\Controllers\Api\Checkout;

use App\Http\Controllers\Controller;
use App\Http\Requests\Checkout\CheckoutVnPay;
use App\Models\Invoices;
use App\Models\PaymentVnPay;
use App\Models\PaymentCash;
use App\Http\Requests\Checkout\CreateInfoPaymentVNPay;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Checkout\CheckoutPaymentCash;
use App\Http\Controllers\Api\Cart\CartController;




class CheckoutController extends Controller
{
    //
    public function paymentVnPay(CheckoutVnPay $request) {
        $validate = $request -> validated();
        $modelInvoices = new Invoices();
        $modelCartController = new CartController();
        if($validate['typeCheckout'] == 2) {
            $dataCart = $modelCartController -> getCart2();
            if(isset($dataCart) && count($dataCart) < 1) return response() ->json(["msg" => "Lấy dữ liệu thất bại!", "status" => false],404);
            $totalPriceCart = $modelCartController -> getAllPrices();
        } else {
            $detailInvoice = $modelInvoices ->getDetailInvoice($validate['id_invoices']);
            if(!isset($detailInvoice)) return response() ->json(["msg" => "Lấy dữ liệu thất bại!", "status" => false],404);
        }
        
        $vnp_Url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Returnurl = "http://localhost:3000/thong-bao-thanh-toan";
        $vnp_TmnCode = "H5WFAIQG";//Mã website tại VNPAY 
        $vnp_HashSecret = "DFWZZBYGMARFEGHSZPXMBFFRJBEJREEK"; //Chuỗi bí mật
        
        $vnp_TxnRef = mt_rand(100000,999999); //Mã đơn hàng. Trong thực tế Merchant cần insert đơn hàng vào DB và gửi mã này sang VNPAY
        $vnp_OrderInfo = "Thanh toan don hang";
        $vnp_OrderType = 'billpayment';
        $vnp_Amount = $validate['typeCheckout'] == 2 ? (float) $totalPriceCart * 100 : (float) $detailInvoice['total_price'] * 100;
        $vnp_Locale = 'vn';
        $vnp_BankCode = 'NCB';
        $vnp_IpAddr = $_SERVER['REMOTE_ADDR'];
        $vnp_ExpireDate = "20220820153333";
        //Add Params of 2.0.1 Version
        //Billing
        $inputData = array(
            "vnp_Version" => "2.1.0",
            "vnp_TmnCode" => $vnp_TmnCode,
            "vnp_Amount" => $vnp_Amount,
            "vnp_Command" => "pay",
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => $vnp_Locale,
            "vnp_OrderInfo" => $vnp_OrderInfo,
            "vnp_OrderType" => $vnp_OrderType,
            "vnp_ReturnUrl" => $vnp_Returnurl,
            "vnp_TxnRef" => $vnp_TxnRef,
            "vnp_ExpireDate"=>$vnp_ExpireDate,
        );
        
        if (isset($vnp_BankCode) && $vnp_BankCode != "") {
            $inputData['vnp_BankCode'] = $vnp_BankCode;
        }
        if (isset($vnp_Bill_State) && $vnp_Bill_State != "") {
            $inputData['vnp_Bill_State'] = $vnp_Bill_State;
        }
        
        //var_dump($inputData);
        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . urlencode($key) . "=" . urlencode($value);
            } else {
                $hashdata .= urlencode($key) . "=" . urlencode($value);
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }
        
        $vnp_Url = $vnp_Url . "?" . $query;
        if (isset($vnp_HashSecret)) {
            $vnpSecureHash =   hash_hmac('sha512', $hashdata, $vnp_HashSecret);//  
            $vnp_Url .= 'vnp_SecureHash=' . $vnpSecureHash;
        }
        $returnData = array('code' => '00'
            , 'message' => 'success'
            , 'data' => $vnp_Url);
            if (isset($_POST['redirect'])) {
                header('Location: ' . $vnp_Url);
                die();
            } else {
                echo json_encode($returnData);
            }
            // vui lòng tham khảo thêm tại code demo
    }

    public function saveInfoPaymentVNPay(CreateInfoPaymentVNPay $request) {
        $modelPaymentVNpay = new PaymentVnPay();
        $validate = $request -> validated();
        $modelInvoices = new Invoices();
        $user = Auth::user();
        $orderDate = date("Y-m-d",time());
        $updateAt = date("Y-m-d H:i:s",time());
        $statusInvoice = 1;
        $params = [
            $validate['vnp_Amount'],
            $validate['vnp_BankCode'],
            $validate['vnp_CardType'],
            $validate['vnp_BankTranNo'],
            $validate['vnp_OrderInfo'],
            $validate['vnp_PayDate'],
            $validate['vnp_TmnCode'],
            $user['id'],
            $validate['vnp_TransactionNo'],
            $validate['vnp_TransactionStatus'],
            $validate['vnp_TxnRef'],
            $validate['id_invoices']
        ];
        if($validate['vnp_TransactionStatus'] == '00') $statusInvoice = 2;
        $params2 = [
            $statusInvoice,
            $orderDate,
            $updateAt,
            $validate['id_invoices']
        ];
        $params3 = [
            $validate['id_invoices'],
            "00"
        ];
        $dataCheck = $modelPaymentVNpay -> checkStatusPayment($params3);
        if(isset($dataCheck) && count($dataCheck) > 1) return response() ->json(["msg" => "Hoá đơn này đã thanh toán, vui lòng thử lại sau!", "status" => false],410);
        $modelPaymentVNpay -> create($params);
        $modelInvoices -> updateStatusOrderDateInvoice($params2);
        return response() ->json(["msg" => "Lưu thông tin thanh toán hoá đơn thành công!", "status" => true],200);
    }

    public function checkoutPaymentCash(CheckoutPaymentCash $request) {
        $validate = $request -> validated();
        $user = Auth::user();
        $modelCartController = new CartController();
        $modelPaymentCash = new PaymentCash();
        $params = [
            $validate['name'],
            $validate['description'],
            $validate['phone'],
            $validate['address'],
            $validate['purchase_status'],
            $validate['status_order'],
            $validate['price'],
            $user['id']
        ];
        $modelPaymentCash -> create($params);
        if($validate['typeCheckout'] === 2) {
            $modelCartController -> clearAllOrderCartUser();
        }
        return response() ->json(["msg" => "Vui lòng thanh toán sau khi nhận được đơn hàng, cảm ơn quý khách đã sử dụng dịch cụ của chúng tôi!", "status" => true],200);
    }
}
