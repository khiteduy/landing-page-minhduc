# Lead Setup: Google Sheet + Gmail

## 1) Tao Google Sheet
- Tao 1 sheet moi, dat ten tab: `Leads`.
- Header goi y:
  - `submittedAt`
  - `formType`
  - `name`
  - `phone`
  - `needGroup`
  - `mainNeed`
  - `description`
  - `requestedTool`

## 2) Tao Google Apps Script
- Trong Sheet: `Extensions` -> `Apps Script`.
- Dan code sau vao `Code.gs`:

```javascript
function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Leads") || ss.insertSheet("Leads");

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.formType || "unknown",
      payload.name || "",
      payload.phone || "",
      payload.needGroup || "",
      payload.mainNeed || "",
      payload.description || "",
      payload.requestedTool || "",
    ]);

    // Gui email Gmail thong bao lead moi
    const to = "YOUR_GMAIL@gmail.com";
    const subject = `[Lead Moi] ${payload.formType || "Form"} - ${payload.name || "N/A"}`;
    const body =
      `Thoi gian: ${payload.submittedAt}\n` +
      `Form: ${payload.formType || ""}\n` +
      `Ho ten: ${payload.name || ""}\n` +
      `So dien thoai: ${payload.phone || ""}\n` +
      `Nhu cau nhom: ${payload.needGroup || ""}\n` +
      `Nhu cau chinh: ${payload.mainNeed || ""}\n` +
      `Mo ta: ${payload.description || ""}\n` +
      `Toolkit can nhan: ${payload.requestedTool || ""}`;

    MailApp.sendEmail(to, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 3) Deploy Web App
- `Deploy` -> `New deployment` -> type `Web app`.
- Execute as: `Me`.
- Access: `Anyone`.
- Copy URL Web App.

## 4) Gan vao du an
- Tao file `.env` tu `.env.example`.
- Dien URL Web App:

```bash
VITE_CONTACT_WEBHOOK_URL=https://script.google.com/macros/s/xxx/exec
VITE_TOOLKIT_WEBHOOK_URL=https://script.google.com/macros/s/xxx/exec
```

## 5) Chay lai du an
```bash
npm run dev
```

Khi submit form, lead se vao Google Sheet va Gmail.
