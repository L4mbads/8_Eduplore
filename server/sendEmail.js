import nodemailer from 'nodemailer';


const user = 'eduplore.kelompok8@gmail.com' // This is our email
const pass = 'meak ihic uatm cjgw' // This is our password, DON'T CHANGE IT!
let recipient = 'rizacal.mamen@gmail.com' // temporary recipient address (interchangable)
let recipient_name = 'L4mbads'

// Configure the transporter
let transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
  auth: {
    user: user,
    pass: pass,
  },
});

// Email options
let mailOptions = {
  from: user,
  to: recipient, // List of recipients
  subject: 'Hello, ' + recipient_name + ' Your order has been received!', // Subject line
  text: 'Hello, this is a test email sent from Node.js!', // Plain text body
  html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #0056b3;">Meeting Reminder</h2>
      <p>Hi there,</p>
      <p>This is a friendly reminder for our upcoming meeting:</p>
      <ul>
        <li><strong>Date:</strong> Tomorrow</li>
        <li><strong>Time:</strong> 10:00 AM</li>
        <li><strong>Location:</strong> Conference Room B</li>
      </ul>
      <p>Please make sure to bring the following:</p>
      <ol>
        <li>Your laptop</li>
        <li>Meeting agenda</li>
        <li>Any relevant documents</li>
      </ol>
      <p>Looking forward to seeing you there!</p>
      <p>Best regards,<br>Your Name</p>
      <hr style="border: none; border-top: 1px solid #ddd;" />
      <p style="font-size: 12px; color: #888;">
        If you have any questions, feel free to <a href="mailto:your-email@gmail.com">contact me</a>.
      </p>
    </div>
  `, // HTML body (optional)
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
