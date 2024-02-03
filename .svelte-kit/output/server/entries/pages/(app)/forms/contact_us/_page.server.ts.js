import { _ as _sendEmail } from "../../../../../chunks/email.js";
const prerender = false;
const actions = {
  default: async ({ request }) => {
    const _data = await request.formData();
    const name = _data.get("name");
    const email = _data.get("email");
    const message = _data.get("message");
    const text = `Name: ${name}
Email: ${email}
Message: ${message}
Sent from Website Contact Us Form`;
    const html = `<h1>Message from Contact Us Form</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`;
    const subject = "Message from Contact Us Form";
    const to = "adhyaaya.gcoen@gmail.com";
    const from = `Adhyaaya'23 | GCOEN <noreply@adhyaaya.org>`;
    const result = await _sendEmail(to, subject, html, text, from);
    console.log(result);
    return result;
  }
};
export {
  actions,
  prerender
};
