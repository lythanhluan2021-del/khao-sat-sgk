/**
 * ==============================================================================
 * HỆ THỐNG KHẢO SÁT & BÁO CÁO THIẾU SÁCH GIÁO KHOA THPT
 * Cấu hình kết nối Google Apps Script Web App & Google Sheets
 * ==============================================================================
 * Trường THPT Nguyễn Sinh Sắc
 */

const GOOGLE_SCRIPT_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbxjHM_cyZe6G0RIeKwpVzLxnEmrovDvKhg6KXwDw_05DRXSLN-9YCzAOR1ef_Ku1xTyKw/exec";

// Gán vào window để các trang index.html và thongke.html đọc tự động
if (typeof window !== "undefined") {
  window.GOOGLE_SCRIPT_WEBAPP_URL = GOOGLE_SCRIPT_WEBAPP_URL;
}
