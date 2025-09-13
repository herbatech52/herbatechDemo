document.addEventListener('DOMContentLoaded', function () {
  const EMAILJS_SERVICE_ID = 'service_dp6r61h';
  const TEMPLATE_COMPANY   = 'ndt0409';
  const TEMPLATE_USER      = 'Herbatech';
  const COMPANY_INBOX      = 'duyduy.codewriter@gmail.com'; 

  emailjs.init({ publicKey: 'LH0txEsvdVHtM87J2' });

  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const get = (name) => (new FormData(form)).get(name)?.toString().trim() || '';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const payload = {
      first_name: get('first_name'),
      last_name:  get('last_name'),
      title:      get('title'),
      company:    get('company'),
      work_email: get('work_email'),
      phone:      get('phone'),
      hear_about: get('hear_about'),
      message:    get('message')
    };

    if (!payload.first_name || !payload.last_name || !payload.work_email) {
  alert('Vui lòng nhập đủ Họ/Tên và Email.');
  return;
}

// Làm sạch email: bỏ khoảng trắng lạ (NBSP), chuẩn hoá Unicode
const clean = (s) => (s || "")
  .toString()
  .trim()
  .replace(/\u00A0/g, " ")   // NBSP -> space
  .normalize("NFKC");

payload.work_email = clean(payload.work_email);

const emailInput  = document.querySelector('input[name="work_email"]');
const okByBrowser = emailInput ? emailInput.checkValidity() : true;
const okByRegex   = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(payload.work_email);

if (!okByBrowser || !okByRegex) {
  alert('Email không hợp lệ.');
  return;
}

    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-60','cursor-not-allowed');

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_COMPANY, {
        ...payload,
        subject: `New lead — ${payload.first_name} ${payload.last_name} (${payload.company})`,
        to_email: COMPANY_INBOX
      });

      await emailjs.send(EMAILJS_SERVICE_ID, TEMPLATE_USER, {
        ...payload,
        subject: `Cảm ơn ${payload.first_name} đã liên hệ Herbatech`,
        to_email: payload.work_email
      });

      alert('Đã gửi thông tin. Cảm ơn bạn đã liên hệ!');
      form.reset();
    } catch (err) {
      console.error(err);
      alert('Gửi thất bại. Vui lòng thử lại sau.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-60','cursor-not-allowed');
    }
  });
});